import { Component, Input, Output, ChangeDetectionStrategy,
  EventEmitter, forwardRef, OnInit, ElementRef, ViewChild } from '@angular/core';
import { ControlValueAccessor, NgControl, NG_VALUE_ACCESSOR } from '@angular/forms';

export const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => DropdownComponent),
  multi: true
};

@Component({
  selector: 'vcl-dropdown',
  templateUrl: 'dropdown.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR],
  host: { '(window:keydown)': 'keyboardInput($event)' }
})
export class DropdownComponent implements ControlValueAccessor, OnInit {
  private static readonly TAG: string = 'DropdownComponent';

  @ViewChild('listbox') listbox;

  @Output('change') change$ = new EventEmitter<any[]>();

  @Input() items: any[];
  @Input() tabindex: number = 0;
  @Input() expanded: boolean = false;
  @Input() maxSelectableItems: number = 1;
  @Input() minSelectableItems: number = 1;
  @Input() ariaRole: string = 'listbox';

  @Input() listenKeys: boolean = false;

  @Input() set value(v: any) {
    if (!Array.isArray(v)) v = [v];
    this.items
      .forEach(i => {
        if (v.includes(i.value)) i.selected = true;
        else i.selected = false;
      });
    this.onChange();
  }

  get value(): any {
    let ret = this.items
      .filter(i => i.selected)
      .map(i => i.value);
    if (this.maxSelectableItems == 1) ret = ret[0];
    return ret;
  };

  me: ElementRef;
  constructor(me: ElementRef) {
    this.me = me;
  }

  ngOnInit() {
    // ensure items have a value
    this.items = this.items.map(i => {
      if (!i.value) i.value = i.label;
      if (!i.label) i.label = i.value;
      return i;
    });
  }

  selectedItems() {
    return this.items.filter(i => i.selected);
  }

  public selectItem(item: any) {
    if (item.disabled) return;
    if (!item.selected) {
      // prevent overflow maxSelectableItems
      if (this.selectedItems().length >= this.maxSelectableItems)
        this.items.find(i => i.selected).selected = false;
      if (this.maxSelectableItems == 1)
        this.items.forEach(i => i.selected = false);
    } else {
      // prevent underflow minSelectableItems
      if (this.selectedItems().length <= this.minSelectableItems) return;
    }
    item.selected = !item.selected;
    this.onChange();
  }

  onChange() {
    this.change$.emit(this.value);
    !!this.onChangeCallback && this.onChangeCallback(this.value);
  }


  markNext() {
    if (this.items.length == 0) return;
    const ix = this.items.findIndex(i => i.marked == true);
    if (this.items[ix]) this.items[ix].marked = false;

    if (
      ix < 0 ||
      !this.items[ix + 1]
    ) this.items[0].marked = true;
    else this.items[ix + 1].marked = true;
  }
  markPrev() {
    if (this.items.length == 0) return;
    const ix = this.items.findIndex(i => i.marked == true);
    if (this.items[ix]) this.items[ix].marked = false;

    if (ix <= 0) this.items[this.items.length - 1].marked = true;
    else this.items[ix - 1].marked = true;
  }

  selectMarked() {
    const firstMarked = this.items.filter(i => i.marked == true)[0];
    this.selectItem(firstMarked);
  }

  async scrollToMarked() {
    await new Promise(res => setTimeout(res, 0));

    const itemEl = this.listbox.nativeElement.querySelectorAll('.vclHighlighted')[0];
    if (!itemEl) return;
    const boxHeight = this.listbox.nativeElement.offsetHeight;
    const isTop = this.listbox.nativeElement.scrollTop;
    const itemHeight = itemEl.offsetHeight;
    const itemTop = itemEl.offsetTop;

    // to low
    if ((itemTop + itemHeight) > (isTop + boxHeight))
      this.listbox.nativeElement.scrollTop = itemTop;

    // to height
    if (itemTop < isTop)
      this.listbox.nativeElement.scrollTop = itemTop;
  }

  keyboardInput(ev) {
    if (!this.listenKeys) return;

    let prevent = true;
    switch (ev.code) {
      case 'ArrowDown':
        this.markNext();
        this.scrollToMarked();
        break;
      case 'ArrowUp':
        this.markPrev();
        this.scrollToMarked();
        break;
      case 'Enter':
        this.selectMarked();
        this.scrollToMarked();
        break;
      case 'Space':
        this.listbox.nativeElement.scrollTop += 10;
        break;
      default:
        let prevent = false;
    }
    prevent && ev.preventDefault();
  }

  /**
   * things needed for ControlValueAccessor-Interface
   */
  private onTouchedCallback: (_: any) => void;
  private onChangeCallback: (_: any) => void;

  writeValue(v: any): void {
    if (!v) {
      this.value = '';
      return;
    }
    if (
      typeof this.value === 'undefined' ||
      v.toString() != this.value.toString()
    ) this.value = v;
  }
  registerOnChange(fn: any) {
    this.onChangeCallback = fn;
  }
  registerOnTouched(fn: any) {
    this.onTouchedCallback = fn;
  }
}
