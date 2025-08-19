import { verifyEmail, verifyEmailDetailed, verifyEmailBatch, isDisposableEmail, isFreeEmail, clearAllCaches, VerificationErrorCode, DetailedVerificationResult } from '../src';

async function basicUsage() {
  console.log('=== Basic Email Verification ===');

  const result = await verifyEmail({
    emailAddress: 'user@example.com',
    verifyMx: true,
    verifySmtp: true,
    timeout: 5000,
  });

  console.log('Valid format:', result.validFormat);
  console.log('Valid MX:', result.validMx);
  console.log('Valid SMTP:', result.validSmtp);
}

async function detailedVerification() {
  console.log('\n=== Detailed Email Verification ===');

  const result = await verifyEmailDetailed({
    emailAddress: 'test@gmail.com',
    verifyMx: true,
    verifySmtp: false,
    checkDisposable: true,
    checkFree: true,
    timeout: 5000,
  });

  console.log('Valid:', result.valid);
  console.log('Format valid:', result.format.valid);
  console.log('Domain valid:', result.domain.valid);
  console.log('MX Records:', result.domain.mxRecords);
  console.log('Is disposable:', result.disposable);
  console.log('Is free provider:', result.freeProvider);
  console.log('Verification time:', result.metadata?.verificationTime, 'ms');
  console.log('From cache:', result.metadata?.cached);

  if (result.format.error) {
    console.log('Error:', result.format.error);
  }
}

async function batchVerification() {
  console.log('\n=== Batch Email Verification ===');

  const emails = [
    'valid@gmail.com',
    'test@yopmail.com', // disposable
    'user@example.com',
    'invalid-email',
    'admin@company.com',
  ];

  const result = await verifyEmailBatch({
    emailAddresses: emails,
    concurrency: 3,
    verifyMx: true,
    verifySmtp: false,
    checkDisposable: true,
    checkFree: true,
    detailed: true,
    timeout: 5000,
  });

  console.log('Summary:');
  console.log('  Total:', result.summary.total);
  console.log('  Valid:', result.summary.valid);
  console.log('  Invalid:', result.summary.invalid);
  console.log('  Processing time:', result.summary.processingTime, 'ms');

  console.log('\nDetailed results:');
  for (const [email, verification] of result.results) {
    const detailed = verification as DetailedVerificationResult;
    console.log(`  ${email}:`);
    console.log(`    Valid: ${detailed.valid}`);
    if (detailed.disposable) {
      console.log(`    ⚠️  Disposable email`);
    }
    if (detailed.freeProvider) {
      console.log(`    ℹ️  Free email provider`);
    }
  }
}

async function checkEmailProviders() {
  console.log('\n=== Check Email Providers ===');

  const testEmails = ['user@yopmail.com', 'user@gmail.com', 'user@company.com'];

  for (const email of testEmails) {
    console.log(`${email}:`);
    console.log(`  Disposable: ${isDisposableEmail(email)}`);
    console.log(`  Free provider: ${isFreeEmail(email)}`);
  }
}

async function demonstrateCache() {
  console.log('\n=== Cache Demonstration ===');

  // First verification - will hit DNS and SMTP
  console.log('First verification (no cache):');
  const start1 = Date.now();
  const result1 = await verifyEmailDetailed({
    emailAddress: 'cache@example.com',
    verifyMx: true,
    verifySmtp: false,
  });
  console.log(`  Time: ${Date.now() - start1}ms`);
  console.log(`  Cached: ${result1.metadata?.cached}`);

  // Second verification - will use cache
  console.log('Second verification (cached):');
  const start2 = Date.now();
  const result2 = await verifyEmailDetailed({
    emailAddress: 'cache@example.com',
    verifyMx: true,
    verifySmtp: false,
  });
  console.log(`  Time: ${Date.now() - start2}ms`);
  console.log(`  Cached: ${result2.metadata?.cached}`);

  // Clear cache
  console.log('Clearing cache...');
  clearAllCaches();

  // Third verification - cache cleared, will hit DNS again
  console.log('Third verification (cache cleared):');
  const start3 = Date.now();
  const result3 = await verifyEmailDetailed({
    emailAddress: 'cache@example.com',
    verifyMx: true,
    verifySmtp: false,
  });
  console.log(`  Time: ${Date.now() - start3}ms`);
  console.log(`  Cached: ${result3.metadata?.cached}`);
}

async function handleErrors() {
  console.log('\n=== Error Handling ===');

  const testCases = ['invalid-format', 'user@nonexistent-domain-xyz.com', 'test@yopmail.com'];

  for (const email of testCases) {
    const result = await verifyEmailDetailed({
      emailAddress: email,
      verifyMx: true,
      checkDisposable: true,
    });

    console.log(`\n${email}:`);
    console.log(`  Valid: ${result.valid}`);

    if (result.format.error === VerificationErrorCode.INVALID_FORMAT) {
      console.log('  Error: Invalid email format');
    }
    if (result.domain.error === VerificationErrorCode.NO_MX_RECORDS) {
      console.log('  Error: No MX records found');
    }
    if (result.domain.error === VerificationErrorCode.DISPOSABLE_EMAIL) {
      console.log('  Error: Disposable email detected');
    }
  }
}

// Run all examples
async function runExamples() {
  try {
    await basicUsage();
    await detailedVerification();
    await batchVerification();
    await checkEmailProviders();
    await demonstrateCache();
    await handleErrors();
  } catch (error) {
    console.error('Error:', error);
  }
}

// Execute if run directly
if (require.main === module) {
  runExamples();
}
