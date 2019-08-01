import { trimLeft } from "./trim-left";
import { trimRight } from "./trim-right";

/**
 * Removes surrounding whitespace from selection
 * @param {Selection} selection - valid selection of text made by user
 */
export function trim(selection: Selection): void {
  trimLeft(selection);
  trimRight(selection);
}
