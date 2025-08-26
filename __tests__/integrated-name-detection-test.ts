import expect from 'expect';
import { verifyEmail, verifyEmailBatch, verifyEmailDetailed } from '../src';
import type { NameDetectionMethod } from '../src/types';

describe('Integrated Name Detection', () => {
  describe('verifyEmail with name detection', () => {
    it('should include detected name when detectName is true', async () => {
      const result = await verifyEmail({
        emailAddress: 'john.doe@example.com',
        detectName: true,
      });

      expect(result.validFormat).toBe(true);
      expect(result.detectedName).toBeTruthy();
      expect(result.detectedName?.firstName).toBe('John');
      expect(result.detectedName?.lastName).toBe('Doe');
      expect(result.detectedName?.confidence).toBeGreaterThanOrEqual(0.9);
    });

    it('should not include detected name when detectName is false', async () => {
      const result = await verifyEmail({
        emailAddress: 'john.doe@example.com',
        detectName: false,
      });

      expect(result.validFormat).toBe(true);
      expect(result.detectedName).toBeUndefined();
    });

    it('should not include detected name by default', async () => {
      const result = await verifyEmail({
        emailAddress: 'john.doe@example.com',
      });

      expect(result.validFormat).toBe(true);
      expect(result.detectedName).toBeUndefined();
    });

    it('should use custom name detection method when provided', async () => {
      const customMethod: NameDetectionMethod = (_email: string) => {
        return {
          firstName: 'Custom',
          lastName: 'Name',
          confidence: 1.0,
        };
      };

      const result = await verifyEmail({
        emailAddress: 'test@example.com',
        detectName: true,
        nameDetectionMethod: customMethod,
      });

      expect(result.validFormat).toBe(true);
      expect(result.detectedName).toBeTruthy();
      expect(result.detectedName?.firstName).toBe('Custom');
      expect(result.detectedName?.lastName).toBe('Name');
      expect(result.detectedName?.confidence).toBe(1.0);
    });

    it('should handle emails with no detectable name', async () => {
      const result = await verifyEmail({
        emailAddress: 'admin@example.com',
        detectName: true,
      });

      expect(result.validFormat).toBe(true);
      expect(result.detectedName).toBeNull();
    });
  });

  describe('verifyEmailDetailed with name detection', () => {
    it('should include detected name when detectName is true', async () => {
      const result = await verifyEmailDetailed({
        emailAddress: 'jane.smith@example.com',
        detectName: true,
        verifyMx: false,
        verifySmtp: false,
      });

      expect(result.format.valid).toBe(true);
      expect(result.detectedName).toBeTruthy();
      expect(result.detectedName?.firstName).toBe('Jane');
      expect(result.detectedName?.lastName).toBe('Smith');
      expect(result.detectedName?.confidence).toBeGreaterThanOrEqual(0.8);
    });

    it('should not include detected name when detectName is false', async () => {
      const result = await verifyEmailDetailed({
        emailAddress: 'jane.smith@example.com',
        detectName: false,
        verifyMx: false,
        verifySmtp: false,
      });

      expect(result.format.valid).toBe(true);
      expect(result.detectedName).toBeUndefined();
    });

    it('should not detect name for invalid email format', async () => {
      const result = await verifyEmailDetailed({
        emailAddress: 'not-an-email',
        detectName: true,
        verifyMx: false,
        verifySmtp: false,
      });

      expect(result.format.valid).toBe(false);
      expect(result.detectedName).toBeUndefined(); // No detection attempted for invalid emails
    });

    it('should detect name for disposable emails', async () => {
      const result = await verifyEmailDetailed({
        emailAddress: 'john.doe@yopmail.com',
        detectName: true,
        verifyMx: false,
        verifySmtp: false,
        checkDisposable: true,
      });

      expect(result.format.valid).toBe(true);
      expect(result.disposable).toBe(true);
      expect(result.detectedName).toBeTruthy();
      expect(result.detectedName?.firstName).toBe('John');
      expect(result.detectedName?.lastName).toBe('Doe');
    });
  });

  describe('verifyEmailBatch with name detection', () => {
    it('should detect names for multiple emails', async () => {
      const emails = ['john.doe@example.com', 'jane_smith@example.com', 'admin@example.com', 'bob@example.com'];

      const result = await verifyEmailBatch({
        emailAddresses: emails,
        detectName: true,
        verifyMx: false,
        verifySmtp: false,
        detailed: false,
      });

      expect(result.summary.total).toBe(4);

      const johnResult = result.results.get('john.doe@example.com');
      expect(johnResult).toBeTruthy();
      expect('detectedName' in johnResult!).toBe(true);
      expect(johnResult?.detectedName?.firstName).toBe('John');
      expect(johnResult?.detectedName?.lastName).toBe('Doe');

      const janeResult = result.results.get('jane_smith@example.com');
      expect(janeResult).toBeTruthy();
      expect(janeResult?.detectedName?.firstName).toBe('Jane');
      expect(janeResult?.detectedName?.lastName).toBe('Smith');

      const adminResult = result.results.get('admin@example.com');
      expect(adminResult).toBeTruthy();
      expect(adminResult?.detectedName).toBeNull();

      const bobResult = result.results.get('bob@example.com');
      expect(bobResult).toBeTruthy();
      expect(bobResult?.detectedName?.firstName).toBe('Bob');
      expect(bobResult?.detectedName?.lastName).toBeUndefined();
    });

    it('should detect names in detailed batch mode', async () => {
      const emails = ['alice.wonderland@example.com', 'support@example.com'];

      const result = await verifyEmailBatch({
        emailAddresses: emails,
        detectName: true,
        verifyMx: false,
        verifySmtp: false,
        detailed: true,
        checkDisposable: false,
        checkFree: false,
      });

      expect(result.summary.total).toBe(2);

      const aliceResult = result.results.get('alice.wonderland@example.com');
      expect(aliceResult).toBeTruthy();
      expect('detectedName' in aliceResult!).toBe(true);
      expect(aliceResult?.detectedName?.firstName).toBe('Alice');
      expect(aliceResult?.detectedName?.lastName).toBe('Wonderland');

      const supportResult = result.results.get('support@example.com');
      expect(supportResult).toBeTruthy();
      expect(supportResult?.detectedName).toBeNull();
    });

    it('should use custom detection method in batch', async () => {
      const customMethod: NameDetectionMethod = (email: string) => {
        if (email.includes('test')) {
          return {
            firstName: 'Test',
            lastName: 'User',
            confidence: 0.99,
          };
        }
        return null;
      };

      const emails = ['test1@example.com', 'test2@example.com', 'regular@example.com'];

      const result = await verifyEmailBatch({
        emailAddresses: emails,
        detectName: true,
        nameDetectionMethod: customMethod,
        verifyMx: false,
        verifySmtp: false,
        detailed: false,
      });

      const test1Result = result.results.get('test1@example.com');
      expect(test1Result?.detectedName?.firstName).toBe('Test');
      expect(test1Result?.detectedName?.lastName).toBe('User');

      const test2Result = result.results.get('test2@example.com');
      expect(test2Result?.detectedName?.firstName).toBe('Test');
      expect(test2Result?.detectedName?.lastName).toBe('User');

      const regularResult = result.results.get('regular@example.com');
      expect(regularResult?.detectedName).toBeNull();
    });
  });
});
