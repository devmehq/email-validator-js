import { detectName, detectNameFromEmail, type NameDetectionMethod } from '../src';

// Example 1: Basic name detection
console.log('Basic Name Detection Examples:');
console.log('================================');

const emails = [
  'john.doe@example.com',
  'jane_smith@example.com',
  'mary-johnson@company.org',
  'alexander@example.com',
  'johnDoe@example.com',
  'admin@example.com',
  'john.doe123@example.com',
  'john.doe+newsletter@example.com',
];

emails.forEach((email) => {
  const result = detectName(email);
  if (result) {
    console.log(`${email}:`);
    console.log(`  First Name: ${result.firstName || 'N/A'}`);
    console.log(`  Last Name: ${result.lastName || 'N/A'}`);
    console.log(`  Confidence: ${(result.confidence * 100).toFixed(0)}%`);
  } else {
    console.log(`${email}: No name detected`);
  }
});

// Example 2: Using a custom detection method
console.log('\nCustom Detection Method Example:');
console.log('================================');

const customMethod: NameDetectionMethod = (email: string) => {
  // Custom logic for company-specific email patterns
  const [localPart] = email.split('@');

  // Handle company format: firstname.lastname.department@company.com
  if (localPart.includes('.')) {
    const parts = localPart.split('.');
    if (parts.length >= 3) {
      return {
        firstName: parts[0].charAt(0).toUpperCase() + parts[0].slice(1),
        lastName: parts[1].charAt(0).toUpperCase() + parts[1].slice(1),
        confidence: 0.95, // High confidence for known pattern
      };
    }
  }

  // Return null to indicate no match with custom pattern
  return null;
};

const customEmail = 'alice.wonderland.engineering@company.com';
const customResult = detectNameFromEmail({
  email: customEmail,
  customMethod,
});

if (customResult) {
  console.log(`${customEmail}:`);
  console.log(`  First Name: ${customResult.firstName}`);
  console.log(`  Last Name: ${customResult.lastName}`);
  console.log(`  Confidence: ${(customResult.confidence * 100).toFixed(0)}%`);
}

// Example 3: NEW - Integrated name detection with email verification
console.log('\nIntegrated Name Detection (NEW FEATURE):');
console.log('=========================================');

import { verifyEmailBatch, verifyEmailDetailed } from '../src';

async function verifyWithIntegratedNameDetection() {
  // Single email verification with integrated name detection
  const result = await verifyEmailDetailed({
    emailAddress: 'john.smith@gmail.com',
    detectName: true, // NEW: Enable name detection
    verifyMx: false, // Skip MX verification for example
    verifySmtp: false, // Skip SMTP verification for example
  });

  console.log(`Email: ${result.email}`);
  console.log(`  Valid Format: ${result.format.valid}`);
  console.log(`  Disposable: ${result.disposable}`);
  console.log(`  Free Provider: ${result.freeProvider}`);

  // Name is now included in the verification result!
  if (result.detectedName) {
    console.log(`  Detected Name: ${result.detectedName.firstName} ${result.detectedName.lastName || ''}`);
    console.log(`  Name Confidence: ${(result.detectedName.confidence * 100).toFixed(0)}%`);
  } else {
    console.log(`  Detected Name: None`);
  }

  console.log('\nBatch verification with name detection:');
  console.log('----------------------------------------');

  // Batch verification with integrated name detection
  const batchResult = await verifyEmailBatch({
    emailAddresses: ['alice.wonderland@example.com', 'bob_builder@example.com', 'support@example.com'],
    detectName: true, // NEW: Enable name detection for all emails
    // nameDetectionMethod: customMethod, // Removed - use default method
    verifyMx: false,
    verifySmtp: false,
    detailed: true,
  });

  batchResult.results.forEach((result, email) => {
    console.log(`${email}:`);
    if ('detectedName' in result && result.detectedName) {
      console.log(`  Name: ${result.detectedName.firstName} ${result.detectedName.lastName || '(no last name)'}`);
    } else {
      console.log(`  Name: Not detected`);
    }
  });
}

// Run the integrated example
(async () => {
  await verifyWithIntegratedNameDetection();
})();
