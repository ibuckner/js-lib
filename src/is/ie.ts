import isBrowser from "./browser";

const isIE11: boolean = isBrowser &&
  !!((<any>window).MSInputMethodContext && (<any>document).documentMode);
const isIE10: boolean = isBrowser && /MSIE 10/.test(navigator.userAgent);

/**
 * Returns true if browser is Internet Explorer 11
 * @param {number} version - version number to test
 */
export function isIE(version: number): boolean {
  return (version === 11)
    ? isIE11
    : version === 10
      ? isIE10
      : isIE11 || isIE10;
}