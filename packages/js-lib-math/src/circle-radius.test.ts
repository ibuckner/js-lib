import { circleRadius } from "./js-lib-math";

test("circle radius test", () => {
  expect(Math.ceil(circleRadius(25))).toStrictEqual(3);
  expect(circleRadius(0)).toStrictEqual(0);
});