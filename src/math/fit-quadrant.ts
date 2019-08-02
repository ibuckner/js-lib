  /**
   * https://math.stackexchange.com/questions/466198/algorithm-to-get-the-maximum-size-of-n-squares-that-fit-into-a-rectangle-with-a
   * @param {number} width
   * @param {number} height
   * @param {number} n
   */
  export function fitToQuadrant(width: number, height: number, n: number): number {
    let sx: number, sy: number;
    const px: number = Math.ceil(Math.sqrt(n * width / height));
    if (Math.floor(px * height / width) * px < n) {
      sx = height / Math.ceil(px * height / width);
    } else {
      sx = width / px;
    }
    const py: number = Math.ceil(Math.sqrt(n * height / width));
    if (Math.floor(py * width / height) * py < n) {
      sy = width / Math.ceil(width * py / height);
    } else {
      sy = height / py;
    }
    return Math.max(sx, sy);
  }