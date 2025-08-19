import { verifyMailboxSMTP } from './smtp';
import { resolveMxRecords } from './dns';
import { isValidEmail, isValidEmailDomain } from './validator';
import { parse } from 'psl';
import { disposableCache, freeCache, smtpCache } from './cache';
import { IVerifyEmailParams, IVerifyEmailResult, DetailedVerificationResult, VerificationErrorCode } from './types';

// Re-export types
export * from './types';
export { verifyEmailBatch } from './batch';
export { clearAllCaches } from './cache';
export { isValidEmail, isValidEmailDomain } from './validator';

let disposableEmailProviders: Set<string>;
let freeEmailProviders: Set<string>;

export function isDisposableEmail(emailOrDomain: string): boolean {
  let [_, emailDomain] = emailOrDomain?.split('@');
  if (!emailDomain) {
    emailDomain = _;
  }
  if (!emailDomain) {
    return false;
  }

  // Check cache first
  const cached = disposableCache.get(emailDomain);
  if (cached !== undefined) {
    return cached;
  }

  if (!disposableEmailProviders) {
    disposableEmailProviders = new Set(require('./disposable-email-providers.json'));
  }

  const result = disposableEmailProviders.has(emailDomain);
  disposableCache.set(emailDomain, result);
  return result;
}

export function isFreeEmail(emailOrDomain: string): boolean {
  let [_, emailDomain] = emailOrDomain?.split('@');
  if (!emailDomain) {
    emailDomain = _;
  }
  if (!emailDomain) {
    return false;
  }

  // Check cache first
  const cached = freeCache.get(emailDomain);
  if (cached !== undefined) {
    return cached;
  }

  if (!freeEmailProviders) {
    freeEmailProviders = new Set(require('./free-email-providers.json'));
  }

  const result = freeEmailProviders.has(emailDomain);
  freeCache.set(emailDomain, result);
  return result;
}

export const domainPorts: Record<string, number> = {
  // 465 or 587
  // https://help.ovhcloud.com/csm/en-ca-web-paas-development-email?id=kb_article_view&sysparm_article=KB0053893
  'ovh.net': 465,
};

/**
 * Verify email address with basic result format (backward compatible)
 */
export async function verifyEmail(params: IVerifyEmailParams): Promise<IVerifyEmailResult> {
  const { emailAddress, timeout = 4000, verifyMx = false, verifySmtp = false, debug = false } = params;
  const result: IVerifyEmailResult = { validFormat: false, validMx: null, validSmtp: null };

  const log = debug ? console.debug : (...args: any[]) => {};

  let mxRecords: string[];

  if (!isValidEmail(emailAddress)) {
    log('[verifyEmail] Failed on wellFormed check');
    return result;
  }

  const [local, domain] = emailAddress.split('@');
  if (!domain || !local) {
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
    // Check SMTP cache first
    const cacheKey = `${emailAddress}:smtp`;
    const cachedSmtp = smtpCache.get(cacheKey);

    if (cachedSmtp !== undefined) {
      result.validSmtp = cachedSmtp;
      return result;
    }

    // get custom port for domain if not provided in params
    let domainPort = params.smtpPort;
    if (!domainPort) {
      const mxDomain = parse(mxRecords[0]);
      if ('domain' in mxDomain && mxDomain.domain) {
        domainPort = domainPorts[mxDomain.domain];
        log(`[verifyEmail] Found mxDomain ${mxDomain.domain} with port ${domainPort}`);
      }
      if ('error' in mxDomain) {
        log(`[verifyEmail] Failed to parse mxDomain ${mxDomain.error}`);
      }
    }

    const smtpResult = await verifyMailboxSMTP({
      local,
      domain,
      mxRecords,
      timeout,
      debug,
      port: domainPort,
      retryAttempts: params.retryAttempts,
    });

    // Cache SMTP result
    smtpCache.set(cacheKey, smtpResult);
    result.validSmtp = smtpResult;
  }

  return result;
}

/**
 * Verify email address with detailed result format
 */
export async function verifyEmailDetailed(params: IVerifyEmailParams): Promise<DetailedVerificationResult> {
  const { emailAddress, timeout = 4000, verifyMx = true, verifySmtp = false, debug = false, checkDisposable = true, checkFree = true } = params;

  const startTime = Date.now();
  const log = debug ? console.debug : (...args: any[]) => {};

  const result: DetailedVerificationResult = {
    valid: false,
    email: emailAddress,
    format: { valid: false },
    domain: { valid: null },
    smtp: { valid: null },
    disposable: false,
    freeProvider: false,
    metadata: {
      verificationTime: 0,
      cached: false,
    },
  };

  // Format validation
  if (!isValidEmail(emailAddress)) {
    result.format.error = VerificationErrorCode.INVALID_FORMAT;
    result.metadata!.verificationTime = Date.now() - startTime;
    return result;
  }
  result.format.valid = true;

  const [local, domain] = emailAddress.split('@');
  if (!domain || !local) {
    result.format.error = VerificationErrorCode.INVALID_FORMAT;
    result.metadata!.verificationTime = Date.now() - startTime;
    return result;
  }

  // Domain validation
  if (!isValidEmailDomain(domain)) {
    result.domain.error = VerificationErrorCode.INVALID_DOMAIN;
    result.metadata!.verificationTime = Date.now() - startTime;
    return result;
  }

  // Check disposable
  if (checkDisposable) {
    result.disposable = isDisposableEmail(emailAddress);
    if (result.disposable) {
      result.valid = false;
      result.domain.error = VerificationErrorCode.DISPOSABLE_EMAIL;
    }
  }

  // Check free provider
  if (checkFree) {
    result.freeProvider = isFreeEmail(emailAddress);
  }

  // MX Records verification
  if (verifyMx || verifySmtp) {
    try {
      const mxRecords = await resolveMxRecords(domain);
      result.domain.mxRecords = mxRecords;
      result.domain.valid = mxRecords.length > 0;

      if (!result.domain.valid) {
        result.domain.error = VerificationErrorCode.NO_MX_RECORDS;
      }

      // SMTP verification
      if (verifySmtp && mxRecords.length > 0) {
        const cacheKey = `${emailAddress}:smtp`;
        const cachedSmtp = smtpCache.get(cacheKey);

        if (cachedSmtp !== undefined) {
          result.smtp.valid = cachedSmtp;
          result.metadata!.cached = true;
        } else {
          let domainPort = params.smtpPort;
          if (!domainPort) {
            const mxDomain = parse(mxRecords[0]);
            if ('domain' in mxDomain && mxDomain.domain) {
              domainPort = domainPorts[mxDomain.domain];
            }
          }

          const smtpResult = await verifyMailboxSMTP({
            local,
            domain,
            mxRecords,
            timeout,
            debug,
            port: domainPort,
            retryAttempts: params.retryAttempts,
          });

          smtpCache.set(cacheKey, smtpResult);
          result.smtp.valid = smtpResult;
        }

        if (result.smtp.valid === false) {
          result.smtp.error = VerificationErrorCode.MAILBOX_NOT_FOUND;
        } else if (result.smtp.valid === null) {
          result.smtp.error = VerificationErrorCode.SMTP_CONNECTION_FAILED;
        }
      }
    } catch (err) {
      log('[verifyEmailDetailed] Failed to resolve MX records', err);
      result.domain.valid = false;
      result.domain.error = VerificationErrorCode.NO_MX_RECORDS;
    }
  }

  // Determine overall validity
  result.valid = result.format.valid && result.domain.valid !== false && result.smtp.valid !== false && !result.disposable;

  result.metadata!.verificationTime = Date.now() - startTime;
  return result;
}
