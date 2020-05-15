import { toNodes } from "@buckneri/js-lib-dom";

/**
 * Draws circle icon to the active SVG element
 * @param len - dimension of object
 * @param pathOnly - default is false, draw the full SVG object
 */
export function circleIcon(len: number, pathOnly: boolean = false): SVGSVGElement | string {
  let p: any = ellipseIcon(len, len, true);
  if (pathOnly) {
    return p;
  }
  return toNodes(`<svg viewBox="0 0 ${len} ${len}">
    <title>Circle</title>
    <defs>
      <style>
        rect.bg { cursor: pointer }
      </style>
    </defs>
    <rect class="bg" fill="#fff" height="100%" width="100%" x="0" y="0"></rect>
    <path d="${p}" stroke="skyblue"></path>
  </svg>`, true);
}

/**
 * Draws close icon to the active SVG element
 */
export function closeIcon(): SVGSVGElement {
  const p: string = `M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10
  10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6
  16.538l-4.592-4.548 4.546-4.587-1.416-1.403-4.545 4.589-4.588-4.543-1.405 1.405
  4.593 4.552-4.547 4.592 1.405 1.405 4.555-4.596 4.591 4.55 1.403-1.416z`;
  return toNodes(`<svg viewBox="0 0 24 24">
    <title>Close</title>
    <defs>
      <style>
        rect.bg { cursor: pointer }
      </style>
    </defs>
    <rect class="bg" fill="#fff" height="100%" width="100%" x="0" y="0"></rect>
    <path d="${p}" stroke="skyblue"></path>
  </svg>`, true);
}

/**
 * Draws cross icon to the active SVG element
 * @param len - dimension of object
 * @param pathOnly - default is false, draw the full SVG object
 */
export function crossIcon(len: number, pathOnly: boolean = false): SVGSVGElement | string {
  let p: string = `M${0 - len * 0.25}, ${0 - len * 1.25}`;
  p += ` h${len} v${len} h${len} v${len} h-${len} v${len} h-${len} v-${len} h-${len} v-${len} h${len}z`;
  if (pathOnly) {
    return p;
  }
  return toNodes(`<svg viewBox="0 0 ${len} ${len}">
    <title>Cross</title>
    <defs>
      <style>
        rect.bg { cursor: pointer }
      </style>
    </defs>
    <rect class="bg" fill="#fff" height="100%" width="100%" x="0" y="0"></rect>
    <path d="${p}" stroke="skyblue"></path>
  </svg>`, true);
}

/**
 * Draws diamond icon to the active SVG element
 * @param len - dimension of object
 * @param pathOnly - default is false, draw the full SVG object
 */
export function diamondIcon(len: number, pathOnly: boolean = false): SVGSVGElement | string {
  const hl: number = len / 2.0;
  let p: string = `M0,-${hl} l${hl},${hl} l-${hl},${hl} l-${hl},-${hl}z`;
  if (pathOnly) {
    return p;
  }
  return toNodes(`<svg viewBox="0 0 ${len} ${len}">
    <title>Diamond</title>
    <defs>
      <style>
        rect.bg { cursor: pointer }
      </style>
    </defs>
    <rect class="bg" fill="#fff" height="100%" width="100%" x="0" y="0"></rect>
    <path d="${p}" stroke="skyblue"></path>
  </svg>`, true);
}

/**
 * Draws ellipse icon to the active SVG element
 * @param rx - dimension of radius x
 * @param ry - dimension of radius y
 * @param pathOnly - default is false, draw the full SVG object
 */
export function ellipseIcon(rx: number = 1, ry: number = 1, pathOnly: boolean = false): SVGSVGElement | string {
  let p: string = `M-${rx},0 a${rx},${ry} 0 1,0 ${2 * rx},0 a${rx},${ry} 0 1,0 ${-2 * rx},0`;
  if (pathOnly) {
    return p;
  }
  return toNodes(`<svg viewBox="0 0 ${rx} ${ry}">
    <title>Ellipse</title>
    <defs>
      <style>
        rect.bg { cursor: pointer }
      </style>
    </defs>
    <rect class="bg" fill="#fff" height="100%" width="100%" x="0" y="0"></rect>
    <path d="${p}" stroke="skyblue"></path>
  </svg>`, true);
}

