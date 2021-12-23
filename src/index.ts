import { verifyMailboxSMTP } from './smtp';
import { resolveMxRecords } from './dns';
import { extractAddressParts } from './utils';
import { disposableEmailProviders } from './disposable-email-providers';
import { freeEmailProviders } from './free-email-providers';

export function isDisposableEmail(email: string): boolean {
  const [_, domain] = email?.split('@') || [];
  return domain && disposableEmailProviders.includes(domain);
}

export function isFreeEmail(email: string): boolean {
  const [_, domain] = email?.split('@') || [];
  return domain && freeEmailProviders.includes(domain);
}

interface IVerifyEmailResult {
  wellFormed: boolean;
  validDomain: boolean | null;
  validMailbox: boolean | null;
}

interface IVerifyEmailParams {
  emailAddress: string;
  timeout?: number;
  verifyDomain?: boolean;
  verifyMailbox?: boolean;
  debug?: boolean;
}

const logMethod = console.debug;

export async function verifyEmail(params: IVerifyEmailParams): Promise<IVerifyEmailResult> {
  const { emailAddress, timeout = 4000, verifyDomain = true, verifyMailbox = false, debug = false } = params;
  const result: IVerifyEmailResult = { wellFormed: false, validDomain: null, validMailbox: null };

  const log = debug ? logMethod : (...args: any) => {};

  let local: string;
  let domain: string;
  let mxRecords: string[];

  try {
    [local, domain] = extractAddressParts(emailAddress);
  } catch (err) {
    log('Failed on wellFormed check', err);
    return result;
  }

  result.wellFormed = true;

  // save a DNS call
  if (!verifyDomain && !verifyMailbox) return result;

  try {
    mxRecords = await resolveMxRecords(domain);
    log('Found MX records', mxRecords);
  } catch (err) {
    log('Failed to resolve MX records', err);
    mxRecords = [];
  }

  if (verifyDomain) {
    result.validDomain = mxRecords && mxRecords.length > 0;
  }

  if (verifyMailbox) {
    result.validMailbox = await verifyMailboxSMTP({
      local,
      domain,
      mxRecords,
      timeout,
      debug,
    });
  }

  return result;
}
