/**
 * Vercel Edge Function adapter for email validation
 * Supports both Edge Runtime and Node.js runtime
 */

import type { ValidateEmailOptions } from '../../types';
import { validateEmailBatch, validateEmailCore } from '../core';

// Vercel Request/Response types
export interface VercelRequest {
  method: string;
  url: string;
  headers: Headers;
  body?: unknown;
  query?: { [key: string]: string | string[] };
}

export interface VercelResponse {
  status: (code: number) => VercelResponse;
  json: (data: unknown) => void;
  send: (data: unknown) => void;
}

// Request types
interface ValidateRequest {
  email?: string;
  emails?: string[];
  options?: ValidateEmailOptions;
}

// Edge Runtime handler
export async function edgeHandler(request: Request): Promise<Response> {
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

    // Single email validation
    if (requestData.email) {
      const result = await validateEmailCore(requestData.email, requestData.options);
      return new Response(JSON.stringify({ success: true, data: result }), {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
          'Cache-Control': 'public, max-age=3600',
        },
      });
    }

    // Batch email validation
    if (requestData.emails) {
      const results = await validateEmailBatch(requestData.emails, requestData.options);
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
    console.error('Vercel Edge error:', error);
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

// Node.js Runtime handler
export async function nodeHandler(req: VercelRequest, res: VercelResponse): Promise<void> {
  // Handle CORS
  if (req.method === 'OPTIONS') {
    res.status(200).send('');
    return;
  }

  try {
    let requestData: ValidateRequest;

    // Parse request based on method
    if (req.method === 'GET') {
      requestData = {
        email: req.query?.email as string | undefined,
        emails: req.query?.emails ? (req.query.emails as string).split(',') : undefined,
        options: {
          validateMx: req.query?.validateMx === 'true',
          validateSMTP: req.query?.validateSMTP === 'true',
          validateTypo: req.query?.validateTypo !== 'false',
          validateDisposable: req.query?.validateDisposable !== 'false',
          validateFree: req.query?.validateFree !== 'false',
        },
      };
    } else if (req.method === 'POST') {
      requestData = req.body as ValidateRequest;
    } else {
      res.status(405).json({ success: false, error: 'Method not allowed' });
      return;
    }

    // Validate request
    if (!requestData.email && !requestData.emails) {
      res.status(400).json({
        success: false,
        error: 'Email or emails array is required',
      });
      return;
    }

    // Single email validation
    if (requestData.email) {
      const result = await validateEmailCore(requestData.email, requestData.options);
      res.status(200).json({ success: true, data: result });
      return;
    }

    // Batch email validation
    if (requestData.emails) {
      const results = await validateEmailBatch(requestData.emails, requestData.options);
      res.status(200).json({ success: true, data: results });
      return;
    }

    res.status(400).json({ success: false, error: 'Invalid request' });
  } catch (error) {
    console.error('Vercel Node error:', error);
    res.status(500).json({
      success: false,
      error: error instanceof Error ? error.message : 'Internal server error',
    });
  }
}

// Export config for Vercel
export const config = {
  runtime: 'edge', // or 'nodejs'
  regions: ['iad1'], // Specify regions if needed
};

// Export handlers
export default {
  edgeHandler,
  nodeHandler,
};
