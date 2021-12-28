# Change Log

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
