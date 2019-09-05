import { fitToQuadrant } from "./js-lib-math";

test("fit to quadrant test", () => {
  expect(fitToQuadrant(10, 10, 10)).toStrictEqual(2.5);
});