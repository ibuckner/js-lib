/**
 * Returns false if range is interrupted by multiple node types
 * @param {Range} range - valid document fragment containing nodes and text
 */
export function isContiguous(range: Range): boolean {
  return (<any>range.startContainer).data === (<any>range.endContainer).data;
}