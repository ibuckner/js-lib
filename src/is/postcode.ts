export const rePostcode: RegExp = new RegExp(["^([Gg][Ii][Rr] 0[Aa]{2})",
"|((([A-Za-z][0-9]{1,2})",
"|(([A-Za-z][A-Ha-hJ-Yj-y][0-9]{1,2})",
"|(([A-Za-z][0-9][A-Za-z])",
"|([A-Za-z][A-Ha-hJ-Yj-y][0-9]?[A-Za-z])))) [0-9][A-Za-z]{2})$"].join(""));

/**
 * Returns true if a valid UK postcode
 * @param {string} p - value to test
 * https://en.wikipedia.org/wiki/Postcodes_in_the_United_Kingdom
 */
export function isPostcode(p: string): boolean {
  return rePostcode.test(p);
}