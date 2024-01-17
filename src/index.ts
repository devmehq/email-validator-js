import { verifyMailboxSMTP } from './smtp';
import { resolveMxRecords } from './dns';
import { isValidEmail } from './validator';
import { parse } from 'psl';

let disposableEmailProviders: string[];
const disposableResults: Record<string, boolean> = {};
let freeEmailProviders: string[];
const freeResults: Record<string, boolean> = {};

export function isDisposableEmail(emailOrDomain: string): boolean {
  let [_, emailDomain] = emailOrDomain?.split('@');
  if (!emailDomain) {
    emailDomain = _;
  }
  if (!emailDomain) {
    return false;
  }
  // cache results
  if (disposableResults[emailDomain]) return disposableResults[emailDomain];

  if (!disposableEmailProviders) {
    disposableEmailProviders = require('./disposable-email-providers.json');
  }
  disposableResults[emailDomain] = emailDomain && disposableEmailProviders.includes(emailDomain);
  return disposableResults[emailDomain];
}

export function isFreeEmail(emailOrDomain: string): boolean {
  let [_, emailDomain] = emailOrDomain?.split('@');
  if (!emailDomain) {
    emailDomain = _;
  }
  if (!emailDomain) {
    return false;
  }
  // cache results
  if (freeResults[emailDomain]) return freeResults[emailDomain];

  if (!freeEmailProviders) {
    freeEmailProviders = require('./free-email-providers.json');
  }

  freeResults[emailDomain] = emailDomain && freeEmailProviders.includes(emailDomain);
  return freeResults[emailDomain];
}

interface IVerifyEmailResult {
  validFormat: boolean;
  validMx: boolean | null;
  validSmtp: boolean | null;
}

interface IVerifyEmailParams {
  emailAddress: string;
  timeout?: number;
  verifyMx?: boolean;
  verifySmtp?: boolean;
  debug?: boolean;
  smtpPort?: number;
}

const mxDomainPorts: Record<string, number> = {
  // 465 or 587
  // https://help.ovhcloud.com/csm/en-ca-web-paas-development-email?id=kb_article_view&sysparm_article=KB0053893
  'ovh.net': 587,
};

export async function verifyEmail(params: IVerifyEmailParams): Promise<IVerifyEmailResult> {
  const { emailAddress, timeout = 4000, verifyMx = false, verifySmtp = false, debug = false } = params;
  const result: IVerifyEmailResult = { validFormat: false, validMx: null, validSmtp: null };

  const log = debug ? console.debug : (...args: any) => {};

  let mxRecords: string[];

  if (!isValidEmail(emailAddress)) {
    log('[verifyEmail] Failed on wellFormed check');
    return result;
  }

  const [local, domain] = emailAddress.split('@');
  if (!domain) {
    log('[verifyEmail] Failed on wellFormed check');
    return result;
  }

  result.validFormat = true;

  // save a DNS call
  if (!verifyMx && !verifySmtp) return result;

  try {
    mxRecords = await resolveMxRecords(domain);
    log('[verifyEmail] Found MX records', mxRecords);
  } catch (err) {
    log('[verifyEmail] Failed to resolve MX records', err);
    mxRecords = [];
  }

  if (verifyMx || verifySmtp) {
    result.validMx = mxRecords && mxRecords.length > 0;
  }

  if (verifySmtp && !mxRecords?.length) {
    result.validSmtp = false;
  }

  if (verifySmtp && mxRecords?.length > 0) {
    let domainPort = params.smtpPort;

    const mxDomain = parse(mxRecords[0]);
    if ('domain' in mxDomain && mxDomain.domain) {
      domainPort = mxDomainPorts[mxDomain.domain];
      log(`[verifyEmail] Found mxDomain ${mxDomain.domain} with port ${domainPort}`);
    }

    if ('error' in mxDomain) {
      log(`[verifyEmail] Failed to parse mxDomain ${mxDomain.error}`);
    }

    result.validSmtp = await verifyMailboxSMTP({
      local,
      domain,
      mxRecords,
      timeout,
      debug,
      port: domainPort,
    });
  }

  return result;
}
