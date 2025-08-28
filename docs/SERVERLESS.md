# Serverless Email Validator

A comprehensive serverless implementation of email-validator-js that works across multiple cloud platforms without Node.js dependencies.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Platform Support](#platform-support)
- [Installation](#installation)
- [Usage Examples](#usage-examples)
- [API Reference](#api-reference)
- [Performance](#performance)
- [Limitations](#limitations)

## Overview

The serverless implementation of email-validator-js provides a platform-agnostic email validation solution that can run on various serverless platforms including AWS Lambda, Vercel Edge Functions, Cloudflare Workers, and more. This version is optimized for edge computing environments where Node.js APIs may not be available.

## Features

### Core Features
- ✅ **Syntax Validation** - RFC-compliant email syntax checking
- ✅ **Typo Detection** - Intelligent domain typo detection and suggestions
- ✅ **Disposable Email Detection** - Identifies temporary/disposable email addresses
- ✅ **Free Email Detection** - Identifies free email providers
- ✅ **Batch Processing** - Validate multiple emails efficiently
- ✅ **Built-in Caching** - Memory and KV-based caching support
- ✅ **Zero Node.js Dependencies** - Works in edge runtime environments

### Platform-Specific Features
- **AWS Lambda** - API Gateway integration, direct invocation support
- **Vercel** - Edge Runtime and Node.js runtime support
- **Cloudflare** - Workers, KV storage, Durable Objects support
- **Netlify** - Edge Functions support
- **Deno Deploy** - Native Deno runtime support

## Platform Support

### AWS Lambda

```javascript
// handler.js
import { apiGatewayHandler, lambdaHandler } from '@devmehq/email-validator-js/serverless/aws';

// For API Gateway
export const validateEmail = apiGatewayHandler;

// For direct Lambda invocation
export const directValidate = lambdaHandler;
```

**Deployment with Serverless Framework:**

```yaml
# serverless.yml
service: email-validator

provider:
  name: aws
  runtime: nodejs18.x
  region: us-east-1

functions:
  validate:
    handler: handler.validateEmail
    events:
      - http:
          path: /validate
          method: POST
          cors: true
      - http:
          path: /validate
          method: GET
          cors: true
```

**Deployment with SAM:**

```yaml
# template.yaml
AWSTemplateFormatVersion: '2010-09-09'
Transform: AWS::Serverless-2016-10-31

Resources:
  EmailValidatorFunction:
    Type: AWS::Serverless::Function
    Properties:
      Handler: handler.validateEmail
      Runtime: nodejs18.x
      Events:
        ValidateEmail:
          Type: Api
          Properties:
            Path: /validate
            Method: ANY
```

### Vercel Edge Functions

```javascript
// api/validate.js
import { edgeHandler } from '@devmehq/email-validator-js/serverless/vercel';

export const config = {
  runtime: 'edge',
};

export default edgeHandler;
```

**Deployment:**

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

**Usage with Next.js App Router:**

```javascript
// app/api/validate/route.js
import { edgeHandler } from '@devmehq/email-validator-js/serverless/vercel';

export const runtime = 'edge';

export async function GET(request) {
  return edgeHandler(request);
}

export async function POST(request) {
  return edgeHandler(request);
}
```

### Cloudflare Workers

```javascript
// worker.js
import { workerHandler } from '@devmehq/email-validator-js/serverless/cloudflare';

export default {
  async fetch(request, env, ctx) {
    return workerHandler(request, env, ctx);
  },
};
```

**wrangler.toml:**

```toml
name = "email-validator"
main = "worker.js"
compatibility_date = "2024-01-01"

[vars]
VALIDATION_CACHE_TTL = "3600"

[[kv_namespaces]]
binding = "EMAIL_CACHE"
id = "your-kv-namespace-id"
```

**Deployment:**

```bash
# Install Wrangler
npm i -g wrangler

# Deploy
wrangler publish
```

**With Durable Objects:**

```javascript
// worker.js
import { EmailValidatorDO } from '@devmehq/email-validator-js/serverless/cloudflare';

export { EmailValidatorDO };

export default {
  async fetch(request, env) {
    const id = env.EMAIL_VALIDATOR.idFromName('global');
    const validator = env.EMAIL_VALIDATOR.get(id);
    return validator.fetch(request);
  },
};
```

### Netlify Edge Functions

```javascript
// netlify/edge-functions/validate.js
import { validateEmailCore } from '@devmehq/email-validator-js/serverless/core';

export default async (request) => {
  const url = new URL(request.url);
  const email = url.searchParams.get('email');
  
  if (!email) {
    return new Response(
      JSON.stringify({ error: 'Email parameter required' }),
      { status: 400, headers: { 'Content-Type': 'application/json' } }
    );
  }
  
  const result = await validateEmailCore(email);
  
  return new Response(
    JSON.stringify(result),
    { headers: { 'Content-Type': 'application/json' } }
  );
};

export const config = {
  path: "/api/validate"
};
```

### Deno Deploy

```typescript
// validate.ts
import { validateEmailCore } from 'https://deno.land/x/email_validator_js/serverless/core.ts';

Deno.serve(async (req: Request) => {
  const url = new URL(req.url);
  
  if (req.method === 'GET') {
    const email = url.searchParams.get('email');
    if (!email) {
      return new Response('Email required', { status: 400 });
    }
    
    const result = await validateEmailCore(email);
    return Response.json(result);
  }
  
  if (req.method === 'POST') {
    const { email, emails } = await req.json();
    
    if (email) {
      const result = await validateEmailCore(email);
      return Response.json(result);
    }
    
    if (emails) {
      const results = await Promise.all(
        emails.map(e => validateEmailCore(e))
      );
      return Response.json(results);
    }
  }
  
  return new Response('Method not allowed', { status: 405 });
});
```

## Usage Examples

### Basic Email Validation

```javascript
import { validateEmailCore } from '@devmehq/email-validator-js/serverless/core';

const result = await validateEmailCore('user@example.com');
console.log(result);
// {
//   valid: true,
//   email: 'user@example.com',
//   local: 'user',
//   domain: 'example.com',
//   validators: {
//     syntax: { valid: true },
//     typo: { valid: true },
//     disposable: { valid: true },
//     free: { valid: true }
//   }
// }
```

### With Custom Options

```javascript
const result = await validateEmailCore('user@gmail.com', {
  validateSyntax: true,
  validateTypo: true,
  validateDisposable: true,
  validateFree: true,
  skipCache: false,
  domainSuggesterOptions: {
    threshold: 2,
    customDomains: ['company.com', 'business.org']
  }
});
```

### Batch Validation

```javascript
import { validateEmailBatch } from '@devmehq/email-validator-js/serverless/core';

const emails = [
  'valid@example.com',
  'invalid@',
  'user@gmial.com',
  'temp@disposable.com'
];

const results = await validateEmailBatch(emails, {
  validateTypo: true,
  validateDisposable: true,
  batchSize: 10 // Process in chunks of 10
});
```

### REST API Usage

```bash
# Single email validation
curl -X GET "https://your-api.com/validate?email=user@example.com"

# With options
curl -X GET "https://your-api.com/validate?email=user@example.com&validateTypo=true&validateDisposable=true"

# POST request
curl -X POST "https://your-api.com/validate" \
  -H "Content-Type: application/json" \
  -d '{
    "email": "user@example.com",
    "options": {
      "validateTypo": true,
      "validateDisposable": true
    }
  }'

# Batch validation
curl -X POST "https://your-api.com/validate" \
  -H "Content-Type: application/json" \
  -d '{
    "emails": ["user1@example.com", "user2@example.com"],
    "options": {
      "validateTypo": true,
      "batchSize": 10
    }
  }'
```

## API Reference

### Core Functions

#### `validateEmailCore(email, options?)`

Validates a single email address.

**Parameters:**
- `email` (string): The email address to validate
- `options` (ValidateEmailOptions): Optional validation configuration

**Returns:** `Promise<EmailValidationResult>`

#### `validateEmailBatch(emails, options?)`

Validates multiple email addresses.

**Parameters:**
- `emails` (string[]): Array of email addresses to validate
- `options` (ValidateEmailOptions): Optional validation configuration

**Returns:** `Promise<EmailValidationResult[]>`

#### `suggestDomain(domain, options?)`

Suggests corrections for potentially misspelled domains.

**Parameters:**
- `domain` (string): The domain to check
- `options` (DomainSuggesterOptions): Optional configuration

**Returns:** `string | null`

### Types

```typescript
interface ValidateEmailOptions {
  validateSyntax?: boolean;      // Default: true
  validateTypo?: boolean;         // Default: true
  validateDisposable?: boolean;   // Default: true
  validateFree?: boolean;        // Default: true
  validateMx?: boolean;          // Default: false (requires DNS)
  skipCache?: boolean;           // Default: false
  batchSize?: number;            // Default: 10
  domainSuggesterOptions?: DomainSuggesterOptions;
}

interface DomainSuggesterOptions {
  threshold?: number;            // Default: 2
  customDomains?: string[];      // Additional domains to check
}

interface EmailValidationResult {
  valid: boolean;
  email: string;
  local?: string;
  domain?: string;
  validators: {
    syntax?: { valid: boolean };
    typo?: { valid: boolean; suggestion?: string };
    disposable?: { valid: boolean };
    free?: { valid: boolean };
    mx?: { valid: boolean; records?: string[] };
  };
}
```

## Performance

### Benchmarks

| Platform | Cold Start | Warm Response | Memory Usage |
|----------|-----------|---------------|--------------|
| AWS Lambda | ~200ms | ~10ms | 128MB |
| Vercel Edge | ~50ms | ~5ms | N/A |
| Cloudflare Workers | ~10ms | ~2ms | N/A |
| Netlify Edge | ~30ms | ~5ms | N/A |
| Deno Deploy | ~20ms | ~3ms | N/A |

### Caching Strategy

The serverless implementation uses a multi-tier caching strategy:

1. **In-Memory Cache**: Default for all platforms
2. **KV Storage**: Cloudflare Workers, Vercel KV
3. **External Cache**: Redis, DynamoDB (optional)

### Optimization Tips

1. **Enable Caching**: Always use caching for production deployments
2. **Batch Requests**: Process multiple emails in a single request
3. **Regional Deployment**: Deploy to regions closest to your users
4. **Use CDN**: Enable CDN caching for GET requests

## Limitations

### No Node.js Dependencies

The serverless implementation does not include:
- MX record validation (requires DNS)
- SMTP verification (requires TCP sockets)
- WHOIS lookup (requires network access)

These features require Node.js APIs or network capabilities not available in all edge runtimes.

### Workarounds

For full validation including MX and SMTP:

1. **Two-Tier Architecture**: Use serverless for initial validation, then queue MX/SMTP checks to a Node.js service
2. **External Services**: Integrate with third-party email validation APIs for advanced checks
3. **Platform-Specific Solutions**: Use platform features like Cloudflare's TCP sockets when available

## Bundle Size

| Bundle | Size | Includes |
|--------|------|----------|
| Core Only | ~50KB | Basic validation logic |
| With Minimal Data | ~200KB | Top 1000 disposable, 500 free providers |
| With Full Data | ~5.8MB | All disposable and free providers |

## Migration from Node.js Version

```javascript
// Before (Node.js)
import EmailValidator from '@devmehq/email-validator-js';

const validator = new EmailValidator();
const result = await validator.validateEmail('user@example.com', {
  validateMx: true,
  validateSMTP: true
});

// After (Serverless)
import { validateEmailCore } from '@devmehq/email-validator-js/serverless/core';

const result = await validateEmailCore('user@example.com', {
  // MX and SMTP not available in edge runtime
  validateTypo: true,
  validateDisposable: true
});
```

## Contributing

Contributions are welcome! Please see our [Contributing Guide](../CONTRIBUTING.md) for details.

## License

BSL 1.1 - See [LICENSE](../LICENSE) for details.