import net from 'node:net';
import { whoisCache } from './cache';
import type { DomainAgeInfo, DomainRegistrationInfo, WhoisData } from './types';

const WHOIS_SERVERS: Record<string, string> = {
  com: 'whois.verisign-grs.com',
  net: 'whois.verisign-grs.com',
  org: 'whois.pir.org',
  info: 'whois.afilias.net',
  biz: 'whois.biz',
  io: 'whois.nic.io',
  co: 'whois.nic.co',
  uk: 'whois.nic.uk',
  de: 'whois.denic.de',
  fr: 'whois.afnic.fr',
  jp: 'whois.jprs.jp',
  au: 'whois.auda.org.au',
  ca: 'whois.cira.ca',
  eu: 'whois.eu',
  nl: 'whois.domain-registry.nl',
  ru: 'whois.tcinet.ru',
  br: 'whois.registro.br',
  cn: 'whois.cnnic.cn',
  in: 'whois.registry.in',
  me: 'whois.nic.me',
  us: 'whois.nic.us',
  tv: 'whois.nic.tv',
  cc: 'whois.nic.cc',
  ws: 'whois.website.ws',
  it: 'whois.nic.it',
  se: 'whois.iis.se',
  no: 'whois.norid.no',
  dk: 'whois.dk-hostmaster.dk',
  fi: 'whois.fi',
  es: 'whois.nic.es',
  ch: 'whois.nic.ch',
  pl: 'whois.dns.pl',
  be: 'whois.dns.be',
  at: 'whois.nic.at',
  ie: 'whois.iedr.ie',
  pt: 'whois.dns.pt',
  cz: 'whois.nic.cz',
  nz: 'whois.srs.net.nz',
  za: 'whois.registry.net.za',
  sg: 'whois.sgnic.sg',
  hk: 'whois.hkirc.hk',
  kr: 'whois.kr',
  tw: 'whois.twnic.net.tw',
  mx: 'whois.mx',
  ar: 'whois.nic.ar',
  cl: 'whois.nic.cl',
};

function queryWhoisServer(domain: string, server: string, timeout = 5000): Promise<string> {
  return new Promise((resolve, reject) => {
    const client = new net.Socket();
    let data = '';

    const timer = setTimeout(() => {
      client.destroy();
      reject(new Error('WHOIS query timeout'));
    }, timeout);

    client.connect(43, server, () => {
      client.write(`${domain}\r\n`);
    });

    client.on('data', (chunk) => {
      data += chunk.toString();
    });

    client.on('close', () => {
      clearTimeout(timer);
      resolve(data);
    });

    client.on('error', (err) => {
      clearTimeout(timer);
      reject(err);
    });
  });
}

function parseWhoisData(whoisText: string): WhoisData {
  const data: WhoisData = {
    domainName: null,
    registrar: null,
    creationDate: null,
    expirationDate: null,
    updatedDate: null,
    status: [],
    nameServers: [],
    rawData: whoisText,
  };

  const lines = whoisText.split('\n');

  for (const line of lines) {
    const trimmedLine = line.trim();

    if (trimmedLine.match(/^Domain Name:/i)) {
      data.domainName = trimmedLine.split(':')[1]?.trim().toLowerCase() || null;
    } else if (trimmedLine.match(/^Registrar:/i)) {
      data.registrar = trimmedLine.split(':')[1]?.trim() || null;
    } else if (trimmedLine.match(/^Creation Date:|^Created:|^Registered:|^Domain registered:/i)) {
      const dateStr = trimmedLine.split(/:|:/)[1]?.trim();
      if (dateStr) {
        const date = new Date(dateStr);
        if (!isNaN(date.getTime())) {
          data.creationDate = date;
        }
      }
    } else if (trimmedLine.match(/^Registry Expiry Date:|^Expiration Date:|^Expires:|^Expiry Date:/i)) {
      const dateStr = trimmedLine.split(/:|:/)[1]?.trim();
      if (dateStr) {
        const date = new Date(dateStr);
        if (!isNaN(date.getTime())) {
          data.expirationDate = date;
        }
      }
    } else if (trimmedLine.match(/^Updated Date:|^Last Modified:|^Changed:/i)) {
      const dateStr = trimmedLine.split(/:|:/)[1]?.trim();
      if (dateStr) {
        const date = new Date(dateStr);
        if (!isNaN(date.getTime())) {
          data.updatedDate = date;
        }
      }
    } else if (trimmedLine.match(/^Domain Status:|^Status:/i)) {
      const status = trimmedLine.split(/:|:/)[1]?.trim();
      if (status) {
        data.status.push(status);
      }
    } else if (trimmedLine.match(/^Name Server:|^Nameserver:|^nserver:/i)) {
      const nameServer = trimmedLine.split(/:|:/)[1]?.trim().toLowerCase();
      if (nameServer && !data.nameServers.includes(nameServer)) {
        data.nameServers.push(nameServer);
      }
    }
  }

  return data;
}

