import { extractAddressParts, isEmail, resolveMxRecords, verifyEmail } from '../src';

import should from 'should';
import sinon, { SinonSandbox, SinonStub } from 'sinon';
import { MxRecord, promises as dnsPromises } from 'dns';
import net, { Socket } from 'net';

type SelfMockType = {
  resolveMxStub?: SinonStub<[string], Promise<MxRecord[]>>;
  connectStub?: SinonStub<[path: string, connectionListener?: () => void], Socket>;
  socket?: Socket;
  sandbox?: SinonSandbox;
};

function stubResolveMx(self: SelfMockType, domain = 'foo.com') {
  self.resolveMxStub = self.sandbox.stub(dnsPromises, 'resolveMx').callsFake(async function (hostname: string) {
    return [
      { exchange: `mx1.${domain}`, priority: 30 },
      { exchange: `mx2.${domain}`, priority: 10 },
      { exchange: `mx3.${domain}`, priority: 20 },
    ];
  });
}

function stubSocket(self: SelfMockType) {
  self.socket = new net.Socket({});
  self.sandbox.stub(self.socket, 'write').callsFake(function (data) {
    if (!data.toString().includes('QUIT')) this.emit('data', '250 Foo');
    return true;
  });

  self.connectStub = self.sandbox.stub(net, 'connect').returns(self.socket);
}

const self: SelfMockType = {};

