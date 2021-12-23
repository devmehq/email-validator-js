import { getDomain } from 'tldts';

export function isValidTld(address: string): boolean {
  const [_, emailDomain] = address?.split('@') || [];
  return !!getDomain(emailDomain);
}

export function isEmail(address: string) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3})|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(address).toLowerCase()) && address.indexOf('.+') === -1;
}

export function extractAddressParts(address: string) {
  if (!isEmail(address)) {
    throw new Error(`"${address}" is not a valid email address`);
  }

  return address.split('@');
}
