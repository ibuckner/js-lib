export const isBrowser: boolean =  typeof window !== undefined && typeof document !== undefined;
export const reYYYYMMDD: RegExp = /^\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$/;
export const reEmail: RegExp = /\b[\w\._]+@[\w]+\.[\w\.]+\b/g;
export const reDecimal: RegExp = /\b[-+]?([0-9]+(\.[0-9]*)?|\.[0-9]+)([eE][-+]?[0-9]+)?\b/g;
export const rePostcode: RegExp = /^(gir\s{0,3}0aa)|((([a-z][0-9]{1,2})|(([a-z][a-hj-y][0-9]{1,2})|(([a-z][0-9][a-z])|([a-z][a-hj-y][0-9]?[a-z]))))\s{0,3}[0-9][a-z]{2})$/i;
export const reURL: RegExp = /\b(https?|ftp|file):\/\/([\w\d-.]+):?(\d{2,})?\b/g;

/**
 * Returns true if a date
 * @param d - date to test
 * @param re - regular expression to apply when d is a string
 */
export function isDate(d: any, re?: RegExp): boolean {
  if (Object.prototype.toString.call(d) === "[object Date]") {
    return true;
  }
  return re ? re.test(d) : false;
}

/**
 * Returns true if a valid UK postcode
 * @param p - value to test
 * @description https://en.wikipedia.org/wiki/Postcodes_in_the_United_Kingdom
 */
export function isEmail(e: string): boolean {
  return reEmail.test(e);
}

/**
 * Returns true if variable is null or empty
 * @param x - value to test
 */
export function isEmpty(x: any): boolean {
  let r: boolean = false;
  if (x && x._groups) {
    return !x.node();
  } else if (x && Array.isArray(x)) {
    r = x.length === 0;
  } else if (typeof x === "function") {
    const res: string = x.toString();
    r = res.indexOf("[native code]") > -1;
  } else {
    r = x === null;
    if (!r) {
      r = x === undefined;
    }
    if (!r) {
      r = x === "";
    }
  }
  return r;
}

const isIE11: boolean = isBrowser &&
  !!((<any>window).MSInputMethodContext && (<any>document).documentMode);
const isIE10: boolean = isBrowser && /MSIE 10/.test(navigator.userAgent);

/**
 * Returns true if browser is Internet Explorer 11
 * @param version - version number to test
 */
export function isIE(version: number): boolean {
  return (version === 11)
    ? isIE11
    : version === 10
      ? isIE10
      : isIE11 || isIE10;
}

/**
 * Returns true if meets valid NHS number check
 * @param n - number to be tested
 */
export function isNHSNumber(nhs: string): boolean {
  nhs = nhs.replace(/ /g, "");
  if (nhs.length !== 10) { return false; }
  if (nhs === nhs[0].repeat(10)) { return false; }
  let n: number[] = nhs.split("").map(s => parseInt(s));
  let sum: number = 0, m: number = 10;
  for (let i: number = 0; i < 9; i++) {
    sum += n[i] * m--;
  }
  let mod: number = sum % 11;
  let check: number = 11 - mod === 11 ? 0 : 11 - mod;
  if (check === 10 || check !== n[9]) {
    return false;
  }
  return true;
}

/**
 * Returns true if number is checked to be valid
 * @param n - Number to check
 */
export function isNumeric(n: any): boolean {
  return !isNaN(n - parseFloat(n));
}

/**
 * Returns true if a valid UK postcode
 * @param p - value to test
 * @description https://en.wikipedia.org/wiki/Postcodes_in_the_United_Kingdom
 */
export function isPostcode(p: string): boolean {
  return rePostcode.test(p);
}

/**
 * Returns true if a valid URL
 * @param u - value to test
 */
export function isURL(u: string): boolean {
  return reURL.test(u);
}