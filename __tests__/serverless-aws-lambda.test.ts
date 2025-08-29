/**
 * Tests for AWS Lambda serverless adapter
 */

import type { APIGatewayProxyEvent, APIGatewayProxyResult, Context } from 'aws-lambda';

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

import { handler } from '../src/serverless/adapters/aws-lambda';

describe('AWS Lambda Adapter', () => {
  const mockContext: Context = {
    callbackWaitsForEmptyEventLoop: false,
    functionName: 'email-validator',
    functionVersion: '1',
    invokedFunctionArn: 'arn:aws:lambda:us-east-1:123456789:function:email-validator',
    memoryLimitInMB: '128',
    awsRequestId: 'test-request-id',
    logGroupName: '/aws/lambda/email-validator',
    logStreamName: 'test-stream',
    getRemainingTimeInMillis: () => 5000,
    done: jest.fn(),
    fail: jest.fn(),
    succeed: jest.fn(),
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('GET /health', () => {
    it('should return health status', async () => {
      const event = {
        httpMethod: 'GET',
        path: '/health',
        headers: {},
        body: null,
        isBase64Encoded: false,
      } as unknown as APIGatewayProxyEvent;

      const result = (await handler(event, mockContext)) as APIGatewayProxyResult;

      expect(result.statusCode).toBe(200);
      const body = JSON.parse(result.body || '{}');
      expect(body.status).toBe('healthy');
      expect(body.timestamp).toBeDefined();
    });
  });

  describe('POST /validate', () => {
    it('should validate a single email', async () => {
      const event = {
        httpMethod: 'POST',
        path: '/validate',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ email: 'test@example.com' }),
        isBase64Encoded: false,
      } as unknown as APIGatewayProxyEvent;

      const result = (await handler(event, mockContext)) as APIGatewayProxyResult;

      expect(result.statusCode).toBe(200);
      const body = JSON.parse(result.body || '{}');
      expect(body.valid).toBe(true);
      expect(body.email).toBe('test@example.com');
    });

    it('should return 400 for missing email', async () => {
      const event: APIGatewayProxyEvent = {
        httpMethod: 'POST',
        path: '/validate',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({}),
        isBase64Encoded: false,
      } as unknown as APIGatewayProxyEvent;

      const result = (await handler(event, mockContext)) as APIGatewayProxyResult;

      expect(result.statusCode).toBe(400);
      const body = JSON.parse(result.body || '{}');
      expect(body.error).toBe('Email is required');
    });

    it('should handle invalid JSON', async () => {
      const event: APIGatewayProxyEvent = {
        httpMethod: 'POST',
        path: '/validate',
        headers: { 'content-type': 'application/json' },
        body: 'invalid json',
        isBase64Encoded: false,
      } as unknown as APIGatewayProxyEvent;

      const result = (await handler(event, mockContext)) as APIGatewayProxyResult;

      expect(result.statusCode).toBe(400);
      const body = JSON.parse(result.body || '{}');
      expect(body.error).toBe('Invalid request body');
    });

    it('should handle base64 encoded body', async () => {
      const bodyContent = JSON.stringify({ email: 'test@example.com' });
      const event: APIGatewayProxyEvent = {
        httpMethod: 'POST',
        path: '/validate',
        headers: { 'content-type': 'application/json' },
        body: Buffer.from(bodyContent).toString('base64'),
        isBase64Encoded: true,
      } as unknown as APIGatewayProxyEvent;

      const result = (await handler(event, mockContext)) as APIGatewayProxyResult;

      expect(result.statusCode).toBe(200);
      const body = JSON.parse(result.body || '{}');
      expect(body.email).toBe('test@example.com');
    });
  });

  describe('POST /validate/batch', () => {
    it('should validate multiple emails', async () => {
      const emails = ['test1@example.com', 'test2@example.com', 'test3@example.com'];
      const event: APIGatewayProxyEvent = {
        httpMethod: 'POST',
        path: '/validate/batch',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ emails }),
        isBase64Encoded: false,
      } as unknown as APIGatewayProxyEvent;

      const result = (await handler(event, mockContext)) as APIGatewayProxyResult;

      expect(result.statusCode).toBe(200);
      const body = JSON.parse(result.body || '{}');
      expect(body.results).toHaveLength(3);
      expect(body.results[0].email).toBe('test1@example.com');
    });

    it('should return 400 for missing emails array', async () => {
      const event: APIGatewayProxyEvent = {
        httpMethod: 'POST',
        path: '/validate/batch',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({}),
        isBase64Encoded: false,
      } as unknown as APIGatewayProxyEvent;

      const result = (await handler(event, mockContext)) as APIGatewayProxyResult;

      expect(result.statusCode).toBe(400);
      const body = JSON.parse(result.body || '{}');
      expect(body.error).toBe('Emails array is required');
    });

    it('should return 400 for too many emails', async () => {
      const emails = Array(101).fill('test@example.com');
      const event: APIGatewayProxyEvent = {
        httpMethod: 'POST',
        path: '/validate/batch',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ emails }),
        isBase64Encoded: false,
      } as unknown as APIGatewayProxyEvent;

      const result = (await handler(event, mockContext)) as APIGatewayProxyResult;

      expect(result.statusCode).toBe(400);
      const body = JSON.parse(result.body || '{}');
      expect(body.error).toBe('Maximum 100 emails allowed per batch');
    });
  });

  describe('CORS handling', () => {
    it('should handle preflight OPTIONS request', async () => {
      const event: APIGatewayProxyEvent = {
        httpMethod: 'OPTIONS',
        path: '/validate',
        headers: { origin: 'https://example.com' },
        body: null,
        isBase64Encoded: false,
      } as unknown as APIGatewayProxyEvent;

      const result = (await handler(event, mockContext)) as APIGatewayProxyResult;

      expect(result.statusCode).toBe(204);
      expect(result.headers?.['Access-Control-Allow-Origin']).toBe('*');
      expect(result.headers?.['Access-Control-Allow-Methods']).toContain('POST');
      expect(result.headers?.['Access-Control-Allow-Headers']).toContain('Content-Type');
    });

    it('should include CORS headers in responses', async () => {
      const event: APIGatewayProxyEvent = {
        httpMethod: 'POST',
        path: '/validate',
        headers: {
          'content-type': 'application/json',
          origin: 'https://example.com',
        },
        body: JSON.stringify({ email: 'test@example.com' }),
        isBase64Encoded: false,
      } as unknown as APIGatewayProxyEvent;

      const result = (await handler(event, mockContext)) as APIGatewayProxyResult;

      expect(result.headers?.['Access-Control-Allow-Origin']).toBe('*');
    });
  });

  describe('Error handling', () => {
    it('should return 404 for unknown routes', async () => {
      const event: APIGatewayProxyEvent = {
        httpMethod: 'GET',
        path: '/unknown',
        headers: {},
        body: null,
        isBase64Encoded: false,
      } as unknown as APIGatewayProxyEvent;

      const result = (await handler(event, mockContext)) as APIGatewayProxyResult;

      expect(result.statusCode).toBe(404);
      const body = JSON.parse(result.body || '{}');
      expect(body.error).toBe('Not found');
    });

    it('should return 405 for unsupported methods', async () => {
      const event: APIGatewayProxyEvent = {
        httpMethod: 'DELETE',
        path: '/validate',
        headers: {},
        body: null,
        isBase64Encoded: false,
      } as unknown as APIGatewayProxyEvent;

      const result = (await handler(event, mockContext)) as APIGatewayProxyResult;

      expect(result.statusCode).toBe(405);
      const body = JSON.parse(result.body || '{}');
      expect(body.error).toBe('Method not allowed');
    });

    it('should handle internal server errors gracefully', async () => {
      // Mock an error in validateEmailCore
      const { validateEmailCore } = require('../src/serverless/core');
      validateEmailCore.mockRejectedValueOnce(new Error('Internal error'));

      const event = {
        httpMethod: 'POST',
        path: '/validate',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ email: 'test@example.com' }),
        isBase64Encoded: false,
      } as unknown as APIGatewayProxyEvent;

      const result = (await handler(event, mockContext)) as APIGatewayProxyResult;

      expect(result.statusCode).toBe(500);
      const body = JSON.parse(result.body || '{}');
      expect(body.error).toBe('Internal server error');
    });
  });

  describe('Query parameters and options', () => {
    it('should pass options from query parameters', async () => {
      const event: APIGatewayProxyEvent = {
        httpMethod: 'POST',
        path: '/validate',
        headers: { 'content-type': 'application/json' },
        queryStringParameters: {
          skipCache: 'true',
          validateTypo: 'false',
        },
        body: JSON.stringify({ email: 'test@example.com' }),
        isBase64Encoded: false,
      } as unknown as APIGatewayProxyEvent;

      const result = (await handler(event, mockContext)) as APIGatewayProxyResult;
      const { validateEmailCore } = require('../src/serverless/core');

      expect(result.statusCode).toBe(200);
      expect(validateEmailCore).toHaveBeenCalledWith('test@example.com', {
        skipCache: true,
        validateTypo: false,
      });
    });
  });
});
