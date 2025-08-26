import { lru } from 'tiny-lru';

// Global cache instances with TTL in milliseconds
export const mxCache = lru<string[]>(500, 3600000); // 1 hour TTL for MX records
export const disposableCache = lru<boolean>(1000, 86400000); // 24 hour TTL for disposable checks
export const freeCache = lru<boolean>(1000, 86400000); // 24 hour TTL for free email checks
export const domainValidCache = lru<boolean>(1000, 86400000); // 24 hour TTL for domain validation
export const smtpCache = lru<boolean | null>(500, 1800000); // 30 minute TTL for SMTP verification
export const domainSuggestionCache = lru<{ suggested: string; confidence: number } | null>(1000, 86400000); // 24 hour TTL for domain suggestions
export const whoisCache = lru<any>(200, 3600000); // 1 hour TTL for WHOIS data

// Helper to clear all caches
export function clearAllCaches(): void {
  mxCache.clear();
  disposableCache.clear();
  freeCache.clear();
  domainValidCache.clear();
  smtpCache.clear();
  domainSuggestionCache.clear();
  whoisCache.clear();
}
