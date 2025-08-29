/**
 * Tests for Vercel Edge Functions adapter
 */

// Mock the serverless core module
jest.mock('../src/serverless/core', () => ({
  validateEmailCore: jest.fn().mockImplementation(async (email: string) => ({
    valid: email.includes('@'),
    email,
    local: email.split('@')[0],
    domain: email.split('@')[1] || '',
    validators: {
      syntax: { valid: email.includes('@') },
      typo: { valid: true },
      disposable: { valid: true },
      free: { valid: !email.includes('gmail.com') },
    },
  })),
  validateEmailBatch: jest.fn().mockImplementation(async (emails: string[]) =>
    emails.map((email) => ({
      valid: email.includes('@'),
      email,
      local: email.split('@')[0],
      domain: email.split('@')[1] || '',
      validators: {
        syntax: { valid: email.includes('@') },
      },
    }))
  ),
  clearCache: jest.fn(),
}));

import { handler } from '../src/serverless/adapters/vercel';

// Mock Vercel Request and Response
class MockRequest {
  method: string;
  url: string;
  headers: Headers;
  private bodyContent: string | null;

  constructor(url: string, init?: RequestInit) {
    this.url = url;
    this.method = init?.method || 'GET';
    this.headers = new Headers(init?.headers);
    this.bodyContent = (init?.body as string) || null;
  }

  async json() {
    if (!this.bodyContent) throw new Error('No body');
    return JSON.parse(this.bodyContent);
  }

  async text() {
    return this.bodyContent || '';
  }
}

