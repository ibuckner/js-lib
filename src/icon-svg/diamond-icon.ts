import { toNodes } from "../dom/to-nodes";

/**
 * Draws diamond icon to the active SVG element
 * @param {number} len
 * @param {boolean} pathOnly
 */
export function diamondIcon(len: number, pathOnly: boolean = false): SVGSVGElement | string {
  const hl: number = len / 2.0;
  let p: string = `M0,-${hl} l${hl},${hl} l-${hl},${hl} l-${hl},-${hl}z`;
  if (pathOnly) {
    return p;
  }
  return toNodes(`<svg viewBox="0 0 ${len} ${len}">
    <title>Diamond</title>
    <defs>
      <style>
        rect.bg { cursor: pointer }
      </style>
    </defs>
    <rect class="bg" fill="#fff" height="100%" width="100%" x="0" y="0"></rect>
    <path d="${p}" stroke="skyblue"></path>
  </svg>`, true);
}