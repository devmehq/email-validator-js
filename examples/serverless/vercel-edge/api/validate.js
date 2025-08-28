/**
 * Vercel Edge Function Example
 */

// In production, use the npm package:
// import { edgeHandler } from '@devmehq/email-validator-js/serverless/vercel';

// For local development, use the built files:
import vercelAdapter from '../../../../dist/serverless/adapters/vercel.js';
const { edgeHandler } = vercelAdapter;

// Configure as Edge Function
export const config = {
  runtime: 'edge',
  regions: ['iad1'], // Deploy to US East
};

// Export the handler
export default edgeHandler;