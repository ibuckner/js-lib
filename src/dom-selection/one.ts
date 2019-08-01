export function one(selector: string, node?: Node): Node {
  const root: any = node ? node : document;
  return root.querySelector(selector);
}