const { readFileSync } = require('fs');
const esbuild = require('rollup-plugin-esbuild').default;
const typescript = require('@rollup/plugin-typescript');
const json = require('@rollup/plugin-json');
const resolve = require('@rollup/plugin-node-resolve');
const commonjs = require('@rollup/plugin-commonjs');

const pkg = JSON.parse(readFileSync('./package.json', 'utf8'));

module.exports = {
  input: 'src/index.ts',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      sourcemap: true,
    },
    {
      file: pkg.module || 'dist/index.esm.js',
      format: 'es',
      sourcemap: true,
    },
  ],
  external: [
    ...Object.keys(pkg.dependencies || {}),
    ...Object.keys(pkg.peerDependencies || {}),
    'node:dns',
    'node:net',
    'node:tls',
    'node:crypto',
    'node:fs',
    'node:path',
    'node:util',
    'node:stream',
  ],
  plugins: [
    json({
      compact: true,
      preferConst: true,
    }),
    resolve({
      preferBuiltins: true,
    }),
    commonjs(),
    esbuild({
      target: 'es2019',
      tsconfig: './tsconfig.json',
      sourceMap: true,
    }),
    // TypeScript plugin only for declaration generation
    typescript({
      tsconfig: './tsconfig.json',
      declaration: true,
      declarationDir: './dist',
      emitDeclarationOnly: true,
      rootDir: './src',
      exclude: ['**/*.test.ts', '**/*.spec.ts', '__tests__/**/*', 'src/serverless/**/*'],
      compilerOptions: {
        module: 'esnext',
        sourceMap: true,
      },
    }),
  ],
};