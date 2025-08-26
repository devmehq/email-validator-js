import type { DetectedName, IDetectNameParams } from './types';

/**
 * Common name separators and patterns
 */
const NAME_SEPARATORS = ['.', '_', '-'];
const COMMON_NAME_SUFFIXES = [
  'mail',
  'email',
  'contact',
  'info',
  'admin',
  'support',
  'sales',
  'help',
  'noreply',
  'no-reply',
];
const NUMERIC_PATTERN = /\d/;

/**
 * Capitalize first letter of a word
 */
function capitalizeFirstLetter(str: string): string {
  if (!str) return '';
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

/**
 * Check if string is likely a name (not containing invalid patterns)
 */
function isLikelyName(str: string): boolean {
  if (!str || str.length < 2) return false;

  // Check if it's a common email prefix that's not a name
  if (COMMON_NAME_SUFFIXES.includes(str.toLowerCase())) return false;

  // Check if it contains too many numbers (likely not a name)
  const digitCount = (str.match(/\d/g) || []).length;
  if (digitCount > str.length * 0.3) return false;

  // Check if it's all uppercase or all lowercase (less likely to be a properly formatted name)
  // But still allow it with lower confidence

  return true;
}

/**
 * Default name detection method
 * Attempts to extract first and last name from email local part
 */
export function defaultNameDetectionMethod(email: string): DetectedName | null {
  if (!email || !email.includes('@')) {
    return null;
  }

  const [localPart] = email.split('@');
  if (!localPart) {
    return null;
  }

  // Remove plus sign and anything after it (email aliases)
  const localWithoutAlias = localPart.split('+')[0];

  // Remove numbers at the end (like john.doe123 -> john.doe)
  const cleanedLocal = localWithoutAlias.replace(/\d+$/, '');

  let firstName: string | undefined;
  let lastName: string | undefined;
  let confidence = 0;

  // Try different separator patterns
  for (const separator of NAME_SEPARATORS) {
    if (cleanedLocal.includes(separator)) {
      const parts = cleanedLocal.split(separator).filter((p) => p.length > 0);

      if (parts.length === 2) {
        const [first, last] = parts;

        if (isLikelyName(first) && isLikelyName(last)) {
          firstName = capitalizeFirstLetter(first);
          lastName = capitalizeFirstLetter(last);
          confidence = 0.8;

          // Higher confidence for dot separator (most common)
          if (separator === '.') {
            confidence = 0.9;
          }

          // Lower confidence if original local part contains numbers
          if (NUMERIC_PATTERN.test(localWithoutAlias)) {
            confidence -= 0.2;
          }

          break;
        }
      } else if (parts.length === 3) {
        // Handle cases like first.middle.last or first.last.suffix
        const [first, middle, last] = parts;

        // Check if last part is likely a suffix (mail, email, etc.)
        if (COMMON_NAME_SUFFIXES.includes(last.toLowerCase())) {
          if (isLikelyName(first) && isLikelyName(middle)) {
            firstName = capitalizeFirstLetter(first);
            lastName = capitalizeFirstLetter(middle);
            confidence = 0.7;
            break;
          }
        } else if (isLikelyName(first) && isLikelyName(last)) {
          // Treat middle as part of first name or ignore
          firstName = capitalizeFirstLetter(first);
          lastName = capitalizeFirstLetter(last);
          confidence = 0.75;
          break;
        }
      }
    }
  }

  // If no separator found, try camelCase pattern (like johnDoe)
  if (!firstName && !lastName) {
    const camelCaseMatch = cleanedLocal.match(/^([a-z]+)([A-Z][a-z]+)$/);
    if (camelCaseMatch) {
      const [, first, last] = camelCaseMatch;
      if (isLikelyName(first) && isLikelyName(last)) {
        firstName = capitalizeFirstLetter(first);
        lastName = capitalizeFirstLetter(last);
        confidence = 0.7;
      }
    }
  }

  // If still no match, check if the whole local part could be a single name
  if (!firstName && !lastName && isLikelyName(cleanedLocal)) {
    // Check if it's all letters (likely a single name)
    if (/^[a-zA-Z]+$/.test(cleanedLocal)) {
      firstName = capitalizeFirstLetter(cleanedLocal);
      confidence = 0.5; // Lower confidence for single name
    }
  }

  if (!firstName && !lastName) {
    return null;
  }

  return {
    firstName,
    lastName,
    confidence: Math.max(0, Math.min(1, confidence)), // Ensure confidence is between 0 and 1
  };
}

/**
 * Detect name from email address
 * @param params - Detection parameters including email and optional custom method
 * @returns Detected name with confidence score, or null if no name detected
 */
export function detectNameFromEmail(params: IDetectNameParams): DetectedName | null {
  const { email, customMethod } = params;

  if (!email || !email.includes('@')) {
    return null;
  }

  // Use custom method if provided
  if (customMethod) {
    try {
      return customMethod(email);
    } catch (error) {
      // Fall back to default method if custom method fails
      console.warn('Custom name detection method failed, falling back to default:', error);
    }
  }

  // Use default method
  return defaultNameDetectionMethod(email);
}

/**
 * Convenience function to detect name from email string
 * @param email - Email address to extract name from
 * @returns Detected name with confidence score, or null if no name detected
 */
export function detectName(email: string): DetectedName | null {
  return detectNameFromEmail({ email });
}
