/**
 * Returns the circle's radius based on circle area
 * @param {number} area - area of circle
 */
export function circleRadius(area: number): number {
  return Math.sqrt(area / Math.PI);
}