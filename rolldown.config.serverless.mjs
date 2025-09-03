import { defineConfig } from 'rolldown';
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const pkg = JSON.parse(readFileSync(join(__dirname, 'package.json'), 'utf8'));

// For serverless, we want to bundle everything except node builtins
const external = [
  /^node:/,
];

const baseConfig = {
  external: [],  // Bundle everything for serverless
  resolve: {
    extensions: ['.ts', '.js', '.json'],
    mainFields: ['module', 'main'],
  },
  platform: 'neutral',
  define: {
    'process.env.NODE_ENV': JSON.stringify('production'),
  },
};

// Export array of configurations for multiple builds
export default [
  // Core serverless bundle (ESM)
  defineConfig({
    ...baseConfig,
    input: 'src/serverless/core.ts',
    output: {
      file: 'dist/serverless/core.esm.js',
      format: 'esm',
      sourcemap: true,
    },
  }),
  
  // Core serverless bundle (CommonJS)
  defineConfig({
    ...baseConfig,
    input: 'src/serverless/core.ts',
    output: {
      file: 'dist/serverless/core.cjs.js',
      format: 'cjs',
      sourcemap: true,
    },
  }),
  
  // Core serverless bundle (UMD for browsers)
  defineConfig({
    ...baseConfig,
    input: 'src/serverless/core.ts',
    output: {
      file: 'dist/serverless/core.min.js',
      format: 'umd',
      name: 'EmailValidator',
      sourcemap: false,
      globals: {
        'string-similarity-js': 'stringSimilarity',
      },
    },
  }),
  
  // AWS Lambda adapter
  defineConfig({
    ...baseConfig,
    input: 'src/serverless/adapters/aws-lambda.ts',
    output: [
      {
        file: 'dist/serverless/adapters/aws-lambda.esm.js',
        format: 'esm',
        sourcemap: true,
      },
      {
        file: 'dist/serverless/adapters/aws-lambda.cjs.js',
        format: 'cjs',
        sourcemap: true,
      },
    ],
    external,  // AWS Lambda has Node.js runtime
  }),
  
  // Vercel adapter
  defineConfig({
    ...baseConfig,
    input: 'src/serverless/adapters/vercel.ts',
    output: [
      {
        file: 'dist/serverless/adapters/vercel.esm.js',
        format: 'esm',
        sourcemap: true,
      },
      {
        file: 'dist/serverless/adapters/vercel.cjs.js',
        format: 'cjs',
        sourcemap: true,
      },
    ],
    external,  // Vercel has Node.js runtime
  }),
  
  // Cloudflare adapter
  defineConfig({
    ...baseConfig,
    input: 'src/serverless/adapters/cloudflare.ts',
    output: [
      {
        file: 'dist/serverless/adapters/cloudflare.esm.js',
        format: 'esm',
        sourcemap: true,
      },
      {
        file: 'dist/serverless/adapters/cloudflare.cjs.js',
        format: 'cjs',
        sourcemap: true,
      },
    ],
    external,  // Cloudflare Workers has limited Node.js support
  }),
  
  // Complete bundle with all adapters
  defineConfig({
    ...baseConfig,
    input: 'src/serverless/index.ts',
    output: [
      {
        file: 'dist/serverless/index.esm.js',
        format: 'esm',
        sourcemap: true,
      },
      {
        file: 'dist/serverless/index.cjs.js',
        format: 'cjs',
        sourcemap: true,
      },
    ],
    external,
  }),
];