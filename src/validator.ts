import { isValid } from 'psl';

export function isValidEmailDomain(address: string): boolean {
  const [_, emailDomain] = address?.split('@') || [];
  try {
    return isValid(emailDomain);
  } catch (e) {
    return false;
  }
}

export function isValidEmail(address: string) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3})|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(address).toLowerCase()) && address.indexOf('.+') === -1;
}
