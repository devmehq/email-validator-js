import expect from 'expect';
import { isDisposableEmail, isValidEmail, isValidEmailDomain } from '../src';

describe('utilsTest', () => {
  describe('isEmail', () => {
    it('should validate a correct address', async () => {
      expect(isValidEmail('foo@bar.com')).toBe(true);
      expect(isValidEmail('email@gmail.com')).toBe(true);
      expect(isValidEmail('email+plug@gmail.com')).toBe(true);
      expect(isValidEmail('email.name+plug@gmail.com')).toBe(true);
      expect(isValidEmail('email.name+plug.moea@gmail.com')).toBe(true); // todo this is invalid
    });

    it('should return false for an invalid address', async () => {
      expect(isValidEmail('bar.com')).toBe(false);
      expect(isValidEmail('email.+plug@gmail.com')).toBe(false);
    });
  });

  describe('isValidTld', () => {
    it('should succeed', async () => {
      expect(isValidEmailDomain('foo@bar.com')).toEqual(true);
      expect(isValidEmailDomain('foo@google.pl')).toEqual(true);
      expect(isValidEmailDomain('foo@google.de')).toEqual(true);
      expect(isValidEmailDomain('foo@google.co.uk')).toEqual(true);
      expect(isValidEmailDomain('foo@google.sc')).toEqual(true);
      expect(isValidEmailDomain('foo@google.tw')).toEqual(true);
      expect(isValidEmailDomain('foo@google.ma')).toEqual(true);
    });

    it('should fail', async () => {
      expect(isValidEmailDomain('foo')).toEqual(false);
      expect(isValidEmailDomain('foo@google.coml')).toEqual(false);
      expect(isValidEmailDomain('foo@foo@google.comd')).toEqual(false);
      expect(isValidEmailDomain('foo@google.comx')).toEqual(false);
      expect(isValidEmailDomain('foo@google.xx')).toEqual(false);
      expect(isValidEmailDomain('foo@google.aa')).toEqual(false);
    });
  });

  describe('isDisposableEmail', () => {
    it('should return true', async () => {
      expect(isDisposableEmail('foo@yopmail.com')).toEqual(true);
      expect(isDisposableEmail('foo@trackworld.xyz')).toEqual(true);
    });

    it('should return false', async () => {
      expect(isDisposableEmail('foo@google.com')).toEqual(false);
      expect(isDisposableEmail('foo@gmail.com')).toEqual(false);
      expect(isDisposableEmail('foo@yahoo.com')).toEqual(false);
    });
  });
});
