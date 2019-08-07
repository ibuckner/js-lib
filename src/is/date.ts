export const reYYYYMMDD: RegExp = /^\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$/;

/**
 * Returns true if a date
 * @param {any} d - date to test
 * @param {RegExp} re - regular expression to apply when d is a string
 */
export function isDate<T>(d: any, re?: RegExp): boolean {
  if (Object.prototype.toString.call(d) === "[object Date]") {
    return true;
  }
  return re ? re.test(d) : false;
}