/**
 * Draws export icon to the active SVG element
 */
export function exportIcon(): SVGSVGElement {
  const p: string = `M8 20h3v-5h2v5h3l-4 4-4-4zm11.479-12.908c-.212-3.951-3.473-7.092-7.479-7.092s-7.267 3.141-7.479
  7.092c-2.57.463-4.521 2.706-4.521 5.408 0 3.037 2.463 5.5 5.5 5.5h3.5v-2h-3.5c-1.93 0-3.5-1.57-3.5-3.5 0-2.797
  2.479-3.833 4.433-3.72-.167-4.218 2.208-6.78 5.567-6.78 3.453 0 5.891 2.797 5.567 6.78 1.745-.046 4.433.751
  4.433 3.72 0 1.93-1.57 3.5-3.5 3.5h-3.5v2h3.5c3.037 0 5.5-2.463 5.5-5.5 0-2.702-1.951-4.945-4.521-5.408z`;
  return toNodes(`<svg viewBox="0 0 24 24">
    <title>Export</title>
    <defs>
      <style>
        rect.bg { cursor: pointer }
      </style>
    </defs>
    <rect class="bg" fill="#fff" height="100%" width="100%" x="0" y="0"></rect>
    <path d="${p}" stroke="skyblue"></path>
  </svg>`, true);
}

/**
 * Draws legend icon to the active SVG element
 */
export function legendIcon(): SVGSVGElement {
  const p: string = `M22 2v20h-20v-20h20zm2-2h-24v24h24v-24zm-4
  7h-8v1h8v-1zm0 5h-8v1h8v-1zm0 5h-8v1h8v-1zm-10.516-11.304l-.71-.696-2.553
  2.607-1.539-1.452-.698.71 2.25 2.135 3.25-3.304zm0 5l-.71-.696-2.552
  2.607-1.539-1.452-.698.709 2.249 2.136 3.25-3.304zm0
  5l-.71-.696-2.552 2.607-1.539-1.452-.698.709 2.249 2.136 3.25-3.304z`;
  return toNodes(`<svg viewBox="0 0 24 24">
    <title>Legend</title>
    <defs>
      <style>
        rect.bg { cursor: pointer }
      </style>
    </defs>
    <rect class="bg" fill="#fff" height="100%" width="100%" x="0" y="0"></rect>
    <path d="${p}" stroke="skyblue"></path>
  </svg>`, true);
}

/**
 * Draws magnify icon to the active SVG element
 */
export function magnifyIcon(): SVGSVGElement {
  const p: string = `M21.172 24l-7.387-7.387c-1.388.874-3.024 1.387-4.785 1.387-4.971
  0-9-4.029-9-9s4.029-9 9-9 9 4.029 9 9c0 1.761-.514 3.398-1.387 4.785l7.387 7.387-2.828
  2.828zm-12.172-8c3.859 0 7-3.14 7-7s-3.141-7-7-7-7 3.14-7 7 3.141 7 7 7z`;
  return toNodes(`<svg viewBox="0 0 24 24">
    <title>Magnify</title>
    <defs>
      <style>
        rect.bg { cursor: pointer }
      </style>
    </defs>
    <rect class="bg" fill="#fff" height="100%" width="100%" x="0" y="0"></rect>
    <path d="${p}" stroke="skyblue"></path>
  </svg>`, true);
}

/**
 * Draws rectangle icon to the active SVG element
 * @param w - dimension of width
 * @param h - dimension of height
 * @param pathOnly - default is false, draw the full SVG object
 */
export function rectangleIcon(w: number, h: number, pathOnly: boolean = false): SVGSVGElement | string {
  let p: string = `M-${w / 2.0},-${h / 2.0} h${w} v${h} h-${w} v-${h}z`;
  if (pathOnly) {
    return p;
  }
  return toNodes(`<svg viewBox="0 0 ${w} ${h}">
    <title>Rectangle</title>
    <defs>
      <style>
        rect.bg { cursor: pointer }
      </style>
    </defs>
    <rect class="bg" fill="#fff" height="100%" width="100%" x="0" y="0"></rect>
    <path d="${p}" stroke="skyblue"></path>
  </svg>`, true);
}

