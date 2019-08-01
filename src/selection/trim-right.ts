/**
 * Removes trailing edge whitespace from selection
 * @param {Selection} selection - valid selection of text made by user
 */
export function trimRight(selection: Selection): void {
  const trailingSpace: RegExp = /\s$/;
  let match: RegExpMatchArray = trailingSpace.exec(selection.toString());
  while (match) {
    if (selection.rangeCount === 0) {
      break;
    }
    const rng: Range = selection.getRangeAt(0);
    rng.setEnd(rng.endContainer, rng.endOffset - 1);
    match = trailingSpace.exec(selection.toString());
  }
}