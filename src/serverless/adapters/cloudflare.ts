/**
 * Cloudflare Workers adapter for email validation
 * Supports Workers, Pages Functions, and Durable Objects
 */

import type { EmailValidationResult, ValidateEmailOptions } from '../../types';
import { EdgeCache, validateEmailBatch, validateEmailCore } from '../core';

// Cloudflare Workers types

// KVNamespace interface for TypeScript
interface KVNamespace {
  get<T = unknown>(key: string, type?: 'text' | 'json' | 'arrayBuffer' | 'stream'): Promise<T | null>;

  put(key: string, value: string | ArrayBuffer | ReadableStream, options?: { expirationTtl?: number }): Promise<void>;

  delete(key: string): Promise<void>;
}

// DurableObject interfaces
interface DurableObjectNamespace {
  idFromName(name: string): DurableObjectId;

  get(id: DurableObjectId): DurableObjectStub;
}

interface DurableObjectId {
  toString(): string;
}

interface DurableObjectStub {
  fetch(request: Request): Promise<Response>;
}

interface DurableObjectState {
  storage: DurableObjectStorage;
}

interface DurableObjectStorage {
  get<T = unknown>(key: string): Promise<T | undefined>;

  put<T = unknown>(key: string, value: T): Promise<void>;

  delete(key: string): Promise<void>;
}

export interface CloudflareRequest extends Request {
  cf?: {
    country?: string;
    colo?: string;
    timezone?: string;
  };
}

export interface CloudflareEnv {
  // KV namespace for caching
  EMAIL_CACHE?: KVNamespace;
  // Durable Object namespace
  EMAIL_VALIDATOR?: DurableObjectNamespace;

  // Environment variables
  [key: string]: unknown;
}

export interface CloudflareContext {
  waitUntil(promise: Promise<unknown>): void;

  passThroughOnException(): void;
}

// Request types
interface ValidateRequest {
  email?: string;
  emails?: string[];
  options?: ValidateEmailOptions;
}

// KV-based cache implementation
class KVCache<T> {
  constructor(
    private kv: KVNamespace,
    private ttl: number = 3600
  ) {}

  async get(key: string): Promise<T | undefined> {
    const value = await this.kv.get(key, 'json');
    return value as T | undefined;
  }

  async set(key: string, value: T): Promise<void> {
    await this.kv.put(key, JSON.stringify(value), {
      expirationTtl: this.ttl,
    });
  }

  async delete(key: string): Promise<void> {
    await this.kv.delete(key);
  }
}

