import { toNodes } from "../dom/to-nodes";

/**
 * Draws ellipse icon to the active SVG element
 * @param {number} rx
 * @param {number} ry
 * @param {boolean} pathOnly
 */
export function ellipseIcon(rx: number = 1, ry: number = 1, pathOnly: boolean = false): SVGSVGElement | string {
  let p: string = `M-${rx},0 a${rx},${ry} 0 1,0 ${2 * rx},0 a${rx},${ry} 0 1,0 ${-2 * rx},0`;
  if (pathOnly) {
    return p;
  }
  return toNodes(`<svg viewBox="0 0 ${rx} ${ry}">
    <title>Ellipse</title>
    <defs>
      <style>
        rect.bg { cursor: pointer }
      </style>
    </defs>
    <rect class="bg" fill="#fff" height="100%" width="100%" x="0" y="0"></rect>
    <path d="${p}" stroke="skyblue"></path>
  </svg>`, true);
}