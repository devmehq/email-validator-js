const defaultRegex = {
  domainName: 'Domain Name: *([^\\s]+)',
  registrar: 'Registrar: *(.+)',
  updatedDate: 'Updated Date: *(.+)',
  creationDate: 'Creat(ed|ion) Date: *(.+)',
  expirationDate: 'Expir\\w+ Date: *(.+)',
  status: 'Status:\\s*(.+)\\s*\\n',
  dateFormat: "yyyy-MM-dd'T'HH:mm:ss'Z'",
  notFound: '(No match for |Domain not found|NOT FOUND\\s)',
};

const comRegex = { ...defaultRegex, notFound: 'No match for ' };

const orgRegex = { ...defaultRegex, notFound: '^(NOT FOUND|Domain not found)' };

const auRegex = {
  ...defaultRegex,
  updatedDate: 'Last Modified: *(.+)',
  registrar: 'Registrar Name: *(.+)',
  rateLimited: 'WHOIS LIMIT EXCEEDED',
  notFound: '^NOT FOUND',
};

const usRegex = {
  ...defaultRegex,
  status: 'Domain Status: *(.+)',
  expirationDate: 'Registrar Registration Expiration Date: *(.+)',
  notFound: '^No Data Found',
};

const ruRegex = {
  ...defaultRegex,
  domainName: 'domain: *([^\\s]+)',
  registrar: 'registrar: *(.+)',
  expirationDate: 'paid-till: *(.+)',
  status: 'state: *(.+)',
  notFound: 'No entries found',
};

const ukRegex = {
  ...defaultRegex,
  domainName: 'Domain name:\\s*([^\\s]+)',
  dateFormat: 'dd-MMM-yyyy',
};

const frRegex = {
  ...defaultRegex,
  domainName: 'domain: *([^\\s]+)',
  expirationDate: 'Expir\\w+ Date:\\s?(.+)',
  updatedDate: 'last-update: *(.+)',
  notFound: '(No entries found in |%% NOT FOUND)',
};

const nlRegex = {
  ...defaultRegex,
  notFound: '\\.nl is free',
  rateLimited: 'maximum number of requests per second exceeded',
};

const fiRegex = {
  ...defaultRegex,
  domainName: 'domain\\.*: *([\\S]+)',
  registrar: 'registrar\\.*: *(.*)',
  status: 'status\\.*: *([\\S]+)',
  dateFormat: 'dd.MM.yyyy HH:mm:ss',
};

const jpRegex = {
  ...defaultRegex,
  domainName: '\\[Domain Name\\]\\s*([^\\s]+)',
  dateFormat: 'yyyy/MM/dd',
  notFound: 'No match!!',
};

const plRegex = {
  ...defaultRegex,
  domainName: 'DOMAIN NAME: *([^\\s]+)\\s+',
  status: 'Registration status:\\n\\s*(.+)',
  expirationDate: 'renewal date: *(.+)',
  dateFormat: 'yyyy.MM.dd HH:mm:ss',
};

const brRegex = {
  ...defaultRegex,
  domainName: 'domain: *([^\\s]+)\\n',
  dateFormat: 'yyyyMMdd',
};

const euRegex = {
  ...defaultRegex,
  domainName: 'Domain: *([^\\n\\r]+)',
  registrar: 'Registrar: *\\n *Name: *([^\\n\\r]+)',
  notFound: 'Status: AVAILABLE',
};

const eeRegex = {
  ...defaultRegex,
  domainName: 'Domain: *[\\n\\r]+\\s*name: *([^\\n\\r]+)',
  status: 'Domain: *[\\n\\r]+\\s*name: *[^\\n\\r]+\\s*status: *([^\\n\\r]+)',
};

const krRegex = {
  ...defaultRegex,
  domainName: 'Domain Name\\s*: *([^\\s]+)',
  dateFormat: 'yyyy. MM. dd.',
  notFound: 'The requested domain was not found ',
};

const bgRegex = {
  ...defaultRegex,
  domainName: 'DOMAIN NAME: *([^\\s]+)',
  status: 'registration status:\\s*(.+)',
  notFound: 'registration status: available',
  rateLimited: 'Query limit exceeded',
};

const deRegex = {
  ...defaultRegex,
  domainName: 'Domain: *([^\\s]+)',
  notFound: 'Status: *free',
};

const atRegex = {
  ...defaultRegex,
  domainName: 'domain: *([^\\s]+)',
  notFound: ' nothing found',
  dateFormat: 'yyyyMMdd HH:mm:ss',
  rateLimited: 'Quota exceeded',
};

