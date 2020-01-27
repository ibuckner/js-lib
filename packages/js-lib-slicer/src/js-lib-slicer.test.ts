import { Slicer } from "./js-lib-slicer";

test("Queue tests", () => {
  const slicer: Slicer<string> = new Slicer(["cat", "dog", "rat"]);
  
  slicer.toggle("rat");
  expect(slicer.data.get("rat"))
    .toStrictEqual({ filtered: false, selected: true });
    expect(slicer.active).toBe(true);

  slicer.clear();
  expect(slicer.active).toBe(false);
  expect(slicer.data.get("rat"))
    .toStrictEqual({ filtered: false, selected: false });

  slicer.toggle("rat");
  expect(slicer.data.get("cat"))
    .toStrictEqual({ filtered: true, selected: false });
  expect(slicer.data.get("rat"))
    .toStrictEqual({ filtered: false, selected: true });

  slicer.toggle("cat", true);
  expect(slicer.data.get("cat"))
    .toStrictEqual({ filtered: false, selected: true });
  expect(slicer.data.get("rat"))
    .toStrictEqual({ filtered: false, selected: true });
  expect(slicer.data.get("dog"))
    .toStrictEqual({ filtered: true, selected: false });

  slicer.toggle("rat", true);
  expect(slicer.data.get("cat"))
    .toStrictEqual({ filtered: false, selected: true });
  expect(slicer.data.get("rat"))
    .toStrictEqual({ filtered: true, selected: false });
  expect(slicer.data.get("dog"))
    .toStrictEqual({ filtered: true, selected: false });

  slicer.toggle("cat", true);
  expect(slicer.data.get("cat"))
    .toStrictEqual({ filtered: false, selected: false });
  expect(slicer.data.get("rat"))
    .toStrictEqual({ filtered: false, selected: false });
  expect(slicer.data.get("dog"))
    .toStrictEqual({ filtered: false, selected: false });

  slicer.toggle("rat");
  expect(slicer.data.get("rat"))
    .toStrictEqual({ filtered: false, selected: true });
  expect(slicer.data.get("cat"))
    .toStrictEqual({ filtered: true, selected: false });
  expect(slicer.data.get("dog"))
    .toStrictEqual({ filtered: true, selected: false });

  slicer.toggle("rat");
  expect(slicer.data.get("rat"))
    .toStrictEqual({ filtered: false, selected: false });
  expect(slicer.data.get("cat"))
    .toStrictEqual({ filtered: false, selected: false });
  expect(slicer.data.get("dog"))
    .toStrictEqual({ filtered: false, selected: false });
});