import { Slicer, SlicerModifier } from "./js-lib-slicer";

test("Test slicer using Ctrl key", () => {
  const slicer: Slicer<string> = new Slicer<string>(["cat", "dog", "rat"]);
  expect(slicer.selectionCount).toBe(0);
  expect(slicer.lastSelection).toBeUndefined();
  expect(slicer.selection).toStrictEqual(["cat", "dog", "rat"]);

  slicer.toggle("rat", SlicerModifier.CTRL_KEY);
  slicer.add("flea");
  expect(slicer.has("flea")).toBe(true);
  expect(slicer.has("mouse")).toBe(false);
  expect(slicer.data.get("cat")).toStrictEqual({ filtered: true, selected: false });
  expect(slicer.data.get("dog")).toStrictEqual({ filtered: true, selected: false });
  expect(slicer.data.get("rat")).toStrictEqual({ filtered: false, selected: true });
  expect(slicer.data.get("flea")).toStrictEqual({ filtered: true, selected: false });
  expect(slicer.selectionCount).toBe(1);
  expect(slicer.lastSelection).toBe("rat");
  expect(slicer.selection).toStrictEqual(["rat"]);

  slicer.toggle("cat", SlicerModifier.CTRL_KEY);
  expect(slicer.data.get("cat")).toStrictEqual({ filtered: false, selected: true });
  expect(slicer.data.get("dog")).toStrictEqual({ filtered: true, selected: false });
  expect(slicer.data.get("rat")).toStrictEqual({ filtered: false, selected: true });
  expect(slicer.data.get("flea")).toStrictEqual({ filtered: true, selected: false });
  expect(slicer.selectionCount).toBe(2);
  expect(slicer.lastSelection).toBe("cat");
  expect(slicer.selection).toStrictEqual(["cat", "rat"]);

  slicer.toggle("rat", SlicerModifier.CTRL_KEY);
  slicer.remove("flea");
  expect(slicer.data.get("cat")).toStrictEqual({ filtered: false, selected: true });
  expect(slicer.data.get("dog")).toStrictEqual({ filtered: true, selected: false });
  expect(slicer.data.get("rat")).toStrictEqual({ filtered: true, selected: false });
  expect(slicer.data.get("flea")).toBeUndefined();
  expect(slicer.selectionCount).toBe(1);
  expect(slicer.lastSelection).toBe("rat");
  expect(slicer.selection).toStrictEqual(["cat"]);

  slicer.toggle("cat", SlicerModifier.CTRL_KEY);
  expect(slicer.data.get("cat")).toStrictEqual({ filtered: false, selected: false });
  expect(slicer.data.get("dog")).toStrictEqual({ filtered: false, selected: false });
  expect(slicer.data.get("rat")).toStrictEqual({ filtered: false, selected: false });
  expect(slicer.selectionCount).toBe(0);
  expect(slicer.lastSelection).toBeUndefined();
  expect(slicer.selection).toStrictEqual(["cat", "dog", "rat"]);
});

test("Test slicer with no key", () => {
  const slicer: Slicer<string> = new Slicer<string>(["cat", "dog", "rat"]);
  expect(slicer.selectionCount).toBe(0);
  expect(slicer.lastSelection).toBeUndefined();
  expect(slicer.selection).toStrictEqual(["cat", "dog", "rat"]);

  slicer.toggle("rat");
  slicer.add("flea");
  expect(slicer.data.get("cat")).toStrictEqual({ filtered: true, selected: false });
  expect(slicer.data.get("dog")).toStrictEqual({ filtered: true, selected: false });
  expect(slicer.data.get("rat")).toStrictEqual({ filtered: false, selected: true }); 
  expect(slicer.data.get("flea")).toStrictEqual({ filtered: true, selected: false });
  expect(slicer.selectionCount).toBe(1);
  expect(slicer.lastSelection).toBe("rat");

  slicer.toggle("cat");
  slicer.remove("flea");
  expect(slicer.data.get("cat")).toStrictEqual({ filtered: false, selected: true });
  expect(slicer.data.get("dog")).toStrictEqual({ filtered: true, selected: false });
  expect(slicer.data.get("rat")).toStrictEqual({ filtered: true, selected: false }); 
  expect(slicer.data.get("flea")).toBeUndefined();
  expect(slicer.selectionCount).toBe(1);
  expect(slicer.lastSelection).toBe("cat");
  expect(slicer.selection).toStrictEqual(["cat"]);

  slicer.toggle("cat");
  expect(slicer.data.get("cat")).toStrictEqual({ filtered: false, selected: false });
  expect(slicer.data.get("dog")).toStrictEqual({ filtered: false, selected: false });
  expect(slicer.data.get("rat")).toStrictEqual({ filtered: false, selected: false }); 
  expect(slicer.selectionCount).toBe(0);
  expect(slicer.lastSelection).toBeUndefined();
  expect(slicer.selection).toStrictEqual(["cat", "dog", "rat"]);
});