// Cloudflare Workers handler
async function workerHandler(
  request: CloudflareRequest,
  env: CloudflareEnv,
  ctx: CloudflareContext
): Promise<Response> {
  // Set up KV cache if available
  let kvCache: KVCache<EmailValidationResult> | undefined;
  if (env.EMAIL_CACHE) {
    kvCache = new KVCache(env.EMAIL_CACHE);
  }

  // Handle CORS
  if (request.method === 'OPTIONS') {
    return new Response(null, {
      status: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, GET, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
      },
    });
  }

  try {
    let requestData: ValidateRequest;

    // Parse request based on method
    if (request.method === 'GET') {
      const url = new URL(request.url);
      const email = url.searchParams.get('email');
      const emails = url.searchParams.get('emails');

      requestData = {
        email: email || undefined,
        emails: emails ? emails.split(',') : undefined,
        options: {
          validateMx: url.searchParams.get('validateMx') === 'true',
          validateSMTP: url.searchParams.get('validateSMTP') === 'true',
          validateTypo: url.searchParams.get('validateTypo') !== 'false',
          validateDisposable: url.searchParams.get('validateDisposable') !== 'false',
          validateFree: url.searchParams.get('validateFree') !== 'false',
        },
      };
    } else if (request.method === 'POST') {
      requestData = await request.json();
    } else {
      return new Response(JSON.stringify({ success: false, error: 'Method not allowed' }), {
        status: 405,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Validate request
    if (!requestData.email && !requestData.emails) {
      return new Response(JSON.stringify({ success: false, error: 'Email or emails array is required' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Check KV cache for single email
    if (requestData.email && kvCache && !requestData.options?.skipCache) {
      const cached = await kvCache.get(`email:${requestData.email}`);
      if (cached) {
        return new Response(JSON.stringify({ success: true, data: cached, cached: true }), {
          status: 200,
          headers: {
            'Content-Type': 'application/json',
            'Cache-Control': 'public, max-age=3600',
            'CF-Cache-Status': 'HIT',
          },
        });
      }
    }

    // Single email validation
    if (requestData.email) {
      const result = await validateEmailCore(requestData.email, requestData.options);

      // Store in KV cache
      if (kvCache && !requestData.options?.skipCache) {
        ctx.waitUntil(kvCache.set(`email:${requestData.email}`, result));
      }

      return new Response(JSON.stringify({ success: true, data: result }), {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
          'Cache-Control': 'public, max-age=3600',
          'CF-Cache-Status': 'MISS',
        },
      });
    }

    // Batch email validation
    if (requestData.emails) {
      const results = await validateEmailBatch(requestData.emails, requestData.options);

      // Store each result in KV cache
      if (kvCache && !requestData.options?.skipCache) {
        const cachePromises = results.map((result, index) => {
          if (requestData.emails && requestData.emails[index]) {
            return kvCache.set(`email:${requestData.emails[index]}`, result);
          }
          return Promise.resolve();
        });
        ctx.waitUntil(Promise.all(cachePromises));
      }

      return new Response(JSON.stringify({ success: true, data: results }), {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
          'Cache-Control': 'public, max-age=3600',
        },
      });
    }

    return new Response(JSON.stringify({ success: false, error: 'Invalid request' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Cloudflare Workers error:', error);
    return new Response(
      JSON.stringify({
        success: false,
        error: error instanceof Error ? error.message : 'Internal server error',
      }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }
}

// Durable Object for stateful validation
export class EmailValidatorDO {
  private state: DurableObjectState;
  private env: CloudflareEnv;
  private cache: EdgeCache<any>;

  constructor(state: DurableObjectState, env: CloudflareEnv) {
    this.state = state;
    this.env = env;
    this.cache = new EdgeCache(1000, 3600000);
  }

  async fetch(request: Request): Promise<Response> {
    const url = new URL(request.url);
    const path = url.pathname;

    switch (path) {
      case '/validate':
        return this.handleValidation(request);
      case '/cache/clear':
        return this.handleCacheClear();
      case '/cache/stats':
        return this.handleCacheStats();
      default:
        return new Response('Not found', { status: 404 });
    }
  }

  private async handleValidation(request: Request): Promise<Response> {
    try {
      const requestData: ValidateRequest = await request.json();

      if (requestData.email) {
        const result = await validateEmailCore(requestData.email, requestData.options);
        return new Response(JSON.stringify({ success: true, data: result }), {
          headers: { 'Content-Type': 'application/json' },
        });
      }

      if (requestData.emails) {
        const results = await validateEmailBatch(requestData.emails, requestData.options);
        return new Response(JSON.stringify({ success: true, data: results }), {
          headers: { 'Content-Type': 'application/json' },
        });
      }

      return new Response(JSON.stringify({ success: false, error: 'Invalid request' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    } catch (error) {
      return new Response(
        JSON.stringify({
          success: false,
          error: error instanceof Error ? error.message : 'Internal server error',
        }),
        { status: 500, headers: { 'Content-Type': 'application/json' } }
      );
    }
  }

  private async handleCacheClear(): Promise<Response> {
    this.cache.clear();
    return new Response(JSON.stringify({ success: true, message: 'Cache cleared' }), {
      headers: { 'Content-Type': 'application/json' },
    });
  }

  private async handleCacheStats(): Promise<Response> {
    return new Response(
      JSON.stringify({
        success: true,
        stats: {
          size: this.cache.size(),
        },
      }),
      { headers: { 'Content-Type': 'application/json' } }
    );
  }
}

// Export handlers and Durable Object
export default {
  fetch: workerHandler,
  workerHandler,
  EmailValidatorDO,
};

export { workerHandler };
