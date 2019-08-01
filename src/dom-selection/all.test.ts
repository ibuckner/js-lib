import { all } from "./all";

test("Multiple document selector tests", () => {
  document.body.innerHTML = `<div id="parent">
    Parent node
    <div id="child">Nested node</div>
    <div id="sibling">Nested node</div>
  </div>`;

  const parent: HTMLDivElement[] = all("#parent") as HTMLDivElement[];
  const children: HTMLDivElement[] = all("div", parent[0]) as HTMLDivElement[];

  expect(parent.length).toStrictEqual(1);
  expect(children[1].id).toStrictEqual("sibling");
});