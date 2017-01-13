import { Component, Input, Output, ChangeDetectionStrategy,
  EventEmitter, forwardRef, OnInit, ElementRef } from '@angular/core';
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
    else {
      this.items[ix + 1].marked = true;
    }
  }
  markPrev() {
    if (this.items.length == 0) return;
    const ix = this.items.findIndex(i => i.marked == true);
    if (this.items[ix]) this.items[ix].marked = false;

    if (
      ix <= 0
    ) this.items[this.items.length - 1].marked = true;
    else {
      this.items[ix - 1].marked = true;
    }
  }

  keyboardInput(ev) {
    if (!this.listenKeys) return;
    console.log('keyboardInput');
    console.dir(ev.code);

    switch (ev.code) {
      case 'ArrowDown':
        this.markNext();
        break;
      case 'ArrowUp':
        this.markPrev();
        break;
    }

  }

  /**
   * things needed for ControlValueAccessor-Interface
   */
  private onTouchedCallback: (_: any) => void;
  private onChangeCallback: (_: any) => void;

  writeValue(v: any): void {
    if (v.toString() != this.value.toString())
      this.value = v;
  }
  registerOnChange(fn: any) {
    this.onChangeCallback = fn;
  }
  registerOnTouched(fn: any) {
    this.onTouchedCallback = fn;
  }
}
