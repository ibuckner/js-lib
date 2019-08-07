export const reURL: RegExp = /\b(https?|ftp|file):\/\/([\w\d-.]+):?(\d{2,})?\b/g;

/**
 * Returns true if a valid URL
 * @param {string} u - value to test
 */
export function isURL(u: string): boolean {
  return reURL.test(u);
}