import typescript from '@rollup/plugin-typescript';
import json from '@rollup/plugin-json';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import terser from '@rollup/plugin-terser';
import { readFileSync } from 'fs';

const pkg = JSON.parse(readFileSync('./package.json', 'utf8'));

const external = [
  ...Object.keys(pkg.dependencies || {}),
  'node:dns',
  'node:net',
  'node:tls',
];

const plugins = [
  json({
    compact: true,
    preferConst: true,
  }),
  resolve({
    browser: true,
    preferBuiltins: false,
  }),
  commonjs(),
  typescript({
    tsconfig: './tsconfig.serverless.json',
    declaration: false,
    sourceMap: true,
  }),
];

const productionPlugins = [
  ...plugins,
  terser({
    compress: {
      drop_console: true,
      drop_debugger: true,
    },
    format: {
      comments: false,
    },
  }),
];

export default [
  // Core serverless bundle (ESM)
  {
    input: 'src/serverless/core.ts',
    output: {
      file: 'dist/serverless/core.esm.js',
      format: 'esm',
      sourcemap: true,
    },
    external: ['string-similarity-js'],
    plugins,
  },
  
  // Core serverless bundle (CommonJS)
  {
    input: 'src/serverless/core.ts',
    output: {
      file: 'dist/serverless/core.cjs.js',
      format: 'cjs',
      sourcemap: true,
    },
    external: ['string-similarity-js'],
    plugins,
  },
  
  // Core serverless bundle (Minified UMD for browsers)
  {
    input: 'src/serverless/core.ts',
    output: {
      file: 'dist/serverless/core.min.js',
      format: 'umd',
      name: 'EmailValidator',
      sourcemap: false,
    },
    external: [],
    plugins: productionPlugins,
  },
  
  // AWS Lambda adapter
  {
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
    external,
    plugins,
  },
  
  // Vercel adapter
  {
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
    external,
    plugins,
  },
  
  // Cloudflare adapter
  {
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
    external,
    plugins,
  },
  
  // Complete bundle with all adapters
  {
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
    plugins,
  },
];