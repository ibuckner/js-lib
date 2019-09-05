import { isDate, reYYYYMMDD } from "./js-lib-is";

test("isDate function tests", () => {
  expect(isDate("Non-empty string")).toBe(false);
  expect(isDate("")).toBe(false);
  expect(isDate(null)).toBe(false);
  expect(isDate(undefined)).toBe(false);
  expect(isDate(NaN)).toBe(false);
  expect(isDate(42)).toBe(false);
  expect(isDate(new Date())).toBe(true);
  expect(isDate("20190101", reYYYYMMDD)).toBe(false);
  expect(isDate("2019-01-01", reYYYYMMDD)).toBe(true);
  // note: leap year errors are not handled
  expect(isDate("2019-02-29", reYYYYMMDD)).toBe(true);
});