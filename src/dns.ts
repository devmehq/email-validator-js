import { promises as dnsPromises } from 'dns';

export async function resolveMxRecords(domain: string) {
  const records: { exchange: string; priority: number }[] = await dnsPromises.resolveMx(domain);
  records.sort((a, b) => {
    if (a.priority < b.priority) {
      return -1;
    }
    if (a.priority > b.priority) {
      return 1;
    }
    return 0;
  });
  return records.map((record) => record.exchange);
}
