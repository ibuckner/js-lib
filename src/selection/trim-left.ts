/**
 * Removes leading edge whitespace from selection
 * @param {Selection} selection - valid selection of text made by user
 */
export function selectionTrimLeft(selection: Selection): void {
  const leadingSpace: RegExp = /^\s/;
  let match: RegExpMatchArray = leadingSpace.exec(selection.toString());
  while (match) {
    if (selection.rangeCount === 0) {
      break;
    }
    const rng: Range = selection.getRangeAt(0);
    rng.setStart(rng.startContainer, rng.startOffset + 1);
    match = leadingSpace.exec(selection.toString());
  }
}