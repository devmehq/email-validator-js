import net from 'net';

/**
 * @param  {String} smtpReply A message from the SMTP server.
 * @return {Boolean} True if over quota.
 */
function isOverQuota(smtpReply: string): boolean {
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
function isMultilineGreet(smtpReply: string): boolean {
  return smtpReply && /^(250|220)-/.test(smtpReply);
}

type verifyMailBoxSMTP = { port?: number; local: string; domain: string; mxRecords: string[]; timeout: number; debug: boolean };

export async function verifyMailboxSMTP(params: verifyMailBoxSMTP): Promise<boolean> {
  // Port 587 → STARTTLS
  // Port 465 → TLS
  const { local, domain, mxRecords = [], timeout, debug, port = 25 } = params;
  const mxRecord = mxRecords[0];
  const log = debug ? console.debug : () => {};

  if (!mxRecord) {
    return false;
  }

  return new Promise((resolve) => {
    log('[verifyMailboxSMTP] connecting to', mxRecord, port);
    const socket = net.connect({
      host: mxRecord,
      port,
    });
    // eslint-disable-next-line prefer-const
    let resTimeout: NodeJS.Timeout;
    let resolved: boolean;

    const ret = (result: boolean) => {
      if (resolved) return;

      if (!socket?.destroyed) {
        log('[verifyMailboxSMTP] closing socket');
        socket?.write('QUIT\r\n');
        socket?.end();
      }

      clearTimeout(resTimeout);
      resolve(result);
      resolved = true;
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
      log('[verifyMailboxSMTP] close socket', err);
      ret(null);
    });

    socket.on('timeout', () => {
      log('[verifyMailboxSMTP] timeout socket');
      ret(null);
    });

    resTimeout = setTimeout(() => {
      log(`[verifyMailboxSMTP] timed out (${timeout} ms)`);
      socket.destroy();
      ret(null);
    }, timeout);
  });
}
