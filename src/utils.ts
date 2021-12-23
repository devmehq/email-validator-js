import { publicSuffixList } from './psl';

export function isValidTld(address: string): boolean {
  const [_, domain] = address?.split('@') || [];
  const ext: string = domain?.split('.').pop();
  return publicSuffixList.includes(ext);
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
