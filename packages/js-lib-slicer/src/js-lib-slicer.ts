export type TSlicerState = {
  filtered: boolean,
  selected: boolean
};

export enum SlicerModifier {
  NO_KEY = 0,
  CTRL_KEY = 1,
  SHIFT_KEY = 2
}

export class Slicer<T> {
  private _: Map<T, TSlicerState> = new Map<T, TSlicerState>();
  
  public get data(): any {
    return this._;
  }

  public set data(list: any) {
    if (Array.isArray(list)) {
      list.forEach((item: T) => {
        if (!this._.has(item)) {
          this._.set(item, { filtered: false, selected: false });
        }
      });
    }
  }

  public lastSelection: T | undefined;
  public selected: number = 0;

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
    this.selected = 0;
    this.lastSelection = undefined;
    return this;
  }

  /**
   * Updates the slicer state
   * @param item - item selected by user
   * @param modifier - was any modifying key pressed
   */
  public toggle(item: T, modifier: SlicerModifier = SlicerModifier.NO_KEY): Slicer<T> {
    if (modifier === SlicerModifier.SHIFT_KEY) {
      return this.toggleRange(item);
    } else if (modifier === SlicerModifier.CTRL_KEY) {
      return this.toggleCumulative(item);
    } else {
      return this.toggleSingle(item);
    }
  }

  /**
   * Updates the slicer state using Ctrl key modifier
   * @param item - item selected by user
   */
  public toggleCumulative(item: T): Slicer<T> {
    const state: TSlicerState | undefined = this._.get(item);
    if (state) {
      state.selected = !state.selected;
      if (state.selected) {
        ++this.selected;
      } else {
        --this.selected;
      }
    }
    if (this.selected < 1) {
      this.clear();
    } else {
      this._.forEach((value: TSlicerState) => value.filtered = !value.selected);
      this.lastSelection = item;
    }
    return this;
  }

  /**
   * Updates the slicer state using Shift key modifier
   * @param item - item selected by user
   */
  public toggleRange(item: T): Slicer<T> {
    if (item === this.lastSelection) {
      this.clear();
    } else {
      this.lastSelection = item;
      this.selected = 0;
      let rangeStart: T | undefined;
      let rangeEnd: T | undefined;      
      this._.forEach((value: TSlicerState, key: T) => {
        if (item === key) {
          if (value.selected) {
            rangeStart = key;
            rangeEnd = key;
          } else {
            value.filtered = false;
            value.selected = true;
          }
          if (rangeStart === undefined) {
            rangeStart = key;
          } else if (rangeStart && rangeEnd === undefined) {
            rangeEnd = key;
          }
        } else if (value.selected && rangeStart === undefined) {
          rangeStart = key;
        } else {
          if (rangeStart && rangeEnd === undefined) {
            if (item === key) {
              rangeEnd = key;
            }
            value.filtered = false;
            value.selected = true;
          } else {
            value.filtered = true;
            value.selected = false;
          }
        }
        if (value.selected) {
          ++this.selected;
        }
      });
    }
    return this;
  }

  /**
   * Updates the slicer state without key modifier
   * @param item - item selected by user
   */
  public toggleSingle(item: T): Slicer<T> {
    const state: TSlicerState | undefined = this._.get(item);
    if (state) {
      if (state.selected) {
        this.clear();
      } else {
        this._.forEach((value: TSlicerState, key: T) => {
          if (item === key) {
            value.selected = !value.selected;
            value.filtered = !value.selected;
          } else {
            value.selected = false;
            value.filtered = true;
          }
        });
        this.selected = 1;
        this.lastSelection = item;
      }
    }
    return this;
  }
}