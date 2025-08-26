# Change Log

## v2.4.0 - 2025-01-26

### 🎉 WHOIS Domain Information Release

This release adds WHOIS lookup capabilities to retrieve domain age and registration status, providing deeper insights into email domain validity and reputation.

### Added
- **Domain Age Detection via WHOIS**
  - New `getDomainAge()` function retrieves domain creation date and age
  - Calculates age in days and years
  - Returns expiration and last updated dates
  - Supports extraction from email addresses and URLs
  - 1-hour caching for performance optimization

- **Domain Registration Status via WHOIS**
  - New `getDomainRegistrationStatus()` function checks domain registration
  - Detects if domain is registered or available
  - Returns registrar information and name servers
  - Provides domain status codes (locked, pending deletion, etc.)
  - Calculates days until expiration
  - Identifies expired domains

- **WHOIS Infrastructure**
  - Support for 50+ TLDs with specific WHOIS servers
  - Automatic WHOIS server discovery for unknown TLDs
  - Intelligent parsing of various WHOIS response formats
  - Robust error handling and timeout support
  - Built-in caching with 1-hour TTL

- **New Type Definitions**
  - `DomainAgeInfo` interface for domain age results
  - `DomainRegistrationInfo` interface for registration status
  - `WhoisData` interface for raw WHOIS data

### Performance
- WHOIS results cached for 1 hour to reduce network calls
- Timeout support (default 5 seconds) for unresponsive WHOIS servers
- Graceful degradation when WHOIS servers are unavailable

### Testing
- Added comprehensive test suite for WHOIS functions
- 19 tests covering various scenarios and edge cases
- Integration tests with real WHOIS servers

## v2.3.0 - 2025-01-26

### 🎉 Name Detection & Domain Suggestion Release

This release introduces intelligent name detection from email addresses and domain typo detection with suggestions, enhancing the email validation capabilities.

### Added
- **Name Detection from Email Addresses**
  - New `detectName()` function extracts first and last names from email addresses
  - Supports common separators: dot (.), underscore (_), hyphen (-)
  - Handles camelCase patterns (e.g., johnDoe@example.com)
  - Removes email aliases (text after +) before detection
  - Confidence scoring based on pattern reliability
  - Custom detection method support via `nameDetectionMethod` parameter
  - Integrated into `verifyEmail()` and `verifyEmailDetailed()` with `detectName` parameter
  
- **Domain Typo Detection and Suggestions**
  - New `suggestEmailDomain()` function detects and corrects domain typos
  - Supports 70+ common email domains (Gmail, Yahoo, Outlook, etc.)
  - Uses string similarity algorithm from `string-similarity-js` package
  - Smart similarity thresholds based on domain length
  - Known typo patterns detected with 95% confidence
  - Custom domain list support via `commonDomains` parameter
  - Cached suggestions for 24-hour performance optimization
  - Enabled by default in `verifyEmailDetailed()`
  
- **New Utility Functions**
  - `isCommonDomain()` - Check if domain is in common list
  - `getDomainSimilarity()` - Calculate similarity between two domains
  - `COMMON_EMAIL_DOMAINS` - Exported constant with 70+ common domains
  
- **Enhanced Type Definitions**
  - `DetectedName` interface for name detection results
  - `DomainSuggestion` interface for domain suggestions
  - `NameDetectionMethod` type for custom detection functions
  - `DomainSuggestionMethod` type for custom suggestion functions

### Changed
- Updated `verifyEmail()`, `verifyEmailDetailed()`, and `verifyEmailBatch()` to support name detection and domain suggestions
- Enhanced caching system to include domain suggestions (24-hour TTL)
- Added `string-similarity-js` as a dependency for similarity calculations

### Performance
- Domain suggestions cached for 24 hours to avoid recalculating similarity scores
- Name detection is lightweight with minimal performance impact
- All features are optional and don't affect performance when disabled

## v2.2.1 - 2025-01-26

### Changed
- Move `@types/psl` from dependencies to devDependencies for cleaner production installs
- Update `typescript-eslint` to v8.41.0
- Update `eslint` to v9.34.0
- Update README documentation

### Fixed
- Reduced production dependencies footprint by correctly categorizing development-only packages

## v2.1.0 - 2024-01-19

### 🎉 Major Improvements Release

