import { promises as dnsPromises, type MxRecord } from 'node:dns';
import net, { Socket } from 'node:net';
import expect from 'expect';
import sinon, { type SinonSandbox, type SinonStub } from 'sinon';
import { clearAllCaches, verifyEmail } from '../src';
import { resolveMxRecords } from '../src/dns';

type SelfMockType = {
  resolveMxStub?: SinonStub<[string], Promise<MxRecord[]>>;
  connectStub?: SinonStub<[path: string, connectionListener?: () => void], Socket>;
  socket?: Socket;
  sandbox?: SinonSandbox;
};

function stubResolveMx(self: SelfMockType, domain = 'foo.com') {
  self.resolveMxStub = self.sandbox.stub(dnsPromises, 'resolveMx').callsFake(async (_hostname: string) => [
    { exchange: `mx1.${domain}`, priority: 30 },
    { exchange: `mx2.${domain}`, priority: 10 },
    { exchange: `mx3.${domain}`, priority: 20 },
  ]);
}

function stubSocket(self: SelfMockType) {
  self.socket = new Socket({});
  self.sandbox.stub(self.socket, 'write').callsFake(function (data) {
    if (!data.toString().includes('QUIT')) this.emit('data', '250 Foo');
    return true;
  });

  self.connectStub = self.sandbox.stub(net, 'connect').returns(self.socket);
}

const self: SelfMockType = {};

