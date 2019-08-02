import { cubedRoot } from "./cubed-root";

test("cubed root test", () => {
  expect(cubedRoot(27)).toStrictEqual(3);
  expect(cubedRoot(0)).toStrictEqual(0);
  expect(cubedRoot(1)).toStrictEqual(1);
  expect(cubedRoot(-1)).toStrictEqual(-1);
});