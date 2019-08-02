/**
 * Returns the number of significant digits
 * @param {number} n - number to inspect
 */
export function countDigit(n: number): number {
  return Math.floor(Math.log(n) / Math.log(10)) + 1;
}