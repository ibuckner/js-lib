import { isNHSNumber } from "./nhs-number";

test("isNHSNumber function tests", () => {
  expect(isNHSNumber("446 610 5715")).toBe(true);
  expect(isNHSNumber("446 610 1234")).toBe(false);
  expect(isNHSNumber("401 023 2137")).toBe(true);
  expect(isNHSNumber("9961234567")).toBe(false);
  expect(isNHSNumber("1111111111")).toBe(false);
});