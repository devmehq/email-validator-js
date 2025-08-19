import { IBatchVerifyParams, BatchVerificationResult, DetailedVerificationResult, IVerifyEmailResult } from './types';
import { verifyEmail, verifyEmailDetailed } from './index';

/**
 * Verify multiple email addresses in parallel with concurrency control
 */
export async function verifyEmailBatch(params: IBatchVerifyParams): Promise<BatchVerificationResult> {
  const { emailAddresses, concurrency = 5, timeout = 4000, verifyMx = true, verifySmtp = false, checkDisposable = true, checkFree = true, detailed = false } = params;

  const startTime = Date.now();
  const results = new Map<string, DetailedVerificationResult | IVerifyEmailResult>();

  // Process emails in batches
  const batches: string[][] = [];
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
            })
          : await verifyEmail({
              emailAddress: email,
              timeout,
              verifyMx,
              verifySmtp,
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
          result: detailed ? createErrorDetailedResult(email, error) : { validFormat: false, validMx: null, validSmtp: null },
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

function createErrorDetailedResult(email: string, error: unknown): DetailedVerificationResult {
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
