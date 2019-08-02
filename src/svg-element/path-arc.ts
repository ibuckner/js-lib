import { TPoint } from "../types";

/**
 * Returns path string as an arc between two points.
 * If radius is specified, arc terminates at the circumference of each point.
 * @param {TPoint} start - Start point of arc
 * @param {TPoint} end - End point of arc
 */
export function pathArc(start: TPoint, end: TPoint): string {
  start.r = start.r || 0;
  end.r = end.r || 0;
  const theta: number = Math.atan((end.x - start.x) / (end.y - start.y));
  const phi: number = Math.atan((end.y - start.y) / (end.x - start.x));
  const sinTheta: number = start.r * Math.sin(theta);
  const cosTheta: number = start.r * Math.cos(theta);
  const sinPhi: number = end.r * Math.sin(phi);
  const cosPhi: number = end.r * Math.cos(phi);
  if (end.y > start.y) {
    start.x = start.x + sinTheta;
    start.y = start.y + cosTheta;
  } else {
    start.x = start.x - sinTheta;
    start.y = start.y - cosTheta;
  }
  if (start.x > end.x) {
    end.x = end.x + cosPhi;
    end.y = end.y + sinPhi;
  } else {
    end.x = end.x - cosPhi;
    end.y = end.y - sinPhi;
  }
  const dx: number = end.x - start.x, dy: number = end.y - start.y;
  const dr: number = Math.sqrt(dx * dx + dy * dy);
  return `M${start.x},${start.y}A${dr},${dr} 0 0,1 ${end.x},${end.y}`;
}
