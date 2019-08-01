import { selectionTrimLeft } from "./trim-left";
import { selectionTrimRight } from "./trim-right";

/**
 * Removes surrounding whitespace from selection
 * @param {Selection} selection - valid selection of text made by user
 */
export function selectionTrim(selection: Selection): void {
  selectionTrimLeft(selection);
  selectionTrimRight(selection);
}
