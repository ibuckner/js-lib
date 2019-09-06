# js-lib-color

RGB color tools

## Install

```
npm i @buckneri/js-lib-color
```

### new RGB() · [Source](https://github.com/ibuckner/js-lib/blob/master/packages/js-lib-color/src/js-lib-color.ts)
```js
// returns a set (of unique values)
const red = new RGB("red");

console.log(red.r);             // 255
console.log(red.g);             // 0
console.log(red.b);             // 0
console.log(red.toString());    // #ff0000
console.log(red.toCSSString()); // red

const black = new RGB("black");
const white = new RGB("white");

console.log(black.colorDifference(white));  // 765
console.log(red.brightness);                // 142.452
```