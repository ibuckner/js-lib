import { sumValues } from "./sum-values";

/**
 * Returns standard deviation value
 * @param {number[]} values - array of values
 */
export function stddev(values: number[]): number {
  const avg: number = sumValues(values) / values.length;
  const squareDiffs: number[] = values.map((v: number) => (v - avg) * (v - avg));
  const avgSquareDiff: number = sumValues(squareDiffs) / squareDiffs.length;
  return Math.sqrt(avgSquareDiff);
}