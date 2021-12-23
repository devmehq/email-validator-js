import { isDisposableEmail } from '../src';
import { isValidEmail, isValidEmailDomain } from '../src/validator';

describe('utilsTest', async () => {
  describe('isEmail', async () => {
    it('should validate a correct address', async () => {
      isValidEmail('foo@bar.com').should.equal(true);
      isValidEmail('email@gmail.com').should.equal(true);
      isValidEmail('email+plug@gmail.com').should.equal(true);
      isValidEmail('email.name+plug@gmail.com').should.equal(true);
      isValidEmail('email.name+plug.moea@gmail.com').should.equal(true); // todo this is invalid
    });

    it('should return false for an invalid address', async () => {
      isValidEmail('bar.com').should.equal(false);
      isValidEmail('email.+plug@gmail.com').should.equal(false);
    });
  });

  describe('isValidTld', async () => {
    it('should succeed', async () => {
      isValidEmailDomain('foo@bar.com').should.eql(true);
      isValidEmailDomain('foo@google.pl').should.eql(true);
      isValidEmailDomain('foo@google.de').should.eql(true);
      isValidEmailDomain('foo@google.co.uk').should.eql(true);
      isValidEmailDomain('foo@google.sc').should.eql(true);
      isValidEmailDomain('foo@google.tw').should.eql(true);
      isValidEmailDomain('foo@google.ma').should.eql(true);
    });

    it('should fail', async () => {
      isValidEmailDomain('foo').should.eql(false);
      isValidEmailDomain('foo@google.coml').should.eql(false);
      isValidEmailDomain('foo@foo@google.comd').should.eql(false);
      isValidEmailDomain('foo@google.comx').should.eql(false);
      isValidEmailDomain('foo@google.xx').should.eql(false);
      isValidEmailDomain('foo@google.aa').should.eql(false);
    });
  });

  describe('isDisposableEmail', async () => {
    it('should return true', async () => {
      isDisposableEmail('foo@yopmail.com').should.eql(true);
      isDisposableEmail('foo@trackworld.xyz').should.eql(true);
    });

    it('should return false', async () => {
      isDisposableEmail('foo@google.com').should.eql(false);
      isDisposableEmail('foo@gmail.com').should.eql(false);
      isDisposableEmail('foo@yahoo.com').should.eql(false);
    });
  });
});
