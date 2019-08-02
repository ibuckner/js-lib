import { toNodes } from "../dom/to-nodes";

/**
 * Draws cross icon to the active SVG element
 * @param {number} len 
 * @param {boolean} pathOnly 
 */
export function crossIcon(len: number, pathOnly: boolean = false): SVGSVGElement | string {
  let p: string = `M${0 - len * 0.25}, ${0 - len * 1.25}`;
  p += ` h${len} v${len} h${len} v${len} h-${len} v${len} h-${len} v-${len} h-${len} v-${len} h${len}z`;
  if (pathOnly) {
    return p;
  }
  return toNodes(`<svg viewBox="0 0 ${len} ${len}">
    <title>Cross</title>
    <defs>
      <style>
        rect.bg { cursor: pointer }
      </style>
    </defs>
    <rect class="bg" fill="#fff" height="100%" width="100%" x="0" y="0"></rect>
    <path d="${p}" stroke="skyblue"></path>
  </svg>`, true);
}