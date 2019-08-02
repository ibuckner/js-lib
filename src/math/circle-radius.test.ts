import { circleRadius } from "./circle-radius";

test("circle radius test", () => {
  expect(Math.ceil(circleRadius(25))).toStrictEqual(3);
  expect(circleRadius(0)).toStrictEqual(0);
});