import { toNodes } from "../dom/to-nodes";

/**
 * Draws magnify icon to the active SVG element
 */
export function magnifyIcon(): SVGSVGElement {
  const p: string = `M21.172 24l-7.387-7.387c-1.388.874-3.024 1.387-4.785 1.387-4.971
  0-9-4.029-9-9s4.029-9 9-9 9 4.029 9 9c0 1.761-.514 3.398-1.387 4.785l7.387 7.387-2.828
  2.828zm-12.172-8c3.859 0 7-3.14 7-7s-3.141-7-7-7-7 3.14-7 7 3.141 7 7 7z`;
  return toNodes(`<svg viewBox="0 0 24 24">
    <title>Magnify</title>
    <defs>
      <style>
        rect.bg { cursor: pointer }
      </style>
    </defs>
    <rect class="bg" fill="#fff" height="100%" width="100%" x="0" y="0"></rect>
    <path d="${p}" stroke="skyblue"></path>
  </svg>`, true);
}