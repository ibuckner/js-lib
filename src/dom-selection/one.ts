/**
 * Returns first node selected by CSS selection query
 * @param {string} selector - selection query
 * @param {Node} node - optional node to run selection query against
 */
export function one(selector: string, node?: Node): Node {
  const root: any = node ? node : document;
  return root.querySelector(selector);
}