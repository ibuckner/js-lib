import { isNumeric } from "./numeric";

test("isNumeric function tests", () => {
  expect(isNumeric("Non-empty string")).toBe(false);
  expect(isNumeric("")).toBe(false);
  expect(isNumeric(null)).toBe(false);
  expect(isNumeric(undefined)).toBe(false);
  expect(isNumeric(NaN)).toBe(false);
  expect(isNumeric(42)).toBe(true);
  expect(isNumeric(-42.0)).toBe(true);
  expect(isNumeric(0e2)).toBe(true);
});