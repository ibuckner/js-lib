import { toNodes } from "./to-nodes";

test("toNodes function tests", () => {
  document.body.innerHTML = `<div id="parent"></div>`;
  const parent: HTMLElement = document.getElementById("parent");
  parent.appendChild(toNodes(`<div id="test">Some test</div>`));
  const div: HTMLDivElement = document.querySelector("#test");

  expect(div.textContent).toStrictEqual("Some test");
});