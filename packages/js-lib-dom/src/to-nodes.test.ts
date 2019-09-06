import { toNodes } from "./js-lib-dom";

test("toNodes function tests", () => {
  document.body.innerHTML = `<div id="parent"></div>`;
  const parent: HTMLElement | null = document.getElementById("parent");
  if (parent) {
    parent.appendChild(toNodes(`<div id="test">Some test</div>`));
  }
  const div: HTMLDivElement | null = document.querySelector("#test");
  expect(div ? div.textContent : "").toStrictEqual("Some test");
});