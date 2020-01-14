import { randomInt, randomTimeInt } from "./js-lib-random";

test("randomInt tests", () => {
  const res: number = randomInt(1, 10);
  expect(res > 0 && res < 11).toBe(true);
});

test("randomTimeInt tests", () => {
  const res: number = randomTimeInt(1000, 1059, 0);
  expect(res > 959 && res < 1100).toBe(true);
});