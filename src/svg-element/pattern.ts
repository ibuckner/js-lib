import { toNodes } from "../dom/to-nodes";

export function pattern(options: { id: string, url: string }): SVGPatternElement {
  return toNodes(`<pattern id="${options.id}" height="100%" width="100%"
    viewBox="0 0 1 1" patternContentUnits="objectBoundingBox" preserveAspectRatio="xMidYMid slice">
    <image xlink:href="${options.url}" preserveAspectRatio="xMidYMid slice" width="1" height="1"/>
  </pattern>`, true);
}