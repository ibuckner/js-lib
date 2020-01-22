import { toNodes } from "@buckneri/js-lib-dom";

type TTextWidth = {
  text: { h: number, value: string, w: number }[],
  max: { h: number, w: number }
};

/**
 * returns the x and y values for the transform attributes
 * @param transform - SVG transform string
 * @description http://stackoverflow.com/questions/38224875/replacing-d3-transform-in-d3-v4
 */
export function getTranslation(transform: string): any {
  const g: SVGGElement = document.createElementNS("http://www.w3.org/2000/svg", "g");
  g.setAttributeNS(null, "transform", transform);
  const matrix: DOMMatrix = g.transform.baseVal.consolidate().matrix;
  return {
    x: matrix.e,
    y: matrix.f
  };
}

/**
 * Returns path string as an arc between two points.
 * If radius is specified, arc terminates at the circumference of each point.
 * @param start - Start point of arc
 * @param end - End point of arc
 */
export function pathArc(start: any, end: any): string {
  start.r = start.r || 0;
  end.r = end.r || 0;
  const theta: number = Math.atan((end.x - start.x) / (end.y - start.y));
  const phi: number = Math.atan((end.y - start.y) / (end.x - start.x));
  const sinTheta: number = start.r * Math.sin(theta);
  const cosTheta: number = start.r * Math.cos(theta);
  const sinPhi: number = end.r * Math.sin(phi);
  const cosPhi: number = end.r * Math.cos(phi);
  if (end.y > start.y) {
    start.x = start.x + sinTheta;
    start.y = start.y + cosTheta;
  } else {
    start.x = start.x - sinTheta;
    start.y = start.y - cosTheta;
  }
  if (start.x > end.x) {
    end.x = end.x + cosPhi;
    end.y = end.y + sinPhi;
  } else {
    end.x = end.x - cosPhi;
    end.y = end.y - sinPhi;
  }
  const dx: number = end.x - start.x, dy: number = end.y - start.y;
  const dr: number = Math.sqrt(dx * dx + dy * dy);
  return `M${start.x},${start.y}A${dr},${dr} 0 0,1 ${end.x},${end.y}`;
}

/**
 * Returns path string as a straight line between two points.
 * If radius is specified, line terminates at the circumference of each point.
 * @param start - Start point of arc
 * @param end - End point of arc
 */
export function pathLine(start: any, end: any): string {
  start.r = start.r || 0;
  end.r = end.r || 0;
  const theta: number = Math.atan((end.x - start.x) / (end.y - start.y));
  const phi: number = Math.atan((end.y - start.y) / (end.x - start.x));
  const sinTheta: number = start.r * Math.sin(theta);
  const cosTheta: number = start.r * Math.cos(theta);
  const sinPhi: number = end.r * Math.sin(phi);
  const cosPhi: number = end.r * Math.cos(phi);
  if (end.y > start.y) {
    start.x = start.x + sinTheta;
    start.y = start.y + cosTheta;
  } else {
    start.x = start.x - sinTheta;
    start.y = start.y - cosTheta;
  }
  if (start.x > end.x) {
    end.x = end.x + cosPhi;
    end.y = end.y + sinPhi;
  } else {
    end.x = end.x - cosPhi;
    end.y = end.y - sinPhi;
  }
  return `M${start.x},${start.y}L${end.x},${end.y}`;
}

export function pattern(options: { id: string, url: string }): SVGPatternElement {
  return toNodes(`<pattern id="${options.id}" height="100%" width="100%"
    viewBox="0 0 1 1" patternContentUnits="objectBoundingBox" preserveAspectRatio="xMidYMid slice">
    <image xlink:href="${options.url}" preserveAspectRatio="xMidYMid slice" width="1" height="1"/>
  </pattern>`, true);
}

/**
 * measures height and width of strings as they appear in the SVG document
 * @param text - array of string values to measure
 * @param target - d3 selection to materialise strings to
 */
export function textWidth(text: string[], target: any): TTextWidth {
  const r: TTextWidth = { max: { h: 0, w: 0 }, text: [] };

  const dummy: any = target
    .append("g")
      .attr("class", "test_text_width")
      .style("opacity", 0);

  const lbls: any = dummy.selectAll("text")
    .data(text)
    .enter()
      .append("text")
        .text((d: string) => d);

  lbls.each((d: any, i: number, n: any) => {
    const size: SVGRect = n[i].getBBox();
    const h: number = size.height;
    const w: number = size.width;
    r.max.w = w > r.max.w ? w : r.max.w;
    r.max.h = h > r.max.h ? h : r.max.h;
    r.text.push({ h: h, value: d, w: w });
  });

  dummy.remove();
  return r;
}