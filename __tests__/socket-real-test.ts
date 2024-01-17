import expect from 'expect';
import { verifyEmail } from '../src';

describe('verifyEmailRealTest', () => {
  it('should success on real email gmail', async () => {
    const { validFormat, validMx, validSmtp } = await verifyEmail({ emailAddress: 'foo@google.com', verifyMx: true, verifySmtp: true });
    expect(validFormat).toBe(true);
    expect(validMx).toBe(true);
    expect(validSmtp).toBe(true);
  });

  it('should success on invalid email hello.com', async () => {
    const { validFormat, validMx, validSmtp } = await verifyEmail({ emailAddress: 'foohxxello2s8871@hello.com', verifyMx: true, verifySmtp: true });
    expect(validFormat).toBe(true);
    expect(validMx).toBe(true);
    expect(validSmtp).toBe(false);
  });

  it('should fail on invalid domain', async () => {
    const { validFormat, validMx, validSmtp } = await verifyEmail({ emailAddress: 'email@kk.com', verifyMx: true, verifySmtp: true });
    expect(validFormat).toBe(true);
    expect(validMx).toBe(false);
    expect(validSmtp).toBe(false);
  });

  it('returns immediately if email is malformed invalid', async () => {
    const { validFormat, validMx, validSmtp } = await verifyEmail({ emailAddress: 'bar.com' });
    expect(validFormat).toBe(false);
    expect(validMx).toBe(null);
    expect(validSmtp).toBe(null);
  });
  it('should use custom port with mapped domain: ova.ca', async () => {
    const { validFormat, validMx, validSmtp } = await verifyEmail({ emailAddress: 'support@ovh.com', debug: true, verifySmtp: true, verifyMx: true });
    expect(validFormat).toBe(true);
    expect(validMx).toBe(true);
    expect(validSmtp).toBe(null);
  });
});
