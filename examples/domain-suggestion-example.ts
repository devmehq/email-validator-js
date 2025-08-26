import {
  COMMON_EMAIL_DOMAINS,
  type DomainSuggestionMethod,
  getDomainSimilarity,
  isCommonDomain,
  suggestEmailDomain,
  verifyEmailBatch,
  verifyEmailDetailed,
} from '../src';

// Example 1: Basic domain suggestion
console.log('Basic Domain Suggestion Examples:');
console.log('=================================');

const typoEmails = [
  'user@gmial.com', // gmail typo
  'user@gmai.com', // missing letter
  'user@gmail.co', // wrong TLD
  'user@yaho.com', // yahoo typo
  'user@hotmial.com', // hotmail typo
  'user@outlok.com', // outlook typo
  'user@protonmai.com', // protonmail typo
  'user@gmail.com', // valid - no suggestion
];

typoEmails.forEach((email) => {
  const suggestion = suggestEmailDomain(email);
  if (suggestion) {
    console.log(`${email}:`);
    console.log(`  Suggested: ${suggestion.suggested}`);
    console.log(`  Confidence: ${(suggestion.confidence * 100).toFixed(0)}%`);
  } else {
    console.log(`${email}: No suggestion (likely valid)`);
  }
});

// Example 2: Custom domain suggestion method
console.log('\nCustom Domain Suggestion Method:');
console.log('================================');

const customMethod: DomainSuggestionMethod = (domain: string) => {
  // Custom logic for company-specific domains
  const companyDomains = ['mycompany.com', 'ourservice.org', 'brandname.io'];

  for (const correctDomain of companyDomains) {
    const similarity = getDomainSimilarity(domain, correctDomain);
    if (similarity > 0.8 && similarity < 1) {
      return {
        original: domain,
        suggested: correctDomain,
        confidence: similarity,
      };
    }
  }

  return null;
};

// Test custom method
const customTestDomains = ['mycompny.com', 'ourservise.org', 'brandnam.io'];
customTestDomains.forEach((domain) => {
  const suggestion = customMethod(domain);
  if (suggestion) {
    console.log(`${domain} -> ${suggestion.suggested} (${(suggestion.confidence * 100).toFixed(0)}%)`);
  }
});

// Example 3: Integration with email verification
console.log('\nIntegrated Email Verification with Domain Suggestions:');
console.log('======================================================');

async function verifyWithSuggestions() {
  // Single email verification with domain suggestion
  const result = await verifyEmailDetailed({
    emailAddress: 'john.doe@gmial.com',
    suggestDomain: true, // Enable domain suggestions
    detectName: true, // Also detect names
    verifyMx: false,
    verifySmtp: false,
  });

  console.log(`\nEmail: ${result.email}`);
  console.log(`Valid Format: ${result.format.valid}`);

  if (result.domainSuggestion) {
    console.log(`Domain Typo Detected!`);
    console.log(`  Suggested: ${result.domainSuggestion.suggested}`);
    console.log(`  Confidence: ${(result.domainSuggestion.confidence * 100).toFixed(0)}%`);
  }

  if (result.detectedName) {
    console.log(`Detected Name: ${result.detectedName.firstName} ${result.detectedName.lastName || ''}`);
  }

  // Batch verification with suggestions
  console.log('\nBatch Verification with Domain Suggestions:');
  console.log('-------------------------------------------');

  const batchResult = await verifyEmailBatch({
    emailAddresses: ['alice@yaho.com', 'bob@gmail.com', 'charlie@hotmai.com', 'diana@outlok.com'],
    suggestDomain: true,
    detectName: true,
    verifyMx: false,
    verifySmtp: false,
    detailed: true,
  });

  batchResult.results.forEach((result, email) => {
    console.log(`\n${email}:`);
    console.log(`  Valid: ${result.valid}`);

    if ('domainSuggestion' in result && result.domainSuggestion) {
      console.log(`  Suggestion: ${result.domainSuggestion.suggested}`);
    }

    if ('detectedName' in result && result.detectedName) {
      console.log(`  Name: ${result.detectedName.firstName || 'Unknown'}`);
    }
  });
}

// Example 4: Check if domain is common
console.log('\nChecking Common Domains:');
console.log('========================');

const domainsToCheck = ['gmail.com', 'mycompany.com', 'yahoo.com', 'random.org'];
domainsToCheck.forEach((domain) => {
  const isCommon = isCommonDomain(domain);
  console.log(`${domain}: ${isCommon ? 'Common' : 'Not common'}`);
});

// Example 5: Domain similarity scores
console.log('\nDomain Similarity Scores:');
console.log('=========================');

const domainPairs = [
  ['gmail.com', 'gmial.com'],
  ['yahoo.com', 'yaho.com'],
  ['gmail.com', 'yahoo.com'],
  ['outlook.com', 'outlok.com'],
];

domainPairs.forEach(([domain1, domain2]) => {
  const similarity = getDomainSimilarity(domain1, domain2);
  console.log(`${domain1} vs ${domain2}: ${(similarity * 100).toFixed(1)}% similar`);
});

// Example 6: Custom common domains list
console.log('\nUsing Custom Common Domains List:');
console.log('==================================');

const customDomains = ['company.com', 'enterprise.org', 'startup.io'];
const testEmail = 'user@compny.com';

const suggestionWithCustomList = suggestEmailDomain(testEmail, customDomains);
if (suggestionWithCustomList) {
  console.log(`${testEmail}:`);
  console.log(`  Suggested: ${suggestionWithCustomList.suggested}`);
  console.log(`  Using custom domain list`);
}

// Run async examples
(async () => {
  await verifyWithSuggestions();

  // Show available common domains count
  console.log('\n========================================');
  console.log(`Total common domains available: ${COMMON_EMAIL_DOMAINS.length}`);
  console.log('Sample domains:', COMMON_EMAIL_DOMAINS.slice(0, 10).join(', '));
})();
