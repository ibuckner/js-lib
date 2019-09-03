import { toNodes } from "../dom/to-nodes";
import { triangleHeight } from "../math";

/**
 * Draws triangle icon to the active SVG element
 * @param {number} len
 * @param {boolean} pathOnly
 */
export function triangleIcon(len: number, pathOnly: boolean = false): SVGSVGElement | string {
  const h: any = triangleHeight(len, len, len);
  const hl: number = len / 2.0;
  let p: string =  `M0,-${h.a / 2.0} l${hl},${h.a} l-${len},0z`;
  if (pathOnly) {
    return p;
  }
  return toNodes(`<svg viewBox="0 0 ${len} ${len}">
    <title>Triangle</title>
    <defs>
      <style>
        rect.bg { cursor: pointer }
      </style>
    </defs>
    <rect class="bg" fill="#fff" height="100%" width="100%" x="0" y="0"></rect>
    <path d="${p}" stroke="skyblue"></path>
  </svg>`, true);
}