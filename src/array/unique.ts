/**
 * returns a set (unique) of values from an array
 * @param {any[]} a - array of values
 */
export function unique(a: any[]): any[] {
  if (Array.isArray(a)) {
    const r: Set<any> = new Set();
    a.map(a => r.add(JSON.stringify(a)));
    const ar: any[] = [];
    r.forEach(v => ar.push(JSON.parse(v)));
    return ar;
  } else {
    return a;
  }
}