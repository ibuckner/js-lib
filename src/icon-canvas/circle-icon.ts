/**
 * Draws circle to the active canvas
 * @param {CanvasRenderingContext2D} cx 
 * @param {number} x 
 * @param {number} y 
 * @param {number} size 
 * @param {number} dx 
 * @param {number} dy 
 */
export function circleIconCanvas(
  cx: CanvasRenderingContext2D,
  x: number,
  y: number,
  size: number,
  dx: number = 0,
  dy: number = 0
): void {
  cx.beginPath();
  cx.arc(x + dx, y + dy, size, 0, 2 * Math.PI);
  cx.closePath();
  cx.fill();
}