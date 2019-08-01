export function all(selector: string, node?: Node): Node[] {
  const root: any = node ? node : document;
  return Array.from(root.querySelectorAll(selector));
}