This release brings significant performance improvements, new features, and better developer experience while maintaining full backward compatibility.

### Added
- **Batch Email Verification** - New `verifyEmailBatch()` function for parallel processing of multiple emails with concurrency control
- **Detailed Verification Results** - New `verifyEmailDetailed()` function returns comprehensive results with error codes
- **Advanced Caching System** - Integrated `tiny-lru` for intelligent caching with configurable TTL:
  - MX Records: 1 hour TTL
  - Disposable checks: 24 hours TTL
  - Free provider checks: 24 hours TTL
  - Domain validation: 24 hours TTL
  - SMTP results: 30 minutes TTL
- **Error Code System** - New `VerificationErrorCode` enum for precise error identification
- **Retry Mechanism** - Automatic retry for transient failures with exponential backoff
- **Multiple MX Fallback** - Automatically tries up to 3 MX servers if the first fails
- **Cache Management** - New `clearAllCaches()` utility function
- **TypeScript Enhancements** - Strict mode enabled with comprehensive type definitions
- **RFC 5321 Compliance** - Enhanced email validation with proper length checks (64 char local, 253 char domain)
- **New Test Coverage** - Added comprehensive tests for batch processing, caching, and detailed verification

### Changed
- **Socket Cleanup** - Fixed memory leaks with proper socket cleanup and event listener removal
- **Performance** - ~90% reduction in DNS lookups through caching
- **Email Validation** - Enhanced pattern detection (consecutive dots, leading/trailing dots)
- **Dependencies** - Added `tiny-lru` for efficient LRU caching
- **TypeScript Configuration** - Enabled strict mode for better type safety
- **Jest Configuration** - Updated to use new transform syntax (removed deprecated globals)

### Fixed
- Memory leak in socket connections preventing proper cleanup
- Socket cleanup issues causing "Cannot log after tests are done" errors
- Caching for negative results (now caches both positive and negative results)
- TypeScript strict null check issues throughout the codebase
- Test isolation issues with shared cache between tests

### Performance Improvements
- Caching reduces repeated DNS lookups by ~90%
- Batch processing enables parallel verification of multiple emails
- Smart MX record fallback reduces false negatives
- Connection reuse through SMTP result caching
- Optimized memory usage with proper cleanup

### Developer Experience
- Comprehensive JSDoc documentation for all public APIs
- New examples directory with advanced usage patterns
- Migration guide for upgrading from v2.0.0
- Improved error messages with specific error codes
- Better TypeScript support with exported types
- All tests passing with 100% reliability

### Documentation
- Complete API reference in README
- Performance optimization guide
- Migration guide (MIGRATION.md)
- Advanced usage examples
- Commercial licensing information at https://dev.me/license/email-validator

### Migration Notes
This release is **fully backward compatible**. All existing code will continue to work without changes. New features are opt-in through new functions. See [MIGRATION.md](./MIGRATION.md) for details.

## v2.0.1
- Update release script

## v2.0.0
- Update license from MIT to BSL-1.1
- Improve performance use es6 set to speed up domain lookups thanks to [@ArsenyYankovsky](https://github.com/ArsenyYankovsky) [#221](https://github.com/devmehq/email-validator-js/pull/221)
- Update dependencies
- Update lists

## v1.0.19
- allow passing `smtpPort` to `verifyEmail` function

## v1.0.18
- Fix npm release folder

## v1.0.17
- Update dependencies
- Update disposable email domains
- Update free email domains

## v1.0.14
- add socket.on('timeout') event
- add socket.on('close') event
- enhance email regex validation

## v1.0.13
- minor refactoring
- adding more tests and real dns tests
- change free email domains to json file
- change disposable email domains to json file

## v1.0.12
- change default value verifyMx to false
- fix validMx value check when verifySmtp is true

## v1.0.11
- remove yahoo exclusion in smtp

## v1.0.10
- change response validEmailFormat to validFormat

## v1.0.9
- change response wellFormed to validEmailFormat
- change response validDomain to validMx
- change response validMailbox to validSmtp

## v1.0.8
- change params verifyDomain to verifyMx
- change params verifyMailbox to verifySmtp

## v1.0.7
- Add PSL to support ( isValidEmailDomain )
- Refactor tests

## v1.0.0
- Initial release