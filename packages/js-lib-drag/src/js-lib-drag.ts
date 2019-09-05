export class Drag {
  // http://www.petercollingridge.co.uk/tutorials/svg/interactive/dragging/
  public svg: SVGSVGElement;
  public el: SVGElement;
  public offset: any;
  public transform: any;

  constructor(selector: string) {
    this.svg = document.querySelector(selector);
    const defs: SVGElement = this.svg.querySelector("defs");
    const style: SVGElement = document.createElementNS("http://www.w3.org/2000/svg", "style");
    style.textContent = `.draggable { cursor: move } .nodrag { cursor: not-allowed }`;
    defs.appendChild(style);
    this.svg.addEventListener("mousedown", e => this.startDrag(e));
    this.svg.addEventListener("mousemove", e => this.drag(e));
    this.svg.addEventListener("mouseup", () => this.endDrag());
    this.svg.addEventListener("mouseleave", () => this.endDrag());
    this.svg.addEventListener("touchstart", e => this.startDrag(e));
    this.svg.addEventListener("touchmove", e => this.drag(e));
    this.svg.addEventListener("touchend", () => this.endDrag());
    this.svg.addEventListener("touchleave", () => this.endDrag());
    this.svg.addEventListener("touchcancel", () => this.endDrag());
  }

  public startDrag(e: any): void {
    if (e.target.classList.contains("draggable")) {
      this.el = e.target;
      this.offset = this._getMousePosition(e);
      // make sure the first transform on the element is a translate transform
      const transforms: any = (<any>this.el).transform.baseVal;
      if (transforms.length === 0 || transforms.getItem(0).type !== SVGTransform.SVG_TRANSFORM_TRANSLATE) {
        // create an transform that translates by (0, 0)
        const translate: any = (<any>this.svg).createSVGTransform();
        translate.setTranslate(0, 0);
        (<any>this.el).transform.baseVal.insertItemBefore(translate, 0);
      }
      // get initial translation
      this.transform = transforms.getItem(0);
      this.offset.x -= this.transform.matrix.e;
      this.offset.y -= this.transform.matrix.f;
    }
  }

  public drag(e: any): void {
    if (this.el) {
      e.preventDefault();
      const coord: { x: number, y: number } = this._getMousePosition(e);
      this.transform.setTranslate(coord.x - this.offset.x, coord.y - this.offset.y);
    }
  }

  public endDrag(): void {
    this.el = undefined;
  }

  private _getMousePosition(e: any): any {
    const CTM: DOMMatrix = (<any>this.svg).getScreenCTM();
    if (e.touches) { e = e.touches[0]; }
    return {
      x: (e.clientX - CTM.e) / CTM.a,
      y: (e.clientY - CTM.f) / CTM.d
    };
  }
}