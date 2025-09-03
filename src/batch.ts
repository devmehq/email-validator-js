import { verifyEmail, verifyEmailDetailed } from './index';
import type {
  BatchVerificationResult,
  DetailedVerificationResult,
  IBatchVerifyParams,
  IVerifyEmailResult,
} from './types';

/**
 * Verify multiple email addresses in parallel with concurrency control
 */
export async function verifyEmailBatch(params: IBatchVerifyParams): Promise<BatchVerificationResult> {
  const {
    emailAddresses,
    concurrency = 5,
    timeout = 4000,
    verifyMx = true,
    verifySmtp = false,
    checkDisposable = true,
    checkFree = true,
    detailed = false,
    detectName = false,
    nameDetectionMethod,
    suggestDomain = false,
    domainSuggestionMethod,
    commonDomains,
  } = params;

  const startTime = Date.now();
  const results = new Map<string, DetailedVerificationResult | IVerifyEmailResult>();

  // Process emails in batches
  const batches = [];
  for (let i = 0; i < emailAddresses.length; i += concurrency) {
    batches.push(emailAddresses.slice(i, i + concurrency));
  }

  let totalValid = 0;
  let totalInvalid = 0;
  let totalErrors = 0;

  for (const batch of batches) {
    const batchPromises = batch.map(async (email) => {
      try {
        const result = detailed
          ? await verifyEmailDetailed({
              emailAddress: email,
              timeout,
              verifyMx,
              verifySmtp,
              checkDisposable,
              checkFree,
              detectName,
              nameDetectionMethod,
              suggestDomain,
              domainSuggestionMethod,
              commonDomains,
            })
          : await verifyEmail({
              emailAddress: email,
              timeout,
              verifyMx,
              verifySmtp,
              detectName,
              nameDetectionMethod,
              suggestDomain,
              domainSuggestionMethod,
              commonDomains,
            });

        if (detailed) {
          const detailedResult = result as DetailedVerificationResult;
          if (detailedResult.valid) {
            totalValid++;
          } else {
            totalInvalid++;
          }
        } else {
          const basicResult = result as IVerifyEmailResult;
          if (basicResult.validFormat && basicResult.validMx !== false) {
            totalValid++;
          } else {
            totalInvalid++;
          }
        }

        return { email, result };
      } catch (error) {
        totalErrors++;
        return {
          email,
          result: detailed
            ? createErrorDetailedResult(email, error)
            : { validFormat: false, validMx: null, validSmtp: null, detectedName: null, domainSuggestion: null },
        };
      }
    });

    const batchResults = await Promise.all(batchPromises);
    for (const { email, result } of batchResults) {
      results.set(email, result);
    }
  }

  return {
    results,
    summary: {
      total: emailAddresses.length,
      valid: totalValid,
      invalid: totalInvalid,
      errors: totalErrors,
      processingTime: Date.now() - startTime,
    },
  };
}

function createErrorDetailedResult(email: string, _error: unknown): DetailedVerificationResult {
  return {
    valid: false,
    email,
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
}
