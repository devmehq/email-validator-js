import dns from 'dns';
import net from 'net';

const dnsPromises = dns.promises;

/**
 * @param  {String} smtpReply A message from the SMTP server.
 * @return {Boolean} True if over quota.
 */
function isOverQuota(smtpReply: string) {
  return smtpReply && /(over quota)/gi.test(smtpReply);
}

/**
 * @see http://www.serversmtp.com/en/smtp-error
 * @param {String} smtpReply A response from the SMTP server.
 * @return {boolean} True if the error is recognized as a mailbox missing error.
 */
function isInvalidMailboxError(smtpReply: string): boolean {
  return smtpReply && /^(510|511|513|550|551|553)/.test(smtpReply) && !/(junk|spam|openspf|spoofing|host|rbl.+blocked)/gi.test(smtpReply);
}

/**
 * @see https://www.ietf.org/mail-archive/web/ietf-smtp/current/msg06344.html
 * @param {String} smtpReply A message from the SMTP server.
 * @return {Boolean} True if this is a multiline greet.
 */
function isMultilineGreet(smtpReply: string) {
  return smtpReply && /^(250|220)-/.test(smtpReply);
}

export const defaultOptions = {
  timeout: 10000,
  verifyDomain: true,
  verifyMailbox: true,
};

interface IVerifyEmail {
  wellFormed: boolean;
  validDomain: boolean | null;
  validMailbox: boolean | null;
}

export async function verifyMailBox({ emailAddress, options }: { emailAddress: string; options?: Partial<typeof defaultOptions> }): Promise<IVerifyEmail> {
  const result: IVerifyEmail = { wellFormed: false, validDomain: null, validMailbox: null };
  options = { ...options, ...defaultOptions };
  let local: string;
  let domain: string;
  let mxRecords: string[];

  try {
    [local, domain] = extractAddressParts(emailAddress);
  } catch (err) {
    console.debug('Failed on wellFormed check', err);
    return result;
  }

  result.wellFormed = true;

  // save a DNS call
  if (!options.verifyDomain && !options.verifyMailbox) return result;

  try {
    mxRecords = await resolveMxRecords(domain);
    console.debug('Found MX records', mxRecords);
  } catch (err) {
    console.debug('Failed to resolve MX records', err);
    mxRecords = [];
  }

  if (options.verifyDomain) {
    result.validDomain = mxRecords && mxRecords.length > 0;
  }

  if (options.verifyMailbox) {
    result.validMailbox = await verifyMailbox(local, domain, mxRecords, options.timeout);
  }

  return result;
}

export function isEmail(address: string) {
  return address.includes('@');
}

export function extractAddressParts(address: string) {
  if (!isEmail(address)) {
    throw new Error(`"${address}" is not a valid email address`);
  }

  return address.split('@');
}

export async function resolveMxRecords(domain: string) {
  const records: { exchange: string; priority: number }[] = await dnsPromises.resolveMx(domain);
  records.sort((a, b) => {
    if (a.priority < b.priority) {
      return -1;
    }
    if (a.priority > b.priority) {
      return 1;
    }
    return 0;
  });
  return records.map((record) => record.exchange);
}

async function verifyMailbox(local: string, domain: string, [mxRecord]: any, timeout: number): Promise<boolean> {
  if (!mxRecord || /yahoo/.test(mxRecord)) {
    console.debug('Cannot verify due to missing or unsupported MX record', mxRecord);
    return null;
  }

  // https://mailtrap.io/blog/smtp-commands-and-responses/
  return new Promise((resolve) => {
    const socket = net.connect(25, mxRecord);
    // eslint-disable-next-line prefer-const
    let resTimeout: NodeJS.Timeout;
    let resolved: boolean;

    const ret = (result: boolean) => {
      if (resolved) return;

      if (!socket.destroyed) {
        socket.write('QUIT\r\n');
        socket.end();
      }

      clearTimeout(resTimeout);
      resolve(result);
      resolved = true;
    };

    const messages = [`HELO ${domain}`, `MAIL FROM: <${local}@${domain}>`, `RCPT TO: <${local}@${domain}>`];

    socket.on('data', (data: string) => {
      data = data.toString();

      console.debug('Mailbox: got data', data);

      if (isInvalidMailboxError(data)) return ret(false);
      if (isOverQuota(data)) return ret(false);
      if (!data.includes('220') && !data.includes('250')) return ret(null);

      if (isMultilineGreet(data)) return;

      if (messages.length > 0) {
        const message = messages.shift();
        console.debug('Mailbox: writing message', message);
        return socket.write(message + '\r\n');
      }

      ret(true);
    });

    socket.on('error', (err) => {
      console.debug('Mailbox: error in socket', err);
      ret(null);
    });

    resTimeout = setTimeout(() => {
      console.debug(`Mailbox: timed out (${timeout} ms)`);
      ret(null);
    }, timeout);
  });
}
