/**
 * Returns true if variable is null or empty
 * @param {any} x - value to test
 */
export function isEmpty<T>(x: any): boolean {
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