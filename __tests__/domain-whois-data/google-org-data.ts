export const googleOrgData = {
  input: `This domain is protected by the Registry Lock service. If you are the registrant and wish to take action on this lock, please contact your registrar.

Domain Name: google.org
Registry Domain ID: REDACTED
Registrar WHOIS Server: http://whois.markmonitor.com
Registrar URL: http://www.markmonitor.com
Updated Date: 2024-09-23T09:54:13Z
Creation Date: 1998-10-21T04:00:00Z
Registry Expiry Date: 2025-10-20T04:00:00Z
Registrar: MarkMonitor Inc.
Registrar IANA ID: 292
Registrar Abuse Contact Email: abusecomplaints@markmonitor.com
Registrar Abuse Contact Phone: +1.2083895740
Domain Status: clientDeleteProhibited https://icann.org/epp#clientDeleteProhibited
Domain Status: serverDeleteProhibited https://icann.org/epp#serverDeleteProhibited
Domain Status: clientTransferProhibited https://icann.org/epp#clientTransferProhibited
Domain Status: serverTransferProhibited https://icann.org/epp#serverTransferProhibited
Domain Status: clientUpdateProhibited https://icann.org/epp#clientUpdateProhibited
Domain Status: serverUpdateProhibited https://icann.org/epp#serverUpdateProhibited
Registry Registrant ID: REDACTED
Registrant Name: REDACTED
Registrant Organization: Google LLC
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
Name Server: ns1.google.com
Name Server: ns2.google.com
Name Server: ns3.google.com
Name Server: ns4.google.com
DNSSEC: unsigned
URL of the ICANN Whois Inaccuracy Complaint Form: https://icann.org/wicf/
>>> Last update of WHOIS database: 2025-08-29T03:49:04Z <<<`,
  output: {
    domainName: 'google.org',
    registrar: 'MarkMonitor Inc.',
    registrarUrl: 'http://www.markmonitor.com',
    registrarIanaId: '292',
    registrarAbuseContactEmail: 'abusecomplaints@markmonitor.com',
    registrarAbuseContactPhone: '+1.2083895740',
    registrarWhoisServer: 'http://whois.markmonitor.com',
    creationDate: '1998-10-21T04:00:00Z',
    expirationDate: '2025-10-20T04:00:00Z',
    updatedDate: '2024-09-23T09:54:13Z',
    status: [
      'clientDeleteProhibited https://icann.org/epp#clientDeleteProhibited',
      'serverDeleteProhibited https://icann.org/epp#serverDeleteProhibited',
      'clientTransferProhibited https://icann.org/epp#clientTransferProhibited',
      'serverTransferProhibited https://icann.org/epp#serverTransferProhibited',
      'clientUpdateProhibited https://icann.org/epp#clientUpdateProhibited',
      'serverUpdateProhibited https://icann.org/epp#serverUpdateProhibited',
    ],
    // registrant: {
    //   organization: 'Google LLC',
    //   country: 'US',
    //   state: 'CA',
    // },
    nameServers: ['ns1.google.com', 'ns2.google.com', 'ns3.google.com', 'ns4.google.com'],
    dnssec: 'unsigned',
  },
};
