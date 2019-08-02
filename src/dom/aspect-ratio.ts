/**
 * https://en.wikipedia.org/wiki/Aspect_ratio_(image)
 * @param {number} width
 * @param {number} height
 * @param {string} ratio
 */
export function aspectRatio (width: number, height: number, ratio: string): { width: number, height: number, area: number} {
  const parse: Function = (r: string) => {
    const n: any[] = r.split(":").map((part: string) => parseFloat(part));
    return (n.length === 2 && !isNaN(n[0]) && !isNaN(n[1]) && n[1] > 0)
      ? n[0] / n[1]
      : 1;
  };
  const rt: number = parse(ratio);
  const diag: number = Math.sqrt((height * height) + (width * width));
  const w: number = Math.round(diag / Math.sqrt(Math.pow(rt, 0.5) + 1));
  const h: number = Math.round(diag / Math.sqrt((rt * rt) + 1));
  return {
    area: h * w,
    height: h,
    width: w
  };
}
