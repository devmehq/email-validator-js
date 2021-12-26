import { verifyEmail } from '../src';

import should from 'should';
import sinon, { SinonSandbox, SinonStub } from 'sinon';
import { MxRecord, promises as dnsPromises } from 'dns';
import net, { Socket } from 'net';
import { resolveMxRecords } from '../src/dns';

describe('verifyEmailRealTest', async () => {
  it('should success on real email gmail', async () => {
    const { validFormat, validMx, validSmtp } = await verifyEmail({ emailAddress: 'foo@google.com', verifyMx: true, verifySmtp: true });
    should(validFormat).equal(true);
    should(validMx).equal(true);
    should(validSmtp).equal(true);
  });

  it('should success on invalid email hello.com', async () => {
    const { validFormat, validMx, validSmtp } = await verifyEmail({ emailAddress: 'foohxxello2s8871@hello.com', verifyMx: true, verifySmtp: true });
    should(validFormat).equal(true);
    should(validMx).equal(true);
    should(validSmtp).equal(false);
  });

  it('should fail on invalid domain', async () => {
    const { validFormat, validMx, validSmtp } = await verifyEmail({ emailAddress: 'email@kk.com', verifyMx: true, verifySmtp: true });
    should(validFormat).equal(true);
    should(validMx).equal(false);
    should(validSmtp).equal(false);
  });

  it('returns immediately if email is malformed invalid', async () => {
    const { validFormat, validMx, validSmtp } = await verifyEmail({ emailAddress: 'bar.com' });
    should(validFormat).equal(false);
    should(validMx).equal(null);
    should(validSmtp).equal(null);
  });
});
