import { promises as dnsPromises } from 'node:dns';
import net, { Socket } from 'node:net';
import expect from 'expect';
import sinon, { type SinonSandbox } from 'sinon';
import { clearAllCaches, VerificationErrorCode, verifyEmailDetailed } from '../src';

describe('Detailed Email Verification', () => {
  let sandbox: SinonSandbox;

  beforeEach(() => {
    sandbox = sinon.createSandbox();
    clearAllCaches();
  });

  afterEach(() => {
    sandbox.restore();
    clearAllCaches();
  });

  describe('#verifyEmailDetailed', () => {
    it('should return detailed format validation error', async () => {
      const result = await verifyEmailDetailed({
        emailAddress: 'invalid-email',
        verifyMx: true,
        verifySmtp: false,
      });

      expect(result.valid).toBe(false);
      expect(result.format.valid).toBe(false);
      expect(result.format.error).toBe(VerificationErrorCode.INVALID_FORMAT);
      expect(result.metadata?.verificationTime).toBeGreaterThanOrEqual(0);
    });

    it('should detect disposable emails', async () => {
      sandbox.stub(dnsPromises, 'resolveMx').resolves([{ exchange: 'mx.yopmail.com', priority: 10 }]);

      const result = await verifyEmailDetailed({
        emailAddress: 'test@yopmail.com',
        checkDisposable: true,
        verifyMx: true,
      });

      expect(result.valid).toBe(false);
      expect(result.disposable).toBe(true);
      expect(result.domain.error).toBe(VerificationErrorCode.DISPOSABLE_EMAIL);
    });

    it('should detect free email providers', async () => {
      sandbox.stub(dnsPromises, 'resolveMx').resolves([{ exchange: 'gmail-smtp-in.l.google.com', priority: 10 }]);

      const result = await verifyEmailDetailed({
        emailAddress: 'test@gmail.com',
        checkFree: true,
        verifyMx: true,
      });

      expect(result.freeProvider).toBe(true);
      expect(result.format.valid).toBe(true);
    });

    it('should provide MX records in result', async () => {
      const mxRecords = [
        { exchange: 'mx1.example.com', priority: 10 },
        { exchange: 'mx2.example.com', priority: 20 },
      ];
      sandbox.stub(dnsPromises, 'resolveMx').resolves(mxRecords);

      const result = await verifyEmailDetailed({
        emailAddress: 'test@example.com',
        verifyMx: true,
      });

      expect(result.domain.mxRecords).toEqual(['mx1.example.com', 'mx2.example.com']);
      expect(result.domain.valid).toBe(true);
    });

    it('should handle no MX records', async () => {
      sandbox.stub(dnsPromises, 'resolveMx').resolves([]);

      const result = await verifyEmailDetailed({
        emailAddress: 'test@nomx.com',
        verifyMx: true,
      });

      expect(result.domain.valid).toBe(false);
      expect(result.domain.error).toBe(VerificationErrorCode.NO_MX_RECORDS);
      expect(result.domain.mxRecords).toEqual([]);
    });

    it('should handle SMTP verification failure', async () => {
      sandbox.stub(dnsPromises, 'resolveMx').resolves([{ exchange: 'mx1.example.com', priority: 10 }]);

      const socket = new Socket({});
      sandbox.stub(socket, 'write').callsFake(function (data) {
        if (!data.toString().includes('QUIT')) {
          this.emit('data', '550 User not found');
        }
        return true;
      });
      sandbox.stub(net, 'connect').returns(socket);

      setTimeout(() => socket.emit('data', '220 Welcome'), 10);

      const result = await verifyEmailDetailed({
        emailAddress: 'test@example.com',
        verifyMx: true,
        verifySmtp: true,
      });

      expect(result.smtp.valid).toBe(false);
      expect(result.smtp.error).toBe(VerificationErrorCode.MAILBOX_NOT_FOUND);
    });

    it('should handle SMTP connection failure', async () => {
      sandbox.stub(dnsPromises, 'resolveMx').resolves([{ exchange: 'mx1.example.com', priority: 10 }]);

      const socket = {
        on: (event: string, callback: (error?: Error) => void) => {
          if (event === 'error') {
            setTimeout(() => callback(new Error('Connection failed')), 10);
          }
        },
        write: () => true,
        end: () => {},
        destroyed: false,
        removeAllListeners: () => {},
        destroy: () => {},
      };
      sandbox.stub(net, 'connect').returns(socket as unknown as Socket);

      const result = await verifyEmailDetailed({
        emailAddress: 'test@example.com',
        verifyMx: true,
        verifySmtp: true,
      });

      expect(result.smtp.valid).toBe(null);
      expect(result.smtp.error).toBe(VerificationErrorCode.SMTP_CONNECTION_FAILED);
    });

    it('should indicate when results are cached', async () => {
      sandbox.stub(dnsPromises, 'resolveMx').resolves([{ exchange: 'mx1.example.com', priority: 10 }]);

      const socket = new Socket({});
      sandbox.stub(socket, 'write').callsFake(function (data) {
        if (!data.toString().includes('QUIT')) {
          this.emit('data', '250 OK');
        }
        return true;
      });
      sandbox.stub(net, 'connect').returns(socket);

      setTimeout(() => socket.emit('data', '220 Welcome'), 10);

      // First call - not cached
      const result1 = await verifyEmailDetailed({
        emailAddress: 'test@example.com',
        verifyMx: true,
        verifySmtp: true,
      });
      expect(result1.metadata?.cached).toBe(false);

      // Second call - should be cached
      const result2 = await verifyEmailDetailed({
        emailAddress: 'test@example.com',
        verifyMx: true,
        verifySmtp: true,
      });
      expect(result2.metadata?.cached).toBe(true);
    });

    it('should validate email length constraints', async () => {
      const longLocal = 'a'.repeat(65);
      const result1 = await verifyEmailDetailed({
        emailAddress: `${longLocal}@example.com`,
      });
      expect(result1.format.valid).toBe(false);

      const longDomain = 'a'.repeat(254);
      const result2 = await verifyEmailDetailed({
        emailAddress: `test@${longDomain}.com`,
      });
      expect(result2.format.valid).toBe(false);
    });

    it('should detect invalid patterns', async () => {
      const invalidPatterns = [
        'test..test@example.com',
        '.test@example.com',
        'test.@example.com',
        'test@.example.com',
        'test@example.com.',
      ];

      for (const email of invalidPatterns) {
        const result = await verifyEmailDetailed({
          emailAddress: email,
        });
        expect(result.format.valid).toBe(false);
        expect(result.format.error).toBe(VerificationErrorCode.INVALID_FORMAT);
      }
    });
  });
});
