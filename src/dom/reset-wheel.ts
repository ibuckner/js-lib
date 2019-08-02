/**
 * https://github.com/facebookarchive/fixed-data-table/blob/master/src/vendor_upstream/dom/normalizeWheel.js
 * @param {WheelEvent} event
 */
export function resetWheel(event: WheelEvent): {
  pixelX: number,
  pixelY: number,
  spinX: number,
  spinY: number
} {
  let sX: number = 0;
  let sY: number = 0;
  let pX: number = 0;
  let pY: number = 0;
  const PIXEL_STEP: number  = 10;
  const LINE_HEIGHT: number = 40;
  const PAGE_HEIGHT: number = 800;
  if ("detail"      in event) { sY = event.detail; }
  if ("wheelDelta"  in event) { sY = -(<any>event).wheelDelta / 120; }
  if ("wheelDeltaY" in event) { sY = -(<any>event).wheelDeltaY / 120; }
  if ("wheelDeltaX" in event) { sX = -(<any>event).wheelDeltaX / 120; }
  pX = sX * PIXEL_STEP;
  pY = sY * PIXEL_STEP;
  if ("deltaY" in event) { pY = event.deltaY; }
  if ("deltaX" in event) { pX = event.deltaX; }
  if ((pX || pY) && event.deltaMode) {
    if (event.deltaMode === 1) {
      pX *= LINE_HEIGHT;
      pY *= LINE_HEIGHT;
    } else {
      pX *= PAGE_HEIGHT;
      pY *= PAGE_HEIGHT;
    }
  }
  if (pX && !sX) { sX = (pX < 1) ? -1 : 1; }
  if (pY && !sY) { sY = (pY < 1) ? -1 : 1; }
  return {
    pixelX : pX,
    pixelY : pY,
    spinX: sX,
    spinY: sY
  };
}