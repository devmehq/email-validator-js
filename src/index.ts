import { verifyMailboxSMTP } from './smtp';
import { resolveMxRecords } from './dns';
import { isValidEmail } from './validator';

let disposableEmailProviders: string[];
let freeEmailProviders: string[];

export function isDisposableEmail(email: string): boolean {
  const [_, domain] = email?.split('@') || [];
  if (!disposableEmailProviders) {
    disposableEmailProviders = require('./disposable-email-providers').disposableEmailProviders;
  }
  return domain && disposableEmailProviders.includes(domain);
}

export function isFreeEmail(email: string): boolean {
  const [_, domain] = email?.split('@') || [];
  if (!freeEmailProviders) {
    freeEmailProviders = require('./free-email-providers').freeEmailProviders;
  }

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
  verifyMx?: boolean;
  verifySmtp?: boolean;
  debug?: boolean;
}

const logMethod = console.debug;

export async function verifyEmail(params: IVerifyEmailParams): Promise<IVerifyEmailResult> {
  const { emailAddress, timeout = 4000, verifyMx = true, verifySmtp = false, debug = false } = params;
  const result: IVerifyEmailResult = { wellFormed: false, validDomain: null, validMailbox: null };

  const log = debug ? logMethod : (...args: any) => {};

  let local: string;
  let domain: string;
  let mxRecords: string[];

  if (!isValidEmail(emailAddress)) {
    log('Failed on wellFormed check');
    return result;
  }

  [local, domain] = emailAddress.split('@');
  if (!domain) {
    log('Failed on wellFormed check');
    return result;
  }

  result.wellFormed = true;

  // save a DNS call
  if (!verifyMx && !verifySmtp) return result;

  try {
    mxRecords = await resolveMxRecords(domain);
    log('Found MX records', mxRecords);
  } catch (err) {
    log('Failed to resolve MX records', err);
    mxRecords = [];
  }

  if (verifyMx) {
    result.validDomain = mxRecords && mxRecords.length > 0;
  }

  if (verifySmtp) {
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
