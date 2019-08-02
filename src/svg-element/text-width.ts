import { TTextWidth } from "../types";

/**
 * measures height and width of strings as they appear in the SVG document
 * @param {string[]} text - array of string values to measure
 * @param {d3 selection} target - d3 selection to materialise strings to
 */
function textWidth(text: string[], target: any): TTextWidth {
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

export {
  textWidth,
  TTextWidth
}