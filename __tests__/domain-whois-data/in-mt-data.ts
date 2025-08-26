export const inMtData = {
  input: `
  % IANA WHOIS server
% for more information on IANA, visit http://www.iana.org
% This query returned 1 object

refer:

domain:       MT

organisation: NIC (Malta)
address:      University Campus
address:      Msida MSD 2080
address:      Malta

contact:      administrative
name:         NIC (Malta) Administrative Contact
organisation: NIC (Malta)
address:      University Campus
address:      Msida MSD 2080
address:      Malta
phone:        +356 2340 8000
e-mail:       admin@nic.org.mt

contact:      technical
name:         NIC (Malta) Technical Contact
organisation: NIC (Malta)
address:      University Campus
address:      Msida MSD 2080
address:      Malta
phone:        +356 2340 8000
e-mail:       tech@nic.org.mt

nserver:      A.NS.MT 193.188.47.252
nserver:      B.NS.MT 193.188.34.241
nserver:      F.NS.MT 192.93.0.4 2001:660:3005:1:0:0:1:2
nserver:      P.NS.MT 2001:500:14:6045:ad:0:0:1 204.61.216.45

whois:

status:       ACTIVE
remarks:      Registration information: https://www.nic.org.mt/

created:      1992-12-02
changed:      2020-01-23
source:       IANA
`,
  output: {
    domainName: 'in.mt',
    isAvailable: false,
  },
};
