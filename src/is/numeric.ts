export const reDecimal: RegExp = /\b[-+]?([0-9]+(\.[0-9]*)?|\.[0-9]+)([eE][-+]?[0-9]+)?\b/g;

/**
 * Returns true if number is checked to be valid
 * @param {any} n - Number to check
 */
export function isNumeric(n: any): boolean {
  return !isNaN(n - parseFloat(n));
}