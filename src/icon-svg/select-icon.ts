import { toNodes } from "../dom/to-nodes";

/**
 * Draws select icon to the active SVG element 
 */
export function selectIcon(): SVGSVGElement {
  const p: string = `M11 24v-2h-4v2h4zm8-22h3v3h2v-5h-5v2zm-19 15h2v-4h-2v4zm0-6h2v-4h-2v4zm2-6v-3h3v-2h-5v5h2zm22
  2h-2v4h2v-4zm0 6h-2v4h2v-4zm-2 6v3h-3v2h5v-5h-2zm-17 3h-3v-3h-2v5h5v-2zm12 2v-2h-4v2h4zm-6-22v-2h-4v2h4zm6
  0v-2h-4v2h4zm0 11h-4v4h-2v-4h-4v-2h4v-4h2v4h4v2z`;
  return toNodes(`<svg viewBox="0 0 24 24">
    <title>Select</title>
    <defs>
      <style>
        rect.bg { cursor: pointer }
      </style>
    </defs>
    <rect class="bg" fill="#fff" height="100%" width="100%" x="0" y="0"></rect>
    <path d="${p}" stroke="skyblue"></path>    
  </svg>`, true);
}