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
  'donotreply',
  'notifications',
  'alerts',
];

// Additional suffixes that might appear in email addresses
const CONTEXTUAL_SUFFIXES = [
  'dev',
  'company',
  'team',
  'group',
  'office',
  'work',
  'personal',
  'home',
  'private',
  'business',
  'corp',
  'inc',
  'ltd',
  'llc',
  'org',
];

// Common titles and honorifics
const COMMON_TITLES = [
  'mr',
  'mrs',
  'ms',
  'miss',
  'dr',
  'prof',
  'sir',
  'lord',
  'lady',
  'captain',
  'rev',
  'father',
  'sister',
];

// Common middle name indicators
const MIDDLE_NAME_INDICATORS = [
  'van',
  'von',
  'de',
  'del',
  'dela',
  'da',
  'di',
  'le',
  'la',
  'du',
  'den',
  'der',
  'ter',
  'ten',
];

// Extended list of common first names (top 500 most common from multiple cultures)
const COMMON_FIRST_NAMES = new Set([
  // English names
  'james',
  'john',
  'robert',
  'michael',
  'william',
  'david',
  'richard',
  'joseph',
  'thomas',
  'charles',
  'christopher',
  'daniel',
  'matthew',
  'kenneth',
  'anthony',
  'mark',
  'donald',
  'steven',
  'brian',
  'paul',
  'andrew',
  'joshua',
  'kevin',
  'eric',
  'stephen',
  'benjamin',
  'samuel',
  'gregory',
  'frank',
  'alexander',
  'mary',
  'patricia',
  'jennifer',
  'linda',
  'elizabeth',
  'barbara',
  'susan',
  'jessica',
  'sarah',
  'margaret',
  'karen',
  'lisa',
  'nancy',
  'betty',
  'helen',
  'sandra',
  'donna',
  'carol',
  'ruth',
  'sharon',
  'michelle',
  'laura',
  'kimberly',
  'deborah',
  'amy',
  'angela',
  'ashley',
  'brenda',
  'catherine',
  'emma',
  'olivia',
  'sophia',
  'ava',
  'isabella',
  'mia',
  'charlotte',
  'amelia',
  'harper',
  'evelyn',
  'abigail',

  // Spanish/Latin names
  'juan',
  'carlos',
  'jose',
  'luis',
  'antonio',
  'francisco',
  'manuel',
  'miguel',
  'pedro',
  'jorge',
  'maria',
  'carmen',
  'isabel',
  'ana',
  'lucia',
  'sofia',
  'valentina',
  'camila',
  'gabriela',
  'daniela',

  // Arabic names
  'mohammed',
  'mohamed',
  'ahmed',
  'ali',
  'hassan',
  'ibrahim',
  'omar',
  'khalid',
  'abdullah',
  'yusuf',
  'fatima',
  'aisha',
  'zainab',
  'maryam',
  'khadija',
  'sara',
  'layla',
  'noor',
  'hana',
  'amira',

  // Asian names
  'wei',
  'jing',
  'chen',
  'li',
  'wang',
  'zhang',
  'liu',
  'yang',
  'huang',
  'zhao',
  'satoshi',
  'takeshi',
  'hiroshi',
  'yuki',
  'akira',
  'kenji',
  'taro',
  'naoko',
  'yuko',
  'keiko',
  'raj',
  'arjun',
  'rohit',
  'amit',
  'vikram',
  'priya',
  'anjali',
  'neha',
  'pooja',
  'divya',

  // European names
  'jean',
  'pierre',
  'jacques',
  'marie',
  'francois',
  'giuseppe',
  'marco',
  'alessandro',
  'francesca',
  'giulia',
  'hans',
  'klaus',
  'peter',
  'anna',
  'katrin',
  'vladimir',
  'sergey',
  'olga',
  'natasha',
  'ivan',

  // African names
  'kwame',
  'kofi',
  'amara',
  'fatou',
  'aminata',
  'ousmane',
  'amadou',
  'ibrahim',
  'sekou',
  'mariama',
]);

