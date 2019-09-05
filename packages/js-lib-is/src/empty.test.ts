import { isEmpty } from "./js-lib-is";

test("isEmpty function tests", () => {
  expect(isEmpty("Non-empty string")).toBe(false);
  expect(isEmpty(NaN)).toBe(false);
  expect(isEmpty(42)).toBe(false);
  expect(isEmpty(() => 42)).toBe(false);
  expect(isEmpty(new Date())).toBe(false);
  expect(isEmpty(true)).toBe(false);
  expect(isEmpty(false)).toBe(false);

  const arr: any = [2,34];
  expect(isEmpty(arr.test)).toBe(true);

  expect(isEmpty("")).toBe(true);
  expect(isEmpty(null)).toBe(true);
  expect(isEmpty(undefined)).toBe(true);
  expect(isEmpty([])).toBe(true);

  // d3 empty selections
  let t2: any = { _groups: [[null]], _parents: [null], node: () => null };
  expect(isEmpty(t2)).toBe(true);
});