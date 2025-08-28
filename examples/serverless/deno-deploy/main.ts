/**
 * Deno Deploy Email Validator Example
 */

// Import from the published module (in production)
// import { validateEmailCore, validateEmailBatch } from 'https://deno.land/x/email_validator_js/serverless/core.ts';

// For local development, use relative imports
import { validateEmailBatch, validateEmailCore } from '../../../src/serverless/core.ts';

// Main server
Deno.serve({ port: 8000 }, async (req: Request) => {
  const url = new URL(req.url);

  // CORS headers
  const headers = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  };

  // Handle CORS preflight
  if (req.method === 'OPTIONS') {
    return new Response(null, { status: 200, headers });
  }

  // Route: GET /
  if (url.pathname === '/' && req.method === 'GET') {
    return new Response(
      JSON.stringify({
        service: 'Email Validator',
        version: '1.0.0',
        endpoints: {
          'GET /validate': 'Validate single email',
          'POST /validate': 'Validate single or batch emails',
          'GET /health': 'Health check',
        },
      }),
      { headers }
    );
  }

  // Route: GET /health
  if (url.pathname === '/health' && req.method === 'GET') {
    return new Response(
      JSON.stringify({
        status: 'healthy',
        timestamp: new Date().toISOString(),
      }),
      { headers }
    );
  }

  // Route: GET /validate?email=test@example.com
  if (url.pathname === '/validate' && req.method === 'GET') {
    const email = url.searchParams.get('email');

    if (!email) {
      return new Response(
        JSON.stringify({
          error: 'Email parameter is required',
        }),
        { status: 400, headers }
      );
    }

    try {
      const result = await validateEmailCore(email, {
        validateTypo: url.searchParams.get('validateTypo') !== 'false',
        validateDisposable: url.searchParams.get('validateDisposable') !== 'false',
        validateFree: url.searchParams.get('validateFree') !== 'false',
      });

      return new Response(
        JSON.stringify({
          success: true,
          data: result,
        }),
        { headers }
      );
    } catch (error) {
      return new Response(
        JSON.stringify({
          error: error.message,
        }),
        { status: 500, headers }
      );
    }
  }

  // Route: POST /validate
  if (url.pathname === '/validate' && req.method === 'POST') {
    try {
      const body = await req.json();

      if (body.email) {
        // Single email validation
        const result = await validateEmailCore(body.email, body.options);
        return new Response(
          JSON.stringify({
            success: true,
            data: result,
          }),
          { headers }
        );
      }

      if (body.emails && Array.isArray(body.emails)) {
        // Batch validation
        const results = await validateEmailBatch(body.emails, body.options);
        return new Response(
          JSON.stringify({
            success: true,
            data: results,
            count: results.length,
          }),
          { headers }
        );
      }

      return new Response(
        JSON.stringify({
          error: 'Email or emails array is required',
        }),
        { status: 400, headers }
      );
    } catch (error) {
      return new Response(
        JSON.stringify({
          error: error.message,
        }),
        { status: 500, headers }
      );
    }
  }

  // 404 for unknown routes
  return new Response(
    JSON.stringify({
      error: 'Not found',
    }),
    { status: 404, headers }
  );
});

console.log('Email Validator server running on http://localhost:8000');

// Export for testing
export { validateEmailCore, validateEmailBatch };
