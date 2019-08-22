import { TPoint } from "../types";

/**
 * returns true is the point lies within the shape
 * @param {number[][]} r - shape extent value (top left and bottom right)
 * @param {TPoint} point - single point
 */
export function rectContain(r: number[][], point: TPoint): boolean {
  return r[0][0] <= point.x &&
         point.x <= r[1][0] &&
         r[0][1] <= point.y &&
         point.y <= r[1][1];
}