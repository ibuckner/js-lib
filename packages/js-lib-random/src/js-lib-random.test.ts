import { randomInt, randomTimeInt } from "./js-lib-random";

test("randomInt tests", () => {
  const res: number = randomInt(1, 10);
  expect(res > 0 && res < 11).toBe(true);
});

test("randomTimeInt tests", () => {
  const res: number = randomTimeInt(1000, 1100, 30);
  const mm: number = res - 1000;
  expect(res > 959 && res < 1101).toBe(true);
  expect(mm === 0 || mm === 30 || mm === 100).toBe(true);
});