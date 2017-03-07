import { Directive, Component, Input, Output, ChangeDetectionStrategy,
  EventEmitter, forwardRef, OnInit, ElementRef, ViewChild, ContentChildren, QueryList, HostListener } from '@angular/core';
import { ControlValueAccessor, NgControl, NG_VALUE_ACCESSOR } from '@angular/forms';

export const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => DropdownComponent),
  multi: true
};

export interface DropdownItem {
  label: string;
  value: any;
  sublabel: string;
  class: string;
  disabled: boolean;
  marked: boolean;
  selected: boolean;
}

function createItem(item: DropdownItem) {
  if (!item.label) {
    item.label = item.value;
  }
  if (!item.value) {
    item.value = String(item.label);
  }
  return {
    value: item.value,
    label: item.label,
    sublabel: item.sublabel,
    class: item.class,
    disabled: item.disabled,
    marked: item.marked,
    selected: item.selected
  };
}

export abstract class DropdownOptionBase implements DropdownItem {
  abstract value: any;
  abstract sublabel: string;
  abstract label: string;
  abstract class: string = '';
  abstract disabled: boolean = false;
  abstract marked: boolean = false;
  abstract selected: boolean = false;

  createItem() {
    return createItem(this);
  }
}

@Directive({
  selector: 'vcl-dropdown-option'
})
export class DropdownOptionComponent extends DropdownOptionBase implements OnInit {

  @Input('value') value: any;
  @Input('sublabel') sublabel: string;
  @Input('label') label: string;
  @Input('class') class: string = '';
  @Input('disabled') disabled: boolean = false;
  @Input('marked') marked: boolean = false;
  @Input('selected') selected: boolean = false;

  constructor(private elementRef: ElementRef) { super(); }

  ngOnInit() {
    if (!this.label || this.label == '')
      this.label = this.elementRef.nativeElement.innerText;
  }
}

@Component({
  selector: 'vcl-dropdown',
  templateUrl: 'dropdown.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR]
})
export class DropdownComponent implements ControlValueAccessor {
  private static readonly TAG: string = 'DropdownComponent';

  @ViewChild('listbox') listbox;
  @ContentChildren(DropdownOptionComponent) templateItems: QueryList<DropdownOptionComponent>;

  @Output('change') changeEE = new EventEmitter<any | any[]>();

  @Input('items')
  set _items(items: DropdownItem[]) {
    if (items) {
      this.items = items.map(item => createItem(item));
    } else {
      this.items = [];
    }
  };
  items: DropdownItem[];

  @Input() tabindex: number = 0;
  @Input() expanded: boolean = false;
  @Input() maxSelectableItems: number = 1;
  @Input() minSelectableItems: number = 1;
  @Input() ariaRole: string = 'listbox';

  @Input() listenKeys: boolean = false;

  get value(): any | any[] {
    const items = this.items || [];
    let ret = items.filter(i => i.selected).map(i => i.value);

    return this.multiSelect ? ret : ret[0];
  };

  set value(v) {
    if (this.multiSelect && !Array.isArray(v)) {
      return;
    } else if (!this.multiSelect && Array.isArray(v)) {
      return;
    }

    if (!Array.isArray(v))
      v = [v];

    (this.items || []).forEach(item => {
      item.selected = v.includes(item.value);
    });
  }

  constructor(public elementRef: ElementRef) { }

  get multiSelect() {
    return this.maxSelectableItems > 1;
  }

  ngAfterContentInit() {
    // transform template-items if available
    let templateItemsAr = this.templateItems.toArray();
    if (templateItemsAr.length > 0) {
      this.items = templateItemsAr.map(itemTpl => itemTpl.createItem());
    }

    // make sure value and label exists on every option
    this.items.forEach(i => {
      if (!i.value) i.value = i.label;
      if (!i.label) i.label = i.value;
    });
  }

  selectedItems() {
    return this.items.filter(i => i.selected);
  }

  selectItem(item: any) {
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

  unselectItem(item: any) {
    if (item.disabled) return;
    item.selected = false;
    this.onChange();
  }

  onChange() {
    this.changeEE.emit(this.value);
    !!this.onChangeCallback && this.onChangeCallback(this.value);
  }

  markNext() {
    if (this.items.length == 0) return;
    const ix = this.items.findIndex(i => i.marked == true);
    if (this.items[ix]) this.items[ix].marked = false;

    if (ix < 0 || !this.items[ix + 1]) {
      this.items[0].marked = true;
    } else {
      this.items[ix + 1].marked = true;
    }
  }
  markPrev() {
    if (this.items.length == 0) return;
    const ix = this.items.findIndex(i => i.marked == true);
    if (this.items[ix]) this.items[ix].marked = false;

    if (ix <= 0) {
      this.items[this.items.length - 1].marked = true;
    } else {
      this.items[ix - 1].marked = true;
    }
  }

  selectMarked() {
    const firstMarked = this.items.filter(i => i.marked == true)[0];
    this.selectItem(firstMarked);
  }

  async scrollToMarked() {
    await new Promise(res => setTimeout(res, 0));

    const itemEl = this.listbox.nativeElement.querySelectorAll('.vclHighlighted')[0];
    if (!itemEl)
      return;

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

  @HostListener('window:keydown', ['$event'])
  onWindowKeyDown(ev) {
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
    this.value = v;
  }
  registerOnChange(fn: any) {
    this.onChangeCallback = fn;
  }
  registerOnTouched(fn: any) {
    this.onTouchedCallback = fn;
  }
}
