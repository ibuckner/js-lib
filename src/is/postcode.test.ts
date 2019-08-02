import { isPostcode } from "./postcode";

test("isPostcode function tests", () => {
  expect(isPostcode("GIR 0AA")).toBe(true);
  expect(isPostcode("E9 1AA")).toBe(true);
  expect(isPostcode("F10 3BB")).toBe(true);
  expect(isPostcode("IG1 4CC")).toBe(true);
  expect(isPostcode("RB11 2DE")).toBe(true);
  expect(isPostcode("P5V 8FF")).toBe(true);
  expect(isPostcode("EC8W 0AA")).toBe(true);
  expect(isPostcode("Non-empty string")).toBe(false);
  expect(isPostcode("")).toBe(false);
  expect(isPostcode(null)).toBe(false);
  expect(isPostcode(undefined)).toBe(false);
});