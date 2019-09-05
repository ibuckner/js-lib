import { circleArea } from "./js-lib-math";

test("circle area test", () => {
  expect(circleArea(5)).toStrictEqual(25 * Math.PI);
  expect(circleArea(0)).toStrictEqual(0);
});