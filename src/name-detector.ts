import type { DetectedName, IDetectNameParams } from './types';

/**
 * Common name separators and patterns
 */
const NAME_SEPARATORS = ['.', '_', '-'];
const COMMON_NAME_SUFFIXES = ['mail', 'email', 'contact', 'info', 'admin', 'support', 'sales', 'help', 'noreply'];

// Additional suffixes that might appear in email addresses
const CONTEXTUAL_SUFFIXES = ['dev', 'company', 'team', 'group', 'office', 'work'];

// Check if a string looks like a year
function isYearLike(str: string): boolean {
  return /^(19|20)\d{2}$/.test(str);
}

/**
 * Capitalize first letter of a word
 */
function capitalizeFirstLetter(str: string): string {
  if (!str) return '';
  // Handle alphanumeric strings - only capitalize if starts with letter
  if (/^[a-zA-Z]/.test(str)) {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  }
  // Keep as-is if starts with number
  return str;
}

/**
 * Parse composite name parts that may contain numbers
 * Intelligently strips numbers and special characters that are likely not part of the actual name
 * e.g., "john1" -> "john", "due2" -> "due", "test123" -> "test"
 */
function parseCompositeNamePart(part: string): { base: string; hasNumbers: boolean; cleaned: string } {
  const hasNumbers = /\d/.test(part);

  // Multiple strategies for cleaning names:
  // 1. Remove trailing numbers (john123 -> john)
  // 2. Remove interspersed numbers if they seem unnatural (jo1hn -> john)
  // 3. Remove leading numbers if followed by a valid name (1john -> john)

  let cleaned = part;

  // First, try to extract alphabetic base by removing all numbers
  const pureAlpha = part.replace(/\d+/g, '');

  // If we have a reasonable alphabetic base (at least 2 chars), use it
  if (pureAlpha.length >= 2) {
    cleaned = pureAlpha;
  } else {
    // Otherwise, try to extract base name without trailing numbers
    const baseMatch = part.match(/^([a-zA-Z]+[a-zA-Z0-9]*?)\d*$/);
    cleaned = baseMatch ? baseMatch[1] : part;
  }

  // For backward compatibility, also provide the old 'base' format
  const baseMatch = part.match(/^([a-zA-Z]+[a-zA-Z0-9]*?)\d*$/);
  const base = baseMatch ? baseMatch[1] : part;

  return { base, hasNumbers, cleaned };
}

/**
 * Check if string is likely a name (not containing invalid patterns)
 */