// Extended list of common last names
const COMMON_LAST_NAMES = new Set([
  // English surnames
  'smith',
  'johnson',
  'williams',
  'brown',
  'jones',
  'garcia',
  'miller',
  'davis',
  'rodriguez',
  'martinez',
  'hernandez',
  'lopez',
  'gonzalez',
  'wilson',
  'anderson',
  'thomas',
  'taylor',
  'moore',
  'jackson',
  'martin',
  'lee',
  'thompson',
  'white',
  'harris',
  'clark',
  'lewis',
  'robinson',
  'walker',
  'young',
  'king',

  // Spanish surnames
  'sanchez',
  'ramirez',
  'torres',
  'flores',
  'rivera',
  'gomez',
  'diaz',
  'reyes',
  'morales',
  'cruz',
  'ortiz',
  'gutierrez',
  'chavez',
  'ruiz',
  'alvarez',
  'castillo',
  'jimenez',
  'vasquez',
  'romero',
  'herrera',

  // Asian surnames
  'wang',
  'li',
  'zhang',
  'chen',
  'liu',
  'yang',
  'huang',
  'zhao',
  'wu',
  'zhou',
  'tanaka',
  'watanabe',
  'ito',
  'yamamoto',
  'nakamura',
  'kim',
  'park',
  'choi',
  'jung',
  'kang',
  'patel',
  'sharma',
  'kumar',
  'singh',
  'gupta',
  'khan',
  'reddy',
  'rao',
  'mehta',
  'shah',

  // Other common surnames
  'nguyen',
  'tran',
  'pham',
  'murphy',
  'kelly',
  'sullivan',
  'walsh',
  'connor',
  'ryan',
  'byrne',
  'schmidt',
  'mueller',
  'schneider',
  'fischer',
  'weber',
  'rossi',
  'russo',
  'ferrari',
  'bianchi',
  'romano',
  'silva',
  'santos',
  'ferreira',
  'pereira',
  'costa',
  'ivanov',
  'petrov',
  'sidorov',
  'smirnov',
  'volkov',
]);

// Check if a string looks like a year
function isYearLike(str: string): boolean {
  return /^(19|20)\d{2}$/.test(str);
}

// Check if a string is a known first name
function isKnownFirstName(str: string): boolean {
  return COMMON_FIRST_NAMES.has(str.toLowerCase());
}

// Check if a string is a known last name
function isKnownLastName(str: string): boolean {
  return COMMON_LAST_NAMES.has(str.toLowerCase());
}

// Check if a string is a title/honorific
function isTitle(str: string): boolean {
  return COMMON_TITLES.includes(str.toLowerCase().replace('.', ''));
}

// Check if a string is a middle name indicator
function _isMiddleNameIndicator(str: string): boolean {
  return MIDDLE_NAME_INDICATORS.includes(str.toLowerCase());
}

// Score how likely a string is to be a first name
function getFirstNameScore(str: string): number {
  const lower = str.toLowerCase();
  if (COMMON_FIRST_NAMES.has(lower)) return 1.0;
  if (COMMON_LAST_NAMES.has(lower)) return 0.3; // Some overlap
  if (str.length >= 2 && str.length <= 15 && /^[a-zA-Z]+$/.test(str)) return 0.5;
  return 0;
}

// Score how likely a string is to be a last name
function getLastNameScore(str: string): number {
  const lower = str.toLowerCase();
  if (COMMON_LAST_NAMES.has(lower)) return 1.0;
  if (COMMON_FIRST_NAMES.has(lower)) return 0.3; // Some overlap
  if (str.length >= 2 && str.length <= 20 && /^[a-zA-Z]+$/.test(str)) return 0.5;
  return 0;
}

/**
 * Intelligently capitalize names, handling special cases
 */