async function getWhoisData(domain: string, timeout = 5000): Promise<WhoisData | null> {
  const cacheKey = `whois:${domain}`;
  const cached = whoisCache.get(cacheKey);
  if (cached) {
    return cached;
  }

  try {
    const tld = domain.split('.').pop()?.toLowerCase();
    if (!tld) {
      throw new Error('Invalid domain');
    }

    const whoisServer = WHOIS_SERVERS[tld];
    if (!whoisServer) {
      const defaultServer = 'whois.iana.org';
      const ianaResponse = await queryWhoisServer(domain, defaultServer, timeout);

      const referMatch = ianaResponse.match(/refer:\s+(\S+)/i);
      if (referMatch?.[1]) {
        const referredServer = referMatch[1];
        const whoisResponse = await queryWhoisServer(domain, referredServer, timeout);
        const whoisData = parseWhoisData(whoisResponse);
        whoisCache.set(cacheKey, whoisData);
        return whoisData;
      }

      const whoisData = parseWhoisData(ianaResponse);
      whoisCache.set(cacheKey, whoisData);
      return whoisData;
    }

    const whoisResponse = await queryWhoisServer(domain, whoisServer, timeout);
    const whoisData = parseWhoisData(whoisResponse);
    whoisCache.set(cacheKey, whoisData);
    return whoisData;
  } catch (_error) {
    return null;
  }
}

export async function getDomainAge(domain: string, timeout = 5000): Promise<DomainAgeInfo | null> {
  try {
    const cleanDomain = domain
      .replace(/^https?:\/\//, '')
      .split('/')[0]
      .split('@')
      .pop();
    if (!cleanDomain) {
      return null;
    }

    const whoisData = await getWhoisData(cleanDomain, timeout);
    if (!whoisData || !whoisData.creationDate) {
      return null;
    }

    const now = new Date();
    const creationDate = whoisData.creationDate;
    const ageInMilliseconds = now.getTime() - creationDate.getTime();
    const ageInDays = Math.floor(ageInMilliseconds / (1000 * 60 * 60 * 24));
    const ageInYears = ageInDays / 365.25;

    return {
      domain: cleanDomain,
      creationDate,
      ageInDays,
      ageInYears: parseFloat(ageInYears.toFixed(2)),
      expirationDate: whoisData.expirationDate || null,
      updatedDate: whoisData.updatedDate || null,
    };
  } catch (_error) {
    return null;
  }
}

export async function getDomainRegistrationStatus(
  domain: string,
  timeout = 5000
): Promise<DomainRegistrationInfo | null> {
  try {
    const cleanDomain = domain
      .replace(/^https?:\/\//, '')
      .split('/')[0]
      .split('@')
      .pop();
    if (!cleanDomain) {
      return null;
    }

    const whoisData = await getWhoisData(cleanDomain, timeout);
    if (!whoisData) {
      return {
        domain: cleanDomain,
        isRegistered: false,
        isAvailable: true,
        status: [],
        registrar: null,
        nameServers: [],
        expirationDate: null,
        isExpired: false,
        daysUntilExpiration: null,
      };
    }

    const isRegistered = !!(whoisData.domainName || whoisData.creationDate || whoisData.registrar);
    let isExpired = false;
    let daysUntilExpiration: number | null = null;

    if (whoisData.expirationDate) {
      const now = new Date();
      const expirationTime = whoisData.expirationDate.getTime();
      const currentTime = now.getTime();

      isExpired = currentTime > expirationTime;
      if (!isExpired) {
        daysUntilExpiration = Math.floor((expirationTime - currentTime) / (1000 * 60 * 60 * 24));
      }
    }

    const statusList = whoisData.status.map((s) => {
      const statusCode = s.split(' ')[0];
      return statusCode;
    });

    const isPendingDelete = statusList.some(
      (s) => s.toLowerCase().includes('pendingdelete') || s.toLowerCase().includes('redemption')
    );

    const isLocked = statusList.some(
      (s) =>
        s.toLowerCase().includes('clienttransferprohibited') || s.toLowerCase().includes('servertransferprohibited')
    );

    return {
      domain: cleanDomain,
      isRegistered,
      isAvailable: !isRegistered,
      status: statusList,
      registrar: whoisData.registrar,
      nameServers: whoisData.nameServers,
      expirationDate: whoisData.expirationDate,
      isExpired,
      daysUntilExpiration,
      isPendingDelete,
      isLocked,
    };
  } catch (_error) {
    return null;
  }
}
