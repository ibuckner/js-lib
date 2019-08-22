/**
 * returns true if intersection occurs
 * @param {number[][]} r1 - shape extent value (top left and bottom right)
 * @param {number[][]} r2 - shape extent value
 */
export function rectIntersect(r1: number[][], r2: number[][]): boolean {
  return r1[0][0] <= r2[1][0] &&
         r2[0][0] <= r1[1][0] &&
         r1[0][1] <= r2[1][1] &&
         r2[0][1] <= r1[1][1];
}