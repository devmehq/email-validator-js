import { extractAddressParts, isEmail, resolveMxRecords, verifyMailBox } from '../src';

import chai from 'chai';
import sinon, { SinonSandbox, SinonStub } from 'sinon';
import dns, { MxRecord } from 'dns';
import net, { IpcNetConnectOpts, Socket, TcpNetConnectOpts } from 'net';

const dnsPromises = dns.promises;

chai.should();
const should = chai.expect;

describe('lib/index', () => {
  const self: {
    resolveMxStub?: SinonStub<[string], Promise<MxRecord[]>>;
    connectStub?: SinonStub<[TcpNetConnectOpts | IpcNetConnectOpts, () => void], Socket>;
    socket?: Socket;
    sandbox?: SinonSandbox;
  } = {};

  beforeEach(() => {
    self.sandbox = sinon.createSandbox();
  });

  afterEach(() => self.sandbox.restore());

  const stubResolveMx = (domain = 'foo.com') => {
    self.resolveMxStub = self.sandbox.stub(dnsPromises, 'resolveMx').yields(null, [
      { exchange: `mx1.${domain}`, priority: 30 },
      { exchange: `mx2.${domain}`, priority: 10 },
      { exchange: `mx3.${domain}`, priority: 20 },
    ]);
  };

  const stubSocket = () => {
    self.socket = new net.Socket({});

    self.sandbox.stub(self.socket, 'write').callsFake(function (data) {
      if (!data.toString().includes('QUIT')) this.emit('data', '250 Foo');
    });

    self.connectStub = self.sandbox.stub(net, 'connect').returns(self.socket);
  };

  describe('#verify', () => {
    beforeEach(() => {
      stubResolveMx();
      stubSocket();
    });

    it('should perform all tests', () => {
      setTimeout(() => self.socket.write('250 Foo'), 10);

      return verifyMailBox({ emailAddress: 'foo@bar.com' }).then(({ wellFormed, validDomain, validMailbox }) => {
        sinon.assert.called(self.resolveMxStub);
        sinon.assert.called(self.connectStub);
        should(wellFormed).equal(true);
        should(validDomain).equal(true);
        should(validMailbox).equal(true);
      });
    });

    it('returns immediately if email is malformed invalid', () => {
      return verifyMailBox({ emailAddress: 'bar.com' }).then(({ wellFormed, validDomain, validMailbox }) => {
        sinon.assert.notCalled(self.resolveMxStub);
        sinon.assert.notCalled(self.connectStub);
        should(wellFormed).equal(false);
        should(validDomain).equal(null);
        should(validMailbox).equal(null);
      });
    });

    describe('mailbox verification', () => {
      it('returns true when maibox exists', () => {
        setTimeout(() => self.socket.write('250 Foo'), 10);
        return verifyMailBox({ emailAddress: 'bar@foo.com' }).then(({ validMailbox }) => should(validMailbox).equal(true));
      });

      it('returns null if mailbox is yahoo', () => {
        self.resolveMxStub.restore();
        stubResolveMx('yahoo.com');

        setTimeout(() => self.socket.write('250 Foo'), 10);

        return verifyMailBox({ emailAddress: 'bar@yahoo.com' }).then(({ validMailbox }) => should(validMailbox).equal(null));
      });

      it('returns false on over quota check', () => {
        const msg = '452-4.2.2 The email account that you tried to reach is over quota. Please direct';
        const socket = new net.Socket({});

        self.sandbox.stub(socket, 'write').callsFake(function (data) {
          if (!data.toString().includes('QUIT')) this.emit('data', msg);
        });

        self.connectStub.returns(socket);

        setTimeout(() => socket.write('250 Foo'), 10);

        return verifyMailBox({ emailAddress: 'bar@foo.com' }).then(({ validMailbox }) => should(validMailbox).equal(false));
      });

      it('should return null on socket error', () => {
        const socket = {
          on: (event, callback) => {
            if (event === 'error') return callback(new Error());
          },
          write: () => {},
          end: () => {},
        };

        self.connectStub = self.connectStub.returns(socket);

        return verifyMailBox({ emailAddress: 'bar@foo.com' }).then(({ validMailbox }) => should(validMailbox).equal(null));
      });

      it('dodges multiline spam detecting greetings', () => {
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

        return verifyMailBox({ emailAddress: 'bar@foo.com' }).then(({ validMailbox }) => should(validMailbox).equal(true));
      });

      it('regression: does not write infinitely if there is a socket error', () => {
        const writeSpy = self.sandbox.spy();
        const endSpy = self.sandbox.spy();

        const socket = {
          on: (event, callback) => {
            if (event === 'error') {
              return setTimeout(() => {
                socket.destroyed = true;
                callback(new Error());
              }, 100);
            }
          },
          write: writeSpy,
          end: endSpy,
        };

        self.connectStub = self.connectStub.returns(socket);

        return verifyMailBox({ emailAddress: 'bar@foo.com' }).then(() => {
          sinon.assert.notCalled(writeSpy);
          sinon.assert.notCalled(endSpy);
        });
      });

      it('should return null on unknown SMTP errors', () => {
        const socket = new net.Socket({});

        self.sandbox.stub(socket, 'write').callsFake(function (data) {
          if (!data.toString().includes('QUIT')) this.emit('data', '500 Foo');
        });

        self.connectStub.returns(socket);

        setTimeout(() => socket.write('250 Foo'), 10);

        return verifyMailBox({ emailAddress: 'bar@foo.com' }).then(({ validMailbox }) => should(validMailbox).equal(null));
      });

      it('returns false on bad mailbox errors', () => {
        const socket = new net.Socket({});

        self.sandbox.stub(socket, 'write').callsFake(function (data) {
          if (!data.toString().includes('QUIT')) this.emit('data', '550 Foo');
        });

        self.connectStub.returns(socket);

        setTimeout(() => socket.write('250 Foo'), 10);

        return verifyMailBox({ emailAddress: 'bar@foo.com' }).then(({ validMailbox }) => should(validMailbox).equal(false));
      });

      it('returns null on spam errors', () => {
        const msg = '550-"JunkMail rejected - ec2-54-74-157-229.eu-west-1.compute.amazonaws.com';
        const socket = new net.Socket({});

        self.sandbox.stub(socket, 'write').callsFake(function (data) {
          if (!data.toString().includes('QUIT')) this.emit('data', msg);
        });

        self.connectStub.returns(socket);

        setTimeout(() => socket.write('250 Foo'), 10);

        return verifyMailBox({ emailAddress: 'bar@foo.com' }).then(({ validMailbox }) => should(validMailbox).equal(null));
      });

      it('returns null on spam errors-#2', () => {
        const msg = '553 5.3.0 flpd575 DNSBL:RBL 521< 54.74.114.115 >_is_blocked.For assistance forward this email to abuse_rbl@abuse-att.net';
        const socket = new net.Socket({});

        self.sandbox.stub(socket, 'write').callsFake(function (data) {
          if (!data.toString().includes('QUIT')) this.emit('data', msg);
        });

        self.connectStub.returns(socket);

        setTimeout(() => socket.write('250 Foo'), 10);

        return verifyMailBox({ emailAddress: 'bar@foo.com' }).then(({ validMailbox }) => should(validMailbox).equal(null));
      });
    });

    context('given no mx records', () => {
      beforeEach(() => {
        self.resolveMxStub.yields(null, []);
      });

      it('should return false on the domain verification', () => {
        return verifyMailBox({ emailAddress: 'foo@bar.com' }).then(({ validDomain, validMailbox }) => {
          should(validDomain).equal(false);
          should(validMailbox).equal(null);
        });
      });
    });

    context('given a verifyMailbox option false', () => {
      it('should not check via socket', () => {
        return verifyMailBox({ emailAddress: 'foo@bar.com', options: { verifyMailbox: false } }).then(({ validMailbox }) => {
          sinon.assert.called(self.resolveMxStub);
          sinon.assert.notCalled(self.connectStub);
          should(validMailbox).equal(null);
        });
      });
    });

    context('given a verifyDomain option false', () => {
      it('should not check via socket', () => {
        return verifyMailBox({
          emailAddress: 'foo@bar.com',
          options: {
            verifyDomain: false,
            verifyMailbox: false,
          },
        }).then(({ validDomain, validMailbox }) => {
          sinon.assert.notCalled(self.resolveMxStub);
          sinon.assert.notCalled(self.connectStub);
          should(validDomain).equal(null);
          should(validMailbox).equal(null);
        });
      });
    });
  });

  describe('resolveMxRecords', () => {
    beforeEach(() => stubResolveMx());

    it('should return a list of mx records, ordered by priority', () => {
      return resolveMxRecords('bar@foo.com').then((records) => {
        records.should.deep.equal(['mx2.foo.com', 'mx3.foo.com', 'mx1.foo.com']);
      });
    });
  });

  describe('isEmail', () => {
    it('should validate a correct address', () => {
      isEmail('foo@bar.com').should.equal(true);
    });

    it('should return false for an invalid address', () => {
      isEmail('bar.com').should.equal(false);
    });
  });

  describe('extractAddressParts', () => {
    it('should local + domain parts of an email address', () => {
      extractAddressParts('foo@bar.com').should.eql(['foo', 'bar.com']);
    });

    it('should throw an error if the email is not valid', () => {
      (() => extractDomain('foo')).should.throw(Error);
    });
  });
});
