import { parse } from 'psl';
import { disposableCache, freeCache, smtpCache } from './cache';
import { resolveMxRecords } from './dns';
import { suggestEmailDomain } from './domain-suggester';
import { detectNameFromEmail } from './name-detector';
import { verifyMailboxSMTP } from './smtp';
import {
  type DetailedVerificationResult,
  type IVerifyEmailParams,
  type IVerifyEmailResult,
  VerificationErrorCode,
} from './types';
import { isValidEmail, isValidEmailDomain } from './validator';
import { getDomainAge, getDomainRegistrationStatus } from './whois';

export { verifyEmailBatch } from './batch';
export { clearAllCaches } from './cache';
export {
  COMMON_EMAIL_DOMAINS,
  defaultDomainSuggestionMethod,
  getDomainSimilarity,
  isCommonDomain,
  suggestDomain,
  suggestEmailDomain,
} from './domain-suggester';
export { defaultNameDetectionMethod, detectName, detectNameFromEmail } from './name-detector';
// Re-export types
export * from './types';
export { isValidEmail, isValidEmailDomain } from './validator';
export { getDomainAge, getDomainRegistrationStatus } from './whois';

let disposableEmailProviders: Set<string>;
let freeEmailProviders: Set<string>;

export function isDisposableEmail(emailOrDomain: string): boolean {
  const parts = emailOrDomain.split('@');
  const emailDomain = parts.length > 1 ? parts[1] : parts[0];
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
  const parts = emailOrDomain.split('@');
  const emailDomain = parts.length > 1 ? parts[1] : parts[0];
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
  const {
    emailAddress,
    timeout = 4000,
    verifyMx = false,
    verifySmtp = false,
    debug = false,
    detectName = false,
    nameDetectionMethod,
    suggestDomain = false,
    domainSuggestionMethod,
    commonDomains,
    checkDomainAge = false,
    checkDomainRegistration = false,
    whoisTimeout = 5000,
  } = params;
  const result: IVerifyEmailResult = { validFormat: false, validMx: null, validSmtp: null };

  const log = debug ? console.debug : (..._args: unknown[]) => {};

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

  // Detect name if requested
  if (detectName) {
    result.detectedName = detectNameFromEmail({
      email: emailAddress,
      customMethod: nameDetectionMethod,
    });
  }

  // Suggest domain if requested
  if (suggestDomain) {
    const [, emailDomain] = emailAddress.split('@');
    if (emailDomain) {
      result.domainSuggestion = domainSuggestionMethod
        ? domainSuggestionMethod(emailDomain)
        : suggestEmailDomain(emailAddress, commonDomains);
    }
  }

  // Check domain age if requested
  if (checkDomainAge) {
    try {
      result.domainAge = await getDomainAge(domain, whoisTimeout);
    } catch (err) {
      log('[verifyEmail] Failed to get domain age', err);
      result.domainAge = null;
    }
  }

  // Check domain registration if requested
  if (checkDomainRegistration) {
    try {
      result.domainRegistration = await getDomainRegistrationStatus(domain, whoisTimeout);
    } catch (err) {
      log('[verifyEmail] Failed to get domain registration status', err);
      result.domainRegistration = null;
    }
  }

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
      // Still need to detect name if requested and not done yet
      if (detectName && !result.detectedName) {
        result.detectedName = detectNameFromEmail({
          email: emailAddress,
          customMethod: nameDetectionMethod,
        });
      }
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
  const {
    emailAddress,
    timeout = 4000,
    verifyMx = true,
    verifySmtp = false,
    debug = false,
    checkDisposable = true,
    checkFree = true,
    detectName = false,
    nameDetectionMethod,
    suggestDomain = true,
    domainSuggestionMethod,
    commonDomains,
    checkDomainAge = false,
    checkDomainRegistration = false,
    whoisTimeout = 5000,
  } = params;

  const startTime = Date.now();
  const log = debug ? console.debug : (..._args: unknown[]) => {};

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
    if (result.metadata) {
      result.metadata.verificationTime = Date.now() - startTime;
    }
    return result;
  }
  result.format.valid = true;

  // Detect name if requested
  if (detectName) {
    result.detectedName = detectNameFromEmail({
      email: emailAddress,
      customMethod: nameDetectionMethod,
    });
  }

  // Suggest domain if requested
  if (suggestDomain) {
    const [, emailDomain] = emailAddress.split('@');
    if (emailDomain) {
      result.domainSuggestion = domainSuggestionMethod
        ? domainSuggestionMethod(emailDomain)
        : suggestEmailDomain(emailAddress, commonDomains);
    }
  }

  const [local, domain] = emailAddress.split('@');
  if (!domain || !local) {
    result.format.error = VerificationErrorCode.INVALID_FORMAT;
    if (result.metadata) {
      result.metadata.verificationTime = Date.now() - startTime;
    }
    return result;
  }

  // Domain validation
  if (!isValidEmailDomain(domain)) {
    result.domain.error = VerificationErrorCode.INVALID_DOMAIN;
    if (result.metadata) {
      result.metadata.verificationTime = Date.now() - startTime;
    }
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

  // Check domain age if requested
  if (checkDomainAge) {
    try {
      result.domainAge = await getDomainAge(domain, whoisTimeout);
    } catch (err) {
      log('[verifyEmailDetailed] Failed to get domain age', err);
      result.domainAge = null;
    }
  }

  // Check domain registration if requested
  if (checkDomainRegistration) {
    try {
      result.domainRegistration = await getDomainRegistrationStatus(domain, whoisTimeout);
    } catch (err) {
      log('[verifyEmailDetailed] Failed to get domain registration status', err);
      result.domainRegistration = null;
    }
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
          if (result.metadata) {
            result.metadata.cached = true;
          }
          // Still need to detect name if requested and not done yet
          if (detectName && !result.detectedName) {
            result.detectedName = detectNameFromEmail({
              email: emailAddress,
              customMethod: nameDetectionMethod,
            });
          }
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
  result.valid =
    result.format.valid && result.domain.valid !== false && result.smtp.valid !== false && !result.disposable;

  if (result.metadata) {
    result.metadata.verificationTime = Date.now() - startTime;
  }
  return result;
}
