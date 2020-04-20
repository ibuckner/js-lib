# js-lib-slicer

Simple slicer behaviour

## Install

```js
npm i @buckneri/js-lib-slicer
```

## Reference · [Source](https://github.com/ibuckner/js-lib/blob/master/packages/js-lib-slicer/src/js-lib-slicer.ts)

```js
  const s = new Slicer(["A", "B", "C"]);

  // select a single item
  s.toggleSingle("A");
  
  // toggle() is the shorthand for toggleSingle()
  // selecting the same value de-selects it
  s.toggle("A");

  // SlicerModifier.CTRL_KEY defines the Control key selection process on a slicer
  s.toggle("C", SlicerModifier.CTRL_KEY); // selection = "C"
  // equivalent to s.toggleCumulative("C");

  // SlicerModifier.SHIFT_KEY defines the Shift key selection process on a slicer
  s.toggle("B", SlicerModifier.SHIFT_KEY); // selection = "B", "C"
  // equivalent to s.toggleRange("B");

  // Add a new member to the collection
  a.add("D"); // ["A", "B", "C", "D"]

  // Remove a member from the collection
  a.remove("A"); // ["B", "C", "D"]
```
