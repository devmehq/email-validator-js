const { readFileSync } = require('fs');

const pkg = JSON.parse(readFileSync('./package.json', 'utf8'));

module.exports = (async () => {
  const { default: esbuild } = await import('rollup-plugin-esbuild');
  const { default: typescript } = await import('@rollup/plugin-typescript');
  const { default: json } = await import('@rollup/plugin-json');
  const { default: resolve } = await import('@rollup/plugin-node-resolve');
  const { default: commonjs } = await import('@rollup/plugin-commonjs');

  return {
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
})();