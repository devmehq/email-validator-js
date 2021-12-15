'use strict';

// This is a JavaScript-based config file containing every Mocha option plus others.
// If you need conditional logic, you might want to use this type of config,
// e.g. set options via environment variables 'process.env'.
// Otherwise, JSON or YAML is recommended.

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
  spec: ['./test/*-test.ts'],
  timeout: '8s',
  'trace-warnings': true,
};
