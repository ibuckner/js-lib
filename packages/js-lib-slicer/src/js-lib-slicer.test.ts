import { Slicer, SlicerModifier } from "./js-lib-slicer";

test("Test slicer using Ctrl key", () => {
  const slicer: Slicer<string> = new Slicer<string>(["cat", "dog", "rat"]);
  expect(slicer.selected).toBe(0);
  expect(slicer.lastSelection).toBeUndefined();

  slicer.toggle("rat", SlicerModifier.CTRL_KEY);
  expect(slicer.data.get("rat")).toStrictEqual({ filtered: false, selected: true });
  expect(slicer.data.get("cat")).toStrictEqual({ filtered: true, selected: false });
  expect(slicer.selected).toBe(1);
  expect(slicer.lastSelection).toBe("rat");

  slicer.toggle("cat", SlicerModifier.CTRL_KEY);
  expect(slicer.data.get("rat")).toStrictEqual({ filtered: false, selected: true });
  expect(slicer.data.get("cat")).toStrictEqual({ filtered: false, selected: true });
  expect(slicer.selected).toBe(2);
  expect(slicer.lastSelection).toBe("cat");

  slicer.toggle("rat", SlicerModifier.CTRL_KEY);
  expect(slicer.data.get("rat")).toStrictEqual({ filtered: true, selected: false });
  expect(slicer.data.get("cat")).toStrictEqual({ filtered: false, selected: true });
  expect(slicer.selected).toBe(1);
  expect(slicer.lastSelection).toBe("rat");

  slicer.toggle("cat", SlicerModifier.CTRL_KEY);
  expect(slicer.data.get("rat")).toStrictEqual({ filtered: false, selected: false });
  expect(slicer.data.get("cat")).toStrictEqual({ filtered: false, selected: false });
  expect(slicer.selected).toBe(0);
  expect(slicer.lastSelection).toBeUndefined();
});

test("Test slicer with no key", () => {
  const slicer: Slicer<string> = new Slicer<string>(["cat", "dog", "rat"]);
  expect(slicer.selected).toBe(0);
  expect(slicer.lastSelection).toBeUndefined();

  slicer.toggle("rat");
  expect(slicer.data.get("rat")).toStrictEqual({ filtered: false, selected: true });
  expect(slicer.data.get("cat")).toStrictEqual({ filtered: true, selected: false });
  expect(slicer.selected).toBe(1);
  expect(slicer.lastSelection).toBe("rat");

  slicer.toggle("cat");
  expect(slicer.data.get("rat")).toStrictEqual({ filtered: true, selected: false });
  expect(slicer.data.get("cat")).toStrictEqual({ filtered: false, selected: true });
  expect(slicer.selected).toBe(1);
  expect(slicer.lastSelection).toBe("cat");

  slicer.toggle("cat");
  expect(slicer.data.get("rat")).toStrictEqual({ filtered: false, selected: false });
  expect(slicer.data.get("cat")).toStrictEqual({ filtered: false, selected: false });
  expect(slicer.selected).toBe(0);
  expect(slicer.lastSelection).toBeUndefined();
});