const caRegex = {
  ...defaultRegex,
  domainName: 'Domain Name: *([^\\s]+)',
  notFound: 'Not found: ',
};

const beRegex = {
  ...defaultRegex,
  domainName: 'Domain:\\s*([^\\s]+)',
  dateFormat: 'ddd MMM dd yyyy',
  notFound: 'Status:\\s*AVAILABLE',
};

const infoRegex = {
  ...defaultRegex,
  notFound: '^(NOT FOUND|Domain not found)',
};

const kgRegex = {
  ...defaultRegex,
  domainName: '^Domain\\s*([^\\s]+)',
  dateFormat: 'ddd MMM dd HH:mm:ss yyyy',
  notFound: 'domain is available for registration',
};

const idRegex = {
  ...defaultRegex,
  domainName: 'Domain Name:([^\\s]+)',
  dateFormat: "dd-MMM-yyyy HH:mm:ss 'UTC'",
  notFound: 'DOMAIN NOT FOUND',
};

const skRegex = {
  ...defaultRegex,
  domainName: 'Domain:\\s*([^\\s]+)',
  notFound: 'Domain not found',
};

const seRegex = {
  ...defaultRegex,
  domainName: 'domain\\.*: *([^\\s]+)',
  notFound: '\\" not found.',
};

const isRegex = {
  ...defaultRegex,
  domainName: 'domain\\.*: *([^\\s]+)',
  dateFormat: 'MMM dd yyyy',
  notFound: 'No entries found for query',
};

const coRegex = {
  ...defaultRegex,
  notFound: 'No Data Found',
};

type Regex = {
  registrar?: string;
  domainName?: string;
  notFound?: string;
  updatedDate?: string;
  creationDate?: string;
  expirationDate?: string;
  status?: string;
  rateLimited?: string;
  dateFormat?: string;
};

export type ParsedWhoisResult = {
  domainName: string;
  isAvailable?: boolean;
  registryDomainId?: string;
  registrarWhoisServer?: string;
  registrar?: string;
  registrarUrl?: string;
  registrarIanaId?: string;
  registrarAbuseContactEmail?: string;
  registrarAbuseContactPhone?: string;
  updatedDate?: string | null;
  creationDate?: string | null;
  expirationDate?: string | null;
  status?: string[];
  dnssec?: string;
  nameServers?: string[];
  rateLimited?: boolean;
  notFound?: boolean;
  dateFormat?: string;
};

