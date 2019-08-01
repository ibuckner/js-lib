import { one } from "./one";

test("Single document selector tests", () => {
  document.body.innerHTML = `<div id="parent">
    Parent node
    <div id="child">Nested node</div>
  </div>`;

  const parent : HTMLDivElement = one("div") as HTMLDivElement;
  const child: HTMLDivElement = one("#child", parent) as HTMLDivElement;

  expect(parent.id).toStrictEqual("parent");
  expect(child.id).toStrictEqual("child");
});