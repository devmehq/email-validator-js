# Advanced Email Validator

[![NPM version](https://badgen.net/npm/v/@devmehq/email-validator-js)](https://npm.im/@devmehq/email-validator-js)
[![Build Status](https://github.com/devmehq/email-validator-js/workflows/CI/badge.svg)](https://github.com/devmehq/email-validator-js/actions)
[![Downloads](https://img.shields.io/npm/dm/email-validator-js.svg)](https://www.npmjs.com/package/email-validator-js)
[![UNPKG](https://img.shields.io/badge/UNPKG-OK-179BD7.svg)](https://unpkg.com/browse/@devmehq/email-validator-js@latest/)
[![TypeScript](https://img.shields.io/badge/TypeScript-Ready-blue.svg)](https://www.typescriptlang.org/)
[![License](https://img.shields.io/badge/license-BSL%201.1-blue.svg)](LICENSE.md)

🚀 **Advanced email validation library** for Node.js with **MX record checking**, **SMTP verification**, **disposable email detection**, and **much more**. Now with **batch processing**, **advanced caching**, and **detailed error reporting**.

## 📋 Table of Contents

- [Features](#features)
- [Use Cases](#use-cases)
- [API / Cloud Service](#api--cloud-hosted-service)
- [License](#license)
- [Installation](#installation)
- [Quick Start](#quick-start)
- [API Reference](#api-reference)
- [Configuration](#configuration-options)
- [Examples](#examples)
- [Performance & Caching](#-performance--caching)
- [Email Provider Databases](#️-email-provider-databases)
- [Testing](#testing)
- [Contributing](#contributing)

## Features

✅ Check email address validity

✅ Check email address domain validity in domain TLD list

✅ Check email address MX records

✅ Check email address SMTP connection

✅ Check email address disposable or burnable status

✅ Check email address free email provider status

✅ **NEW:** Batch email verification with concurrency control

✅ **NEW:** Detailed verification results with error codes

✅ **NEW:** Built-in caching for improved performance

✅ **NEW:** Automatic retry mechanism for transient failures

✅ **NEW:** RFC 5321 compliant validation

✅ **NEW:** Name detection from email addresses

✅ **NEW:** Domain typo detection and suggestions with caching

✅ **NEW:** Get domain age via WHOIS lookup

✅ **NEW:** Get domain registration status via WHOIS lookup

## Use Cases

- Increase delivery rate of email campaigns by removing spam emails
- Increase email open rate and your marketing IPs reputation
- Protect your website from spam, bots and fake emails
- Protect your product signup form from fake emails
- Protect your website forms from fake emails
- Protect your self from fraud orders and accounts using fake emails
- Integrate email address verification into your website forms
- Integrate email address verification into your backoffice administration and order processing

## API / Cloud Hosted Service

We offer this `email verification and validation and more advanced features` in our Scalable Cloud API Service Offering - You could try it here [Email Verification](https://dev.me/products/email)

---

## License

email-validator-js is licensed under [Business Source License 1.1](LICENSE.md).

### Quick License Summary

| Use Case | Is a commercial license required?|
|----------|-----------|
| Exploring email-validator-js for your own research, hobbies, and testing purposes | **No** |
| Using email-validator-js to build a proof-of-concept application | **No** |
| Using email-validator-js to build revenue-generating applications | **Yes** |
| Using email-validator-js to build software that is provided as a service (SaaS) | **Yes** |
| Forking email-validator-js for any production purposes | **Yes** |

📄 **For commercial licensing**, visit [dev.me/license/email-validator](https://dev.me/license/email-validator) or contact us at [sales@dev.me](mailto:sales@dev.me?subject=Interested%20in%20email-validator-js%20commercial%20license).

---

## Installation

Install the module through Yarn:
```bash
yarn add @devmehq/email-validator-js
```

Or NPM:
```bash
npm install @devmehq/email-validator-js
```

### Requirements
- Node.js >= 12.0
- TypeScript >= 4.0 (for TypeScript users)

## Quick Start

```typescript
import { verifyEmail } from '@devmehq/email-validator-js';

// Basic usage
const result = await verifyEmail({
  emailAddress: 'user@example.com',
  verifyMx: true,
  verifySmtp: true,
  timeout: 3000
});

console.log(result.validFormat); // true
console.log(result.validMx);     // true
console.log(result.validSmtp);   // true or false
```

## API Reference

### Core Functions

#### `verifyEmail(params: IVerifyEmailParams): Promise<IVerifyEmailResult>`

Basic email verification with backward compatibility.

**Parameters:**
- `emailAddress` (string, required): Email address to verify
- `timeout` (number): Timeout in milliseconds (default: 4000)
- `verifyMx` (boolean): Check MX records (default: false)
- `verifySmtp` (boolean): Verify SMTP connection (default: false)
- `smtpPort` (number): Custom SMTP port
- `debug` (boolean): Enable debug logging (default: false)
- `detectName` (boolean): Detect names from email address (default: false)
- `nameDetectionMethod` (function): Custom name detection method
- `suggestDomain` (boolean): Enable domain typo suggestions (default: false)
- `domainSuggestionMethod` (function): Custom domain suggestion method
- `commonDomains` (string[]): Custom list of domains for suggestions

**Returns:**
```typescript
{
  validFormat: boolean;
  validMx: boolean | null;
  validSmtp: boolean | null;
  detectedName?: DetectedName | null;
  domainSuggestion?: DomainSuggestion | null;
}
```

#### `verifyEmailDetailed(params: IVerifyEmailParams): Promise<DetailedVerificationResult>`

Advanced verification with detailed results and error codes.

**Additional Parameters:**
- `checkDisposable` (boolean): Check for disposable emails (default: true)
- `checkFree` (boolean): Check for free email providers (default: true)
- `retryAttempts` (number): Retry attempts for failures (default: 1)
- `detectName` (boolean): Detect names from email address (default: false)
- `suggestDomain` (boolean): Enable domain typo suggestions (default: true in detailed mode)

**Returns:**
```typescript
{
  valid: boolean;
  email: string;
  format: {
    valid: boolean;
    error?: VerificationErrorCode;
  };
  domain: {
    valid: boolean | null;
    mxRecords?: string[];
    error?: VerificationErrorCode;
  };
  smtp: {
    valid: boolean | null;
    error?: VerificationErrorCode;
  };
  disposable: boolean;
  freeProvider: boolean;
  detectedName?: DetectedName | null;
  domainSuggestion?: DomainSuggestion | null;
  metadata?: {
    verificationTime: number;
    cached: boolean;
  };
}
```

#### `verifyEmailBatch(params: IBatchVerifyParams): Promise<BatchVerificationResult>`

Verify multiple emails in parallel with concurrency control.

**Parameters:**
- `emailAddresses` (string[], required): Array of emails to verify
- `concurrency` (number): Parallel processing limit (default: 5)
- `detailed` (boolean): Return detailed results (default: false)
- `detectName` (boolean): Detect names from email addresses
- `suggestDomain` (boolean): Enable domain typo suggestions
- Other parameters from `verifyEmail`

**Returns:**
```typescript
{
  results: Map<string, DetailedVerificationResult | IVerifyEmailResult>;
  summary: {
    total: number;
    valid: number;
    invalid: number;
    errors: number;
    processingTime: number;
  };
}
```

### Name Detection Functions

#### `detectName(email: string): DetectedName | null`
Detect first and last name from email address.

```typescript
const name = detectName('john.doe@example.com');
// Returns: { firstName: 'John', lastName: 'Doe', confidence: 0.9 }
```

**Detection Patterns:**
- Dot separator: `john.doe` → John Doe (90% confidence)
- Underscore: `jane_smith` → Jane Smith (80% confidence)
- Hyphen: `mary-johnson` → Mary Johnson (80% confidence)
- CamelCase: `johnDoe` → John Doe (70% confidence)
- Single name: `alice` → Alice (50% confidence)

**Features:**
- Removes email aliases (text after +)
- Strips trailing numbers
- Proper name capitalization
- Filters out common non-name prefixes (admin, support, info, etc.)

#### `detectNameFromEmail(params: IDetectNameParams): DetectedName | null`
Advanced name detection with custom method support.

```typescript
const customMethod = (email: string) => {
  // Your custom logic
  return { firstName: 'Custom', lastName: 'Name', confidence: 1.0 };
};

const name = detectNameFromEmail({
  email: 'user@example.com',
  customMethod: customMethod
});
```

**Parameters:**
- `email` (string): Email address
- `customMethod` (function): Custom detection logic

#### `defaultNameDetectionMethod(email: string): DetectedName | null`
The default name detection implementation, exported for custom extensions.

### Domain Suggestion Functions

#### `suggestEmailDomain(email: string, commonDomains?: string[]): DomainSuggestion | null`
Detect and suggest corrections for misspelled email domains.

```typescript
const suggestion = suggestEmailDomain('user@gmial.com');
// Returns: { original: 'user@gmial.com', suggested: 'user@gmail.com', confidence: 0.95 }

// With custom domain list
const customDomains = ['company.com', 'enterprise.org'];
const customSuggestion = suggestEmailDomain('user@compny.com', customDomains);
```

**Features:**
- 70+ common email domains by default
- String similarity algorithm
- Known typo patterns (95% confidence)
- Smart thresholds based on domain length
- 24-hour caching for performance

#### `suggestDomain(params: ISuggestDomainParams): DomainSuggestion | null`
Advanced domain suggestion with custom method support.

```typescript
const suggestion = suggestDomain({
  domain: 'gmial.com',
  customMethod: myCustomMethod,
  commonDomains: ['company.com']
});
```

**Parameters:**
- `domain` (string): Domain to check
- `customMethod` (function): Custom suggestion logic
- `commonDomains` (string[]): Custom domain list

#### `defaultDomainSuggestionMethod(domain: string, commonDomains?: string[]): DomainSuggestion | null`
The default domain suggestion implementation, exported for custom extensions.

#### `isCommonDomain(domain: string, commonDomains?: string[]): boolean`
Check if a domain is in the common domains list.

```typescript
isCommonDomain('gmail.com'); // true
isCommonDomain('mycompany.com'); // false

// With custom list
isCommonDomain('mycompany.com', ['mycompany.com']); // true
```

#### `getDomainSimilarity(domain1: string, domain2: string): number`
Calculate similarity score between two domains (0-1).

```typescript
getDomainSimilarity('gmail.com', 'gmial.com'); // 0.8
getDomainSimilarity('gmail.com', 'yahoo.com'); // 0.3
```

### WHOIS Functions

#### `getDomainAge(domain: string, timeout?: number): Promise<DomainAgeInfo | null>`
Get domain age information via WHOIS lookup.

```typescript
const ageInfo = await getDomainAge('example.com');
// Returns:
// {
//   domain: 'example.com',
//   creationDate: Date,
//   ageInDays: 7890,
//   ageInYears: 21.6,
//   expirationDate: Date,
//   updatedDate: Date
// }

// Works with email addresses and URLs too
await getDomainAge('user@example.com');
await getDomainAge('https://example.com/path');
```

**Parameters:**
- `domain` (string): Domain, email, or URL to check
- `timeout` (number): Timeout in milliseconds (default: 5000)

**Returns:** `DomainAgeInfo` object or `null` if lookup fails

#### `getDomainRegistrationStatus(domain: string, timeout?: number): Promise<DomainRegistrationInfo | null>`
Get detailed domain registration status via WHOIS.

```typescript
const status = await getDomainRegistrationStatus('example.com');
// Returns:
// {
//   domain: 'example.com',
//   isRegistered: true,
//   isAvailable: false,
//   status: ['clientTransferProhibited'],
//   registrar: 'Example Registrar',
//   nameServers: ['ns1.example.com', 'ns2.example.com'],
//   expirationDate: Date,
//   isExpired: false,
//   daysUntilExpiration: 365,
//   isPendingDelete: false,
//   isLocked: true
// }
```

**Parameters:**
- `domain` (string): Domain, email, or URL to check
- `timeout` (number): Timeout in milliseconds (default: 5000)

**Returns:** `DomainRegistrationInfo` object or `null` if lookup fails

**Features:**
- Supports 50+ TLDs with specific WHOIS servers
- Automatic WHOIS server discovery for unknown TLDs
- Parses various WHOIS response formats
- 1-hour result caching
- Extracts domain from emails and URLs

### Utility Functions

#### `isDisposableEmail(emailOrDomain: string): boolean`
Check if email uses a disposable provider.

```typescript
isDisposableEmail('user@tempmail.com'); // true
isDisposableEmail('tempmail.com'); // true
isDisposableEmail('gmail.com'); // false
```

#### `isFreeEmail(emailOrDomain: string): boolean`
Check if email uses a free provider.

```typescript
isFreeEmail('user@gmail.com'); // true
isFreeEmail('yahoo.com'); // true
isFreeEmail('corporate.com'); // false
```

#### `isValidEmail(emailAddress: string): boolean`
Validate email format (RFC 5321 compliant).

```typescript
isValidEmail('user@example.com'); // true
isValidEmail('invalid.email'); // false
```

**Validation Rules:**
- Proper @ symbol placement
- Local part max 64 characters
- Domain max 253 characters
- No consecutive dots
- No leading/trailing dots
- Valid domain TLD

#### `isValidEmailDomain(emailOrDomain: string): boolean`
Validate if a domain has a valid TLD.

```typescript
isValidEmailDomain('example.com'); // true
isValidEmailDomain('example.invalid'); // false
```

#### `clearAllCaches(): void`
Clear all internal caches (including domain suggestions).

```typescript
clearAllCaches();
```

### Types and Interfaces

#### `DetectedName`
```typescript
interface DetectedName {
  firstName?: string;
  lastName?: string;
  confidence: number; // 0-1 scale
}
```

#### `DomainSuggestion`
```typescript
interface DomainSuggestion {
  original: string;
  suggested: string;
  confidence: number; // 0-1 scale
}
```

#### `NameDetectionMethod`
```typescript
type NameDetectionMethod = (email: string) => DetectedName | null;
```

#### `DomainSuggestionMethod`
```typescript
type DomainSuggestionMethod = (domain: string) => DomainSuggestion | null;
```

#### `DomainAgeInfo`
```typescript
interface DomainAgeInfo {
  domain: string;
  creationDate: Date;
  ageInDays: number;
  ageInYears: number;
  expirationDate: Date | null;
  updatedDate: Date | null;
}
```

#### `DomainRegistrationInfo`
```typescript
interface DomainRegistrationInfo {
  domain: string;
  isRegistered: boolean;
  isAvailable: boolean;
  status: string[];
  registrar: string | null;
  nameServers: string[];
  expirationDate: Date | null;
  isExpired: boolean;
  daysUntilExpiration: number | null;
  isPendingDelete?: boolean;
  isLocked?: boolean;
}
```

### Constants

#### `COMMON_EMAIL_DOMAINS`
Array of 70+ common email domains used for typo detection.

```typescript
import { COMMON_EMAIL_DOMAINS } from '@devmehq/email-validator-js';

console.log(COMMON_EMAIL_DOMAINS);
// ['gmail.com', 'yahoo.com', 'outlook.com', 'hotmail.com', ...]
```

**Includes:**
- Popular free providers (Gmail, Yahoo, Outlook, etc.)
- Business email services (Google Workspace, Microsoft, etc.)
- Privacy-focused providers (ProtonMail, Tutanota, etc.)
- Regional providers (GMX, Yandex, QQ, etc.)
- Hosting services (GoDaddy, Namecheap, etc.)

### Error Codes

```typescript
enum VerificationErrorCode {
  INVALID_FORMAT = 'INVALID_FORMAT',
  INVALID_DOMAIN = 'INVALID_DOMAIN',
  NO_MX_RECORDS = 'NO_MX_RECORDS',
  SMTP_CONNECTION_FAILED = 'SMTP_CONNECTION_FAILED',
  SMTP_TIMEOUT = 'SMTP_TIMEOUT',
  MAILBOX_NOT_FOUND = 'MAILBOX_NOT_FOUND',
  MAILBOX_FULL = 'MAILBOX_FULL',
  NETWORK_ERROR = 'NETWORK_ERROR',
  DISPOSABLE_EMAIL = 'DISPOSABLE_EMAIL',
  FREE_EMAIL_PROVIDER = 'FREE_EMAIL_PROVIDER'
}
```

## Configuration Options

### `timeout`
Set a timeout in milliseconds for the smtp connection. Default: `4000`.

### `verifyMx`
Enable or disable domain checking. This is done in two steps:
1. Verify that the domain does indeed exist
2. Verify that the domain has valid MX records

Default: `false`.

### `verifySmtp`
Enable or disable mailbox checking. Only a few SMTP servers allow this, and even then whether it works depends on your IP's reputation with those servers. This library performs a best effort validation:
* It returns `null` for Yahoo addresses, for failed connections, for unknown SMTP errors
* It returns `true` for valid SMTP responses
* It returns `false` for SMTP errors specific to the address's formatting or mailbox existence

Default: `false`.

### `checkDisposable` (NEW)
Check if the email domain is a known disposable email provider. Default: `false`.

### `checkFree` (NEW)
Check if the email domain is a known free email provider. Default: `false`.

### `detailed` (NEW)
Return detailed verification results with error codes. Default: `false`.

### `retryAttempts` (NEW)
Number of retry attempts for transient failures. Default: `1`.

## Examples

### Basic Usage
```typescript
import { verifyEmail } from '@devmehq/email-validator-js';

const { validFormat, validSmtp, validMx } = await verifyEmail({ 
  emailAddress: 'foo@email.com', 
  verifyMx: true, 
  verifySmtp: true, 
  timeout: 3000 
});
// validFormat: true
// validMx: true
// validSmtp: true
```

### Detailed Verification (NEW)
```typescript
import { verifyEmailDetailed } from '@devmehq/email-validator-js';

const result = await verifyEmailDetailed({
  emailAddress: 'foo@email.com',
  verifyMx: true,
  verifySmtp: true,
  checkDisposable: true,
  checkFree: true
});
// result.valid: true
// result.disposable: false
// result.freeProvider: false
// result.domain.mxRecords: ['mx1.email.com', 'mx2.email.com']
// result.metadata.verificationTime: 125
```

### Batch Verification (NEW)
```typescript
import { verifyEmailBatch } from '@devmehq/email-validator-js';

const emails = ['user1@gmail.com', 'user2@example.com', 'invalid@fake.com'];

const result = await verifyEmailBatch({
  emailAddresses: emails,
  concurrency: 5,
  verifyMx: true,
  detailed: true
});
// result.summary.valid: 2
// result.summary.invalid: 1
// result.summary.processingTime: 234
```

### Name Detection (NEW)
```typescript
import { detectName, verifyEmailDetailed } from '@devmehq/email-validator-js';

// Standalone name detection
const name = detectName('john.doe@example.com');
// name: { firstName: 'John', lastName: 'Doe', confidence: 0.9 }

// Integrated with email verification
const result = await verifyEmailDetailed({
  emailAddress: 'jane_smith@example.com',
  detectName: true
});
// result.detectedName: { firstName: 'Jane', lastName: 'Smith', confidence: 0.8 }

// Custom detection method
const customMethod = (email: string) => {
  // Your custom logic here
  return { firstName: 'Custom', lastName: 'Name', confidence: 1.0 };
};

const resultCustom = await verifyEmail({
  emailAddress: 'user@example.com',
  detectName: true,
  nameDetectionMethod: customMethod
});
```

### Domain Typo Detection (NEW)
```typescript
import { suggestEmailDomain, verifyEmailDetailed } from '@devmehq/email-validator-js';

// Standalone domain suggestion
const suggestion = suggestEmailDomain('user@gmial.com');
// suggestion: { original: 'user@gmial.com', suggested: 'user@gmail.com', confidence: 0.95 }

// Integrated with email verification (enabled by default in detailed mode)
const result = await verifyEmailDetailed({
  emailAddress: 'john@yaho.com',
  suggestDomain: true  // Default: true for detailed verification
});
// result.domainSuggestion: { original: 'john@yaho.com', suggested: 'john@yahoo.com', confidence: 0.9 }

// With custom domain list
const customDomains = ['company.com', 'enterprise.org'];
const resultCustom = await verifyEmail({
  emailAddress: 'user@compny.com',
  suggestDomain: true,
  commonDomains: customDomains
});
// resultCustom.domainSuggestion: { suggested: 'user@company.com', confidence: 0.85 }
```

### Handling Different Validation Scenarios

When a domain does not exist or has no MX records:
```typescript
const result = await verifyEmail({ 
  emailAddress: 'foo@bad-domain.com', 
  verifyMx: true, 
  verifySmtp: true 
});
// validFormat: true
// validMx: false
// validSmtp: null (couldn't be performed)
```

### Using Detailed Verification for Better Insights

```typescript
const detailed = await verifyEmailDetailed({
  emailAddress: 'user@suspicious-domain.com',
  verifyMx: true,
  verifySmtp: true,
  checkDisposable: true,
  checkFree: true
});

if (!detailed.valid) {
  switch (detailed.domain.error) {
    case VerificationErrorCode.DISPOSABLE_EMAIL:
      console.log('Rejected: Disposable email');
      break;
    case VerificationErrorCode.NO_MX_RECORDS:
      console.log('Rejected: Invalid domain');
      break;
    case VerificationErrorCode.MAILBOX_NOT_FOUND:
      console.log('Rejected: Mailbox does not exist');
      break;
  }
}
```

### Batch Processing for Large Lists

```typescript
const emails = [
  'valid@gmail.com',
  'test@tempmail.com',
  'user@company.com',
  // ... hundreds more
];

const batch = await verifyEmailBatch({
  emailAddresses: emails,
  concurrency: 10, // Process 10 emails simultaneously
  verifyMx: true,
  checkDisposable: true,
  detailed: true
});

console.log(`Processed ${batch.summary.total} emails`);
console.log(`Valid: ${batch.summary.valid}`);
console.log(`Invalid: ${batch.summary.invalid}`);
console.log(`Time: ${batch.summary.processingTime}ms`);

// Filter out invalid emails
const validEmails = [];
for (const [email, result] of batch.results) {
  if (result.valid) {
    validEmails.push(email);
  }
}
```

### Performance Optimization with Caching

```typescript
// First verification - hits DNS and SMTP
const first = await verifyEmail({ 
  emailAddress: 'cached@example.com',
  verifyMx: true 
});
// Takes ~500ms

// Second verification - uses cache
const second = await verifyEmail({ 
  emailAddress: 'cached@example.com',
  verifyMx: true 
});
// Takes ~1ms (cached)

// Clear cache if needed
clearAllCaches();
```

**Note:** Yahoo, Hotmail, and some providers always return `validSmtp: true` as they don't allow mailbox verification.

## 📊 Performance & Caching

The library includes intelligent caching to improve performance:

| Cache Type | TTL | Description |
|------------|-----|-------------|
| MX Records | 1 hour | DNS MX record lookups |
| Disposable | 24 hours | Disposable email checks |
| Free Provider | 24 hours | Free email provider checks |
| Domain Valid | 24 hours | Domain validation results |
| SMTP | 30 minutes | SMTP verification results |
| Domain Suggestions | 24 hours | Domain typo suggestions |

### Performance Tips

1. **Use Batch Processing**: For multiple emails, use `verifyEmailBatch()` for parallel processing
2. **Enable Caching**: Caching is automatic and reduces repeated lookups by ~90%
3. **Adjust Timeouts**: Lower timeouts for faster responses, higher for accuracy
4. **Skip SMTP**: If you only need format/MX validation, skip SMTP for 10x faster results
5. **Domain Suggestions**: Cached for 24 hours to avoid recalculating similarity scores
6. **Name Detection**: Lightweight operation with minimal performance impact

## 🗂️ Email Provider Databases

### Disposable Email Providers (✅ Always Updated)
[View List](./src/disposable-email-providers.json) - 5,000+ disposable email domains

### Free Email Providers (✅ Always Updated)  
[View List](./src/free-email-providers.json) - 1,000+ free email providers

### Common Email Domains (✅ NEW)
Access the list of 70+ common email domains used for typo detection:

```typescript
import { COMMON_EMAIL_DOMAINS } from '@devmehq/email-validator-js';

console.log(COMMON_EMAIL_DOMAINS);
// ['gmail.com', 'yahoo.com', 'outlook.com', 'hotmail.com', ...]

// Use with your own domain validation
const isCommon = COMMON_EMAIL_DOMAINS.includes('gmail.com'); // true
```

## Testing

Run the test suite:
```bash
yarn test
```

Run with coverage:
```bash
yarn test --coverage
```

Lint the code:
```bash
yarn lint
yarn lint-fix  # Auto-fix issues
```

Build the project:
```bash
yarn build
```

## Development

### Project Structure
```
email-validator-js/
├── src/                 # Source code
│   ├── index.ts        # Main entry point
│   ├── smtp.ts         # SMTP verification
│   ├── dns.ts          # DNS/MX lookups
│   ├── validator.ts    # Format validation
│   ├── cache.ts        # Caching system
│   ├── batch.ts        # Batch processing
│   └── types.ts        # TypeScript types
├── __tests__/          # Test files
├── examples/           # Usage examples
└── dist/              # Compiled output
```

### Scripts
```bash
yarn build      # Build TypeScript
yarn test       # Run tests
yarn lint       # Run ESLint
yarn lint-fix   # Fix ESLint issues
```

## Contributing

We welcome contributions! Please feel free to open an issue or create a pull request and fix bugs or add features. All contributions are welcome!

### How to Contribute
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Setup
```bash
# Clone the repo
git clone https://github.com/devmehq/email-validator-js.git
cd email-validator-js

# Install dependencies
yarn install

# Run tests
yarn test

# Build
yarn build
```

## Support

For issues, questions, or commercial licensing:
- 🐛 [Open an Issue](https://github.com/devmehq/email-validator-js/issues)
- 📧 [Email Support](mailto:support@dev.me)
- 📄 [Commercial License](https://dev.me/license/email-validator)
- 🌐 [Visit Dev.me](https://dev.me)

## LICENSE 

[Business Source License 1.1](LICENSE.md) - see [LICENSE](LICENSE.md) file for details.

For commercial use, please visit [dev.me/license/email-validator](https://dev.me/license/email-validator).
