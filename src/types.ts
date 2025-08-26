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
  domainSuggestion?: DomainSuggestion | null;
  detectedName?: DetectedName | null;
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
  detectedName?: DetectedName | null;
  domainSuggestion?: DomainSuggestion | null;
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
  detectName?: boolean;
  nameDetectionMethod?: NameDetectionMethod;
  suggestDomain?: boolean;
  domainSuggestionMethod?: DomainSuggestionMethod;
  commonDomains?: string[];
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
  detectName?: boolean;
  nameDetectionMethod?: NameDetectionMethod;
  suggestDomain?: boolean;
  domainSuggestionMethod?: DomainSuggestionMethod;
  commonDomains?: string[];
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
 * Email suggestion for typo correction (deprecated - use DomainSuggestion)
 */
export interface EmailSuggestion {
  original: string;
  suggested: string;
  confidence: number;
}

/**
 * Domain suggestion for typo correction
 */
export interface DomainSuggestion {
  original: string;
  suggested: string;
  confidence: number;
}

/**
 * Custom domain suggestion function type
 */
export type DomainSuggestionMethod = (domain: string) => DomainSuggestion | null;

/**
 * Parameters for domain suggestion
 */
export interface ISuggestDomainParams {
  domain: string;
  customMethod?: DomainSuggestionMethod;
  commonDomains?: string[];
}

/**
 * Result of name detection from email
 */
export interface DetectedName {
  firstName?: string;
  lastName?: string;
  confidence: number;
}

/**
 * Custom name detection function type
 */
export type NameDetectionMethod = (email: string) => DetectedName | null;

/**
 * Parameters for name detection
 */
export interface IDetectNameParams {
  email: string;
  customMethod?: NameDetectionMethod;
}

/**
 * WHOIS data structure
 */
export interface WhoisData {
  domainName: string | null;
  registrar: string | null;
  creationDate: Date | null;
  expirationDate: Date | null;
  updatedDate: Date | null;
  status: string[];
  nameServers: string[];
  rawData: string;
}

/**
 * Domain age information
 */
export interface DomainAgeInfo {
  domain: string;
  creationDate: Date;
  ageInDays: number;
  ageInYears: number;
  expirationDate: Date | null;
  updatedDate: Date | null;
}

/**
 * Domain registration status information
 */
export interface DomainRegistrationInfo {
  domain: string;
  isRegistered: boolean;
  isAvailable: boolean;
  status: string[];
  registrar: string | null;
  nameServers: string[];
  expirationDate: Date | null;
  isExpired: boolean;
  daysUntilExpiration: number | null;
  isPendingDelete?: boolean;
  isLocked?: boolean;
}
