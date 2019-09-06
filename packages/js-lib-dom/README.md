# js-lib-dom

Functions for working with the browser DOM

## Install

```
npm i @buckneri/js-lib-dom
```

### aspectRatio (*width*, *height*, *ratio*) · [Source](https://github.com/ibuckner/js-lib/blob/master/packages/js-lib-dom/src/js-lib-dom.ts)
```js
// returns dimensions of object conforming to aspect ratio
console.log(aspectRaio(100, 100, "16:9")); // { area: 6417, height: 69, width: 93 }
```

### getJSON (*url*, *callback*) · [Source](https://github.com/ibuckner/js-lib/blob/master/packages/js-lib-dom/src/js-lib-dom.ts)
```js
// performs asynchronous GET operation to retrieve JSON data
  getJSON("https://data.me?today", d => console.log(d)); // some data
```

### pageOffset (*element*) · [Source](https://github.com/ibuckner/js-lib/blob/master/packages/js-lib-dom/src/js-lib-dom.ts)
```js
// gets element position in relation to visible screen
  console.log(pageOffset(el); // { x: 85, y: 120 }
```

 ### resetWheel (*wheelEvent*) · [Source](https://github.com/ibuckner/js-lib/blob/master/packages/js-lib-dom/src/js-lib-dom.ts)
 ```js
window.addEventListener("wheel", e => console.log(resetWheel(e)));
// { pixelX: 12, pixelY: 12,  spinX: 32, spinY: 32 }
```

### toNodes (*HTMLstring*, *boolean*) · [Source](https://github.com/ibuckner/js-lib/blob/master/packages/js-lib-dom/src/js-lib-dom.ts)
```js
toNodes("<h1>Hello</h1>", false); // HTMLHeadingElement
```