// Helper function to parse dates based on format string
function parseDate(dateStr: string, format: string): Date | null {
  try {
    // Clean up the date string
    dateStr = dateStr.trim();

    // Handle ISO format
    if (format === "yyyy-MM-dd'T'HH:mm:ss'Z'" || dateStr.match(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}/)) {
      return new Date(dateStr);
    }

    // Handle various date formats
    let date: Date | null = null;

    switch (format) {
      case 'yyyy/MM/dd': {
        const parts = dateStr.split('/');
        if (parts.length === 3) {
          date = new Date(`${parts[0]}-${parts[1].padStart(2, '0')}-${parts[2].padStart(2, '0')}`);
        }
        break;
      }
      case 'dd-MMM-yyyy': {
        // e.g., "14-Sep-2023"
        date = new Date(dateStr.replace(/-/g, ' '));
        break;
      }
      case 'dd.MM.yyyy HH:mm:ss': {
        const [datePart, timePart] = dateStr.split(' ');
        if (datePart) {
          const parts = datePart.split('.');
          if (parts.length === 3) {
            const dateString = `${parts[2]}-${parts[1].padStart(2, '0')}-${parts[0].padStart(2, '0')}`;
            date = new Date(`${dateString}${timePart ? `T${timePart}` : ''}`);
          }
        }
        break;
      }
      case 'yyyy.MM.dd HH:mm:ss': {
        const [datePart, timePart] = dateStr.split(' ');
        if (datePart) {
          const parts = datePart.split('.');
          if (parts.length === 3) {
            const dateString = `${parts[0]}-${parts[1].padStart(2, '0')}-${parts[2].padStart(2, '0')}`;
            date = new Date(`${dateString}${timePart ? `T${timePart}` : ''}`);
          }
        }
        break;
      }
      case 'yyyyMMdd': {
        if (dateStr.length === 8) {
          const year = dateStr.substring(0, 4);
          const month = dateStr.substring(4, 6);
          const day = dateStr.substring(6, 8);
          date = new Date(`${year}-${month}-${day}`);
        }
        break;
      }
      case 'yyyy. MM. dd.': {
        const cleaned = dateStr.replace(/\./g, '').trim();
        const parts = cleaned.split(/\s+/);
        if (parts.length === 3) {
          date = new Date(`${parts[0]}-${parts[1].padStart(2, '0')}-${parts[2].padStart(2, '0')}`);
        }
        break;
      }
      case 'ddd MMM dd yyyy': {
        // e.g., "Thu Sep 14 2023"
        const parts = dateStr.split(/\s+/);
        if (parts.length >= 4) {
          date = new Date(`${parts[1]} ${parts[2]} ${parts[3]}`);
        }
        break;
      }
      case 'ddd MMM dd HH:mm:ss yyyy': {
        // e.g., "Thu Sep 14 10:30:00 2023"
        const parts = dateStr.split(/\s+/);
        if (parts.length >= 5) {
          date = new Date(`${parts[1]} ${parts[2]} ${parts[4]} ${parts[3]}`);
        }
        break;
      }
      case 'yyyyMMdd HH:mm:ss': {
        const [datePart, timePart] = dateStr.split(' ');
        if (datePart && datePart.length === 8) {
          const year = datePart.substring(0, 4);
          const month = datePart.substring(4, 6);
          const day = datePart.substring(6, 8);
          date = new Date(`${year}-${month}-${day}${timePart ? `T${timePart}` : ''}`);
        }
        break;
      }
      case "dd-MMM-yyyy HH:mm:ss 'UTC'": {
        // e.g., "14-Sep-2023 10:30:00 UTC"
        const cleaned = dateStr.replace(/\s*UTC\s*$/, '');
        date = new Date(cleaned.replace(/-/g, ' '));
        break;
      }
      case 'MMM dd yyyy': {
        // e.g., "Sep 14 2023"
        date = new Date(dateStr);
        break;
      }
      default: {
        // Try parsing as ISO or standard format
        date = new Date(dateStr);
      }
    }

    // Check if the date is valid
    if (date && !Number.isNaN(date.getTime())) {
      return date;
    }

    // Fallback: try direct parsing
    const fallback = new Date(dateStr);
    if (!Number.isNaN(fallback.getTime())) {
      return fallback;
    }

    return null;
  } catch {
    return null;
  }
}

