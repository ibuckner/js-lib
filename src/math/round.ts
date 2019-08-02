/**
 * Returns rounded number
 * @param {number} value 
 * @param {number} precision 
 */
export function round(value: number, precision: number): number {
  return precision
    ? Math.round(value * (precision = Math.pow(10, precision))) / precision
    : Math.round(value);
}