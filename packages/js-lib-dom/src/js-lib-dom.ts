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

export function getJSON(url: string, fn: Function): XMLHttpRequest {
  const xhr: XMLHttpRequest = new XMLHttpRequest();
  xhr.open("GET", url);
  xhr.onreadystatechange = () => {
    if (xhr.readyState > 3 && xhr.status === 200) {
      fn(JSON.parse(xhr.responseText));
    }
  };
  xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
  xhr.send();
  return xhr;
}

/**
 * Returns relative node position in relation to visible screen
 * @param {Element} n - DOM node
 */
export function pageOffset(n: Element): any {
  const r: ClientRect = n.getBoundingClientRect();
  const d: HTMLElement = document.documentElement;
  return {
    x: r.left + window.pageXOffset - d.clientLeft,
    y: r.top + window.pageYOffset - d.clientTop
  };
}

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