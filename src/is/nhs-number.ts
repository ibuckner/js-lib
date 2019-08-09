export function isNHSNumber(n: string): boolean {
  n = n.replace(/ /g, "");
  if (n.length === 10) {
    let sum: number = 0, m: number = n.length;
    for (let i: number = 0; i < 10; i++) {
      sum += parseInt(n[i], 10) * m--;
    }
    let mod: number = sum % 11;
    let check: number = (11 - mod === 11) ? 0 : 11 - mod;
    if (check === 10) {
       return false;
    }
    return true;
  }
  return false;
}