/**
 * Cloudflare Workers Email Validator Example
 */

// In production, use the npm package:
// import { workerHandler, EmailValidatorDO } from '@devmehq/email-validator-js/serverless/cloudflare';

// For local development, use the built files:
import cloudflareAdapter from '../../../../dist/serverless/adapters/cloudflare.js';
const { workerHandler, EmailValidatorDO } = cloudflareAdapter;

// Export Durable Object class
export { EmailValidatorDO };

// Main worker handler
export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    
    // Route to Durable Object for stateful validation
    if (url.pathname.startsWith('/do/')) {
      const id = env.EMAIL_VALIDATOR.idFromName('global');
      const validator = env.EMAIL_VALIDATOR.get(id);
      
      // Remove /do prefix and forward to Durable Object
      const doUrl = new URL(request.url);
      doUrl.pathname = doUrl.pathname.replace('/do', '');
      const doRequest = new Request(doUrl, request);
      
      return validator.fetch(doRequest);
    }
    
    // Use the standard worker handler
    return workerHandler(request, env, ctx);
  },
  
  // Scheduled worker for cache cleanup (optional)
  async scheduled(event, env, ctx) {
    switch (event.cron) {
      case '0 0 * * *': // Daily at midnight
        // Cleanup old cache entries
        console.log('Running daily cache cleanup');
        break;
      default:
        console.log('Unknown cron:', event.cron);
    }
  }
};

// Custom middleware for rate limiting
async function handleRateLimit(request, env) {
  const ip = request.headers.get('CF-Connecting-IP');
  if (!ip) return null;
  
  const key = `rate-limit:${ip}`;
  const limit = 100; // requests per minute
  
  const current = await env.EMAIL_CACHE.get(key);
  const count = current ? parseInt(current) : 0;
  
  if (count >= limit) {
    return new Response('Rate limit exceeded', { status: 429 });
  }
  
  await env.EMAIL_CACHE.put(key, String(count + 1), { expirationTtl: 60 });
  return null;
}

// Export for testing
export { handleRateLimit };