import { toNodes } from "../dom/to-nodes";
import { ellipseIcon } from "./ellipse-icon";

/**
 * Draws circle icon to the active SVG element
 * @param {number} len
 * @param {boolean} pathOnly
 */
export function circleIcon(len: number, pathOnly: boolean = false): SVGSVGElement | string {
  let p: any = ellipseIcon(len, len, true);
  if (pathOnly) {
    return p;
  }
  return toNodes(`<svg viewBox="0 0 ${len} ${len}">
    <title>Circle</title>
    <defs>
      <style>
        rect.bg { cursor: pointer }
      </style>
    </defs>
    <rect class="bg" fill="#fff" height="100%" width="100%" x="0" y="0"></rect>
    <path d="${p}" stroke="skyblue"></path>
  </svg>`, true);
}