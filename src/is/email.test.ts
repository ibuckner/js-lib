import { isEmail } from "./email";

test("isEmail function tests", () => {
  expect(isEmail("joe.soap@aol.com")).toBe(true);
  expect(isEmail("@joe.soap@")).toBe(false);
});