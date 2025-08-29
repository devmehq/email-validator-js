/**
 * Core serverless email validator
 * Platform-agnostic implementation without Node.js dependencies
 */

// Import utility functions
import { stringSimilarity } from 'string-similarity-js';

// Import full data files for comprehensive validation
// These are the complete, unminified JSON files
import disposableProviders from '../disposable-email-providers.json';
import freeProviders from '../free-email-providers.json';
import type { DomainSuggesterOptions, EmailValidationResult, ValidateEmailOptions } from '../types';

// Platform-agnostic cache implementation
export class EdgeCache<T> {
  private cache = new Map<string, { value: T; expires: number }>();
  private maxSize: number;
  private ttl: number;

  constructor(maxSize = 1000, ttl = 3600000) {
    this.maxSize = maxSize;
    this.ttl = ttl;
  }

  get(key: string): T | undefined {
    const item = this.cache.get(key);
    if (!item) return undefined;
    if (Date.now() > item.expires) {
      this.cache.delete(key);
      return undefined;
    }
    return item.value;
  }

  set(key: string, value: T): void {
    if (this.cache.size >= this.maxSize) {
      // Remove oldest entries
      const entriesToRemove = Math.max(1, Math.floor(this.maxSize * 0.1));
      const keys = Array.from(this.cache.keys()).slice(0, entriesToRemove);
      keys.forEach((key) => this.cache.delete(key));
    }
    this.cache.set(key, {
      value,
      expires: Date.now() + this.ttl,
    });
  }

  clear(): void {
    this.cache.clear();
  }

  size(): number {
    return this.cache.size;
  }
}

// Global cache instances
export const validationCache = new EdgeCache<EmailValidationResult>(1000);
export const mxCache = new EdgeCache<string[]>(500);

// Email validation regex patterns
const VALID_EMAIL_REGEX =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

// Common email provider domains for typo detection
export const COMMON_DOMAINS = [
  'gmail.com',
  'yahoo.com',
  'hotmail.com',
  'outlook.com',
  'icloud.com',
  'aol.com',
  'msn.com',
  'live.com',
  'ymail.com',
  'protonmail.com',
  'zoho.com',
  'mail.com',
  'gmx.com',
  'fastmail.com',
  'tutanota.com',
  'qq.com',
  '163.com',
  '126.com',
  'sina.com',
  'foxmail.com',
  'yandex.com',
  'mail.ru',
  'rambler.ru',
  'gmx.de',
  'web.de',
  't-online.de',
  'orange.fr',
  'wanadoo.fr',
  'free.fr',
  'sfr.fr',
  'laposte.net',
  'libero.it',
  'virgilio.it',
  'alice.it',
  'tin.it',
  'bt.com',
  'btinternet.com',
  'virginmedia.com',
  'sky.com',
  'talktalk.net',
  'rogers.com',
  'shaw.ca',
  'sympatico.ca',
  'bellsouth.net',
  'comcast.net',
  'cox.net',
  'earthlink.net',
  'charter.net',
  'optonline.net',
  'verizon.net',
  'att.net',
  'sbcglobal.net',
  'me.com',
  'mac.com',
  'rocketmail.com',
];

// Common typo patterns
const TYPO_PATTERNS = [
  // Gmail typos
  { pattern: /gmial\.com$/i, replacement: 'gmail.com' },
  { pattern: /gmai\.com$/i, replacement: 'gmail.com' },
  { pattern: /gmil\.com$/i, replacement: 'gmail.com' },
  { pattern: /gmail\.co$/i, replacement: 'gmail.com' },
  { pattern: /gmail\.con$/i, replacement: 'gmail.com' },
  { pattern: /gmail\.cm$/i, replacement: 'gmail.com' },
  { pattern: /gmal\.com$/i, replacement: 'gmail.com' },
  { pattern: /gnail\.com$/i, replacement: 'gmail.com' },

  // Yahoo typos
  { pattern: /yahooo\.com$/i, replacement: 'yahoo.com' },
  { pattern: /yaho\.com$/i, replacement: 'yahoo.com' },
  { pattern: /yahoo\.co$/i, replacement: 'yahoo.com' },
  { pattern: /yaoo\.com$/i, replacement: 'yahoo.com' },
  { pattern: /yaboo\.com$/i, replacement: 'yahoo.com' },

  // Hotmail typos
  { pattern: /hotmial\.com$/i, replacement: 'hotmail.com' },
  { pattern: /hotmai\.com$/i, replacement: 'hotmail.com' },
  { pattern: /hotmil\.com$/i, replacement: 'hotmail.com' },
  { pattern: /hotmail\.co$/i, replacement: 'hotmail.com' },
  { pattern: /hormail\.com$/i, replacement: 'hotmail.com' },

  // Outlook typos
  { pattern: /outlok\.com$/i, replacement: 'outlook.com' },
  { pattern: /outloo\.com$/i, replacement: 'outlook.com' },
  { pattern: /outlook\.co$/i, replacement: 'outlook.com' },
  { pattern: /putlook\.com$/i, replacement: 'outlook.com' },

  // iCloud typos
  { pattern: /iclud\.com$/i, replacement: 'icloud.com' },
  { pattern: /icloud\.co$/i, replacement: 'icloud.com' },
  { pattern: /icoud\.com$/i, replacement: 'icloud.com' },
];

