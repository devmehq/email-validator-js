/**
 * Error codes for email verification failures
 */
export enum VerificationErrorCode {
  INVALID_FORMAT = 'INVALID_FORMAT',
  INVALID_DOMAIN = 'INVALID_DOMAIN',
  NO_MX_RECORDS = 'NO_MX_RECORDS',
  SMTP_CONNECTION_FAILED = 'SMTP_CONNECTION_FAILED',
  SMTP_TIMEOUT = 'SMTP_TIMEOUT',
  MAILBOX_NOT_FOUND = 'MAILBOX_NOT_FOUND',
  MAILBOX_FULL = 'MAILBOX_FULL',
  NETWORK_ERROR = 'NETWORK_ERROR',
  DISPOSABLE_EMAIL = 'DISPOSABLE_EMAIL',
  FREE_EMAIL_PROVIDER = 'FREE_EMAIL_PROVIDER',
}

/**
 * Detailed result for email verification
 */
export interface DetailedVerificationResult {
  valid: boolean;
  email: string;
  format: {
    valid: boolean;
    error?: VerificationErrorCode;
  };
  domain: {
    valid: boolean | null;
    mxRecords?: string[];
    error?: VerificationErrorCode;
  };
  smtp: {
    valid: boolean | null;
    error?: VerificationErrorCode;
    responseCode?: number;
  };
  disposable: boolean;
  freeProvider: boolean;
  suggestion?: string;
  metadata?: {
    verificationTime: number;
    cached: boolean;
  };
}

/**
 * Basic verification result (backward compatible)
 */
export interface IVerifyEmailResult {
  validFormat: boolean;
  validMx: boolean | null;
  validSmtp: boolean | null;
}

/**
 * Parameters for email verification
 */
export interface IVerifyEmailParams {
  emailAddress: string;
  timeout?: number;
  verifyMx?: boolean;
  verifySmtp?: boolean;
  debug?: boolean;
  smtpPort?: number;
  detailed?: boolean;
  checkDisposable?: boolean;
  checkFree?: boolean;
  retryAttempts?: number;
}

/**
 * Parameters for batch verification
 */
export interface IBatchVerifyParams {
  emailAddresses: string[];
  concurrency?: number;
  timeout?: number;
  verifyMx?: boolean;
  verifySmtp?: boolean;
  checkDisposable?: boolean;
  checkFree?: boolean;
  detailed?: boolean;
}

/**
 * Result for batch verification
 */
export interface BatchVerificationResult {
  results: Map<string, DetailedVerificationResult | IVerifyEmailResult>;
  summary: {
    total: number;
    valid: number;
    invalid: number;
    errors: number;
    processingTime: number;
  };
}

/**
 * SMTP verification parameters
 */
export interface VerifyMailboxSMTPParams {
  port?: number;
  local: string;
  domain: string;
  mxRecords: string[];
  timeout: number;
  debug: boolean;
  retryAttempts?: number;
}

/**
 * Connection pool configuration
 */
export interface ConnectionPoolConfig {
  maxConnections?: number;
  maxIdleTime?: number;
  connectionTimeout?: number;
}

/**
 * Email suggestion for typo correction
 */
export interface EmailSuggestion {
  original: string;
  suggested: string;
  confidence: number;
}
