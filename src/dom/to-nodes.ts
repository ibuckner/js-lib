/**
 * Returns DOM node from HTML string
 * @param {string} template - HTML template string
 * @param {boolean} isSVG
 */
export function toNodes(template: string, isSVG: boolean = false): any {
  try {
    const d: DOMParser = new DOMParser();
    let root: Document;
    if (isSVG) {
      root = d.parseFromString(`<svg xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink">${template}</svg>`, "image/svg+xml");
      return root.documentElement.children[0];
    } else {
      root = d.parseFromString(template, "text/html");
      return root.body.childNodes[0];
    }
  } catch {
    throw new Error("Error parsing templates string");
  }
}