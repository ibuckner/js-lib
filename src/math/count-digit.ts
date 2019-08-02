/**
 * Returns the number of significant digits
 * @param {number} n - number to inspect
 */
export function countDigit(n: number): number {
  n = Math.round(Math.abs(n));
  if (n === 0) {
    return 1;
  }
  return Math.floor(Math.log(n) / Math.log(10)) + 1;
}