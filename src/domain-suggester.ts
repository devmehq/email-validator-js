import { stringSimilarity } from 'string-similarity-js';
import { domainSuggestionCache } from './cache';
import type { DomainSuggestion, ISuggestDomainParams } from './types';

/**
 * List of common email domains for typo detection
 * Includes popular free providers, business providers, and hosting services
 */
export const COMMON_EMAIL_DOMAINS = [
  // Popular free email providers
  'gmail.com',
  'yahoo.com',
  'outlook.com',
  'hotmail.com',
  'icloud.com',
  'aol.com',
  'mail.com',
  'protonmail.com',
  'proton.me',
  'yandex.com',

  // Business/Professional email providers
  'google.com',
  'microsoft.com',
  'apple.com',
  'amazon.com',
  'amazonaws.com',

  // Secure/Privacy-focused providers
  'tutanota.com',
  'tuta.com',
  'fastmail.com',
  'posteo.de',
  'mailbox.org',
  'runbox.com',
  'startmail.com',

  // European providers
  'gmx.com',
  'gmx.de',
  'gmx.net',
  'web.de',
  'freenet.de',
  't-online.de',
  'arcor.de',

  // Business email hosting
  'zoho.com',
  'titan.email',
  'neo.space',
  'rackspace.com',
  'ionos.com',
  'hostinger.com',
  'bluehost.com',
  'siteground.com',
  'dreamhost.com',
  'inmotionhosting.com',
  'godaddy.com',
  'namecheap.com',
  'migadu.com',
  'purelymail.com',
  'infomaniak.com',
  'uberspace.de',
  'manitu.de',
  'hetzner.com',
  'scalahosting.com',
  'hostpapa.com',
  'liquidweb.com',
  'icewarp.com',
  'hostgator.com',
  'a2hosting.com',
  'spacemail.com',
  'mxroute.com',

  // Regional providers
  'qq.com',
  '163.com',
  '126.com',
  'sina.com',
  'naver.com',
  'daum.net',
  'kakao.com',
];

/**
 * Common typo patterns to check
 */
const TYPO_PATTERNS: Record<string, string[]> = {
  'gmail.com': ['gmai.com', 'gmial.com', 'gmali.com', 'gmil.com', 'gmaill.com', 'gmail.co', 'gmail.cm'],
  'yahoo.com': ['yaho.com', 'yahooo.com', 'yahoo.co', 'yahoo.cm', 'yhaoo.com'],
  'hotmail.com': ['hotmai.com', 'hotmial.com', 'hotmal.com', 'hotmil.com', 'hotmail.co', 'hotmail.cm'],
  'outlook.com': ['outlok.com', 'outloo.com', 'outlook.co', 'outlook.cm', 'outlokk.com'],
};

/**
 * Calculate similarity threshold based on domain length
 * Shorter domains need higher similarity to avoid false positives
 */
function getSimilarityThreshold(domain: string) {
  const length = domain.length;
  if (length <= 6) return 0.85; // Short domains need high similarity
  if (length <= 10) return 0.8; // Medium domains
  return 0.75; // Longer domains can have lower threshold
}

/**
 * Check if a domain is likely a typo based on common patterns
 */
function _isLikelyTypo(domain: string) {
  // Check if domain matches any known typo patterns
  for (const patterns of Object.values(TYPO_PATTERNS)) {
    if (patterns.includes(domain.toLowerCase())) {
      return true;
    }
  }

  // Check for common typo characteristics
  const lowerDomain = domain.toLowerCase();

  // Missing letters (e.g., "gmai.com" instead of "gmail.com")
  if (lowerDomain.match(/^gmai\.com$/) || lowerDomain.match(/^yaho\.com$/) || lowerDomain.match(/^hotmai\.com$/)) {
    return true;
  }

  // Double letters where they shouldn't be
  if (lowerDomain.match(/^gmaill\.com$/) || lowerDomain.match(/^yahooo\.com$/)) {
    return true;
  }

  // Wrong TLD variations of popular domains
  if (
    lowerDomain.match(/^gmail\.(co|cm|net|org)$/) ||
    lowerDomain.match(/^yahoo\.(co|cm|net|org)$/) ||
    lowerDomain.match(/^hotmail\.(co|cm|net|org)$/)
  ) {
    return true;
  }

  return false;
}

/**
 * Default domain suggestion method using string similarity
 */
