/**
 * Returns cube root value of n
 * @param {number} n - number to apply function over
 */
export function cubedRoot(n: number): number {
  const y: number = Math.pow(Math.abs(n), 1 / 3);
  return n < 0 ? -y : y;
}