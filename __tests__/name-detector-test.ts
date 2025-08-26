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
      expect(result?.confidence).toBeLessThanOrEqual(0.7); // Lower confidence due to numbers (0.9 - 0.2 = 0.7)
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
});
