/**
 * Returns the sum of values
 * @param {number[]} values 
 */
export function sumValues(values: number[]): number {
  return values.reduce((sum, v) => sum + v, 0);
}