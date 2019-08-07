import { isURL } from "./url";

test("isURL function tests", () => {
  expect(isURL("https://www.google.com")).toBe(true);
  expect(isURL("https://www.go ogle.com")).toBe(false);
});