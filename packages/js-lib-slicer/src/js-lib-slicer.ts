export type TSlicerState = {
  filtered: boolean,
  selected: boolean
};

export class Slicer<T> {
  private _: Map<T, TSlicerState> = new Map<T, TSlicerState>();

  public get data(): any {
    return this._;
  }

  public set data(list: any) {
    if (Array.isArray(list)) {
      this._.clear();
      list.forEach((item: T) => {
        this._.set(item, { filtered: false, selected: false });
      });
    }
  }

  constructor(list?: T[]) {
    if (list) {
      this.data = list;
    }
  }

  /**
   * Removes all selections on the slicer
   */
  public clear(): Slicer<T> {
    this._.forEach((_: TSlicerState, key: T) => {
      this._.set(key, { filtered: false, selected: false });
    });
    return this;
  }

  /**
   * Toggles the state of an item in the slicer
   * @param item - item identifier
   * @param ctrlKey - state of Ctrl Key 
   */
  public toggle(item: T, ctrlKey: boolean = false): Slicer<T> {
    this._.forEach((value: TSlicerState, key: T) => {
      if (item !== key) {
        value.selected = ctrlKey ? value.selected : false;
        value.filtered = ctrlKey ? false : true;          
      } else {
        if (value.selected) {
          value.selected = false;
          value.filtered = false;
        } else {
          value.selected = !value.selected;
          value.filtered = !value.selected;
        }
      }
      this._.set(key, value);
    });

    const selectionList: T[] = [];
    let filtered: number = 0;
    this._.forEach((value: TSlicerState, key: T) => {
      if (value.selected) {
        selectionList.push(key);
      }
      if (value.filtered) {
        ++filtered;
      }
    });

    if (filtered === this._.size || 
        selectionList.length === 0 || 
        selectionList.length === this._.size) {
      this.clear();
    } else if (selectionList.length > 0 && filtered === 0) {
      this._.forEach((value: TSlicerState, key: T) => {
        value.filtered = !value.selected;  
        this._.set(key, value);
      });
    }

    return this;
  }
}