export function parseWhoisData({ rawData, domain }: { rawData: string; domain: string }): ParsedWhoisResult {
  if (!rawData) {
    return { domainName: domain, isAvailable: true };
  }

  const result: ParsedWhoisResult = { domainName: domain };

  let domainRegex: Regex;

  // Select the appropriate regex based on TLD
  if (domain.endsWith('.com') || domain.endsWith('.net') || domain.endsWith('.name')) {
    domainRegex = comRegex;
  } else if (domain.endsWith('.org') || domain.endsWith('.me') || domain.endsWith('.mobi')) {
    domainRegex = orgRegex;
  } else if (domain.endsWith('.au')) {
    domainRegex = auRegex;
  } else if (domain.endsWith('.ru') || domain.endsWith('.рф') || domain.endsWith('.su')) {
    domainRegex = ruRegex;
  } else if (domain.endsWith('.us') || domain.endsWith('.biz')) {
    domainRegex = usRegex;
  } else if (domain.endsWith('.uk')) {
    domainRegex = ukRegex;
  } else if (domain.endsWith('.fr')) {
    domainRegex = frRegex;
  } else if (domain.endsWith('.nl')) {
    domainRegex = nlRegex;
  } else if (domain.endsWith('.fi')) {
    domainRegex = fiRegex;
  } else if (domain.endsWith('.jp')) {
    domainRegex = jpRegex;
  } else if (domain.endsWith('.pl')) {
    domainRegex = plRegex;
  } else if (domain.endsWith('.br')) {
    domainRegex = brRegex;
  } else if (domain.endsWith('.eu')) {
    domainRegex = euRegex;
  } else if (domain.endsWith('.ee')) {
    domainRegex = eeRegex;
  } else if (domain.endsWith('.kr')) {
    domainRegex = krRegex;
  } else if (domain.endsWith('.bg')) {
    domainRegex = bgRegex;
  } else if (domain.endsWith('.de')) {
    domainRegex = deRegex;
  } else if (domain.endsWith('.at')) {
    domainRegex = atRegex;
  } else if (domain.endsWith('.ca')) {
    domainRegex = caRegex;
  } else if (domain.endsWith('.be')) {
    domainRegex = beRegex;
  } else if (domain.endsWith('.kg')) {
    domainRegex = kgRegex;
  } else if (domain.endsWith('.info')) {
    domainRegex = infoRegex;
  } else if (domain.endsWith('.id')) {
    domainRegex = idRegex;
  } else if (domain.endsWith('.sk')) {
    domainRegex = skRegex;
  } else if (domain.endsWith('.se') || domain.endsWith('.nu')) {
    domainRegex = seRegex;
  } else if (domain.endsWith('.is')) {
    domainRegex = isRegex;
  } else if (domain.endsWith('.co')) {
    domainRegex = coRegex;
  } else {
    domainRegex = defaultRegex;
  }

  // Process each regex pattern
  Object.keys(domainRegex).forEach((key: string) => {
    const typedKey = key as keyof Regex;
    const pattern = domainRegex[typedKey];
    if (!pattern || typedKey === 'dateFormat') return;

    let regex = new RegExp(pattern, 'i');
    if (typedKey === 'status') {
      regex = new RegExp(pattern, 'gi');
    }

    const matches = rawData.match(regex);
    if (matches) {
      if (typedKey === 'rateLimited') {
        result.rateLimited = true;
        throw new Error('Rate Limited');
      } else if (typedKey === 'notFound') {
        result.isAvailable = true;
      } else if (typedKey === 'status') {
        // Handle multiple status values
        result.status = [];
        let match: RegExpExecArray | null;
        const statusRegex = new RegExp(pattern, 'gi');
        match = statusRegex.exec(rawData);
        while (match !== null) {
          if (match[1]) {
            result.status.push(match[1].trim());
          }
          match = statusRegex.exec(rawData);
        }
      } else if (typedKey === 'creationDate' || typedKey === 'expirationDate' || typedKey === 'updatedDate') {
        // Extract date value
        const _dateMatch = matches[matches.length - 1];
        let dateStr: string | undefined;

        if (typedKey === 'creationDate' && pattern.includes('Creat(ed|ion)')) {
          // Handle creation date with group
          const creationMatch = rawData.match(/Creat(?:ed|ion) Date:\s*(.+)/i);
          dateStr = creationMatch?.[1]?.trim();
        } else {
          // Extract the captured group
          const extractMatch = rawData.match(new RegExp(pattern, 'i'));
          dateStr = extractMatch?.[1]?.trim();
        }

        if (dateStr) {
          // Parse the date based on format
          const dateFormat = domainRegex.dateFormat || "yyyy-MM-dd'T'HH:mm:ss'Z'";
          const parsedDate = parseDate(dateStr, dateFormat);

          if (parsedDate) {
            result[typedKey] = parsedDate.toISOString();
          } else {
            // Store raw date if parsing fails
            result[typedKey] = dateStr;
          }
        }
      } else if (typedKey === 'domainName') {
        const match = rawData.match(regex);
        if (match?.[1]) {
          result.domainName = match[1].toLowerCase().trim();
        }
      } else if (typedKey === 'registrar') {
        const match = rawData.match(regex);
        if (match?.[1]) {
          result.registrar = match[1].trim();
        }
      }
    }
  });

  // Set default availability
  if (result.isAvailable === undefined) {
    result.isAvailable = false;
  }

  // Additional patterns for common fields
  const patterns: {
    pattern: RegExp;
    property: keyof ParsedWhoisResult;
    multiple?: boolean;
  }[] = [
    { pattern: /Name Server:\s*(.*)/gi, property: 'nameServers', multiple: true },
    { pattern: /Registrar URL:\s*(.*)/i, property: 'registrarUrl' },
    { pattern: /Registrar WHOIS Server:\s*(.*)/i, property: 'registrarWhoisServer' },
    { pattern: /Registry Domain ID:\s*(.*)/i, property: 'registryDomainId' },
    { pattern: /Registrar Abuse Contact Email:\s*(.*)/i, property: 'registrarAbuseContactEmail' },
    { pattern: /Registrar Abuse Contact Phone:\s*(.*)/i, property: 'registrarAbuseContactPhone' },
    { pattern: /DNSSEC:\s*(.*)/i, property: 'dnssec' },
    { pattern: /Registrar IANA ID:\s*(.*)/i, property: 'registrarIanaId' },
  ];

  patterns.forEach(({ pattern, property, multiple }) => {
    if (multiple) {
      const matches = Array.from(rawData.matchAll(pattern));
      if (matches.length > 0) {
        (result[property] as string[]) = matches.map((m) => m[1].trim());
      }
    } else {
      const match = rawData.match(pattern);
      if (match?.[1]) {
        (result[property] as string) = match[1].trim();
      }
    }
  });

  return result;
}