// Platform-agnostic DNS resolution interface
export interface DNSResolver {
  resolveMx(domain: string): Promise<Array<{ exchange: string; priority: number }>>;

  resolveTxt(domain: string): Promise<string[]>;
}

// Stub DNS resolver for environments without DNS capabilities
export class StubDNSResolver implements DNSResolver {
  async resolveMx(_domain: string): Promise<Array<{ exchange: string; priority: number }>> {
    // Return null to indicate DNS is not available
    return [];
  }

  async resolveTxt(_domain: string): Promise<string[]> {
    return [];
  }
}

// Domain suggestion function
export function suggestDomain(domain: string, options?: DomainSuggesterOptions): string | null {
  const threshold = options?.threshold || 2;
  const domains = options?.customDomains || COMMON_DOMAINS;

  // Check common typos first
  for (const { pattern, replacement } of TYPO_PATTERNS) {
    if (pattern.test(domain)) {
      return replacement;
    }
  }

  // If domain is already in the list of common domains, it's correct
  if (domains.includes(domain)) {
    return null;
  }

  // Find closest domain using Levenshtein distance
  let minDistance = Infinity;
  let suggestion: string | null = null;

  for (const commonDomain of domains) {
    // Skip if it's the same domain (case-insensitive)
    if (domain.toLowerCase() === commonDomain.toLowerCase()) {
      return null;
    }

    // Use string similarity to calculate distance
    const similarity = stringSimilarity(domain.toLowerCase(), commonDomain.toLowerCase());
    const distance = Math.round((1 - similarity) * Math.max(domain.length, commonDomain.length));
    if (distance > 0 && distance <= threshold && distance < minDistance) {
      minDistance = distance;
      suggestion = commonDomain;
    }
  }

  return suggestion;
}

// Core validation function
export async function validateEmailCore(
  email: string,
  options?: ValidateEmailOptions & { dnsResolver?: DNSResolver }
): Promise<EmailValidationResult> {
  const normalizedEmail = email.toLowerCase().trim();

  // Check cache
  if (!options?.skipCache) {
    const cached = validationCache.get(normalizedEmail);
    if (cached) return cached;
  }

  const result: EmailValidationResult = {
    valid: false,
    email: normalizedEmail,
    validators: {},
  };

  // Syntax validation
  if (options?.validateSyntax !== false) {
    const syntaxValid = VALID_EMAIL_REGEX.test(normalizedEmail);
    result.validators.syntax = { valid: syntaxValid };
    if (!syntaxValid) {
      validationCache.set(normalizedEmail, result);
      return result;
    }
  }

  const [local, domain] = normalizedEmail.split('@');
  result.local = local;
  result.domain = domain;

  // Typo detection and suggestion
  if (options?.validateTypo !== false) {
    const suggestion = suggestDomain(domain, options?.domainSuggesterOptions);
    result.validators.typo = {
      valid: !suggestion,
      suggestion: suggestion || undefined,
    };
  }

  // Disposable email check
  if (options?.validateDisposable !== false) {
    const isDisposable = disposableProviders.includes(domain);
    result.validators.disposable = { valid: !isDisposable };
  }

  // Free email check
  if (options?.validateFree !== false) {
    const isFree = freeProviders.includes(domain);
    result.validators.free = { valid: !isFree };
  }

  // MX record validation (if DNS resolver is available)
  if (options?.validateMx && options.dnsResolver) {
    try {
      const mxRecords = await options.dnsResolver.resolveMx(domain);
      const hasMx = mxRecords && mxRecords.length > 0;
      result.validators.mx = {
        valid: hasMx,
        records: hasMx ? mxRecords.map((r) => r.exchange) : undefined,
      };
    } catch (error) {
      result.validators.mx = {
        valid: false,
        error: error instanceof Error ? error.message : 'MX validation failed',
      };
    }
  }

  // Overall valid status - only syntax, typo, disposable, and MX matter for validity
  // Free provider detection is informational only
  const criticalValidators = ['syntax', 'typo', 'disposable', 'mx'];
  result.valid = criticalValidators.every((key) => {
    const validator = result.validators[key as keyof typeof result.validators];
    return !validator || validator.valid !== false;
  });

  // Cache result
  if (!options?.skipCache) {
    validationCache.set(normalizedEmail, result);
  }

  return result;
}

// Batch validation
export async function validateEmailBatch(
  emails: string[],
  options?: ValidateEmailOptions & { dnsResolver?: DNSResolver }
): Promise<EmailValidationResult[]> {
  // Process in chunks to avoid overwhelming the system
  const chunkSize = options?.batchSize || 10;
  const results: EmailValidationResult[] = [];

  for (let i = 0; i < emails.length; i += chunkSize) {
    const chunk = emails.slice(i, i + chunkSize);
    const chunkResults = await Promise.all(chunk.map((email) => validateEmailCore(email, options)));
    results.push(...chunkResults);
  }

  return results;
}

// Export cache control functions
export function clearCache(): void {
  validationCache.clear();
  mxCache.clear();
}

// Export types
export type {
  DomainSuggesterOptions,
  EmailValidationResult,
  ValidateEmailOptions,
} from '../types';
