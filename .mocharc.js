'use strict';

module.exports = {
  'allow-uncaught': false,
  'async-only': true,
  bail: true,
  'check-leaks': false,
  color: true,
  delay: false,
  diff: true,
  exit: true,
  extension: ['js', 'cjs', 'mjs', 'ts'],
  'inline-diffs': false,
  jobs: 2,
  'node-option': ['unhandled-rejections=strict'],
  package: './package.json',
  parallel: false,
  recursive: false,
  reporter: 'spec',
  require: ['ts-node/register', 'should'],
  spec: ['./__tests__/*-test.ts'],
  timeout: '8s',
  'trace-warnings': true,
};
