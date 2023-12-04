# Advanced Email Validator

[![NPM version](https://badgen.net/npm/v/@devmehq/email-validator-js)](https://npm.im/@devmehq/email-validator-js)
[![Build Status](https://github.com/devmehq/email-validator-js/workflows/CI/badge.svg)](https://github.com/devmehq/email-validator-js/actions)
[![Downloads](https://img.shields.io/npm/dm/email-validator-js.svg)](https://www.npmjs.com/package/email-validator-js)
[![UNPKG](https://img.shields.io/badge/UNPKG-OK-179BD7.svg)](https://unpkg.com/browse/@devmehq/email-validator-js@latest/)

Verify email address checking MX records, and SMTP connection, check for disposable email addresses and free email providers.

## Features
✅ Check email address validity

✅ Check email address domain validity in domain TLD list

✅ Check email address MX records

✅ Check email address SMTP connection

✅ Check email address disposable or burnable status

✅ Check email address free email provider status

🚨 Check domain age and quality score - _**soon**_

🚨 Check domain registration status - _**soon**_

## Use cases
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


## Self-hosting - installation and usage instructions

## Installation
Install the module through YARN:
```yarn
yarn add @devmehq/email-validator-js
```
Or NPM
```npm
npm install @devmehq/email-validator-js
```

## Examples
```typescript
import { verifyEmail } from '@devmehq/email-validator-js';

const { validFormat, validSmtp, validMx } = await verifyEmail({ emailAddress: 'foo@email.com', verifyMx: true, verifySmtp: true, timeout: 3000 });
// validFormat: true
// validMx: true
// validSmtp: true
```

When a domain does not exist or has no MX records, the domain validation will fail, and the mailbox validation will return `null` because it could not be performed:

```typescript
const { validFormat, validSmtp, validMx } = await verifyEmail({ emailAddress: 'foo@bad-domain.com', verifyMx: true, verifySmtp: true, timeout: 3000 });
// validFormat: true
// validMx: false
// validSmtp: null
```

A valid Yahoo domain will still return `validSmtp` true because their SMTP servers do not allow verifying if a mailbox exists.

## Configuration options
### `timeout`
Set a timeout in seconds for the smtp connection. Default: `10000`.
### `verifyMx`
Enable or disable domain checking. This is done in two steps:
1. Verify that the domain does indeed exist;
2. Verify that the domain has valid MX records.
Default: `false`.
### `verifySmtp`
Enable or disable mailbox checking. Only a few SMTP servers allow this, and even then whether it works depends on your IP's reputation with those servers. This library performs a best effort validation:
* It returns `null` for Yahoo addresses, for failed connections, for unknown SMTP errors.
* It returns `true` for valid SMTP responses.
* It returns `false` for SMTP errors specific to the address's formatting or mailbox existence.
Default: `false`.

### Disposable email providers database ( ✅ Always Updated )
[Disposable email providers](./src/disposable-email-providers.json)

### Free email providers database  ( ✅ Always Updated )
[Free email providers](./src/free-email-providers.json)

## Testing
```bash
yarn test
```

## Contributing
Please feel free to open an issue or create a pull request and fix bugs or add features, All contributions are welcome. Thank you!

## LICENSE [MIT](LICENSE.md)
