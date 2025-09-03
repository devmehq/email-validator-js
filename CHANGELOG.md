# Change Log

## v2.10.2 - 2025-09-03

### 🔧 Maintenance & Improvements

### Changed
- **Build System**: Reverted from Rolldown back to Rollup for better stability and ecosystem compatibility
- **Type System**: Improved TypeScript type inference throughout the codebase
  - Removed duplicate type definitions
  - Leveraged automatic type inference where possible
  - Reduced redundant type declarations for better maintainability
  - Maintained strict type safety while simplifying code

### Fixed
- **Dependencies**: Updated all non-major dependencies to latest versions (#529)
- **Build Configuration**: Restored stable Rollup configuration for consistent builds

### Technical Details
- Removed redundant `types.d.ts` file (271 lines of duplicate definitions)
- Improved type inference in batch processing, domain suggestion, and name detection modules
- Simplified array and object type declarations using TypeScript's inference capabilities
- All tests passing with enhanced type safety

## v2.10.1 - 2025-08-29

### 🐛 Bug Fixes & Improvements

### Fixed
- **Serverless Adapters**: Added missing `handler` export for AWS Lambda and Vercel Edge Functions adapters
- **TypeScript**: Fixed type casting issues in serverless adapter tests
- **Dependencies**: Added `@types/aws-lambda` for proper TypeScript support

### Added
- **Testing**: Comprehensive test suites for AWS Lambda adapter (287 lines)
- **Testing**: Comprehensive test suites for Vercel Edge Functions adapter (328 lines)
- **Testing**: All serverless adapters now have full test coverage

### Improved
- **Code Quality**: Fixed all linting issues with proper type annotations
- **Test Coverage**: 241 tests passing across 15 test suites
- **Developer Experience**: Better TypeScript support for serverless environments

## v2.10.0 - 2025-08-28

### 🚀 Serverless Platform Support

This release introduces comprehensive serverless platform support with dedicated adapters for AWS Lambda, Cloudflare Workers, Vercel Edge Functions, and Deno Deploy, enabling email validation at the edge with optimized performance.

### Added
- **Serverless Core Module**
  - Edge-optimized email validation without Node.js dependencies
  - Built-in EdgeCache for high-performance caching at the edge
  - Batch validation support with configurable concurrency
  - Lightweight bundle size (~15KB gzipped)

- **Platform Adapters**
  - **AWS Lambda**: Full support for API Gateway v1/v2 and ALB triggers
  - **Cloudflare Workers**: Native Workers API with KV storage integration
  - **Vercel Edge Functions**: Edge runtime support with streaming responses
  - **Deno Deploy**: Native Deno server with TypeScript support

- **API Features**
  - RESTful endpoints for single and batch validation
  - CORS support with configurable origins
  - Rate limiting and request validation
  - Comprehensive error handling and logging
  - Health check endpoints

- **Performance Optimizations**
  - Edge caching with TTL configuration
  - Parallel batch processing
  - Minimal cold start times
  - Optimized bundle sizes per platform

### Improved
- **Module System**: New modular exports for tree-shaking
- **TypeScript Support**: Enhanced types for serverless environments
- **Documentation**: Comprehensive serverless deployment guides
- **Testing**: Platform-specific test suites

### Technical Details
- Zero Node.js dependencies in serverless core
- Platform-agnostic validation logic
- Streaming response support for large batches
- Environment-based configuration

## v2.6.0 - 2025-08-26

### 🚀 Enhanced Name Detection Release

This release introduces significant improvements to the name detection functionality, providing more accurate and intelligent extraction of first and last names from complex email address patterns.

### Added
- **Enhanced Composite Name Detection**
  - Support for alphanumeric composite names (e.g., "mo1.test2@example.com")
  - Smart handling of mixed letter-number patterns
  - Preservation of alphanumeric identities when contextually appropriate
  - Confidence scoring adjusted for composite patterns (0.6 for full alphanumeric, 0.8 for mixed)

- **Intelligent Number Processing**
  - Context-aware number handling in email addresses
  - Smart extraction of base names from trailing numbers ("john123" → "John")
  - Mixed case processing ("john2.doe" → "John", "Doe")
  - Alphanumeric pattern preservation for composite identities

- **Advanced Contextual Suffix Recognition**
  - Extended suffix detection for modern email patterns
  - Recognition of development suffixes ("dev", "company", "team")
  - Year pattern detection and filtering (1900-2099)
  - Corporate and organizational suffix handling

- **Complex Multi-Part Name Parsing**
  - Enhanced handling of 3+ part email structures
  - Intelligent first/last name extraction from complex patterns
  - Mixed separator support (dots, underscores, hyphens)
  - Smart suffix filtering in multi-component addresses

- **Refined Confidence Scoring System**
  - Granular confidence levels (0.4-0.9) based on pattern complexity
  - Higher confidence for standard patterns (dot-separated: 0.9)
  - Appropriate confidence for alphanumeric patterns (0.6)
  - Context-aware scoring for extracted vs. preserved patterns

### Improved
- **Name Detection Accuracy**: Significantly improved detection rates for modern email patterns
- **Pattern Recognition**: Better handling of development, gaming, and platform email formats
- **International Support**: Enhanced parsing of hyphenated and compound names
- **Edge Case Handling**: Robust processing of unusual email structures
- **Performance**: Maintained linear time complexity with enhanced functionality

### Technical Enhancements
- **Composite Name Parsing**: New `parseCompositeNamePart()` function for alphanumeric analysis
- **Smart Capitalization**: Enhanced capitalization that preserves alphanumeric formatting
- **Pattern Validation**: Improved `isLikelyName()` with number-aware validation
- **Comprehensive Testing**: 212 test cases covering various pattern types and edge cases

### Use Cases
- Development team email patterns ("dev1.ops2@company.com")
- Gaming and platform usernames ("player1.guild2@platform.com")
- Corporate year-based patterns ("john.smith.2024@corp.com")
- Mixed alphanumeric systems ("user123.admin@service.com")
- International naming conventions with enhanced accuracy

### Backward Compatibility
- All existing API signatures remain unchanged
- Previous detection results maintain consistency
- New capabilities are purely additive
- No breaking changes to confidence thresholds

## v2.4.1 - 2025-01-26

### Improvements
- **Enhanced Domain Validation**: WHOIS functions now use PSL (Public Suffix List) for consistent domain validation
- **Type Safety**: Fixed TypeScript type assertions in WHOIS cache
- **Code Quality**: Removed non-null assertions for safer code

### Changed
- WHOIS domain validation now uses `psl.isValid()` matching email domain validation
- Invalid domains without valid TLDs now correctly return `null`

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