/**
 * Draws select icon to the active SVG element
 */
export function selectIcon(): SVGSVGElement {
  const p: string = `M11 24v-2h-4v2h4zm8-22h3v3h2v-5h-5v2zm-19 15h2v-4h-2v4zm0-6h2v-4h-2v4zm2-6v-3h3v-2h-5v5h2zm22
  2h-2v4h2v-4zm0 6h-2v4h2v-4zm-2 6v3h-3v2h5v-5h-2zm-17 3h-3v-3h-2v5h5v-2zm12 2v-2h-4v2h4zm-6-22v-2h-4v2h4zm6
  0v-2h-4v2h4zm0 11h-4v4h-2v-4h-4v-2h4v-4h2v4h4v2z`;
  return toNodes(`<svg viewBox="0 0 24 24">
    <title>Select</title>
    <defs>
      <style>
        rect.bg { cursor: pointer }
      </style>
    </defs>
    <rect class="bg" fill="#fff" height="100%" width="100%" x="0" y="0"></rect>
    <path d="${p}" stroke="skyblue"></path>
  </svg>`, true);
}

/**
 * Draws square icon to the active SVG element
 * @param len - dimension of object
 * @param pathOnly - default is false, draw the full SVG object
 */
export function squareIcon(len: number, pathOnly: boolean = false): SVGSVGElement | string {
  let p: any = rectangleIcon(len, len, true);
  if (pathOnly) {
    return p;
  }
  return toNodes(`<svg viewBox="0 0 ${len} ${len}">
    <title>Square</title>
    <defs>
      <style>
        rect.bg { cursor: pointer }
      </style>
    </defs>
    <rect class="bg" fill="#fff" height="100%" width="100%" x="0" y="0"></rect>
    <path d="${p}" stroke="skyblue"></path>
  </svg>`, true);
}

/**
 * Draws triangle icon to the active SVG element
 * @param len - dimension of object
 * @param pathOnly - default is false, draw the full SVG object
 */
export function triangleIcon(len: number, pathOnly: boolean = false): SVGSVGElement | string {
  const h: any = triangleHeight(len, len, len);
  const hl: number = len / 2.0;
  let p: string =  `M0,-${h.a / 2.0} l${hl},${h.a} l-${len},0z`;
  if (pathOnly) {
    return p;
  }
  return toNodes(`<svg viewBox="0 0 ${len} ${len}">
    <title>Triangle</title>
    <defs>
      <style>
        rect.bg { cursor: pointer }
      </style>
    </defs>
    <rect class="bg" fill="#fff" height="100%" width="100%" x="0" y="0"></rect>
    <path d="${p}" stroke="skyblue"></path>
  </svg>`, true);
}

/**
 * Draws undo icon to the active SVG element
 */
export function undoIcon(): SVGSVGElement {
  const p: string = `M18.885 3.515c-4.617-4.618-12.056-4.676-16.756-.195l-2.129-2.258v7.938h7.484l-2.066-2.191c2.82-2.706
  7.297-2.676 10.073.1 4.341 4.341 1.737 12.291-5.491 12.291v4.8c3.708 0 6.614-1.244 8.885-3.515 4.686-4.686 4.686-12.284 0-16.97z`;
  return toNodes(`<svg viewBox="0 0 24 24">
    <title>Undo</title>
    <defs>
      <style>
        rect.bg { cursor: pointer }
      </style>
    </defs>
    <rect class="bg" fill="#fff" height="100%" width="100%" x="0" y="0"></rect>
    <path d="${p}" stroke="skyblue"></path>
  </svg>`, true);
}

function triangleHeight(a: number, b: number, c: number): { a: number, b: number, c: number} {
  const area: any = triangleArea(a, b, c);
  return {
    a: (2 * area) / a,
    b: (2 * area) / b,
    c: (2 * area) / c,
  };
}

function triangleArea(a: number, b: number, c: number): number {
  const sum: number = a + b + c;
  const sem: number = sum / 2;
  const area: number = Math.sqrt(sem * (sem - a) * (sem - b) * (sem - c));
  return area;
}