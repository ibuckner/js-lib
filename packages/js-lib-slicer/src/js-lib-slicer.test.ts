import { Slicer } from "./js-lib-slicer";

test("Queue tests", () => {
  const slicer: Slicer<string> = new Slicer(["cat", "dog", "rat"]);
  
  slicer.toggle("rat");
  let testMap: any = slicer.data;
  expect(testMap.get("rat"))
    .toStrictEqual({ filtered: false, selected: true });

  slicer.clear();
  testMap = slicer.data;
  expect(testMap.get("rat"))
    .toStrictEqual({ filtered: false, selected: false });

  slicer.toggle("rat");
  testMap = slicer.data;
  expect(testMap.get("cat"))
    .toStrictEqual({ filtered: true, selected: false });
  expect(testMap.get("rat"))
    .toStrictEqual({ filtered: false, selected: true });

  slicer.toggle("cat", true);
  expect(testMap.get("cat"))
    .toStrictEqual({ filtered: false, selected: true });
  expect(testMap.get("rat"))
    .toStrictEqual({ filtered: false, selected: true });
  expect(testMap.get("dog"))
    .toStrictEqual({ filtered: true, selected: false });

  slicer.toggle("rat", true);
  expect(testMap.get("cat"))
    .toStrictEqual({ filtered: false, selected: true });
  expect(testMap.get("rat"))
    .toStrictEqual({ filtered: true, selected: false });
  expect(testMap.get("dog"))
    .toStrictEqual({ filtered: true, selected: false });

  slicer.toggle("cat", true);
  expect(testMap.get("cat"))
    .toStrictEqual({ filtered: false, selected: false });
  expect(testMap.get("rat"))
    .toStrictEqual({ filtered: false, selected: false });
  expect(testMap.get("dog"))
    .toStrictEqual({ filtered: false, selected: false });

  slicer.toggle("rat");
  testMap = slicer.data;
  expect(testMap.get("rat"))
    .toStrictEqual({ filtered: false, selected: true });
  expect(testMap.get("cat"))
    .toStrictEqual({ filtered: true, selected: false });
  expect(testMap.get("dog"))
    .toStrictEqual({ filtered: true, selected: false });

  slicer.toggle("rat");
  testMap = slicer.data;
  expect(testMap.get("rat"))
    .toStrictEqual({ filtered: false, selected: false });
  expect(testMap.get("cat"))
    .toStrictEqual({ filtered: false, selected: false });
  expect(testMap.get("dog"))
    .toStrictEqual({ filtered: false, selected: false });
});