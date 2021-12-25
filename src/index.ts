import { verifyMailboxSMTP } from './smtp';
import { resolveMxRecords } from './dns';
import { isValidEmail } from './validator';

let disposableEmailProviders: string[];
let freeEmailProviders: string[];

export function isDisposableEmail(address: string): boolean {
  let [_, emailDomain] = address?.split('@');
  if (!emailDomain) {
    emailDomain = _;
  }
  if (!emailDomain) {
    return false;
  }
  if (!disposableEmailProviders) {
    disposableEmailProviders = require('./disposable-email-providers').disposableEmailProviders;
  }
  return emailDomain && disposableEmailProviders.includes(emailDomain);
}

export function isFreeEmail(address: string): boolean {
  let [_, emailDomain] = address?.split('@');
  if (!emailDomain) {
    emailDomain = _;
  }
  if (!emailDomain) {
    return false;
  }

  if (!freeEmailProviders) {
    freeEmailProviders = require('./free-email-providers').freeEmailProviders;
  }

  return emailDomain && freeEmailProviders.includes(emailDomain);
}

interface IVerifyEmailResult {
  validEmailFormat: boolean;
  validMx: boolean | null;
  validSmtp: boolean | null;
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
  const result: IVerifyEmailResult = { validEmailFormat: false, validMx: null, validSmtp: null };

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

  result.validEmailFormat = true;

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
    result.validMx = mxRecords && mxRecords.length > 0;
  }

  if (verifySmtp) {
    result.validSmtp = await verifyMailboxSMTP({
      local,
      domain,
      mxRecords,
      timeout,
      debug,
    });
  }

  return result;
}