export function defaultDomainSuggestionMethod(domain: string, commonDomains?: string[]): DomainSuggestion | null {
  if (!domain || domain.length < 3) {
    return null;
  }

  const domainsToCheck = commonDomains || COMMON_EMAIL_DOMAINS;
  const lowerDomain = domain.toLowerCase();

  // Check cache first
  const cacheKey = `${lowerDomain}:${domainsToCheck.length}`;
  const cached = domainSuggestionCache.get(cacheKey);
  if (cached !== undefined) {
    return cached ? { original: domain, ...cached } : null;
  }

  // If domain is already in the common list, no suggestion needed
  if (domainsToCheck.includes(lowerDomain)) {
    domainSuggestionCache.set(cacheKey, null);
    return null;
  }

  // First check if it's a known typo pattern
  for (const [correctDomain, typos] of Object.entries(TYPO_PATTERNS)) {
    if (typos.includes(lowerDomain)) {
      const result = {
        original: domain,
        suggested: correctDomain,
        confidence: 0.95, // High confidence for known typo patterns
      };
      // Cache the result
      domainSuggestionCache.set(cacheKey, { suggested: result.suggested, confidence: result.confidence });
      return result;
    }
  }

  // Find the most similar domain
  let bestMatch: { domain: string; similarity: number } | null = null;
  const threshold = getSimilarityThreshold(lowerDomain);

  for (const commonDomain of domainsToCheck) {
    const similarity = stringSimilarity(lowerDomain, commonDomain.toLowerCase());

    if (similarity >= threshold) {
      if (!bestMatch || similarity > bestMatch.similarity) {
        bestMatch = { domain: commonDomain, similarity };
      }
    }
  }

  // Additional check for very similar domains (edit distance of 1-2)
  if (!bestMatch) {
    for (const commonDomain of domainsToCheck) {
      if (Math.abs(lowerDomain.length - commonDomain.length) <= 2) {
        const similarity = stringSimilarity(lowerDomain, commonDomain.toLowerCase());
        if (similarity >= 0.7) {
          // Lower threshold for length-similar domains
          if (!bestMatch || similarity > bestMatch.similarity) {
            bestMatch = { domain: commonDomain, similarity };
          }
        }
      }
    }
  }

  if (bestMatch) {
    // Don't suggest if the domains are too different despite similarity score
    // This prevents suggesting unrelated domains
    if (bestMatch.domain.charAt(0) !== lowerDomain.charAt(0) && bestMatch.similarity < 0.9) {
      domainSuggestionCache.set(cacheKey, null);
      return null;
    }

    const result = {
      original: domain,
      suggested: bestMatch.domain,
      confidence: bestMatch.similarity,
    };

    // Cache the result
    domainSuggestionCache.set(cacheKey, { suggested: result.suggested, confidence: result.confidence });
    return result;
  }

  // Cache null result
  domainSuggestionCache.set(cacheKey, null);
  return null;
}

/**
 * Suggest a corrected domain for a potentially misspelled email domain
 * @param params - Parameters including domain and optional custom method
 * @returns Domain suggestion with confidence score, or null if no suggestion
 */
export function suggestDomain(params: ISuggestDomainParams): DomainSuggestion | null {
  const { domain, customMethod, commonDomains } = params;

  if (!domain || domain.length < 3) {
    return null;
  }

  // Use custom method if provided
  if (customMethod) {
    try {
      return customMethod(domain);
    } catch (error) {
      // Fall back to default method if custom method fails
      console.warn('Custom domain suggestion method failed, falling back to default:', error);
    }
  }

  // Use default method
  return defaultDomainSuggestionMethod(domain, commonDomains);
}

/**
 * Convenience function to suggest domain from email address
 * @param email - Email address to check for domain typos
 * @param commonDomains - Optional list of common domains to check against
 * @returns Domain suggestion with confidence score, or null if no suggestion
 */
export function suggestEmailDomain(email: string, commonDomains?: string[]): DomainSuggestion | null {
  if (!email || !email.includes('@')) {
    return null;
  }

  const [localPart, domain] = email.split('@');
  if (!domain || !localPart) {
    return null;
  }

  const suggestion = suggestDomain({ domain, commonDomains });

  // If we have a suggestion, update it to include the full email
  if (suggestion) {
    return {
      original: email,
      suggested: `${localPart}@${suggestion.suggested}`,
      confidence: suggestion.confidence,
    };
  }

  return null;
}

/**
 * Check if a domain is in the common domains list
 * @param domain - Domain to check
 * @param commonDomains - Optional custom list of common domains
 * @returns True if domain is common, false otherwise
 */
export function isCommonDomain(domain: string, commonDomains?: string[]) {
  const domainsToCheck = commonDomains || COMMON_EMAIL_DOMAINS;
  return domainsToCheck.includes(domain.toLowerCase());
}

/**
 * Get similarity score between two domains
 * @param domain1 - First domain
 * @param domain2 - Second domain
 * @returns Similarity score between 0 and 1
 */
export function getDomainSimilarity(domain1: string, domain2: string) {
  return stringSimilarity(domain1.toLowerCase(), domain2.toLowerCase());
}