test("Test slicer using Shift key", () => {
  const slicer: Slicer<string> = new Slicer<string>(["cat", "dog", "rat", "flea", "mouse"]);
  expect(slicer.selected).toBe(0);
  expect(slicer.lastSelection).toBeUndefined();

  slicer.toggle("cat");
  expect(slicer.data.get("cat")).toStrictEqual({ filtered: false, selected: true });
  expect(slicer.data.get("dog")).toStrictEqual({ filtered: true, selected: false });
  expect(slicer.data.get("rat")).toStrictEqual({ filtered: true, selected: false });
  expect(slicer.data.get("flea")).toStrictEqual({ filtered: true, selected: false });
  expect(slicer.data.get("mouse")).toStrictEqual({ filtered: true, selected: false });
  expect(slicer.selected).toBe(1);
  expect(slicer.lastSelection).toBe("cat");

  slicer.toggle("flea", SlicerModifier.SHIFT_KEY);  
  expect(slicer.data.get("cat")).toStrictEqual({ filtered: false, selected: true });
  expect(slicer.data.get("dog")).toStrictEqual({ filtered: false, selected: true });
  expect(slicer.data.get("rat")).toStrictEqual({ filtered: false, selected: true });
  expect(slicer.data.get("flea")).toStrictEqual({ filtered: false, selected: true });
  expect(slicer.data.get("mouse")).toStrictEqual({ filtered: true, selected: false });
  expect(slicer.selected).toBe(4);
  expect(slicer.lastSelection).toBe("flea");

  slicer.toggle("dog", SlicerModifier.SHIFT_KEY);
  expect(slicer.data.get("cat")).toStrictEqual({ filtered: true, selected: false });
  expect(slicer.data.get("dog")).toStrictEqual({ filtered: false, selected: true });
  expect(slicer.data.get("rat")).toStrictEqual({ filtered: false, selected: true });
  expect(slicer.data.get("flea")).toStrictEqual({ filtered: false, selected: true });
  expect(slicer.data.get("mouse")).toStrictEqual({ filtered: true, selected: false });
  expect(slicer.selected).toBe(3);
  expect(slicer.lastSelection).toBe("dog");

  slicer.toggle("cat", SlicerModifier.SHIFT_KEY);
  expect(slicer.data.get("cat")).toStrictEqual({ filtered: false, selected: true });
  expect(slicer.data.get("dog")).toStrictEqual({ filtered: false, selected: true });
  expect(slicer.data.get("rat")).toStrictEqual({ filtered: true, selected: false });
  expect(slicer.data.get("flea")).toStrictEqual({ filtered: true, selected: false });
  expect(slicer.data.get("mouse")).toStrictEqual({ filtered: true, selected: false });
  expect(slicer.selected).toBe(2);
  expect(slicer.lastSelection).toBe("cat");

  slicer.toggle("cat", SlicerModifier.SHIFT_KEY);
  expect(slicer.data.get("cat")).toStrictEqual({ filtered: false, selected: false });
  expect(slicer.data.get("dog")).toStrictEqual({ filtered: false, selected: false });
  expect(slicer.data.get("rat")).toStrictEqual({ filtered: false, selected: false });
  expect(slicer.data.get("flea")).toStrictEqual({ filtered: false, selected: false });
  expect(slicer.data.get("mouse")).toStrictEqual({ filtered: false, selected: false });
  expect(slicer.selected).toBe(0);
  expect(slicer.lastSelection).toBeUndefined();

  slicer.toggle("flea");
  expect(slicer.data.get("cat")).toStrictEqual({ filtered: true, selected: false });
  expect(slicer.data.get("dog")).toStrictEqual({ filtered: true, selected: false });
  expect(slicer.data.get("rat")).toStrictEqual({ filtered: true, selected: false });
  expect(slicer.data.get("flea")).toStrictEqual({ filtered: false, selected: true });
  expect(slicer.data.get("mouse")).toStrictEqual({ filtered: true, selected: false });
  expect(slicer.selected).toBe(1);
  expect(slicer.lastSelection).toBe("flea");

  slicer.toggle("dog", SlicerModifier.SHIFT_KEY);
  expect(slicer.data.get("cat")).toStrictEqual({ filtered: true, selected: false });
  expect(slicer.data.get("dog")).toStrictEqual({ filtered: false, selected: true });
  expect(slicer.data.get("rat")).toStrictEqual({ filtered: false, selected: true });
  expect(slicer.data.get("flea")).toStrictEqual({ filtered: false, selected: true });
  expect(slicer.data.get("mouse")).toStrictEqual({ filtered: true, selected: false });
  expect(slicer.selected).toBe(3);
  expect(slicer.lastSelection).toBe("dog");

  slicer.toggle("dog", SlicerModifier.SHIFT_KEY);
  expect(slicer.data.get("cat")).toStrictEqual({ filtered: false, selected: false });
  expect(slicer.data.get("dog")).toStrictEqual({ filtered: false, selected: false });
  expect(slicer.data.get("rat")).toStrictEqual({ filtered: false, selected: false });
  expect(slicer.data.get("flea")).toStrictEqual({ filtered: false, selected: false });
  expect(slicer.data.get("mouse")).toStrictEqual({ filtered: false, selected: false });
  expect(slicer.selected).toBe(0);
  expect(slicer.lastSelection).toBeUndefined();
});