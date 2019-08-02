import { isDate, yyyymmdd } from "./date";

test("isDate function tests", () => {
  expect(isDate("Non-empty string")).toBe(false);
  expect(isDate("")).toBe(false);
  expect(isDate(null)).toBe(false);
  expect(isDate(undefined)).toBe(false);
  expect(isDate(NaN)).toBe(false);
  expect(isDate(42)).toBe(false);
  expect(isDate(new Date())).toBe(true);
  expect(isDate("20190101", yyyymmdd)).toBe(false);
  expect(isDate("2019-01-01", yyyymmdd)).toBe(true);
  // note: leap year errors are not handled
  expect(isDate("2019-02-29", yyyymmdd)).toBe(true);
});