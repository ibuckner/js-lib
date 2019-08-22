/**
 * Returns rounded number
 * @param {number} value - value to round off
 * @param {number} precision - number of digits after the decimal point
 */
export function round(value: number, precision: number): number {
  return precision
    ? Math.round(value * (precision = Math.pow(10, precision))) / precision
    : Math.round(value);
}