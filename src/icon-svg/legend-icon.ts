import { toNodes } from "../dom/to-nodes";

/**
 * Draws legend icon to the active SVG element
 */
export function legendIcon(): SVGSVGElement {
  const p: string = `M22 2v20h-20v-20h20zm2-2h-24v24h24v-24zm-4
  7h-8v1h8v-1zm0 5h-8v1h8v-1zm0 5h-8v1h8v-1zm-10.516-11.304l-.71-.696-2.553
  2.607-1.539-1.452-.698.71 2.25 2.135 3.25-3.304zm0 5l-.71-.696-2.552
  2.607-1.539-1.452-.698.709 2.249 2.136 3.25-3.304zm0
  5l-.71-.696-2.552 2.607-1.539-1.452-.698.709 2.249 2.136 3.25-3.304z`;
  return toNodes(`<svg viewBox="0 0 24 24">
    <title>Legend</title>
    <defs>
      <style>
        rect.bg { cursor: pointer }
      </style>
    </defs>
    <rect class="bg" fill="#fff" height="100%" width="100%" x="0" y="0"></rect>
    <path d="${p}" stroke="skyblue"></path>
  </svg>`, true);
}