function isLikelyName(str: string, allowNumbers: boolean = false): boolean {
  if (!str || str.length < 2) return false;

  // Check if it's a common email prefix that's not a name
  if (COMMON_NAME_SUFFIXES.includes(str.toLowerCase())) return false;

  // If allowing numbers (for composite names), be more lenient
  if (allowNumbers) {
    // Still reject if it's ALL numbers
    if (/^\d+$/.test(str)) return false;
    // Accept mixed alphanumeric patterns
    return true;
  }

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

  // For initial processing, keep the original (don't remove trailing numbers yet)
  // We'll handle numbers more intelligently based on context
  const cleanedLocal = localWithoutAlias;

  // Special handling for no-reply variants
  if (cleanedLocal.toLowerCase() === 'no-reply' || cleanedLocal.toLowerCase() === 'noreply') {
    return null;
  }

  let firstName: string | undefined;
  let lastName: string | undefined;
  let confidence = 0;

  // Try different separator patterns
  for (const separator of NAME_SEPARATORS) {
    if (cleanedLocal.includes(separator)) {
      const parts = cleanedLocal.split(separator).filter((p) => p.length > 0);

      if (parts.length === 2) {
        const [first, last] = parts;

        // Parse composite parts (may contain numbers)
        const firstParsed = parseCompositeNamePart(first);
        const lastParsed = parseCompositeNamePart(last);

        // Check if both parts could be names (more lenient with numbers)
        const bothPartsValid = isLikelyName(first, true) && isLikelyName(last, true);

        if (bothPartsValid) {
          // Smart handling: Always try to extract clean names when possible
          // For patterns like john1.due2, we want "John" and "Due"

          if (firstParsed.hasNumbers || lastParsed.hasNumbers) {
            // At least one part has numbers - intelligently clean them
            const cleanedFirst = firstParsed.hasNumbers ? firstParsed.cleaned : first;
            const cleanedLast = lastParsed.hasNumbers ? lastParsed.cleaned : last;

            // Check if the cleaned versions are valid names
            if (isLikelyName(cleanedFirst) && isLikelyName(cleanedLast)) {
              // Successfully cleaned to valid names
              firstName = capitalizeFirstLetter(cleanedFirst);
              lastName = capitalizeFirstLetter(cleanedLast);
              confidence = 0.75; // Good confidence for cleaned names

              if (separator === '.') {
                confidence = 0.85; // Higher for dot separator
              }
            } else {
              // Fallback to keeping numbers if cleaning doesn't produce valid names
              // This handles cases like "a1.b2" where removing numbers leaves too little
              firstName = capitalizeFirstLetter(first);
              lastName = capitalizeFirstLetter(last);
              confidence = 0.6; // Lower confidence for alphanumeric patterns
            }
          } else {
            // Neither has numbers - regular name
            firstName = capitalizeFirstLetter(first);
            lastName = capitalizeFirstLetter(last);
            confidence = 0.8;

            // Higher confidence for dot separator (most common)
            if (separator === '.') {
              confidence = 0.9;
            }
          }

          break;
        }
      } else if (parts.length === 3) {
        // Handle cases like first.middle.last or first.last.suffix
        const [first, middle, last] = parts;

        // Parse composite parts
        const firstParsed = parseCompositeNamePart(first);
        const middleParsed = parseCompositeNamePart(middle);
        const lastParsed = parseCompositeNamePart(last);

        // Check if last part is likely a suffix (mail, email, etc.)
        const isLastSuffix =
          COMMON_NAME_SUFFIXES.includes(last.toLowerCase()) ||
          CONTEXTUAL_SUFFIXES.includes(last.toLowerCase()) ||
          isYearLike(last);

        if (isLastSuffix) {
          if (isLikelyName(first, true) && isLikelyName(middle, true)) {
            // Clean numbers from names if present
            const cleanedFirst = firstParsed.hasNumbers ? firstParsed.cleaned : first;
            const cleanedMiddle = middleParsed.hasNumbers ? middleParsed.cleaned : middle;

            if (isLikelyName(cleanedFirst) && isLikelyName(cleanedMiddle)) {
              firstName = capitalizeFirstLetter(cleanedFirst);
              lastName = capitalizeFirstLetter(cleanedMiddle);
              confidence = 0.7;
            } else {
              firstName = capitalizeFirstLetter(first);
              lastName = capitalizeFirstLetter(middle);
              confidence = 0.65;
            }
            break;
          }
        } else if (isLikelyName(first, true) && isLikelyName(last, true)) {
          // Intelligently handle three-part names
          const cleanedFirst = firstParsed.hasNumbers ? firstParsed.cleaned : first;
          const cleanedLast = lastParsed.hasNumbers ? lastParsed.cleaned : last;

          if (isLikelyName(cleanedFirst) && isLikelyName(cleanedLast)) {
            firstName = capitalizeFirstLetter(cleanedFirst);
            lastName = capitalizeFirstLetter(cleanedLast);
            confidence = 0.75;
          } else {
            // Fallback if cleaning doesn't produce valid names
            firstName = capitalizeFirstLetter(first);
            lastName = capitalizeFirstLetter(last);
            confidence = 0.55;
          }
          break;
        }
      } else if (parts.length > 3) {
        // Handle complex composite names with multiple parts
        // Take first and last meaningful parts
        const firstPart = parts[0];

        // Check if last part is a suffix to ignore
        const lastPartLower = parts[parts.length - 1].toLowerCase();
        const isLastPartSuffix =
          COMMON_NAME_SUFFIXES.includes(lastPartLower) ||
          CONTEXTUAL_SUFFIXES.includes(lastPartLower) ||
          isYearLike(parts[parts.length - 1]);
        const effectiveLastIndex = isLastPartSuffix ? parts.length - 2 : parts.length - 1;
        const lastToUse = effectiveLastIndex >= 0 ? parts[effectiveLastIndex] : null;

        if (lastToUse && isLikelyName(firstPart, true) && isLikelyName(lastToUse, true)) {
          const firstParsed = parseCompositeNamePart(firstPart);
          const lastParsed = parseCompositeNamePart(lastToUse);

          // Try to clean names intelligently
          const cleanedFirst = firstParsed.hasNumbers ? firstParsed.cleaned : firstPart;
          const cleanedLast = lastParsed.hasNumbers ? lastParsed.cleaned : lastToUse;

          if (isLikelyName(cleanedFirst) && isLikelyName(cleanedLast)) {
            firstName = capitalizeFirstLetter(cleanedFirst);
            lastName = capitalizeFirstLetter(cleanedLast);
            confidence = 0.6;
          } else {
            firstName = capitalizeFirstLetter(firstPart);
            lastName = capitalizeFirstLetter(lastToUse);
            confidence = 0.5;
          }
          break;
        }
      }
    }
  }

  // If no separator found, try camelCase pattern (like johnDoe)
  if (!firstName && !lastName) {
    // Strict camelCase for regular names (no numbers in middle)
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
  if (!firstName && !lastName) {
    const parsed = parseCompositeNamePart(cleanedLocal);

    // Check if it could be a single name (allow alphanumeric)
    if (isLikelyName(cleanedLocal, true)) {
      if (/^[a-zA-Z]+$/.test(cleanedLocal)) {
        // Pure alphabetic - likely a single name
        firstName = capitalizeFirstLetter(cleanedLocal);
        confidence = 0.5;
      } else if (parsed.hasNumbers && parsed.cleaned.length >= 2) {
        // Has numbers but we can extract a clean name
        firstName = capitalizeFirstLetter(parsed.cleaned);
        confidence = 0.4; // Lower confidence for alphanumeric single names
      }
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
