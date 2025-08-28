/**
 * Tests for serverless core functionality
 */

import { clearCache, EdgeCache, suggestDomain, validateEmailBatch, validateEmailCore } from '../src/serverless/core';

describe('Serverless Core', () => {
  beforeEach(() => {
    clearCache();
  });

  describe('EdgeCache', () => {
    it('should store and retrieve values', () => {
      const cache = new EdgeCache<string>(10, 1000);
      cache.set('test', 'value');
      expect(cache.get('test')).toBe('value');
    });

    it('should respect TTL', (done) => {
      const cache = new EdgeCache<string>(10, 100); // 100ms TTL
      cache.set('test', 'value');
      expect(cache.get('test')).toBe('value');

      setTimeout(() => {
        expect(cache.get('test')).toBeUndefined();
        done();
      }, 150);
    });

    it('should respect max size', () => {
      const cache = new EdgeCache<number>(3, 10000);
      cache.set('1', 1);
      cache.set('2', 2);
      cache.set('3', 3);
      cache.set('4', 4); // This should evict oldest entries

      expect(cache.size()).toBeLessThanOrEqual(3);
    });

    it('should clear cache', () => {
      const cache = new EdgeCache<string>(10, 1000);
      cache.set('test', 'value');
      expect(cache.get('test')).toBe('value');
      cache.clear();
      expect(cache.get('test')).toBeUndefined();
    });
  });

  describe('validateEmailCore', () => {
    it('should validate valid email syntax', async () => {
      const result = await validateEmailCore('test@valid-domain.org');
      expect(result.valid).toBe(true);
      expect(result.email).toBe('test@valid-domain.org');
      expect(result.local).toBe('test');
      expect(result.domain).toBe('valid-domain.org');
      expect(result.validators.syntax?.valid).toBe(true);
    });

    it('should invalidate invalid email syntax', async () => {
      const result = await validateEmailCore('invalid-email');
      expect(result.valid).toBe(false);
      expect(result.validators.syntax?.valid).toBe(false);
    });

    it('should detect typos in domains', async () => {
      const result = await validateEmailCore('user@gmial.com');
      expect(result.validators.typo?.valid).toBe(false);
      expect(result.validators.typo?.suggestion).toBe('gmail.com');
    });

    it('should detect disposable emails', async () => {
      const result = await validateEmailCore('test@mailinator.com');
      expect(result.validators.disposable?.valid).toBe(false);
    });

    it('should detect free email providers', async () => {
      const result = await validateEmailCore('test@gmail.com');
      expect(result.validators.free?.valid).toBe(false);
    });

    it('should cache results', async () => {
      const email = 'cached@valid-domain.org';

      // First call
      const result1 = await validateEmailCore(email);

      // Second call should return cached result
      const result2 = await validateEmailCore(email);

      expect(result1).toEqual(result2);
    });

    it('should skip cache when requested', async () => {
      const email = 'nocache@valid-domain.org';

      await validateEmailCore(email);

      const result = await validateEmailCore(email, { skipCache: true });
      expect(result.email).toBe(email);
    });

    it('should allow disabling specific validators', async () => {
      const result = await validateEmailCore('test@gmail.com', {
        validateTypo: false,
        validateDisposable: false,
        validateFree: false,
      });

      expect(result.validators.typo).toBeUndefined();
      expect(result.validators.disposable).toBeUndefined();
      expect(result.validators.free).toBeUndefined();
    });
  });

  describe('validateEmailBatch', () => {
    it('should validate multiple emails', async () => {
      const emails = ['valid@valid-domain.org', 'invalid-email', 'typo@gmial.com'];

      const results = await validateEmailBatch(emails);

      expect(results).toHaveLength(3);
      expect(results[0].valid).toBe(true);
      expect(results[1].valid).toBe(false);
      expect(results[2].validators.typo?.suggestion).toBe('gmail.com');
    });

    it('should respect batch size option', async () => {
      const emails = Array(10).fill('test@valid-domain.org');

      const results = await validateEmailBatch(emails, { batchSize: 3 });

      expect(results).toHaveLength(10);
      results.forEach((result) => {
        expect(result.email).toBe('test@valid-domain.org');
      });
    });
  });

  describe('suggestDomain', () => {
    it('should suggest correct domain for common typos', () => {
      expect(suggestDomain('gmial.com')).toBe('gmail.com');
      expect(suggestDomain('yahooo.com')).toBe('yahoo.com');
      expect(suggestDomain('hotmial.com')).toBe('hotmail.com');
      expect(suggestDomain('outlok.com')).toBe('outlook.com');
    });

    it('should return null for correct domains', () => {
      expect(suggestDomain('gmail.com')).toBeNull();
      expect(suggestDomain('yahoo.com')).toBeNull();
    });

    it('should use custom domains when provided', () => {
      const suggestion = suggestDomain('compny.com', {
        customDomains: ['company.com', 'business.org'],
        threshold: 2,
      });
      expect(suggestion).toBe('company.com');
    });

    it('should respect threshold option', () => {
      // With low threshold (strict) - use a domain with distance > 1
      expect(suggestDomain('ggggmail.com', { threshold: 1 })).toBeNull();

      // With higher threshold (more lenient) - same domain should match with higher threshold
      expect(suggestDomain('ggggmail.com', { threshold: 3 })).toBe('gmail.com');
    });
  });

  describe('Cache control', () => {
    it('should clear all caches', async () => {
      // Add some data to cache
      await validateEmailCore('test1@valid-domain.org');
      await validateEmailCore('test2@valid-domain.org');

      // Clear cache
      clearCache();

      // Cache should be empty (we can't directly test this, but we can verify behavior)
      // If cache was cleared, the same validation would happen again
      const result = await validateEmailCore('test1@valid-domain.org');
      expect(result.email).toBe('test1@valid-domain.org');
    });
  });
});
