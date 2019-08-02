import { triangleArea } from "./triangle-area";

/**
 * Returns a triangle's height given by lengths of three sides
 * @param {number} a - side a
 * @param {number} b - side b
 * @param {number} c - side c
 */
export function triangleHeight(a: number, b: number, c: number): { a: number, b: number, c: number} {
  const area: any = triangleArea(a, b, c);
  return {
    a: (2 * area) / a,
    b: (2 * area) / b,
    c: (2 * area) / c,
  };
}