const { readFileSync } = require('fs');
const esbuild = require('rollup-plugin-esbuild').default;
const json = require('@rollup/plugin-json');
const resolve = require('@rollup/plugin-node-resolve');
const commonjs = require('@rollup/plugin-commonjs');
const terser = require('@rollup/plugin-terser');
const typescript = require('@rollup/plugin-typescript');

const pkg = JSON.parse(readFileSync('./package.json', 'utf8'));

// Only keep Node.js built-in modules as external
// Bundle all npm dependencies for serverless environments
const external = [
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
    extensions: ['.ts', '.js', '.json'],
  }),
  commonjs(),
  esbuild({
    target: 'es2015',
    tsconfig: './tsconfig.json',
    sourceMap: true,
  }),
];

// For declaration generation only
const declarationPlugin = typescript({
  tsconfig: './tsconfig.json',
  declaration: true,
  declarationDir: './dist/serverless',
  emitDeclarationOnly: true,
  rootDir: './src',
  include: ['src/serverless/**/*', 'src/types.ts'],
  exclude: ['**/*.test.ts', '**/*.spec.ts', '__tests__/**/*'],
  compilerOptions: {
    module: 'esnext',
    sourceMap: true,
  },
});

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

module.exports = [
  // Core serverless bundle (ESM)
  {
    input: 'src/serverless/core.ts',
    output: {
      file: 'dist/serverless/core.esm.js',
      format: 'esm',
      sourcemap: true,
    },
    external: [], // Bundle all dependencies including string-similarity-js
    plugins: [...plugins, declarationPlugin],
  },
  
  // Core serverless bundle (CommonJS)
  {
    input: 'src/serverless/core.ts',
    output: {
      file: 'dist/serverless/core.cjs.js',
      format: 'cjs',
      sourcemap: true,
    },
    external: [], // Bundle all dependencies including string-similarity-js
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