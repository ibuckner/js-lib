import { TPoint } from "../types";

/**
 * Returns relative node position in relation to visible screen
 * @param {Element} n - DOM node
 */
export function pageOffset(n: Element): TPoint {
  const r: ClientRect = n.getBoundingClientRect();
  const d: HTMLElement = document.documentElement;
  return {
    x: r.left + window.pageXOffset - d.clientLeft,
    y: r.top + window.pageYOffset - d.clientTop
  };
}