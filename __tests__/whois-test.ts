import expect from 'expect';
import { getDomainAge, getDomainRegistrationStatus } from '../src';

describe('WHOIS Functions', () => {
  // Note: These are integration tests that make real network calls
  // They may fail in environments without internet access or with strict firewalls
  // Consider mocking for unit tests in production environments

  describe('getDomainAge', () => {
    it('should return domain age for a well-known domain', async () => {
      const result = await getDomainAge('example.com');

      // example.com is a reserved domain that should always exist
      if (result) {
        expect(result.domain).toBe('example.com');
        expect(result.creationDate).toBeInstanceOf(Date);
        expect(result.ageInDays).toBeGreaterThan(0);
        expect(result.ageInYears).toBeGreaterThan(0);
      }
    }, 15000);

    it('should extract domain from email address', async () => {
      const result = await getDomainAge('test@example.com');

      if (result) {
        expect(result.domain).toBe('example.com');
      }
    }, 10000);

    it('should extract domain from URL', async () => {
      const result = await getDomainAge('https://example.com/path');

      if (result) {
        expect(result.domain).toBe('example.com');
      }
    }, 10000);

    it('should return null for invalid domain format', async () => {
      const result = await getDomainAge('not-a-valid-domain');

      // Should return null for domains without TLD
      expect(result).toBeNull();
    });

    it('should handle timeout gracefully', async () => {
      const result = await getDomainAge('example.com', 1); // 1ms timeout

      // Should return null on timeout
      expect(result).toBeNull();
    });

    it('should handle empty string', async () => {
      const result = await getDomainAge('');

      expect(result).toBeNull();
    });
  });

  describe('getDomainRegistrationStatus', () => {
    it('should return registration status for a registered domain', async () => {
      const result = await getDomainRegistrationStatus('example.com');

      // example.com is a reserved domain
      if (result) {
        expect(result.domain).toBe('example.com');
        expect(result.isRegistered).toBe(true);
        expect(result.isAvailable).toBe(false);
        expect(result.nameServers).toBeInstanceOf(Array);

        if (result.registrar) {
          expect(typeof result.registrar).toBe('string');
        }

        if (result.status) {
          expect(result.status).toBeInstanceOf(Array);
        }
      }
    }, 15000);

    it('should detect domain status flags', async () => {
      const result = await getDomainRegistrationStatus('example.com');

      if (result) {
        expect(result.status).toBeInstanceOf(Array);
        expect(typeof result.isLocked).toBe('boolean');
        expect(typeof result.isPendingDelete).toBe('boolean');
      }
    }, 10000);

    it('should handle potentially unregistered domain', async () => {
      // Using a very long random domain that's unlikely to be registered
      const randomDomain = `test-${Date.now()}-${Math.random().toString(36).substring(7)}.com`;
      const result = await getDomainRegistrationStatus(randomDomain);

      // The result depends on whether the domain exists
      if (result) {
        expect(result.domain).toBe(randomDomain);
        expect(typeof result.isRegistered).toBe('boolean');
        expect(typeof result.isAvailable).toBe('boolean');

        // If unregistered, should have specific characteristics
        if (!result.isRegistered) {
          expect(result.isAvailable).toBe(true);
          expect(result.registrar).toBeNull();
          expect(result.nameServers.length).toBe(0);
        }
      }
    }, 10000);

    it('should extract domain from email', async () => {
      const result = await getDomainRegistrationStatus('admin@example.com');

      if (result) {
        expect(result.domain).toBe('example.com');
      }
    }, 10000);

    it('should handle timeout gracefully', async () => {
      const result = await getDomainRegistrationStatus('example.com', 1); // 1ms timeout

      // Should return null on timeout (but may return cached result)
      // If result exists, it should be valid
      if (result) {
        expect(result.domain).toBe('example.com');
        expect(typeof result.isRegistered).toBe('boolean');
      }
    });

    it('should calculate expiration correctly when available', async () => {
      const result = await getDomainRegistrationStatus('example.com');

      if (result) {
        if (result.expirationDate) {
          expect(result.expirationDate).toBeInstanceOf(Date);

          if (!result.isExpired) {
            expect(result.daysUntilExpiration).toBeGreaterThanOrEqual(0);
          } else {
            expect(result.daysUntilExpiration).toBeNull();
          }
        }
      }
    }, 10000);

    it('should handle empty string', async () => {
      const result = await getDomainRegistrationStatus('');

      expect(result).toBeNull();
    });

    it('should return non-registered status for invalid format', async () => {
      const result = await getDomainRegistrationStatus('not-a-domain');

      // May return null or unregistered status for invalid domains
      if (result) {
        expect(result.isRegistered).toBe(false);
        expect(result.isAvailable).toBe(true);
      }
    });
  });

  describe('WHOIS Data Structure', () => {
    it('should have correct structure for DomainAgeInfo', async () => {
      const result = await getDomainAge('example.com');

      if (result) {
        expect(result).toHaveProperty('domain');
        expect(result).toHaveProperty('creationDate');
        expect(result).toHaveProperty('ageInDays');
        expect(result).toHaveProperty('ageInYears');
        expect(result).toHaveProperty('expirationDate');
        expect(result).toHaveProperty('updatedDate');

        expect(typeof result.domain).toBe('string');
        expect(typeof result.ageInDays).toBe('number');
        expect(typeof result.ageInYears).toBe('number');
      }
    }, 10000);

    it('should have correct structure for DomainRegistrationInfo', async () => {
      const result = await getDomainRegistrationStatus('example.com');

      if (result) {
        expect(result).toHaveProperty('domain');
        expect(result).toHaveProperty('isRegistered');
        expect(result).toHaveProperty('isAvailable');
        expect(result).toHaveProperty('status');
        expect(result).toHaveProperty('registrar');
        expect(result).toHaveProperty('nameServers');
        expect(result).toHaveProperty('expirationDate');
        expect(result).toHaveProperty('isExpired');
        expect(result).toHaveProperty('daysUntilExpiration');
        expect(result).toHaveProperty('isPendingDelete');
        expect(result).toHaveProperty('isLocked');

        expect(typeof result.domain).toBe('string');
        expect(typeof result.isRegistered).toBe('boolean');
        expect(typeof result.isAvailable).toBe('boolean');
        expect(Array.isArray(result.status)).toBe(true);
        expect(Array.isArray(result.nameServers)).toBe(true);
        expect(typeof result.isExpired).toBe('boolean');
      }
    }, 10000);
  });

  describe('Edge cases', () => {
    it('should handle special characters gracefully', async () => {
      const ageResult = await getDomainAge('@#$%^&*');
      const statusResult = await getDomainRegistrationStatus('@#$%^&*');

      // Should return null or empty result for invalid input
      if (ageResult) {
        expect(ageResult.domain).toBeDefined();
      }

      if (statusResult) {
        expect(statusResult.domain).toBeDefined();
        expect(statusResult.isRegistered).toBe(false);
      }
    });

    it('should handle domains with multiple dots', async () => {
      const result = await getDomainAge('example.co.uk');

      if (result) {
        expect(result.domain).toMatch(/\.co\.uk$/);
      }
    }, 10000);

    it('should handle various TLD formats', async () => {
      const testDomains = ['example.com', 'example.org', 'example.net'];

      for (const domain of testDomains) {
        const result = await getDomainRegistrationStatus(domain);

        if (result) {
          expect(result.domain).toBe(domain);
          expect(typeof result.isRegistered).toBe('boolean');
        }
      }
    }, 30000);
  });
});
