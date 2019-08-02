export class Queue {
  private _: any[] = [];

  public get first(): any { return this._.length > 0 ? this._[0] : null; }
  public get last(): any { return this._.length > 0 ? this._[this._.length - 1] : null; }
  public get length(): number { return this._.length; }

  constructor(list?: any[]) {
    if (Array.isArray(list)) {
      list.forEach(i => this._.push(i));
    }
  }

  public clear(): Queue {
    this._ = [];
    return this;
  }

  /**
   * join item to end of queue
   * @param {any} item
   */
  public join(item: any): Queue { this._.push(item); return this; }

  /**
   * join item at front of queue
   * @param {any} item
   */
  public jump(item: any): Queue { this._.unshift(item); return this; }

  /**
   * remove item from end of queue
   */
  public leave = () => this._.length > 0 ? this._.pop() : null;

  /**
   * remove item from front of queue
   */
  public next = () => this._.length > 0 ? this._.shift() : null;

  public toArray = () => this._;
}