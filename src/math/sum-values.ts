/**
 * Returns the sum of values
 * @param {number[]} values - array of numbers to sum up
 */
export function sumValues(values: number[]): number {
  return values.reduce((sum, v) => sum + v, 0);
}