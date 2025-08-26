import expect from 'expect';
import { defaultNameDetectionMethod, detectName, detectNameFromEmail } from '../src';
import type { NameDetectionMethod } from '../src/types';

describe('Name Detection', () => {
  describe('detectName', () => {
    it('should detect names with dot separator', () => {
      const result = detectName('john.doe@example.com');
      expect(result).toBeTruthy();
      expect(result?.firstName).toBe('John');
      expect(result?.lastName).toBe('Doe');
      expect(result?.confidence).toBeGreaterThanOrEqual(0.8);
    });

    it('should detect names with underscore separator', () => {
      const result = detectName('jane_smith@example.com');
      expect(result).toBeTruthy();
      expect(result?.firstName).toBe('Jane');
      expect(result?.lastName).toBe('Smith');
      expect(result?.confidence).toBeGreaterThanOrEqual(0.7);
    });

    it('should detect names with hyphen separator', () => {
      const result = detectName('mary-johnson@example.com');
      expect(result).toBeTruthy();
      expect(result?.firstName).toBe('Mary');
      expect(result?.lastName).toBe('Johnson');
      expect(result?.confidence).toBeGreaterThanOrEqual(0.7);
    });

    it('should handle plus sign as email alias correctly', () => {
      // Plus sign is typically used for email aliases, not name separators
      const result = detectName('bob+wilson@example.com');
      expect(result).toBeTruthy();
      expect(result?.firstName).toBe('Bob');
      expect(result?.lastName).toBeUndefined(); // Plus is removed as alias, leaving single name
      expect(result?.confidence).toBe(0.5);
    });

    it('should detect camelCase names', () => {
      const result = detectName('johnDoe@example.com');
      expect(result).toBeTruthy();
      expect(result?.firstName).toBe('John');
      expect(result?.lastName).toBe('Doe');
      expect(result?.confidence).toBeGreaterThanOrEqual(0.6);
    });

    it('should handle single names', () => {
      const result = detectName('alice@example.com');
      expect(result).toBeTruthy();
      expect(result?.firstName).toBe('Alice');
      expect(result?.lastName).toBeUndefined();
      expect(result?.confidence).toBeLessThanOrEqual(0.5);
    });

    it('should handle names with numbers', () => {
      const result = detectName('john.doe123@example.com');
      expect(result).toBeTruthy();
      expect(result?.firstName).toBe('John');
      expect(result?.lastName).toBe('Doe');
      expect(result?.confidence).toBeCloseTo(0.8, 1); // 0.8 for mixed case (one with numbers)
    });

    it('should handle three-part names', () => {
      const result = detectName('john.middle.doe@example.com');
      expect(result).toBeTruthy();
      expect(result?.firstName).toBe('John');
      expect(result?.lastName).toBe('Doe');
    });

    it('should ignore common email prefixes', () => {
      const result = detectName('admin@example.com');
      expect(result).toBeNull();
    });

    it('should ignore noreply addresses', () => {
      const result = detectName('noreply@example.com');
      expect(result).toBeNull();
    });

    it('should handle invalid emails', () => {
      expect(detectName('')).toBeNull();
      expect(detectName('notanemail')).toBeNull();
      expect(detectName('@example.com')).toBeNull();
    });

    it('should properly capitalize names', () => {
      const result = detectName('JOHN.DOE@example.com');
      expect(result).toBeTruthy();
      expect(result?.firstName).toBe('John');
      expect(result?.lastName).toBe('Doe');
    });

    it('should handle mixed case inputs', () => {
      const result = detectName('jOhN.dOe@example.com');
      expect(result).toBeTruthy();
      expect(result?.firstName).toBe('John');
      expect(result?.lastName).toBe('Doe');
    });
  });

  describe('detectNameFromEmail with custom method', () => {
    it('should use custom detection method when provided', () => {
      const customMethod: NameDetectionMethod = (email: string) => {
        if (email.includes('custom')) {
          return {
            firstName: 'Custom',
            lastName: 'User',
            confidence: 1.0,
          };
        }
        return null;
      };

      const result = detectNameFromEmail({
        email: 'custom.test@example.com',
        customMethod,
      });

      expect(result).toBeTruthy();
      expect(result?.firstName).toBe('Custom');
      expect(result?.lastName).toBe('User');
      expect(result?.confidence).toBe(1.0);
    });

    it('should fall back to default method if custom method throws', () => {
      const customMethod: NameDetectionMethod = () => {
        throw new Error('Custom method error');
      };

      // Suppress console.warn for this test
      const originalWarn = console.warn;
      console.warn = jest.fn();

      const result = detectNameFromEmail({
        email: 'john.doe@example.com',
        customMethod,
      });

      expect(result).toBeTruthy();
      expect(result?.firstName).toBe('John');
      expect(result?.lastName).toBe('Doe');

      console.warn = originalWarn;
    });

    it('should handle custom method returning null', () => {
      const customMethod: NameDetectionMethod = () => null;

      const result = detectNameFromEmail({
        email: 'john.doe@example.com',
        customMethod,
      });

      expect(result).toBeNull();
    });
  });

  describe('defaultNameDetectionMethod edge cases', () => {
    it('should handle email with suffix patterns', () => {
      const result = defaultNameDetectionMethod('john.doe.mail@example.com');
      expect(result).toBeTruthy();
      expect(result?.firstName).toBe('John');
      expect(result?.lastName).toBe('Doe');
    });

    it('should reject emails with too many numbers', () => {
      const result = defaultNameDetectionMethod('123456789@example.com');
      expect(result).toBeNull();
    });

    it('should handle empty local part', () => {
      const result = defaultNameDetectionMethod('@example.com');
      expect(result).toBeNull();
    });

    it('should handle very short names', () => {
      const result = defaultNameDetectionMethod('a.b@example.com');
      expect(result).toBeNull(); // Names too short to be likely
    });

    it('should detect longer single names', () => {
      const result = defaultNameDetectionMethod('alexander@example.com');
      expect(result).toBeTruthy();
      expect(result?.firstName).toBe('Alexander');
      expect(result?.lastName).toBeUndefined();
      expect(result?.confidence).toBe(0.5);
    });

    it('should handle multiple separators', () => {
      const result = defaultNameDetectionMethod('john_doe-smith@example.com');
      expect(result).toBeTruthy();
      // Should detect first valid separator pattern
    });

    it('should ignore support/info/contact prefixes', () => {
      expect(defaultNameDetectionMethod('support@example.com')).toBeNull();
      expect(defaultNameDetectionMethod('info@example.com')).toBeNull();
      expect(defaultNameDetectionMethod('contact@example.com')).toBeNull();
      expect(defaultNameDetectionMethod('sales@example.com')).toBeNull();
      expect(defaultNameDetectionMethod('help@example.com')).toBeNull();
    });

    it('should handle email aliases with plus sign correctly', () => {
      const result = defaultNameDetectionMethod('john.doe+alias@example.com');
      expect(result).toBeTruthy();
      expect(result?.firstName).toBe('John');
      expect(result?.lastName).toBe('Doe');
    });
  });

  describe('Composite and alphanumeric name detection', () => {
    it('should intelligently strip numbers from names like john1.due2', () => {
      const result = defaultNameDetectionMethod('john1.due2@example.com');
      expect(result).toBeTruthy();
      expect(result?.firstName).toBe('John');
      expect(result?.lastName).toBe('Due');
      expect(result?.confidence).toBeGreaterThanOrEqual(0.75);
    });

    it('should handle alphanumeric composite names like mo1.test2', () => {
      const result = defaultNameDetectionMethod('mo1.test2@example.com');
      expect(result).toBeTruthy();
      expect(result?.firstName).toBe('Mo');
      expect(result?.lastName).toBe('Test');
      expect(result?.confidence).toBeGreaterThanOrEqual(0.75);
    });

    it('should handle mixed alphanumeric patterns', () => {
      const testCases = [
        { email: 'user1.admin2@example.com', firstName: 'User1', lastName: 'Admin2' }, // 'admin' is a reserved suffix, keeps original
        { email: 'dev3.ops4@example.com', firstName: 'Dev', lastName: 'Ops' },
        { email: 'test123.user456@example.com', firstName: 'Test', lastName: 'User' },
        { email: 'a1.b2@example.com', firstName: 'A', lastName: 'B' }, // Now extracts single letters A and B
        { email: 'j7.d2@example.com', firstName: 'J', lastName: 'D' }, // Should extract single letters J and D
      ];

      testCases.forEach(({ email, firstName, lastName }) => {
        const result = defaultNameDetectionMethod(email);
        expect(result).toBeTruthy();
        expect(result?.firstName).toBe(firstName);
        expect(result?.lastName).toBe(lastName);
      });
    });

    it('should handle names with numbers in different positions', () => {
      const testCases = [
        { email: '2john.doe@example.com', firstName: 'John', lastName: 'Doe' }, // Strips leading number
        { email: 'john2.doe@example.com', firstName: 'John', lastName: 'Doe', confidence: 0.85 },
        { email: 'john.2doe@example.com', firstName: 'John', lastName: 'Doe' }, // Strips leading number from second part
        { email: 'john.doe3@example.com', firstName: 'John', lastName: 'Doe', confidence: 0.85 },
      ];

      testCases.forEach(({ email, firstName, lastName, confidence }) => {
        const result = defaultNameDetectionMethod(email);
        expect(result).toBeTruthy();
        expect(result?.firstName).toBe(firstName);
        expect(result?.lastName).toBe(lastName);
        if (confidence) {
          expect(result?.confidence).toBeCloseTo(confidence, 1);
        }
      });
    });

    it('should handle complex composite names with multiple parts', () => {
      const testCases = [
        { email: 'user.test.dev.admin@example.com', firstName: 'User', lastName: 'Dev' },
        { email: 'mo1.test2.dev3@example.com', firstName: 'Mo', lastName: 'Dev' }, // Strips numbers intelligently
        { email: 'alpha.beta.gamma.delta@example.com', firstName: 'Alpha', lastName: 'Delta' },
        { email: 'first.middle1.middle2.last@example.com', firstName: 'First', lastName: 'Last' },
      ];

      testCases.forEach(({ email, firstName, lastName }) => {
        const result = defaultNameDetectionMethod(email);
        expect(result).toBeTruthy();
        expect(result?.firstName).toBe(firstName);
        expect(result?.lastName).toBe(lastName);
      });
    });

    it('should handle camelCase with numbers', () => {
      // Regular camelCase still works
      const result1 = defaultNameDetectionMethod('johnDoe@example.com');
      expect(result1).toBeTruthy();
      expect(result1?.firstName).toBe('John');
      expect(result1?.lastName).toBe('Doe');

      // CamelCase with numbers treated differently (strips numbers)
      const result2 = defaultNameDetectionMethod('user1Admin@example.com');
      expect(result2).toBeTruthy();
      expect(result2?.firstName).toBe('Useradmin'); // Strips numbers from single name
      expect(result2?.lastName).toBeUndefined();
    });
  });

  describe('Comprehensive first and last name parsing', () => {
    it('should handle various international name formats', () => {
      const testCases = [
        // Common Western formats
        { email: 'john.smith@example.com', firstName: 'John', lastName: 'Smith' },
        { email: 'mary-jane.watson@example.com', firstName: 'Mary-jane', lastName: 'Watson' },
        { email: 'jean_pierre.dupont@example.com', firstName: 'Jean_pierre', lastName: 'Dupont' },

        // Hyphenated names
        { email: 'anne-marie.smith-jones@example.com', firstName: 'Anne-marie', lastName: 'Smith-jones' },

        // Short names
        { email: 'li.wu@example.com', firstName: 'Li', lastName: 'Wu' },
        { email: 'jo.su@example.com', firstName: 'Jo', lastName: 'Su' },

        // Longer names
        { email: 'christopher.alexander@example.com', firstName: 'Christopher', lastName: 'Alexander' },
        { email: 'elizabeth.margaret@example.com', firstName: 'Elizabeth', lastName: 'Margaret' },
      ];

      testCases.forEach(({ email, firstName, lastName }) => {
        const result = defaultNameDetectionMethod(email);
        expect(result).toBeTruthy();
        expect(result?.firstName).toBe(firstName);
        expect(result?.lastName).toBe(lastName);
        expect(result?.confidence).toBeGreaterThan(0);
      });
    });

    it('should handle edge cases in name parsing', () => {
      const testCases = [
        // Names with apostrophes (though rare in email)
        { email: "o'neil.smith@example.com", firstName: "O'neil", lastName: 'Smith' },

        // Mixed case preservation
        { email: 'MacDonald.OConnor@example.com', firstName: 'Macdonald', lastName: 'Oconnor' },
        { email: 'VanDerWaal.DeLaCruz@example.com', firstName: 'Vanderwaal', lastName: 'Delacruz' },

        // Names with common suffixes that should be ignored
        { email: 'john.doe.mail@example.com', firstName: 'John', lastName: 'Doe' },
        { email: 'jane.smith.contact@example.com', firstName: 'Jane', lastName: 'Smith' },
        { email: 'bob.jones.support@example.com', firstName: 'Bob', lastName: 'Jones' },
      ];

      testCases.forEach(({ email, firstName, lastName }) => {
        const result = defaultNameDetectionMethod(email);
        expect(result).toBeTruthy();
        expect(result?.firstName).toBe(firstName);
        expect(result?.lastName).toBe(lastName);
      });
    });

    it('should handle single name variations', () => {
      const testCases = [
        { email: 'alexander@example.com', firstName: 'Alexander', confidence: 0.5 },
        { email: 'maria@example.com', firstName: 'Maria', confidence: 0.5 },
        { email: 'giuseppe@example.com', firstName: 'Giuseppe', confidence: 0.5 },
        { email: 'mohammed@example.com', firstName: 'Mohammed', confidence: 0.5 },
        // Single name with numbers should extract base
        { email: 'user123@example.com', firstName: 'User', confidence: 0.4 },
        { email: 'test456@example.com', firstName: 'Test', confidence: 0.4 },
      ];

      testCases.forEach(({ email, firstName, confidence }) => {
        const result = defaultNameDetectionMethod(email);
        expect(result).toBeTruthy();
        expect(result?.firstName).toBe(firstName);
        expect(result?.lastName).toBeUndefined();
        expect(result?.confidence).toBeCloseTo(confidence, 1);
      });
    });

    it('should handle various separator combinations', () => {
      const testCases = [
        // Dot separator (most common)
        { email: 'first.last@example.com', firstName: 'First', lastName: 'Last', minConfidence: 0.8 },

        // Underscore separator
        { email: 'first_last@example.com', firstName: 'First', lastName: 'Last', minConfidence: 0.7 },

        // Hyphen separator
        { email: 'first-last@example.com', firstName: 'First', lastName: 'Last', minConfidence: 0.7 },

        // Mixed separators (takes first valid pattern)
        { email: 'first.middle_last@example.com', firstName: 'First', lastName: 'Middle_last' },
        { email: 'first_middle.last@example.com', firstName: 'First_middle', lastName: 'Last' },
      ];

      testCases.forEach(({ email, firstName, lastName, minConfidence }) => {
        const result = defaultNameDetectionMethod(email);
        expect(result).toBeTruthy();
        expect(result?.firstName).toBe(firstName);
        expect(result?.lastName).toBe(lastName);
        if (minConfidence) {
          expect(result?.confidence).toBeGreaterThanOrEqual(minConfidence);
        }
      });
    });

    it('should properly handle names that should not be detected', () => {
      const invalidEmails = [
        'admin@example.com',
        'support@example.com',
        'info@example.com',
        'noreply@example.com',
        'contact@example.com',
        'sales@example.com',
        'help@example.com',
        '123456@example.com',
        '...@example.com',
        'a@example.com', // Too short
      ];

      invalidEmails.forEach((email) => {
        const result = defaultNameDetectionMethod(email);
        expect(result).toBeNull();
      });

      // Special case for no-reply
      expect(defaultNameDetectionMethod('no-reply@example.com')).toBeNull();
    });

    it('should handle complex real-world examples', () => {
      const testCases = [
        // Developer/tech usernames that might be names
        { email: 'jsmith2024@example.com', firstName: 'Jsmith', confidence: 0.4 },
        { email: 'dev.john.doe@example.com', firstName: 'Dev', lastName: 'Doe' },
        { email: 'john.doe.dev@example.com', firstName: 'John', lastName: 'Doe' },

        // With year/numbers
        { email: 'john.smith.2024@example.com', firstName: 'John', lastName: 'Smith' },
        { email: 'mary2024.jones@example.com', firstName: 'Mary', lastName: 'Jones', confidence: 0.85 },

        // Company patterns that might contain names
        { email: 'john.doe.company@example.com', firstName: 'John', lastName: 'Doe' },
        { email: 'jane.smith.sales@example.com', firstName: 'Jane', lastName: 'Smith' },
      ];

      testCases.forEach(({ email, firstName, lastName, confidence }) => {
        const result = defaultNameDetectionMethod(email);
        expect(result).toBeTruthy();
        expect(result?.firstName).toBe(firstName);
        if (lastName !== undefined) {
          expect(result?.lastName).toBe(lastName);
        }
        if (confidence !== undefined) {
          expect(result?.confidence).toBeCloseTo(confidence, 1);
        }
      });
    });
  });
});
