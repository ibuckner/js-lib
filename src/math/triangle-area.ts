/**
 * Returns a triangle's area given by lengths of three sides
 * @param {number} a - side a
 * @param {number} b - side b
 * @param {number} c - side c
 */
export function triangleArea(a: number, b: number, c: number): number {
  const sum: number = a + b + c;
  const sem: number = sum / 2;
  const area: number = Math.sqrt(sem * (sem - a) * (sem - b) * (sem - c));
  return area;
}