import { toNodes } from "../dom/to-nodes";

/**
 * Draws rectangle icon to the active SVG element
 * @param {number} w
 * @param {number} h
 * @param {boolean} pathOnly
 */
export function rectangleIcon(w: number, h: number, pathOnly: boolean = false): SVGSVGElement | string {
  let p: string = `M-${w / 2.0},-${h / 2.0} h${w} v${h} h-${w} v-${h}z`;
  if (pathOnly) {
    return p;
  }
  return toNodes(`<svg viewBox="0 0 ${w} ${h}">
    <title>Rectangle</title>
    <defs>
      <style>
        rect.bg { cursor: pointer }
      </style>
    </defs>
    <rect class="bg" fill="#fff" height="100%" width="100%" x="0" y="0"></rect>
    <path d="${p}" stroke="skyblue"></path>
  </svg>`, true);
}