import { isValid } from 'psl';
import { domainValidCache } from './cache';

/**
 * Validates if email domain is valid TLD
 */
export function isValidEmailDomain(emailOrDomain: string): boolean {
  let [_, emailDomain] = emailOrDomain?.split('@') || [];
  if (!emailDomain) {
    emailDomain = _;
  }
  if (!emailDomain) {
    return false;
  }

  // Check cache first
  const cached = domainValidCache.get(emailDomain);
  if (cached !== undefined) {
    return cached;
  }

  try {
    const result = isValid(emailDomain) || false;
    domainValidCache.set(emailDomain, result);
    return result;
  } catch (e) {
    domainValidCache.set(emailDomain, false);
    return false;
  }
}

/**
 * Validates email address format using RFC-compliant regex
 * @param emailAddress - The email address to validate
 * @returns true if email format is valid
 */
export function isValidEmail(emailAddress: string): boolean {
  if (!emailAddress || typeof emailAddress !== 'string') {
    return false;
  }

  // Updated regex to be more comprehensive
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  // Additional checks
  const emailLower = emailAddress.toLowerCase();

  // Check for invalid patterns
  if (emailLower.indexOf('.+') !== -1) return false;
  if (emailLower.indexOf('..') !== -1) return false;
  if (emailLower.startsWith('.') || emailLower.endsWith('.')) return false;

  // Check length constraints
  const parts = emailAddress.split('@');
  if (parts.length !== 2) return false;

  const [localPart, domain] = parts;
  if (!localPart || !domain) return false;
  if (localPart.length > 64) return false; // RFC 5321
  if (domain.length > 253) return false; // RFC 5321

  return re.test(emailLower);
}
