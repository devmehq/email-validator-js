export const wikipediaOrgData = {
  input: `Domain Name: wikipedia.org
Registry Domain ID: REDACTED
Registrar WHOIS Server: http://whois.markmonitor.com
Registrar URL: http://www.markmonitor.com
Updated Date: 2024-12-17T09:19:05Z
Creation Date: 2001-01-13T00:12:14Z
Registry Expiry Date: 2026-01-13T00:12:14Z
Registrar: MarkMonitor Inc.
Registrar IANA ID: 292
Registrar Abuse Contact Email: abusecomplaints@markmonitor.com
Registrar Abuse Contact Phone: +1.2083895740
Domain Status: clientDeleteProhibited https://icann.org/epp#clientDeleteProhibited
Domain Status: clientTransferProhibited https://icann.org/epp#clientTransferProhibited
Domain Status: clientUpdateProhibited https://icann.org/epp#clientUpdateProhibited
Registry Registrant ID: REDACTED
Registrant Name: REDACTED
Registrant Organization: Wikimedia Foundation, Inc.
Registrant Street: REDACTED
Registrant City: REDACTED
Registrant State/Province: CA
Registrant Postal Code: REDACTED
Registrant Country: US
Registrant Phone: REDACTED
Registrant Phone Ext: REDACTED
Registrant Fax: REDACTED
Registrant Fax Ext: REDACTED
Registrant Email: REDACTED
Registry Admin ID: REDACTED
Admin Name: REDACTED
Admin Organization: REDACTED
Admin Street: REDACTED
Admin City: REDACTED
Admin State/Province: REDACTED
Admin Postal Code: REDACTED
Admin Country: REDACTED
Admin Phone: REDACTED
Admin Phone Ext: REDACTED
Admin Fax: REDACTED
Admin Fax Ext: REDACTED
Admin Email: REDACTED
Registry Tech ID: REDACTED
Tech Name: REDACTED
Tech Organization: REDACTED
Tech Street: REDACTED
Tech City: REDACTED
Tech State/Province: REDACTED
Tech Postal Code: REDACTED
Tech Country: REDACTED
Tech Phone: REDACTED
Tech Phone Ext: REDACTED
Tech Fax: REDACTED
Tech Fax Ext: REDACTED
Tech Email: REDACTED
Name Server: ns0.wikimedia.org
Name Server: ns1.wikimedia.org
Name Server: ns2.wikimedia.org
DNSSEC: unsigned
URL of the ICANN Whois Inaccuracy Complaint Form: https://icann.org/wicf/
>>> Last update of WHOIS database: 2025-08-29T03:49:04Z <<<`,
  output: {
    domainName: 'wikipedia.org',
    registrar: 'MarkMonitor Inc.',
    registrarUrl: 'http://www.markmonitor.com',
    registrarIanaId: '292',
    registrarAbuseContactEmail: 'abusecomplaints@markmonitor.com',
    registrarAbuseContactPhone: '+1.2083895740',
    registrarWhoisServer: 'http://whois.markmonitor.com',
    creationDate: '2001-01-13T00:12:14Z',
    expirationDate: '2026-01-13T00:12:14Z',
    updatedDate: '2024-12-17T09:19:05Z',
    status: [
      'clientDeleteProhibited https://icann.org/epp#clientDeleteProhibited',
      'clientTransferProhibited https://icann.org/epp#clientTransferProhibited',
      'clientUpdateProhibited https://icann.org/epp#clientUpdateProhibited',
    ],
    // registrant: {
    //   organization: 'Wikimedia Foundation, Inc.',
    //   country: 'US',
    //   state: 'CA',
    // },
    nameServers: ['ns0.wikimedia.org', 'ns1.wikimedia.org', 'ns2.wikimedia.org'],
    dnssec: 'unsigned',
  },
};