describe('verifyEmailMockTest', () => {
  beforeEach(() => {
    self.sandbox = sinon.createSandbox();
    clearAllCaches();
  });

  afterEach(() => {
    self.sandbox.restore();
    clearAllCaches();
  });

  describe('#verify', () => {
    beforeEach(async () => {
      stubResolveMx(self);
      stubSocket(self);
    });

    it('should perform all tests', async () => {
      setTimeout(() => self.socket.write('250 Foo'), 10);
      const { validFormat, validMx, validSmtp } = await verifyEmail({
        emailAddress: 'foo@bar.com',
        verifyMx: true,
        verifySmtp: true,
      });
      sinon.assert.called(self.resolveMxStub);
      sinon.assert.called(self.connectStub);
      expect(validFormat).toBe(true);
      expect(validMx).toBe(true);
      expect(validSmtp).toBe(true);
    });

    it('returns immediately if email is malformed invalid', async () => {
      const { validFormat, validMx, validSmtp } = await verifyEmail({ emailAddress: 'bar.com' });
      sinon.assert.notCalled(self.resolveMxStub);
      sinon.assert.notCalled(self.connectStub);
      expect(validFormat).toBe(false);
      expect(validMx).toBe(null);
      expect(validSmtp).toBe(null);
    });

    describe('mailbox verification', () => {
      it('returns true when mailbox exists', async () => {
        setTimeout(() => self.socket.write('250 Foo'), 10);
        const { validSmtp } = await verifyEmail({ emailAddress: 'bar@foo.com', verifySmtp: true, verifyMx: true });
        expect(validSmtp).toBe(true);
      });

      it('returns null if mailbox is yahoo', async () => {
        self.resolveMxStub.restore();
        stubResolveMx(self, 'yahoo.com');

        setTimeout(() => self.socket.write('250 Foo'), 10);

        const { validSmtp } = await verifyEmail({ emailAddress: 'bar@yahoo.com', verifySmtp: true, verifyMx: true });

        expect(validSmtp).toBe(true);
      });

      it('returns false on over quota check', async () => {
        const msg = '452-4.2.2 The email account that you tried to reach is over quota. Please direct';
        const socket = new Socket({});

        self.sandbox.stub(socket, 'write').callsFake(function (data) {
          if (!data.toString().includes('QUIT')) this.emit('data', msg);
          return true;
        });

        self.connectStub.returns(socket);

        setTimeout(() => {
          socket.write('250 Foo');
        }, 10);

        const { validMx, validSmtp, validFormat } = await verifyEmail({
          emailAddress: 'bar@foo.com',
          verifySmtp: true,
          verifyMx: true,
        });

        expect(validSmtp).toBe(false);
        expect(validFormat).toBe(true);
        expect(validMx).toBe(true);
      });

      it('should return null on socket error', async () => {
        const socket = {
          on: (event: string, callback: (arg0: Error) => any) => {
            if (event === 'error') return callback(new Error());
          },
          write: () => {},
          end: () => {},
          destroyed: false,
          removeAllListeners: () => {},
          destroy: () => {},
        };

        self.connectStub = self.connectStub.returns(socket as unknown as Socket);

        const { validSmtp, validFormat, validMx } = await verifyEmail({
          emailAddress: 'bar@foo.com',
          verifySmtp: true,
          verifyMx: true,
        });
        expect(validSmtp).toBe(null);
        expect(validMx).toBe(true);
        expect(validFormat).toBe(true);
      });

      it('dodges multiline spam detecting greetings', async () => {
        const socket = new Socket({});
        let greeted = false;

        self.sandbox.stub(socket, 'write').callsFake(function (data) {
          if (!data.toString().includes('QUIT')) {
            if (!greeted) return this.emit('data', '550 5.5.1 Protocol Error');
            this.emit('data', '250 Foo');
          }
        });

        self.connectStub.returns(socket);

        setTimeout(() => {
          // the "-" indicates a multi line greeting
          socket.emit('data', '220-hohoho');

          // wait a bit and send the rest
          setTimeout(() => {
            greeted = true;
            socket.emit('data', '220 ho ho ho');
          }, 1000);
        }, 10);

        const { validSmtp } = await verifyEmail({ emailAddress: 'bar@foo.com', verifySmtp: true, verifyMx: true });
        expect(validSmtp).toBe(true);
      });

      it('regression: does not write infinitely if there is a socket error', async () => {
        const writeSpy = self.sandbox.spy();
        const endSpy = self.sandbox.spy();

        const socket = {
          on: (event: string, callback: (arg0: Error) => void) => {
            if (event === 'error') {
              return setTimeout(() => {
                socket.destroyed = true;
                callback(new Error());
              }, 100);
            }
          },
          write: writeSpy,
          end: endSpy,
          destroyed: false,
          removeAllListeners: () => {},
          destroy: () => {
            socket.destroyed = true;
          },
        };

        self.connectStub = self.connectStub.returns(socket as unknown as Socket);

        await verifyEmail({ emailAddress: 'bar@foo.com', verifySmtp: true, verifyMx: true });
        sinon.assert.notCalled(writeSpy);
        sinon.assert.notCalled(endSpy);
      });

      it('should return null on unknown SMTP errors', async () => {
        const socket = new Socket({});

        self.sandbox.stub(socket, 'write').callsFake(function (data) {
          if (!data.toString().includes('QUIT')) this.emit('data', '500 Foo');
          return true;
        });

        self.connectStub.returns(socket);

        setTimeout(() => socket.emit('data', '220 Welcome'), 10);

        const { validSmtp } = await verifyEmail({ emailAddress: 'bar@foo.com', verifySmtp: true, verifyMx: true });
        expect(validSmtp).toBe(null);
      });

      it('returns false on bad mailbox errors', async () => {
        const socket = new Socket({});

        self.sandbox.stub(socket, 'write').callsFake(function (data) {
          if (!data.toString().includes('QUIT')) this.emit('data', '550 Foo');
          return true;
        });

        self.connectStub.returns(socket);

        setTimeout(() => socket.emit('data', '220 Welcome'), 10);

        const { validSmtp } = await verifyEmail({ emailAddress: 'bar@foo.com', verifySmtp: true, verifyMx: true });
        expect(validSmtp).toBe(false);
      });

      it('returns null on spam errors', async () => {
        const msg = '550-"JunkMail rejected - ec2-54-74-157-229.eu-west-1.compute.amazonaws.com';
        const socket = new Socket({});

        self.sandbox.stub(socket, 'write').callsFake(function (data) {
          if (!data.toString().includes('QUIT')) this.emit('data', msg);
          return true;
        });

        self.connectStub.returns(socket);

        setTimeout(() => socket.emit('data', '220 Welcome'), 10);

        const { validSmtp } = await verifyEmail({ emailAddress: 'bar@foo.com', verifySmtp: true, verifyMx: true });
        expect(validSmtp).toBe(null);
      });

      it('returns null on spam errors-#2', async () => {
        const msg =
          '553 5.3.0 flpd575 DNSBL:RBL 521< 54.74.114.115 >_is_blocked.For assistance forward this email to abuse_rbl@abuse-att.net';
        const socket = new Socket({});

        self.sandbox.stub(socket, 'write').callsFake(function (data) {
          if (!data.toString().includes('QUIT')) this.emit('data', msg);
          return true;
        });

        self.connectStub.returns(socket);

        setTimeout(() => socket.emit('data', '220 Welcome'), 10);

        const { validSmtp } = await verifyEmail({ emailAddress: 'bar@foo.com', verifySmtp: true, verifyMx: true });
        expect(validSmtp).toBe(null);
      });
    });

    describe('given no mx records', () => {
      beforeEach(() => {
        self.resolveMxStub.resolves([]);
      });

      it('should return false on the domain verification', async () => {
        const { validMx, validSmtp } = await verifyEmail({ emailAddress: 'foo@bar.com', verifyMx: true });
        expect(validMx).toBe(false);
        expect(validSmtp).toBe(null);
      });
    });

    describe('given a verifyMailbox option false', () => {
      it('should not check via socket', async () => {
        const { validMx, validSmtp } = await verifyEmail({
          emailAddress: 'foo@bar.com',
          verifySmtp: false,
          verifyMx: true,
        });
        sinon.assert.called(self.resolveMxStub);
        sinon.assert.notCalled(self.connectStub);
        expect(validSmtp).toBe(null);
        expect(validMx).toBe(true);
      });
    });

    describe('given a verifyDomain option false', () => {
      it('should not check via socket', async () => {
        const { validMx, validSmtp } = await verifyEmail({
          emailAddress: 'foo@bar.com',
          verifyMx: false,
          verifySmtp: false,
        });
        sinon.assert.notCalled(self.resolveMxStub);
        sinon.assert.notCalled(self.connectStub);
        expect(validMx).toBe(null);
        expect(validSmtp).toBe(null);
      });
    });
    it('should return a list of mx records, ordered by priority', async () => {
      const records = await resolveMxRecords('bar@foo.com');
      expect(records).toEqual(['mx2.foo.com', 'mx3.foo.com', 'mx1.foo.com']);
    });
  });
});
