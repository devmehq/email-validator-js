#!/usr/bin/env node
import { execSync } from 'child_process';
import { existsSync, mkdirSync } from 'fs';
import { dirname } from 'path';

// Ensure dist directories exist
const directories = [
  'dist',
  'dist/serverless',
  'dist/serverless/adapters',
];

directories.forEach(dir => {
  if (!existsSync(dir)) {
    mkdirSync(dir, { recursive: true });
  }
});

// Generate TypeScript declarations
console.log('Generating TypeScript declarations...');

try {
  // Main declarations
  execSync('npx tsc src/index.ts --declaration --declarationDir dist --emitDeclarationOnly --module esnext --esModuleInterop --resolveJsonModule --skipLibCheck --target ES2019 --moduleResolution node', {
    stdio: 'inherit',
  });

  // Serverless core declarations
  execSync('npx tsc src/serverless/core.ts src/serverless/index.ts --declaration --declarationDir dist --emitDeclarationOnly --module esnext --esModuleInterop --resolveJsonModule --skipLibCheck --target ES2019 --moduleResolution node', {
    stdio: 'inherit',
  });

  // Serverless adapter declarations
  execSync('npx tsc src/serverless/adapters/*.ts --declaration --declarationDir dist --emitDeclarationOnly --module esnext --esModuleInterop --resolveJsonModule --skipLibCheck --target ES2019 --moduleResolution node', {
    stdio: 'inherit',
  });

  console.log('TypeScript declarations generated successfully!');
} catch (error) {
  console.error('Error generating TypeScript declarations:', error.message);
  process.exit(1);
}