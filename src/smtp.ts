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
function isMultilineGreet(smtpReply: string) {
  return smtpReply && /^(250|220)-/.test(smtpReply);
}

const logMethod = console.debug;

type verifyMailBoxSMTP = { port?: number; local: string; domain: string; mxRecords: string[]; timeout: number; debug: boolean };

export async function verifyMailboxSMTP(params: verifyMailBoxSMTP): Promise<boolean> {
  // Port 587 → STARTTLS
  // Port 465 → TLS
  const { local, domain, mxRecords = [], timeout, debug, port = 25 } = params;
  const mxRecord = mxRecords[0];
  const log = debug ? logMethod : (...args: any) => {};

  if (!mxRecord) {
    return false;
  }

  return new Promise((resolve) => {
    const socket = net.connect(port, mxRecord);
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

    socket.on('close', (err) => {
      log('Mailbox: close socket', err);
      ret(null);
    });

    socket.on('timeout', () => {
      log('Mailbox: timeout socket');
      ret(null);
    });

    resTimeout = setTimeout(() => {
      log(`Mailbox: timed out (${timeout} ms)`);
      ret(null);
    }, timeout);
  });
}
