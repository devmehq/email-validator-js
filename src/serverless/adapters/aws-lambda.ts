/**
 * AWS Lambda adapter for email validation
 * Supports API Gateway and direct Lambda invocation
 */

import type { ValidateEmailOptions, EmailValidationResult } from '../../types';
import { clearCache, validateEmailBatch, validateEmailCore } from '../core';

// AWS Lambda handler types
export interface APIGatewayProxyEvent {
  body: string | null;
  headers: { [key: string]: string };
  httpMethod: string;
  path: string;
  queryStringParameters: { [key: string]: string } | null;
  pathParameters: { [key: string]: string } | null;
}

export interface APIGatewayProxyResult {
  statusCode: number;
  headers?: { [key: string]: string };
  body: string;
}

export interface LambdaContext {
  functionName: string;
  functionVersion: string;
  awsRequestId: string;
  remainingTimeInMillis: number;
}

// Request/Response types
interface ValidateRequest {
  email?: string;
  emails?: string[];
  options?: ValidateEmailOptions;
}

interface ValidateResponse {
  success: boolean;
  data?: EmailValidationResult | EmailValidationResult[];
  error?: string;
}

// API Gateway handler
export async function apiGatewayHandler(
  event: APIGatewayProxyEvent,
  _context: LambdaContext
): Promise<APIGatewayProxyResult> {
  const headers = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
  };

  // Handle CORS preflight
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers,
      body: '',
    };
  }

  try {
    // Parse request body
    const request: ValidateRequest = event.body ? JSON.parse(event.body) : {};

    // Validate request
    if (!request.email && !request.emails) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({
          success: false,
          error: 'Email or emails array is required',
        }),
      };
    }

    // Single email validation
    if (request.email) {
      const result = await validateEmailCore(request.email, request.options);
      return {
        statusCode: 200,
        headers,
        body: JSON.stringify({
          success: true,
          data: result,
        }),
      };
    }

    // Batch email validation
    if (request.emails) {
      const results = await validateEmailBatch(request.emails, request.options);
      return {
        statusCode: 200,
        headers,
        body: JSON.stringify({
          success: true,
          data: results,
        }),
      };
    }

    return {
      statusCode: 400,
      headers,
      body: JSON.stringify({
        success: false,
        error: 'Invalid request',
      }),
    };
  } catch (error) {
    console.error('Lambda error:', error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({
        success: false,
        error: error instanceof Error ? error.message : 'Internal server error',
      }),
    };
  }
}

// Direct Lambda handler
export async function lambdaHandler(event: ValidateRequest, _context: LambdaContext): Promise<ValidateResponse> {
  try {
    // Validate request
    if (!event.email && !event.emails) {
      return {
        success: false,
        error: 'Email or emails array is required',
      };
    }

    // Single email validation
    if (event.email) {
      const result = await validateEmailCore(event.email, event.options);
      return {
        success: true,
        data: result,
      };
    }

    // Batch email validation
    if (event.emails) {
      const results = await validateEmailBatch(event.emails, event.options);
      return {
        success: true,
        data: results,
      };
    }

    return {
      success: false,
      error: 'Invalid request',
    };
  } catch (error) {
    console.error('Lambda error:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Internal server error',
    };
  }
}

// Cache management handler
export async function cacheHandler(
  event: { action: 'clear' | 'stats' },
  _context: LambdaContext
): Promise<{ success: boolean; message?: string; stats?: unknown }> {
  switch (event.action) {
    case 'clear':
      clearCache();
      return { success: true, message: 'Cache cleared' };
    case 'stats':
      // Return cache statistics if needed
      return { success: true, message: 'Cache stats not implemented' };
    default:
      return { success: false, message: 'Invalid action' };
  }
}

// Export handlers
export default {
  apiGatewayHandler,
  lambdaHandler,
  cacheHandler,
};
