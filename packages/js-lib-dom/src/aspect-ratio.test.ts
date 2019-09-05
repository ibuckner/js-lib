import { aspectRatio } from "./js-lib-dom";

test("aspectRatio function tests", () => {
  expect(aspectRatio(100, 100, "16:9"))
    .toStrictEqual({ area: 6417, height: 69, width: 93 });
  expect(aspectRatio(100, 100, "4:3"))
    .toStrictEqual({ area: 8160, height: 85, width: 96 });
});