test("Test slicer using Shift key", () => {
  const slicer: Slicer<string> = new Slicer<string>(["cat", "dog", "rat"]);
  expect(slicer.selectionCount).toBe(0);
  expect(slicer.lastSelection).toBeUndefined();
  expect(slicer.selection).toStrictEqual(["cat", "dog", "rat"]);

  slicer.toggle("cat");
  expect(slicer.data.get("cat")).toStrictEqual({ filtered: false, selected: true });
  expect(slicer.data.get("dog")).toStrictEqual({ filtered: true, selected: false });
  expect(slicer.data.get("rat")).toStrictEqual({ filtered: true, selected: false });
  expect(slicer.selectionCount).toBe(1);
  expect(slicer.lastSelection).toBe("cat");
  expect(slicer.selection).toStrictEqual(["cat"]);

  slicer.toggle("rat", SlicerModifier.SHIFT_KEY);
  slicer.add("flea");
  expect(slicer.data.get("cat")).toStrictEqual({ filtered: false, selected: false });
  expect(slicer.data.get("dog")).toStrictEqual({ filtered: false, selected: false });
  expect(slicer.data.get("rat")).toStrictEqual({ filtered: false, selected: false });
  expect(slicer.data.get("flea")).toStrictEqual({ filtered: false, selected: false });
  expect(slicer.selectionCount).toBe(0);
  expect(slicer.lastSelection).toBeUndefined();
  expect(slicer.selection).toStrictEqual(["cat", "dog", "rat", "flea"]);

  slicer.toggle("rat", SlicerModifier.SHIFT_KEY);
  expect(slicer.data.get("cat")).toStrictEqual({ filtered: true, selected: false });
  expect(slicer.data.get("dog")).toStrictEqual({ filtered: true, selected: false });
  expect(slicer.data.get("rat")).toStrictEqual({ filtered: false, selected: true });
  expect(slicer.data.get("flea")).toStrictEqual({ filtered: true, selected: false });
  expect(slicer.selectionCount).toBe(1);
  expect(slicer.lastSelection).toBe("rat");
  expect(slicer.selection).toStrictEqual(["rat"]);

  slicer.toggle("flea", SlicerModifier.SHIFT_KEY);
  slicer.remove("flea");
  expect(slicer.data.get("cat")).toStrictEqual({ filtered: true, selected: false });
  expect(slicer.data.get("dog")).toStrictEqual({ filtered: true, selected: false });
  expect(slicer.data.get("rat")).toStrictEqual({ filtered: false, selected: true });
  expect(slicer.data.get("flea")).toBeUndefined();
  expect(slicer.selectionCount).toBe(1);
  expect(slicer.lastSelection).toBe("rat");
  expect(slicer.selection).toStrictEqual(["rat"]);

  slicer.toggle("dog", SlicerModifier.SHIFT_KEY);
  expect(slicer.data.get("cat")).toStrictEqual({ filtered: true, selected: false });
  expect(slicer.data.get("dog")).toStrictEqual({ filtered: false, selected: true });
  expect(slicer.data.get("rat")).toStrictEqual({ filtered: false, selected: true });
  expect(slicer.selectionCount).toBe(2);
  expect(slicer.lastSelection).toBe("dog");
  expect(slicer.selection).toStrictEqual(["dog", "rat"]);

  slicer.toggle("dog", SlicerModifier.SHIFT_KEY);
  expect(slicer.data.get("cat")).toStrictEqual({ filtered: false, selected: false });
  expect(slicer.data.get("dog")).toStrictEqual({ filtered: false, selected: false });
  expect(slicer.data.get("rat")).toStrictEqual({ filtered: false, selected: false });
  expect(slicer.selectionCount).toBe(0);
  expect(slicer.lastSelection).toBeUndefined();
  expect(slicer.selection).toStrictEqual(["cat", "dog", "rat"]);
});