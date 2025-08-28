/**
 * AWS Lambda Email Validator Example
 * Deploy with Serverless Framework or SAM
 */

// In production, use the npm package:
// import { apiGatewayHandler, lambdaHandler, cacheHandler } from '@devmehq/email-validator-js/serverless/aws';

// For local development, use the built files:
const { apiGatewayHandler, lambdaHandler, cacheHandler } = require('../../../dist/serverless/adapters/aws-lambda.js').default;

// API Gateway HTTP endpoint
export const validateEmailHTTP = apiGatewayHandler;

// Direct Lambda invocation
export const validateEmailDirect = lambdaHandler;

// Cache management function
export const manageCache = cacheHandler;

// Custom handler with additional logic
export const customValidator = async (event, context) => {
  try {
    // Add custom authentication, rate limiting, etc.
    const authHeader = event.headers?.Authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return {
        statusCode: 401,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ error: 'Unauthorized' }),
      };
    }

    // Extract email from different sources
    let email;
    if (event.httpMethod === 'GET') {
      email = event.queryStringParameters?.email;
    } else if (event.httpMethod === 'POST' && event.body) {
      const body = JSON.parse(event.body);
      email = body.email;
    }

    if (!email) {
      return {
        statusCode: 400,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ error: 'Email is required' }),
      };
    }

    // Call the validation handler
    const validationEvent = {
      email,
      options: {
        validateTypo: true,
        validateDisposable: true,
        validateFree: true,
      },
    };

    const result = await lambdaHandler(validationEvent, context);

    // Add custom post-processing
    if (result.success && result.data?.valid) {
      // Log valid emails, send to analytics, etc.
      console.log('Valid email:', email);
    }

    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'public, max-age=3600',
      },
      body: JSON.stringify(result),
    };
  } catch (error) {
    console.error('Validation error:', error);
    return {
      statusCode: 500,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ 
        error: 'Internal server error',
        message: error.message 
      }),
    };
  }
};