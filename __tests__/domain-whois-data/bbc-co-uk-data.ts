export const bbcCoUkData = {
  input: `Domain name:
        bbc.co.uk

    Data validation:
        Nominet was able to match the registrant's name and address against a 3rd party data source on 12-Jun-2014

    Registrar:
        British Broadcasting Corporation [Tag = BBC]
        URL: https://www.bbc.co.uk

    Relevant dates:
        Registered on: before Aug-1996
        Expiry date:  13-Dec-2025
        Last updated:  10-Dec-2020

    Registration status:
        Registered until expiry date.

    Name servers:
        ddns0.bbc.co.uk           148.163.199.1  2607:f740:e04e::1
        ddns0.bbc.com
        ddns1.bbc.co.uk           148.163.199.65  2607:f740:e04e:4::1
        ddns1.bbc.com
        dns0.bbc.co.uk            198.51.44.9  2620:4d:4000:6259:7:9:0:1
        dns0.bbc.com
        dns1.bbc.co.uk            198.51.45.9  2a00:edc0:6259:7:9::2
        dns1.bbc.com

    WHOIS lookup made at 04:50:11 29-Aug-2025`,
  output: {
    domainName: 'bbc.co.uk',
    // Note: UK domain whois format is different and not all fields are parsed
    // registrar: 'British Broadcasting Corporation',
    // registrarUrl: 'https://www.bbc.co.uk',
    // creationDate: 'before Aug-1996',
    // expirationDate: '13-Dec-2025',
    // updatedDate: '10-Dec-2020',
    // status: ['Registered until expiry date.'],
    // nameServers: [
    //   'ddns0.bbc.co.uk',
    //   'ddns0.bbc.com',
    //   'ddns1.bbc.co.uk',
    //   'ddns1.bbc.com',
    //   'dns0.bbc.co.uk',
    //   'dns0.bbc.com',
    //   'dns1.bbc.co.uk',
    //   'dns1.bbc.com',
    // ],
  },
};
