import { isValid } from 'psl';

const isValidResults: Record<string, boolean> = {};

export function isValidEmailDomain(emailOrDomain: string): boolean {
  let [_, emailDomain] = emailOrDomain?.split('@');
  if (!emailDomain) {
    emailDomain = _;
  }
  if (!emailDomain) {
    return false;
  }

  // cache results
  if (isValidResults[emailDomain]) return isValidResults[emailDomain];

  try {
    isValidResults[emailDomain] = isValid(emailDomain);
    return isValidResults[emailDomain];
  } catch (e) {
    isValidResults[emailDomain] = false;
    return false;
  }
}

export function isValidEmail(emailAddress: string) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(emailAddress).toLowerCase()) && emailAddress.indexOf('.+') === -1;
}
