import { countDigit } from "./js-lib-math";

test("count digit test", () => {
  expect(countDigit(10000)).toStrictEqual(5);
  expect(countDigit(0)).toStrictEqual(1);
  expect(countDigit(1)).toStrictEqual(1);
  expect(countDigit(-1)).toStrictEqual(1);
  expect(countDigit(0.0001)).toStrictEqual(1);
});