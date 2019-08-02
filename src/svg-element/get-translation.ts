import { TPoint } from "../types";

/**
 * returns the x and y values for the transform attributes
 * @param {string} transform - SVG transform string
 * @see http://stackoverflow.com/questions/38224875/replacing-d3-transform-in-d3-v4
 */
function getTranslation(transform: string): TPoint {
  const g: SVGGElement = document.createElementNS("http://www.w3.org/2000/svg", "g");
  g.setAttributeNS(null, "transform", transform);
  const matrix: DOMMatrix = g.transform.baseVal.consolidate().matrix;
  return {
    x: matrix.e,
    y: matrix.f
  };
}

export { getTranslation }