import { promises as dnsPromises } from 'node:dns';
import { mxCache } from './cache';

export async function resolveMxRecords(domain: string): Promise<string[]> {
  // Check cache first
  const cached = mxCache.get(domain);
  if (cached !== undefined) {
    return cached;
  }

  try {
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

    const exchanges = records.map((record) => record.exchange);

    // Cache the result
    mxCache.set(domain, exchanges);

    return exchanges;
  } catch (error) {
    // Cache negative results for shorter time
    mxCache.set(domain, []);
    throw error;
  }
}
