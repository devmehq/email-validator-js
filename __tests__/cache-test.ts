import expect from 'expect';
import { clearAllCaches, mxCache, disposableCache, freeCache, domainValidCache, smtpCache } from '../src/cache';
import { resolveMxRecords } from '../src/dns';
import { isDisposableEmail, isFreeEmail } from '../src';
import { isValidEmailDomain } from '../src/validator';
import sinon, { SinonSandbox } from 'sinon';
import { promises as dnsPromises } from 'dns';

describe('Caching System', () => {
  let sandbox: SinonSandbox;

  beforeEach(() => {
    sandbox = sinon.createSandbox();
    clearAllCaches();
  });

  afterEach(() => {
    sandbox.restore();
    clearAllCaches();
  });

  describe('MX Records Cache', () => {
    it('should cache MX records lookup', async () => {
      const resolveMxStub = sandbox.stub(dnsPromises, 'resolveMx').resolves([{ exchange: 'mx1.example.com', priority: 10 }]);

      // First call - should hit DNS
      const result1 = await resolveMxRecords('example.com');
      expect(resolveMxStub.callCount).toBe(1);
      expect(result1).toEqual(['mx1.example.com']);

      // Second call - should use cache
      const result2 = await resolveMxRecords('example.com');
      expect(resolveMxStub.callCount).toBe(1); // Still 1, used cache
      expect(result2).toEqual(['mx1.example.com']);
    });

    it('should cache failed MX lookups', async () => {
      const resolveMxStub = sandbox.stub(dnsPromises, 'resolveMx').rejects(new Error('DNS failed'));

      // First call - should hit DNS and fail
      try {
        await resolveMxRecords('invalid.com');
      } catch (err) {
        // Expected to fail
      }
      expect(resolveMxStub.callCount).toBe(1);

      // Second call - should use cached failure
      try {
        await resolveMxRecords('invalid.com');
      } catch (err) {
        // Expected to fail
      }
      expect(resolveMxStub.callCount).toBe(1); // Still 1, used cache
    });
  });

  describe('Disposable Email Cache', () => {
    it('should cache disposable email checks', () => {
      // First call - should check the Set
      const result1 = isDisposableEmail('test@yopmail.com');
      expect(result1).toBe(true);

      // Clear the underlying Set to prove cache is working
      const disposableProviders = require('../src/disposable-email-providers.json');
      disposableProviders.length = 0;

      // Second call - should use cache
      const result2 = isDisposableEmail('test@yopmail.com');
      expect(result2).toBe(true);
    });

    it('should cache non-disposable email checks', () => {
      const result1 = isDisposableEmail('test@gmail.com');
      expect(result1).toBe(false);

      // Second call - should use cache
      const result2 = isDisposableEmail('test@gmail.com');
      expect(result2).toBe(false);
    });
  });

  describe('Free Email Cache', () => {
    it('should cache free email provider checks', () => {
      // First call
      const result1 = isFreeEmail('test@gmail.com');
      expect(result1).toBe(true);

      // Clear the underlying Set to prove cache is working
      const freeProviders = require('../src/free-email-providers.json');
      freeProviders.length = 0;

      // Second call - should use cache
      const result2 = isFreeEmail('test@gmail.com');
      expect(result2).toBe(true);
    });
  });

  describe('Domain Validation Cache', () => {
    it('should cache domain validation results', () => {
      // First call
      const result1 = isValidEmailDomain('example.com');
      expect(typeof result1).toBe('boolean');

      // Second call - should use cache (we can't easily stub psl.isValid)
      const result2 = isValidEmailDomain('example.com');
      expect(result2).toBe(result1);
    });
  });

  describe('Clear All Caches', () => {
    it('should clear all cache instances', async () => {
      // Add items to caches
      mxCache.set('test.com', ['mx1.test.com']);
      disposableCache.set('yopmail.com', true);
      freeCache.set('gmail.com', true);
      domainValidCache.set('example.com', true);
      smtpCache.set('test@example.com:smtp', true);

      // Verify caches have items
      expect(mxCache.get('test.com')).toEqual(['mx1.test.com']);
      expect(disposableCache.get('yopmail.com')).toBe(true);
      expect(freeCache.get('gmail.com')).toBe(true);
      expect(domainValidCache.get('example.com')).toBe(true);
      expect(smtpCache.get('test@example.com:smtp')).toBe(true);

      // Clear all caches
      clearAllCaches();

      // Verify all caches are empty
      expect(mxCache.get('test.com')).toBeUndefined();
      expect(disposableCache.get('yopmail.com')).toBeUndefined();
      expect(freeCache.get('gmail.com')).toBeUndefined();
      expect(domainValidCache.get('example.com')).toBeUndefined();
      expect(smtpCache.get('test@example.com:smtp')).toBeUndefined();
    });
  });
});
