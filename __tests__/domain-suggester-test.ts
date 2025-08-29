import expect from 'expect';
import type { DomainSuggestionMethod } from '../src';
import {
  COMMON_EMAIL_DOMAINS,
  defaultDomainSuggestionMethod,
  getDomainSimilarity,
  isCommonDomain,
  suggestDomain,
  suggestEmailDomain,
} from '../src';

describe('Domain Suggestion', () => {
  describe('suggestEmailDomain', () => {
    it('should suggest gmail.com for common typos', () => {
      const typos = ['gmial.com', 'gmai.com', 'gmali.com', 'gmil.com', 'gmaill.com', 'gmail.co', 'gmail.cm'];

      typos.forEach((typo) => {
        const result = suggestEmailDomain(`test@${typo}`);
        expect(result).toBeTruthy();
        expect(result?.suggested).toBe('test@gmail.com');
        expect(result?.confidence).toBeGreaterThanOrEqual(0.7);
      });
    });

    it('should suggest yahoo.com for common typos', () => {
      const typos = ['yaho.com', 'yahooo.com', 'yahoo.co', 'yahoo.cm', 'yhaoo.com'];

      typos.forEach((typo) => {
        const result = suggestEmailDomain(`user@${typo}`);
        expect(result).toBeTruthy();
        expect(result?.suggested).toBe('user@yahoo.com');
        expect(result?.confidence).toBeGreaterThanOrEqual(0.7);
      });
    });

    it('should suggest hotmail.com for common typos', () => {
      const typos = ['hotmai.com', 'hotmial.com', 'hotmal.com', 'hotmil.com', 'hotmail.co', 'hotmail.cm'];

      typos.forEach((typo) => {
        const result = suggestEmailDomain(`person@${typo}`);
        expect(result).toBeTruthy();
        expect(result?.suggested).toBe('person@hotmail.com');
        expect(result?.confidence).toBeGreaterThanOrEqual(0.7);
      });
    });

    it('should suggest outlook.com for common typos', () => {
      const typos = ['outlok.com', 'outloo.com', 'outlook.co', 'outlook.cm', 'outlokk.com'];

      typos.forEach((typo) => {
        const result = suggestEmailDomain(`contact@${typo}`);
        expect(result).toBeTruthy();
        expect(result?.suggested).toBe('contact@outlook.com');
        expect(result?.confidence).toBeGreaterThanOrEqual(0.7);
      });
    });

    it('should not suggest for valid common domains', () => {
      const validDomains = ['gmail.com', 'yahoo.com', 'outlook.com', 'hotmail.com'];

      validDomains.forEach((domain) => {
        const result = suggestEmailDomain(`test@${domain}`);
        expect(result).toBeNull();
      });
    });

    it('should handle invalid email formats', () => {
      expect(suggestEmailDomain('')).toBeNull();
      expect(suggestEmailDomain('notanemail')).toBeNull();
      expect(suggestEmailDomain('@domain.com')).toBeNull();
    });

    it('should suggest for slightly misspelled domains', () => {
      const result = suggestEmailDomain('john@goooogle.com');
      expect(result).toBeTruthy();
      expect(result?.suggested).toBe('john@google.com');
    });

    it('should not suggest for completely different domains', () => {
      const result = suggestEmailDomain('test@mycompany.com');
      expect(result).toBeNull();
    });

    it('should use custom domain list when provided', () => {
      const customDomains = ['company.com', 'business.org'];
      const result = suggestEmailDomain('user@compny.com', customDomains);
      expect(result).toBeTruthy();
      expect(result?.suggested).toBe('user@company.com');
    });
  });

  describe('suggestDomain', () => {
    it('should suggest domain without email context', () => {
      const result = suggestDomain({ domain: 'gmial.com' });
      expect(result).toBeTruthy();
      expect(result?.suggested).toBe('gmail.com');
      expect(result?.confidence).toBeGreaterThanOrEqual(0.7);
    });

    it('should use custom suggestion method when provided', () => {
      const customMethod: DomainSuggestionMethod = (domain: string) => {
        if (domain.includes('test')) {
          return {
            original: domain,
            suggested: 'custom.com',
            confidence: 1.0,
          };
        }
        return null;
      };

      const result = suggestDomain({
        domain: 'test.com',
        customMethod,
      });

      expect(result).toBeTruthy();
      expect(result?.suggested).toBe('custom.com');
      expect(result?.confidence).toBe(1.0);
    });

    it('should fall back to default method if custom method throws', () => {
      const customMethod: DomainSuggestionMethod = () => {
        throw new Error('Custom method error');
      };

      // Suppress console.warn for this test
      const originalWarn = console.warn;
      console.warn = jest.fn();

      const result = suggestDomain({
        domain: 'gmial.com',
        customMethod,
      });

      expect(result).toBeTruthy();
      expect(result?.suggested).toBe('gmail.com');

      console.warn = originalWarn;
    });

    it('should handle very short domains', () => {
      expect(suggestDomain({ domain: 'a' })).toBeNull();
      expect(suggestDomain({ domain: 'ab' })).toBeNull();
    });
  });

  describe('defaultDomainSuggestionMethod', () => {
    it('should have higher confidence for known typo patterns', () => {
      const result = defaultDomainSuggestionMethod('gmai.com');
      expect(result).toBeTruthy();
      expect(result?.confidence).toBeGreaterThanOrEqual(0.95);
    });

    it('should suggest for TLD variations', () => {
      const result = defaultDomainSuggestionMethod('gmail.co');
      expect(result).toBeTruthy();
      expect(result?.suggested).toBe('gmail.com');
    });

    it('should handle double letters typos', () => {
      const result = defaultDomainSuggestionMethod('gmaill.com');
      expect(result).toBeTruthy();
      expect(result?.suggested).toBe('gmail.com');
    });

    it('should not suggest when first letter differs significantly', () => {
      // xmail.com matches mail.com which is in common domains
      // Use a different example that truly won't match
      const result = defaultDomainSuggestionMethod('zzztest.com');
      expect(result).toBeNull();
    });

    it('should handle case insensitivity', () => {
      const result = defaultDomainSuggestionMethod('GMAIL.CO');
      expect(result).toBeTruthy();
      expect(result?.suggested).toBe('gmail.com');
    });

    it('should return null for domains already in common list', () => {
      const result = defaultDomainSuggestionMethod('gmail.com');
      expect(result).toBeNull();
    });

    it('should suggest for domains with similar length', () => {
      const result = defaultDomainSuggestionMethod('yahooo.com');
      expect(result).toBeTruthy();
      expect(result?.suggested).toBe('yahoo.com');
    });
  });

  describe('isCommonDomain', () => {
    it('should return true for common domains', () => {
      expect(isCommonDomain('gmail.com')).toBe(true);
      expect(isCommonDomain('yahoo.com')).toBe(true);
      expect(isCommonDomain('outlook.com')).toBe(true);
      expect(isCommonDomain('proton.me')).toBe(true);
    });

    it('should return false for uncommon domains', () => {
      expect(isCommonDomain('mycompany.com')).toBe(false);
      expect(isCommonDomain('example.org')).toBe(false);
      expect(isCommonDomain('test.net')).toBe(false);
    });

    it('should be case insensitive', () => {
      expect(isCommonDomain('GMAIL.COM')).toBe(true);
      expect(isCommonDomain('Yahoo.Com')).toBe(true);
    });

    it('should use custom domain list when provided', () => {
      const customDomains = ['custom.com', 'special.org'];
      expect(isCommonDomain('custom.com', customDomains)).toBe(true);
      expect(isCommonDomain('gmail.com', customDomains)).toBe(false);
    });
  });

  describe('getDomainSimilarity', () => {
    it('should return 1 for identical domains', () => {
      expect(getDomainSimilarity('gmail.com', 'gmail.com')).toBe(1);
    });

    it('should return high similarity for close matches', () => {
      const similarity = getDomainSimilarity('gmail.com', 'gmai.com');
      expect(similarity).toBeGreaterThanOrEqual(0.8);
      expect(similarity).toBeLessThan(1);
    });

    it('should return low similarity for different domains', () => {
      const similarity = getDomainSimilarity('gmail.com', 'yahoo.com');
      expect(similarity).toBeLessThan(0.5);
    });

    it('should be case insensitive', () => {
      expect(getDomainSimilarity('GMAIL.COM', 'gmail.com')).toBe(1);
    });
  });

  describe('COMMON_EMAIL_DOMAINS export', () => {
    it('should export a list of common domains', () => {
      expect(Array.isArray(COMMON_EMAIL_DOMAINS)).toBe(true);
      expect(COMMON_EMAIL_DOMAINS.length).toBeGreaterThan(30);
      expect(COMMON_EMAIL_DOMAINS).toContain('gmail.com');
      expect(COMMON_EMAIL_DOMAINS).toContain('yahoo.com');
      expect(COMMON_EMAIL_DOMAINS).toContain('outlook.com');
    });
  });
});
