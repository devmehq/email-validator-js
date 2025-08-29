export const amazonCaData = {
  input: `Domain Name: amazon.ca
Registry Domain ID: D237-CIRA
Registrar WHOIS Server: whois.ca.fury.ca
Registrar URL: Markmonitor.com
Updated Date: 2025-07-16T04:00:43Z
Creation Date: 2000-09-19T18:44:39Z
Registry Expiry Date: 2026-07-16T04:00:00Z
Registrar: MarkMonitor International Canada Ltd.
Registrar IANA ID: not applicable
Registrar Abuse Contact Email: abusecomplaints@markmonitor.com
Registrar Abuse Contact Phone: +1.2083895740
Domain Status: clientDeleteProhibited https://icann.org/epp#clientDeleteProhibited
Domain Status: clientTransferProhibited https://icann.org/epp#clientTransferProhibited
Domain Status: clientUpdateProhibited https://icann.org/epp#clientUpdateProhibited
Domain Status: serverDeleteProhibited https://icann.org/epp#serverDeleteProhibited
Domain Status: serverTransferProhibited https://icann.org/epp#serverTransferProhibited
Domain Status: serverUpdateProhibited https://icann.org/epp#serverUpdateProhibited
Registry Registrant ID: 16390820-CIRA
Registrant Name: Amazon Technologies, Inc. TMA499121
Registrant Organization:
Registrant Street: PO Box 8102
Registrant City: Reno
Registrant State/Province: NV
Registrant Postal Code: 91423
Registrant Country: US
Registrant Phone: +1.2062664064
Registrant Phone Ext:
Registrant Fax: +1.2062667010
Registrant Fax Ext:
Registrant Email: hostmaster@amazon.com
Registry Admin ID: 16310044-CIRA
Admin Name: David C Arnett
Admin Organization: Amazon Technologies, Inc. TMA499121
Admin Street: PO Box 8102
Admin City: Reno
Admin State/Province: NV
Admin Postal Code: 91423
Admin Country: US
Admin Phone: +1.2062664064
Admin Phone Ext:
Admin Fax: +1.2062667010
Admin Fax Ext:
Admin Email: hostmaster@amazon.com
Registry Tech ID: 16310044-CIRA
Tech Name: David C Arnett
Tech Organization: Amazon Technologies, Inc. TMA499121
Tech Street: PO Box 8102
Tech City: Reno
Tech State/Province: NV
Tech Postal Code: 91423
Tech Country: US
Tech Phone: +1.2062664064
Tech Phone Ext:
Tech Fax: +1.2062667010
Tech Fax Ext:
Tech Email: hostmaster@amazon.com
Name Server: pdns1.ultradns.net
Name Server: pdns6.ultradns.co.uk
Name Server: pdns2.ultradns.net
Name Server: pdns3.ultradns.org
Name Server: pdns4.ultradns.org
Name Server: pdns5.ultradns.info
DNSSEC: unsigned
URL of the ICANN Whois Inaccuracy Complaint Form: https://www.icann.org/wicf/`,
  output: {
    domainName: 'amazon.ca',
    registrar: 'MarkMonitor International Canada Ltd.',
    registrarUrl: 'Markmonitor.com',
    registrarIanaId: 'not applicable',
    registrarAbuseContactEmail: 'abusecomplaints@markmonitor.com',
    registrarAbuseContactPhone: '+1.2083895740',
    registrarWhoisServer: 'whois.ca.fury.ca',
    creationDate: '2000-09-19T18:44:39Z',
    expirationDate: '2026-07-16T04:00:00Z',
    updatedDate: '2025-07-16T04:00:43Z',
    status: [
      'clientDeleteProhibited https://icann.org/epp#clientDeleteProhibited',
      'clientTransferProhibited https://icann.org/epp#clientTransferProhibited',
      'clientUpdateProhibited https://icann.org/epp#clientUpdateProhibited',
      'serverDeleteProhibited https://icann.org/epp#serverDeleteProhibited',
      'serverTransferProhibited https://icann.org/epp#serverTransferProhibited',
      'serverUpdateProhibited https://icann.org/epp#serverUpdateProhibited',
    ],
    // registrant: {
    //   name: 'Amazon Technologies, Inc. TMA499121',
    //   street: 'PO Box 8102',
    //   city: 'Reno',
    //   state: 'NV',
    //   postalCode: '91423',
    //   country: 'US',
    //   phone: '+1.2062664064',
    //   fax: '+1.2062667010',
    //   email: 'hostmaster@amazon.com',
    // },
    // admin: {
    //   name: 'David C Arnett',
    //   organization: 'Amazon Technologies, Inc. TMA499121',
    //   street: 'PO Box 8102',
    //   city: 'Reno',
    //   state: 'NV',
    //   postalCode: '91423',
    //   country: 'US',
    //   phone: '+1.2062664064',
    //   fax: '+1.2062667010',
    //   email: 'hostmaster@amazon.com',
    // },
    // tech: {
    //   name: 'David C Arnett',
    //   organization: 'Amazon Technologies, Inc. TMA499121',
    //   street: 'PO Box 8102',
    //   city: 'Reno',
    //   state: 'NV',
    //   postalCode: '91423',
    //   country: 'US',
    //   phone: '+1.2062664064',
    //   fax: '+1.2062667010',
    //   email: 'hostmaster@amazon.com',
    // },
    nameServers: [
      'pdns1.ultradns.net',
      'pdns6.ultradns.co.uk',
      'pdns2.ultradns.net',
      'pdns3.ultradns.org',
      'pdns4.ultradns.org',
      'pdns5.ultradns.info',
    ],
    dnssec: 'unsigned',
  },
};