describe('src/index', async () => {
  beforeEach(() => {
    self.sandbox = sinon.createSandbox();
  });

  afterEach(() => self.sandbox.restore());

  describe('#verify', async () => {
    beforeEach(async () => {
      stubResolveMx(self);
      stubSocket(self);
    });

    it('should perform all tests', async () => {
      setTimeout(() => self.socket.write('250 Foo'), 10);
      const { wellFormed, validDomain, validMailbox } = await verifyEmail({ emailAddress: 'foo@bar.com', verifyDomain: true, verifyMailbox: true, debug: false });
      sinon.assert.called(self.resolveMxStub);
      sinon.assert.called(self.connectStub);
      should(wellFormed).equal(true);
      should(validDomain).equal(true);
      should(validMailbox).equal(true);
    });

    it('returns immediately if email is malformed invalid', async () => {
      const { wellFormed, validDomain, validMailbox } = await verifyEmail({ emailAddress: 'bar.com' });
      sinon.assert.notCalled(self.resolveMxStub);
      sinon.assert.notCalled(self.connectStub);
      should(wellFormed).equal(false);
      should(validDomain).equal(null);
      should(validMailbox).equal(null);
    });

    describe('mailbox verification', async () => {
      it('returns true when maibox exists', async () => {
        setTimeout(() => self.socket.write('250 Foo'), 10);
        const { validMailbox } = await verifyEmail({ emailAddress: 'bar@foo.com', verifyMailbox: true, verifyDomain: true, debug: false });
        should(validMailbox).equal(true);
      });

      it('returns null if mailbox is yahoo', async () => {
        self.resolveMxStub.restore();
        stubResolveMx(self, 'yahoo.com');

        setTimeout(() => self.socket.write('250 Foo'), 10);

        const { validMailbox } = await verifyEmail({ emailAddress: 'bar@yahoo.com', verifyMailbox: true, verifyDomain: true, debug: false });

        should(validMailbox).equal(null);
      });

      it('returns false on over quota check', async () => {
        const msg = '452-4.2.2 The email account that you tried to reach is over quota. Please direct';
        const socket = new net.Socket({});

        self.sandbox.stub(socket, 'write').callsFake(function (data) {
          if (!data.toString().includes('QUIT')) this.emit('data', msg);
          return true;
        });

        self.connectStub.returns(socket);

        setTimeout(() => socket.write('250 Foo'), 10);

        const { validDomain, validMailbox } = await verifyEmail({ emailAddress: 'bar@foo.com', verifyMailbox: true, verifyDomain: true, debug: false });

        should(validMailbox).equal(false);
      });

      it('should return null on socket error', async () => {
        const socket = {
          on: (event: string, callback: (arg0: Error) => any) => {
            if (event === 'error') return callback(new Error());
          },
          write: () => {},
          end: () => {},
        };

        self.connectStub = self.connectStub.returns(socket as any);

        const { validMailbox } = await verifyEmail({ emailAddress: 'bar@foo.com' });
        should(validMailbox).equal(null);
      });

      it('dodges multiline spam detecting greetings', async () => {
        const socket = new net.Socket({});
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

        const { validMailbox } = await verifyEmail({ emailAddress: 'bar@foo.com', verifyMailbox: true, verifyDomain: true, debug: false });
        should(validMailbox).equal(true);
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
        };

        self.connectStub = self.connectStub.returns(socket as any);

        await verifyEmail({ emailAddress: 'bar@foo.com' });
        sinon.assert.notCalled(writeSpy);
        sinon.assert.notCalled(endSpy);
      });

      it('should return null on unknown SMTP errors', async () => {
        const socket = new net.Socket({});

        self.sandbox.stub(socket, 'write').callsFake(function (data) {
          if (!data.toString().includes('QUIT')) this.emit('data', '500 Foo');
          return true;
        });

        self.connectStub.returns(socket);

        setTimeout(() => socket.write('250 Foo'), 300);

        const { validMailbox } = await verifyEmail({ emailAddress: 'bar@foo.com' });
        should(validMailbox).equal(null);
      });

      it('returns false on bad mailbox errors', async () => {
        const socket = new net.Socket({});

        self.sandbox.stub(socket, 'write').callsFake(function (data) {
          if (!data.toString().includes('QUIT')) this.emit('data', '550 Foo');
          return true;
        });

        self.connectStub.returns(socket);

        setTimeout(() => socket.write('250 Foo'), 10);

        const { validMailbox } = await verifyEmail({ emailAddress: 'bar@foo.com', verifyMailbox: true, verifyDomain: true, debug: false });
        should(validMailbox).equal(false);
      });

      it('returns null on spam errors', async () => {
        const msg = '550-"JunkMail rejected - ec2-54-74-157-229.eu-west-1.compute.amazonaws.com';
        const socket = new net.Socket({});

        self.sandbox.stub(socket, 'write').callsFake(function (data) {
          if (!data.toString().includes('QUIT')) this.emit('data', msg);
          return true;
        });

        self.connectStub.returns(socket);

        setTimeout(() => socket.write('250 Foo'), 600);

        const { validMailbox } = await verifyEmail({ emailAddress: 'bar@foo.com' });
        should(validMailbox).equal(null);
      });

      it('returns null on spam errors-#2', async () => {
        const msg = '553 5.3.0 flpd575 DNSBL:RBL 521< 54.74.114.115 >_is_blocked.For assistance forward this email to abuse_rbl@abuse-att.net';
        const socket = new net.Socket({});

        self.sandbox.stub(socket, 'write').callsFake(function (data) {
          if (!data.toString().includes('QUIT')) this.emit('data', msg);
          return true;
        });

        self.connectStub.returns(socket);

        setTimeout(() => socket.write('250 Foo'), 800);

        const { validMailbox } = await verifyEmail({ emailAddress: 'bar@foo.com' });
        should(validMailbox).equal(null);
      });
    });

    context('given no mx records', async () => {
      beforeEach(() => {
        self.resolveMxStub.yields(null, []);
      });

      it('should return false on the domain verification', async () => {
        const { validDomain, validMailbox } = await verifyEmail({ emailAddress: 'foo@bar.com' });
        should(validDomain).equal(false);
        should(validMailbox).equal(null);
      });
    });

    context('given a verifyMailbox option false', async () => {
      it('should not check via socket', async () => {
        const { validDomain, validMailbox } = await verifyEmail({ emailAddress: 'foo@bar.com', verifyMailbox: false });
        sinon.assert.called(self.resolveMxStub);
        sinon.assert.notCalled(self.connectStub);
        should(validMailbox).equal(null);
      });
    });

    context('given a verifyDomain option false', async () => {
      it('should not check via socket', async () => {
        const { validDomain, validMailbox } = await verifyEmail({
          emailAddress: 'foo@bar.com',
          verifyDomain: false,
          verifyMailbox: false,
        });
        sinon.assert.notCalled(self.resolveMxStub);
        sinon.assert.notCalled(self.connectStub);
        should(validDomain).equal(null);
        should(validMailbox).equal(null);
      });
    });
  });

  describe('resolveMxRecords', async () => {
    beforeEach(() => stubResolveMx(self));

    it('should return a list of mx records, ordered by priority', async () => {
      const records = await resolveMxRecords('bar@foo.com');
      should.deepEqual(records, ['mx2.foo.com', 'mx3.foo.com', 'mx1.foo.com']);
    });
  });

  describe('isEmail', async () => {
    it('should validate a correct address', async () => {
      isEmail('foo@bar.com').should.equal(true);
      isEmail('email@gmail.com').should.equal(true);
      isEmail('email+plug@gmail.com').should.equal(true);
      isEmail('email.name+plug@gmail.com').should.equal(true);
      isEmail('email.name+plug.moea@gmail.com').should.equal(true); // todo this is invalid
    });

    it('should return false for an invalid address', async () => {
      isEmail('bar.com').should.equal(false);
      isEmail('email.+plug@gmail.com').should.equal(false);
    });
  });

  describe('extractAddressParts', async () => {
    it('should local + domain parts of an email address', async () => {
      extractAddressParts('foo@bar.com').should.eql(['foo', 'bar.com']);
    });

    it('should throw an error if the email is not valid', async () => {
      (() => extractAddressParts('foo')).should.throw(Error);
    });
  });
});
