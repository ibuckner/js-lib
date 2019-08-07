import isBrowser from "./browser";
import { isDate, reYYYYMMDD } from "./date";
import { isEmail, reEmail } from "./email";
import { isEmpty } from "./empty";
import { isIE } from "./ie";
import { isNumeric, reDecimal } from "./numeric";
import { isPostcode, rePostcode } from "./postcode";
import { isURL, reURL } from "./url";

export {
  isBrowser,
  isDate,
  isEmail,
  isEmpty,
  isIE,
  isNumeric,
  isPostcode,
  isURL,
  reDecimal,
  reEmail,
  rePostcode,
  reURL,
  reYYYYMMDD
};