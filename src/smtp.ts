import net from 'node:net';

/**
 * @param  {String} smtpReply A message from the SMTP server.
 * @return {Boolean} True if over quota.
 */
function isOverQuota(smtpReply: string): boolean {
  return Boolean(smtpReply && /(over quota)/gi.test(smtpReply));
}

/**
 * @see https://support.google.com/a/answer/3221692?hl=en
 * @see http://www.greenend.org.uk/rjk/tech/smtpreplies.html
 * @param {String} smtpReply A response from the SMTP server.
 * @return {boolean} True if the error is recognized as a mailbox missing error.
 */
function isInvalidMailboxError(smtpReply: string): boolean {
  return Boolean(
    smtpReply &&
      /^(510|511|513|550|551|553)/.test(smtpReply) &&
      !/(junk|spam|openspf|spoofing|host|rbl.+blocked)/gi.test(smtpReply)
  );
}

/**
 * @see https://www.ietf.org/mail-archive/web/ietf-smtp/current/msg06344.html
 * @param {String} smtpReply A message from the SMTP server.
 * @return {Boolean} True if this is a multiline greet.
 */
function isMultilineGreet(smtpReply: string): boolean {
  return Boolean(smtpReply && /^(250|220)-/.test(smtpReply));
}

import type { VerifyMailboxSMTPParams } from './types';

export async function verifyMailboxSMTP(params: VerifyMailboxSMTPParams): Promise<boolean | null> {
  // Port 587 → STARTTLS
  // Port 465 → TLS
  const { local, domain, mxRecords = [], timeout, debug, port = 25, retryAttempts = 1 } = params;
  const log = debug ? console.debug : (..._args: unknown[]) => {};

  if (!mxRecords || mxRecords.length === 0) {
    return false;
  }

  // Try multiple MX records if first fails
  for (let mxIndex = 0; mxIndex < Math.min(mxRecords.length, 3); mxIndex++) {
    const mxRecord = mxRecords[mxIndex];

    // Retry logic for each MX record
    for (let attempt = 0; attempt < retryAttempts; attempt++) {
      const result = await attemptVerification({
        mxRecord,
        local,
        domain,
        port,
        timeout,
        log,
        attempt,
      });

      if (result !== null) {
        return result;
      }

      // Wait before retry
      if (attempt < retryAttempts - 1) {
        await new Promise((resolve) => setTimeout(resolve, Math.min(1000 * (attempt + 1), 3000)));
      }
    }
  }

  return null;
}

async function attemptVerification(params: {
  mxRecord: string;
  local: string;
  domain: string;
  port: number;
  timeout: number;
  log: (...args: unknown[]) => void;
  attempt: number;
}): Promise<boolean | null> {
  const { mxRecord, local, domain, port, timeout, log, attempt } = params;

  return new Promise((resolve) => {
    log(`[verifyMailboxSMTP] connecting to ${mxRecord}:${port} (attempt ${attempt + 1})`);
    const socket = net.connect({
      host: mxRecord,
      port,
    });

    let resTimeout: NodeJS.Timeout | null = null;
    let resolved = false;
    let cleaned = false;

    const cleanup = () => {
      if (cleaned) return;
      cleaned = true;

      if (resTimeout) {
        clearTimeout(resTimeout);
        resTimeout = null;
      }

      if (socket && !socket.destroyed) {
        socket.removeAllListeners();
        socket.destroy();
      }
    };

    const ret = (result: boolean | null) => {
      if (resolved) return;
      resolved = true;

      if (!socket?.destroyed) {
        log('[verifyMailboxSMTP] closing socket');
        socket?.write('QUIT\r\n');
        socket?.end();
      }

      cleanup();
      resolve(result);
    };

    const messages = [`HELO ${domain}`, `MAIL FROM: <${local}@${domain}>`, `RCPT TO: <${local}@${domain}>`];
    log('[verifyMailboxSMTP] writing messages', messages);
    socket.on('data', (data: string) => {
      const dataString = String(data);
      log('[verifyMailboxSMTP] got data', dataString);

      if (isInvalidMailboxError(dataString)) return ret(false);
      if (isOverQuota(dataString)) return ret(false);
      if (!dataString.includes('220') && !dataString.includes('250')) return ret(null);

      if (isMultilineGreet(dataString)) return;

      if (messages.length > 0) {
        const message = messages.shift();
        log('[verifyMailboxSMTP] writing message', message);
        return socket.write(`${message}\r\n`);
      }

      ret(true);
    });

    socket.on('error', (err) => {
      log('[verifyMailboxSMTP] error in socket', err);
      ret(null);
    });

    socket.on('close', (err) => {
      if (!resolved) {
        log('[verifyMailboxSMTP] close socket', err);
        ret(null);
      }
    });

    socket.on('timeout', () => {
      log('[verifyMailboxSMTP] timeout socket');
      ret(null);
    });

    resTimeout = setTimeout(() => {
      log(`[verifyMailboxSMTP] timed out (${timeout} ms)`);
      if (!resolved) {
        socket.destroy();
        ret(null);
      }
    }, timeout);
  });
}
