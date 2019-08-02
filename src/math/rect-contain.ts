/**
 * returns true is the point lies within the shape
 * @param {number[][]} r - shape extent value (top left and bottom right)
 * @param {number} point - single point
 */
export function rectContain(r: number[][], point: number[]): boolean {
  return r[0][0] <= point[0] && point[0] <= r[1][0] && r[0][1] <= point[1] && point[1] <= r[1][1];
}