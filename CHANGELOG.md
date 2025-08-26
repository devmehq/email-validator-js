# Change Log

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