describe('Vercel Edge Functions Adapter', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('GET /api/health', () => {
    it('should return health status', async () => {
      const request = new MockRequest('https://example.vercel.app/api/health', {
        method: 'GET',
      }) as unknown as Request;

      const response = await handler(request);
      const body = await response.json();

      expect(response.status).toBe(200);
      expect(body.status).toBe('healthy');
      expect(body.platform).toBe('vercel');
      expect(body.timestamp).toBeDefined();
    });
  });

  describe('POST /api/validate', () => {
    it('should validate a single email', async () => {
      const request = new MockRequest('https://example.vercel.app/api/validate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: 'test@example.com' }),
      }) as unknown as Request;

      const response = await handler(request);
      const body = await response.json();

      expect(response.status).toBe(200);
      expect(body.valid).toBe(true);
      expect(body.email).toBe('test@example.com');
    });

    it('should handle validation with options', async () => {
      const request = new MockRequest('https://example.vercel.app/api/validate?skipCache=true&validateTypo=false', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: 'user@gmial.com' }),
      }) as unknown as Request;

      const response = await handler(request);
      const { validateEmailCore } = require('../src/serverless/core');

      expect(response.status).toBe(200);
      expect(validateEmailCore).toHaveBeenCalledWith('user@gmial.com', {
        skipCache: true,
        validateTypo: false,
      });
    });

    it('should return 400 for missing email', async () => {
      const request = new MockRequest('https://example.vercel.app/api/validate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({}),
      }) as unknown as Request;

      const response = await handler(request);
      const body = await response.json();

      expect(response.status).toBe(400);
      expect(body.error).toBe('Email is required');
    });

    it('should handle invalid JSON gracefully', async () => {
      const request = new MockRequest('https://example.vercel.app/api/validate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: 'invalid json',
      }) as unknown as Request;

      const response = await handler(request);
      const body = await response.json();

      expect(response.status).toBe(400);
      expect(body.error).toBe('Invalid request body');
    });
  });

  describe('POST /api/validate/batch', () => {
    it('should validate multiple emails', async () => {
      const emails = ['test1@example.com', 'test2@example.com', 'invalid-email'];
      const request = new MockRequest('https://example.vercel.app/api/validate/batch', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ emails }),
      }) as unknown as Request;

      const response = await handler(request);
      const body = await response.json();

      expect(response.status).toBe(200);
      expect(body.results).toHaveLength(3);
      expect(body.results[0].email).toBe('test1@example.com');
      expect(body.results[0].valid).toBe(true);
      expect(body.results[2].valid).toBe(false);
    });

    it('should respect batch size limits', async () => {
      const emails = Array(101).fill('test@example.com');
      const request = new MockRequest('https://example.vercel.app/api/validate/batch', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ emails }),
      }) as unknown as Request;

      const response = await handler(request);
      const body = await response.json();

      expect(response.status).toBe(400);
      expect(body.error).toBe('Maximum 100 emails allowed per batch');
    });

    it('should handle empty emails array', async () => {
      const request = new MockRequest('https://example.vercel.app/api/validate/batch', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ emails: [] }),
      }) as unknown as Request;

      const response = await handler(request);
      const body = await response.json();

      expect(response.status).toBe(400);
      expect(body.error).toBe('Emails array is required');
    });

    it('should pass batch options', async () => {
      const emails = ['test1@example.com', 'test2@example.com'];
      const request = new MockRequest('https://example.vercel.app/api/validate/batch?batchSize=1', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ emails }),
      }) as unknown as Request;

      const response = await handler(request);
      const { validateEmailBatch } = require('../src/serverless/core');

      expect(response.status).toBe(200);
      expect(validateEmailBatch).toHaveBeenCalledWith(emails, { batchSize: 1 });
    });
  });

  describe('CORS handling', () => {
    it('should handle preflight OPTIONS request', async () => {
      const request = new MockRequest('https://example.vercel.app/api/validate', {
        method: 'OPTIONS',
        headers: { Origin: 'https://example.com' },
      }) as unknown as Request;

      const response = await handler(request);

      expect(response.status).toBe(204);
      expect(response.headers.get('Access-Control-Allow-Origin')).toBe('*');
      expect(response.headers.get('Access-Control-Allow-Methods')).toContain('POST');
      expect(response.headers.get('Access-Control-Allow-Headers')).toContain('Content-Type');
    });

    it('should include CORS headers in all responses', async () => {
      const request = new MockRequest('https://example.vercel.app/api/health', {
        method: 'GET',
        headers: { Origin: 'https://example.com' },
      }) as unknown as Request;

      const response = await handler(request);

      expect(response.headers.get('Access-Control-Allow-Origin')).toBe('*');
    });
  });

  describe('Error handling', () => {
    it('should return 404 for unknown routes', async () => {
      const request = new MockRequest('https://example.vercel.app/api/unknown', {
        method: 'GET',
      }) as unknown as Request;

      const response = await handler(request);
      const body = await response.json();

      expect(response.status).toBe(404);
      expect(body.error).toBe('Not found');
    });

    it('should return 405 for unsupported methods', async () => {
      const request = new MockRequest('https://example.vercel.app/api/validate', {
        method: 'DELETE',
      }) as unknown as Request;

      const response = await handler(request);
      const body = await response.json();

      expect(response.status).toBe(405);
      expect(body.error).toBe('Method not allowed');
    });

    it('should handle internal errors gracefully', async () => {
      const { validateEmailCore } = require('../src/serverless/core');
      validateEmailCore.mockRejectedValueOnce(new Error('Internal error'));

      const request = new MockRequest('https://example.vercel.app/api/validate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: 'test@example.com' }),
      }) as unknown as Request;

      const response = await handler(request);
      const body = await response.json();

      expect(response.status).toBe(500);
      expect(body.error).toBe('Internal server error');
    });
  });

  describe('Edge runtime optimizations', () => {
    it('should set appropriate cache headers', async () => {
      const request = new MockRequest('https://example.vercel.app/api/validate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: 'test@example.com' }),
      }) as unknown as Request;

      const response = await handler(request);

      expect(response.headers.get('Cache-Control')).toBe('no-store, max-age=0');
    });

    it('should include performance headers', async () => {
      const request = new MockRequest('https://example.vercel.app/api/health', {
        method: 'GET',
      }) as unknown as Request;

      const response = await handler(request);

      expect(response.headers.get('X-Powered-By')).toBe('Vercel Edge Functions');
    });
  });

  describe('Request validation', () => {
    it('should validate content-type header', async () => {
      const request = new MockRequest('https://example.vercel.app/api/validate', {
        method: 'POST',
        headers: { 'Content-Type': 'text/plain' },
        body: 'test@example.com',
      }) as unknown as Request;

      const response = await handler(request);
      const body = await response.json();

      expect(response.status).toBe(400);
      expect(body.error).toBe('Content-Type must be application/json');
    });

    it('should handle missing body', async () => {
      const request = new MockRequest('https://example.vercel.app/api/validate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
      }) as unknown as Request;

      const response = await handler(request);
      const body = await response.json();

      expect(response.status).toBe(400);
      expect(body.error).toBe('Invalid request body');
    });
  });
});
