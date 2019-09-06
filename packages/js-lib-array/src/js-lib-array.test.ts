import { unique } from "./js-lib-array";

test("unique function tests", () => {
  expect(unique(["1", "2", "1", "3"])).toStrictEqual(["1", "2", "3"]);
  expect(unique([{ item: 23 }, "1", "2", "1", "3", { item: 23 }])).toStrictEqual([{ item: 23 }, "1", "2", "3"]);
  expect(unique([])).toStrictEqual([]);
  expect(unique(new Array(3))).toStrictEqual([]);
});