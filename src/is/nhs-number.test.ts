import { isNHSNumber } from "./nhs-number";

test("isNHSNumber function tests", () => {
  expect(isNHSNumber("446 610 5715")).toBe(true);
  expect(isNHSNumber("446 610 1234")).toBe(false);
});