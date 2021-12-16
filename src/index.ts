import net from 'net';
import { promises as dnsPromises } from 'dns';

/**
 * @param  {String} smtpReply A message from the SMTP server.
 * @return {Boolean} True if over quota.
 */
function isOverQuota(smtpReply: string) {
  return smtpReply && /(over quota)/gi.test(smtpReply);
}

/**
 * @see https://support.google.com/a/answer/3221692?hl=en
 * @see http://www.greenend.org.uk/rjk/tech/smtpreplies.html
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

interface IVerifyEmailResult {
  wellFormed: boolean;
  validDomain: boolean | null;
  validMailbox: boolean | null;
}

interface IVerifyEmailParams {
  emailAddress: string;
  timeout?: number;
  verifyDomain?: boolean;
  verifyMailbox?: boolean;
  debug?: boolean;
}

const logMethod = console.debug;

export async function verifyEmail(params: IVerifyEmailParams): Promise<IVerifyEmailResult> {
  const { emailAddress, timeout = 4000, verifyDomain = true, verifyMailbox = false, debug = false } = params;
  const result: IVerifyEmailResult = { wellFormed: false, validDomain: null, validMailbox: null };

  const log = debug ? logMethod : (...args: any) => {};

  let local: string;
  let domain: string;
  let mxRecords: string[];

  try {
    [local, domain] = extractAddressParts(emailAddress);
  } catch (err) {
    log('Failed on wellFormed check', err);
    return result;
  }

  result.wellFormed = true;

  // save a DNS call
  if (!verifyDomain && !verifyMailbox) return result;

  try {
    mxRecords = await resolveMxRecords(domain);
    log('Found MX records', mxRecords);
  } catch (err) {
    log('Failed to resolve MX records', err);
    mxRecords = [];
  }

  if (verifyDomain) {
    result.validDomain = mxRecords && mxRecords.length > 0;
  }

  if (verifyMailbox) {
    result.validMailbox = await verifyMailboxSMTP({
      local,
      domain,
      mxRecords,
      timeout,
      debug,
    });
  }

  return result;
}

export function isEmail(address: string) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3})|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(address).toLowerCase()) && address.indexOf('.+') === -1;
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

type verifyMailBoxSMTP = { local: string; domain: string; mxRecords: string[]; timeout: number; debug: boolean };

async function verifyMailboxSMTP(params: verifyMailBoxSMTP): Promise<boolean> {
  const { local, domain, mxRecords = [], timeout, debug } = params;
  const [mxRecord] = mxRecords;

  const log = debug ? logMethod : (...args: any) => {};

  if (!mxRecord || /yahoo/.test(mxRecord)) {
    log('Cannot verify due to missing or unsupported MX record', mxRecord);
    return null;
  }

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

      log('Mailbox: got data', data);

      if (isInvalidMailboxError(data)) return ret(false);
      if (isOverQuota(data)) return ret(false);
      if (!data.includes('220') && !data.includes('250')) return ret(null);

      if (isMultilineGreet(data)) return;

      if (messages.length > 0) {
        const message = messages.shift();
        log('Mailbox: writing message', message);
        return socket.write(message + '\r\n');
      }

      ret(true);
    });

    socket.on('error', (err) => {
      log('Mailbox: error in socket', err);
      ret(null);
    });

    resTimeout = setTimeout(() => {
      log(`Mailbox: timed out (${timeout} ms)`);
      ret(null);
    }, timeout);
  });
}
