import { toNodes } from "../dom/to-nodes";
import { rectangleIcon } from "./rectangle-icon";

/**
 * Draws square icon to the active SVG element
 * @param {number} len 
 * @param {boolean} pathOnly 
 */
export function squareIcon(len: number, pathOnly: boolean = false): SVGSVGElement | string {
  let p: any = rectangleIcon(len, len, true);
  if (pathOnly) {
    return p;
  }
  return toNodes(`<svg viewBox="0 0 ${len} ${len}">
    <title>Square</title>
    <defs>
      <style>
        rect.bg { cursor: pointer }
      </style>
    </defs>
    <rect class="bg" fill="#fff" height="100%" width="100%" x="0" y="0"></rect>
    <path d="${p}" stroke="skyblue"></path>
  </svg>`, true);
}