function capitalizeName(str: string): string {
  if (!str) return '';

  // Handle special name patterns
  const specialPatterns = [
    {
      pattern: /^(o')([a-z]+)/i,
      format: (m: RegExpMatchArray) => `O'${m[2].charAt(0).toUpperCase()}${m[2].slice(1).toLowerCase()}`,
    },
    {
      pattern: /^(mac)([a-z]+)/i,
      format: (m: RegExpMatchArray) => `Mac${m[2].charAt(0).toUpperCase()}${m[2].slice(1).toLowerCase()}`,
    },
    {
      pattern: /^(mc)([a-z]+)/i,
      format: (m: RegExpMatchArray) => `Mc${m[2].charAt(0).toUpperCase()}${m[2].slice(1).toLowerCase()}`,
    },
    {
      pattern: /^(van|von|de|del|dela|da|di|le|la|du|den|der|ter|ten)(\s+)([a-z]+)/i,
      format: (m: RegExpMatchArray) =>
        m[1].toLowerCase() + m[2] + m[3].charAt(0).toUpperCase() + m[3].slice(1).toLowerCase(),
    },
  ];

  for (const { pattern, format } of specialPatterns) {
    const match = str.match(pattern);
    if (match) {
      return format(match);
    }
  }

  // Handle hyphenated names
  if (str.includes('-')) {
    return str
      .split('-')
      .map((part) => part.charAt(0).toUpperCase() + part.slice(1).toLowerCase())
      .join('-');
  }

  // Handle apostrophes in names like D'Angelo
  if (str.includes("'") && str.indexOf("'") > 0) {
    const parts = str.split("'");
    return parts
      .map((part, i) =>
        i === 0
          ? part.charAt(0).toUpperCase() + part.slice(1).toLowerCase()
          : part.charAt(0).toUpperCase() + part.slice(1).toLowerCase()
      )
      .join("'");
  }

  // Standard capitalization
  if (/^[a-zA-Z]/.test(str)) {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  }

  return str;
}

/**
 * Capitalize first letter of a word (legacy compatibility)
 */
function _capitalizeFirstLetter(str: string): string {
  return capitalizeName(str);
}

/**
 * Parse composite name parts that may contain numbers and special patterns
 * Intelligently strips numbers and special characters that are likely not part of the actual name
 * e.g., "john1" -> "john", "due2" -> "due", "test123" -> "test"
 */
function parseCompositeNamePart(part: string): {
  base: string;
  hasNumbers: boolean;
  cleaned: string;
  confidence: number;
} {
  const hasNumbers = /\d/.test(part);
  let confidence = 1.0;

  // Multiple strategies for cleaning names:
  // 1. Remove trailing numbers (john123 -> john)
  // 2. Remove interspersed numbers if they seem unnatural (jo1hn -> john)
  // 3. Remove leading numbers if followed by a valid name (1john -> john)
  // 4. Handle year patterns (john2023 -> john)
  // 5. Handle common number substitutions (j0hn -> john, 3ric -> eric)

  let cleaned = part;

  // Handle common leetspeak/number substitutions
  const leetSpeakMap: { [key: string]: string } = {
    '0': 'o',
    '1': 'i',
    '3': 'e',
    '4': 'a',
    '5': 's',
    '7': 't',
    '8': 'b',
  };

  // First check if it might be leetspeak
  if (hasNumbers && part.length >= 3) {
    let leetCleaned = part.toLowerCase();
    for (const [num, letter] of Object.entries(leetSpeakMap)) {
      leetCleaned = leetCleaned.replace(new RegExp(num, 'g'), letter);
    }

    // Check if the cleaned version is a known name
    if (isKnownFirstName(leetCleaned) || isKnownLastName(leetCleaned)) {
      cleaned = leetCleaned;
      confidence = 0.7; // Lower confidence for leetspeak conversions
    }
  }

  // If not leetspeak, try standard cleaning
  if (cleaned === part) {
    // Remove year-like suffixes
    const withoutYear = part.replace(/(19|20)\d{2}$/, '');
    if (withoutYear !== part && withoutYear.length >= 2) {
      cleaned = withoutYear;
      confidence = 0.8;
    } else {
      // Try to extract alphabetic base by removing all numbers
      const pureAlpha = part.replace(/\d+/g, '');

      // If we have a reasonable alphabetic base (at least 2 chars), use it
      // Also accept single letter if it's part of a pattern like j7.d2
      if (pureAlpha.length >= 2) {
        cleaned = pureAlpha;
        confidence = hasNumbers ? 0.85 : 1.0;
      } else if (pureAlpha.length === 1 && /^[a-zA-Z]$/.test(pureAlpha)) {
        // For single letters (like 'j' from 'j7'), accept them as valid initials
        cleaned = pureAlpha;
        confidence = 0.6; // Lower confidence for single letters
      } else {
        // Otherwise, try to extract base name without trailing numbers
        const baseMatch = part.match(/^([a-zA-Z]+)\d*$/);
        if (baseMatch) {
          cleaned = baseMatch[1];
          confidence = 0.75;
        } else {
          // Handle mixed alphanumeric that doesn't match patterns
          cleaned = part;
          confidence = 0.4;
        }
      }
    }
  }

  // Boost confidence if the cleaned result is a known name
  if (cleaned !== part) {
    if (isKnownFirstName(cleaned) || isKnownLastName(cleaned)) {
      confidence = Math.min(1.0, confidence + 0.2);
    }
  }

  // For backward compatibility, also provide the old 'base' format
  const baseMatch = part.match(/^([a-zA-Z]+[a-zA-Z0-9]*?)\d*$/);
  const base = baseMatch ? baseMatch[1] : part;

  return { base, hasNumbers, cleaned, confidence };
}

/**
 * Check if string is likely a name (not containing invalid patterns)
 */
function isLikelyName(str: string, allowNumbers: boolean = false, allowSingleLetter: boolean = false): boolean {
  if (!str) return false;

  // Allow single letters if explicitly permitted (for patterns like j7.d2)
  if (str.length < 2 && !allowSingleLetter) return false;
  if (str.length === 1 && allowSingleLetter && /^[a-zA-Z]$/.test(str)) return true;

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

  // Check for CamelCase pattern first (like johnDoe or JohnSmith)
  const camelCasePatterns = [
    /^([a-z]+)([A-Z][a-z]+)$/, // johnDoe
    /^([A-Z][a-z]+)([A-Z][a-z]+)$/, // JohnSmith
    /^([a-z]+)([A-Z][a-z]+)([A-Z][a-z]+)$/, // johnMcDonald
  ];

  for (const pattern of camelCasePatterns) {
    const match = cleanedLocal.match(pattern);
    if (match) {
      if (match.length === 3) {
        // Two parts
        const [, first, last] = match;
        if (isLikelyName(first) && isLikelyName(last)) {
          const firstScore = getFirstNameScore(first);
          const lastScore = getLastNameScore(last);

          firstName = capitalizeName(first);
          lastName = capitalizeName(last);
          confidence = 0.7 + (firstScore + lastScore) * 0.15; // 0.7-1.0 based on name recognition
          break;
        }
      } else if (match.length === 4) {
        // Three parts (like johnMcDonald)
        const [, first, middle, last] = match;
        const combined = middle + last; // Combine for names like McDonald

        if (isLikelyName(first)) {
          firstName = capitalizeName(first);
          lastName = capitalizeName(combined);
          confidence = 0.75;
          break;
        }
      }
    }
  }

  // If no CamelCase match, try different separator patterns
  if (!firstName && !lastName) {
    for (const separator of NAME_SEPARATORS) {
      if (cleanedLocal.includes(separator)) {
        const parts = cleanedLocal.split(separator).filter((p) => p.length > 0);

        if (parts.length === 2) {
          const [first, last] = parts;

          // Check for title at the beginning
          if (isTitle(first)) {
            // Skip title and use second part as first name if there's a third part
            continue;
          }

          // Parse composite parts (may contain numbers)
          const firstParsed = parseCompositeNamePart(first);
          const lastParsed = parseCompositeNamePart(last);

          // Calculate name likelihood scores
          const firstNameScore = getFirstNameScore(firstParsed.cleaned);
          const lastNameScore = getLastNameScore(lastParsed.cleaned);

          // Determine if order should be reversed (last.first pattern)
          const reverseScore = getLastNameScore(firstParsed.cleaned) + getFirstNameScore(lastParsed.cleaned);
          const normalScore = firstNameScore + lastNameScore;

          // Check if both parts could be names (more lenient with numbers)
          const bothPartsValid = isLikelyName(first, true) && isLikelyName(last, true);

          if (bothPartsValid) {
            // Smart handling: Always try to extract clean names when possible
            // For patterns like john1.due2, we want "John" and "Due"

            // Determine name order based on scores
            const useReversed = reverseScore > normalScore * 1.2; // Bias toward normal order

            if (firstParsed.hasNumbers || lastParsed.hasNumbers) {
              // At least one part has numbers - intelligently clean them
              const cleanedFirst = firstParsed.cleaned;
              const cleanedLast = lastParsed.cleaned;

              // Check if the cleaned versions are valid names (allow single letters for patterns like j7.d2)
              if (isLikelyName(cleanedFirst, false, true) && isLikelyName(cleanedLast, false, true)) {
                // Successfully cleaned to valid names
                if (useReversed) {
                  firstName = capitalizeName(cleanedLast);
                  lastName = capitalizeName(cleanedFirst);
                } else {
                  firstName = capitalizeName(cleanedFirst);
                  lastName = capitalizeName(cleanedLast);
                }

                // Calculate confidence based on multiple factors
                const baseConfidence = 0.7;
                const separatorBonus = separator === '.' ? 0.15 : separator === '_' ? 0.05 : 0;
                const nameRecognitionBonus = normalScore > 0.5 ? 0.1 : 0;
                const cleaningPenalty = (firstParsed.confidence + lastParsed.confidence) / 2 - 1; // -1 to 0

                confidence = Math.min(0.95, baseConfidence + separatorBonus + nameRecognitionBonus + cleaningPenalty);
              } else {
                // Fallback to keeping numbers if cleaning doesn't produce valid names
                // This handles cases like "a1.b2" where removing numbers leaves too little
                firstName = capitalizeName(first);
                lastName = capitalizeName(last);
                confidence = 0.5; // Lower confidence for alphanumeric patterns
              }
            } else {
              // Neither has numbers - regular name
              if (useReversed) {
                firstName = capitalizeName(last);
                lastName = capitalizeName(first);
              } else {
                firstName = capitalizeName(first);
                lastName = capitalizeName(last);
              }

              // Calculate confidence
              const baseConfidence = 0.75;
              const separatorBonus = separator === '.' ? 0.15 : separator === '_' ? 0.05 : 0;
              const nameRecognitionBonus = Math.min(0.15, normalScore * 0.15);

              confidence = Math.min(0.95, baseConfidence + separatorBonus + nameRecognitionBonus);
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

              if (isLikelyName(cleanedFirst, false, true) && isLikelyName(cleanedMiddle, false, true)) {
                firstName = capitalizeName(cleanedFirst);
                lastName = capitalizeName(cleanedMiddle);
                confidence = 0.7;
              } else {
                firstName = capitalizeName(first);
                lastName = capitalizeName(middle);
                confidence = 0.65;
              }
              break;
            }
          } else if (isLikelyName(first, true) && isLikelyName(last, true)) {
            // Intelligently handle three-part names
            const cleanedFirst = firstParsed.hasNumbers ? firstParsed.cleaned : first;
            const cleanedLast = lastParsed.hasNumbers ? lastParsed.cleaned : last;

            if (isLikelyName(cleanedFirst, false, true) && isLikelyName(cleanedLast, false, true)) {
              firstName = capitalizeName(cleanedFirst);
              lastName = capitalizeName(cleanedLast);
              confidence = 0.75;
            } else {
              // Fallback if cleaning doesn't produce valid names
              firstName = capitalizeName(first);
              lastName = capitalizeName(last);
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

            if (isLikelyName(cleanedFirst, false, true) && isLikelyName(cleanedLast, false, true)) {
              firstName = capitalizeName(cleanedFirst);
              lastName = capitalizeName(cleanedLast);
              confidence = 0.6;
            } else {
              firstName = capitalizeName(firstPart);
              lastName = capitalizeName(lastToUse);
              confidence = 0.5;
            }
            break;
          }
        }
      }
    }
  }

  // Additional pattern: underscore_case or CONSTANT_CASE
  if (!firstName && !lastName) {
    const underscoreMatch = cleanedLocal.match(/^([A-Z_]+)$/);
    if (underscoreMatch) {
      const parts = cleanedLocal
        .toLowerCase()
        .split('_')
        .filter((p) => p.length > 0);
      if (parts.length === 2) {
        const [first, last] = parts;
        if (isLikelyName(first) && isLikelyName(last)) {
          firstName = capitalizeName(first);
          lastName = capitalizeName(last);
          confidence = 0.65;
        }
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
        const nameScore = Math.max(getFirstNameScore(cleanedLocal), getLastNameScore(cleanedLocal));

        // Determine if it's more likely a first or last name
        if (getFirstNameScore(cleanedLocal) >= getLastNameScore(cleanedLocal)) {
          firstName = capitalizeName(cleanedLocal);
        } else {
          lastName = capitalizeName(cleanedLocal);
        }

        confidence = 0.4 + nameScore * 0.3; // 0.4-0.7 based on name recognition
      } else if (parsed.hasNumbers && parsed.cleaned.length >= 2) {
        // Has numbers but we can extract a clean name
        const cleanedScore = Math.max(getFirstNameScore(parsed.cleaned), getLastNameScore(parsed.cleaned));

        if (getFirstNameScore(parsed.cleaned) >= getLastNameScore(parsed.cleaned)) {
          firstName = capitalizeName(parsed.cleaned);
        } else {
          lastName = capitalizeName(parsed.cleaned);
        }

        confidence = 0.3 + cleanedScore * 0.2 + parsed.confidence * 0.2; // 0.3-0.7 based on multiple factors
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
