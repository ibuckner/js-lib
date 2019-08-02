/**
 * Returns the maximum value for the sum of consecutive values in an array
 * @param {number[]} ar - array of numerical values
 */
export function maxSubArray(ar: number[]): number {
  let best: number = ar[0];
  let sum: number = 0;
  for (let k: number = 0; k < ar.length; k++) {
    sum = Math.max(ar[k], sum + ar[k]);
    best = Math.max(best, sum);
  }
  return best;
}
