/**
 * Returns false if range contains one or more nodes
 * @param {Range} range - valid document fragment containing nodes and text
 */
export function rangeEmpty(range: Range): boolean {
  return range.startOffset === range.endOffset;
}
