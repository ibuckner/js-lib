export const reEmail: RegExp = /\b[\w\._]+@[\w]+\.[\w\.]+\b/g;

/**
 * Returns true if a valid UK postcode
 * @param {string} p - value to test
 * https://en.wikipedia.org/wiki/Postcodes_in_the_United_Kingdom
 */
export function isEmail(e: string): boolean {
  return reEmail.test(e);
}