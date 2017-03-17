import { Directive, Component, Input, Output, ChangeDetectionStrategy,
  EventEmitter, forwardRef, OnInit, ElementRef, ViewChild, ContentChildren, QueryList, HostListener, TemplateRef, SimpleChanges
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { DropdownItem, DropdownOptionComponent, createItem } from "./dropdown-option.component";

export const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => DropdownComponent),
  multi: true
};

@Component({
  selector: 'vcl-dropdown',
  templateUrl: 'dropdown.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR]
})
export class DropdownComponent implements ControlValueAccessor {
  private static readonly TAG: string = 'DropdownComponent';

  @ViewChild('listbox')
  listbox: ElementRef;

  @ContentChildren(DropdownOptionComponent)
  templateItems: QueryList<DropdownOptionComponent>;

  @Input('items')
  _items: DropdownItem[];

  @Input() tabindex: number = 0;
  @Input() expanded: boolean = false;
  @Input() minSelectableItems: number = 0;
  @Input() maxSelectableItems: number = 1;
  @Input() ariaRole: string = 'listbox';
  @Input() listenKeys: boolean = false;

  @Output('change')
  change = new EventEmitter<any | any[]>();

  items: DropdownItem[];

  constructor(public elementRef: ElementRef) { }

  getValue(): any | any[] {
    const items = this.items || [];
    let ret = items.filter(i => i.selected).map(i => i.value);
    return this.multiSelect ? ret : ret[0];
  };

  setValue(value: any) {
    if (!Array.isArray(value)) {
      value = [value];
    }
    (this.items || []).forEach(item => {
      item.selected = value.includes(item.value);
    });
  }

  get multiSelect() {
    return this.maxSelectableItems > 1;
  }

  ngOnChanges(changes: SimpleChanges) {
    if ('_items' in changes) {
      const items = changes._items.currentValue;
      if (Array.isArray(items)) {
        this.items = items.map((item, idx) => createItem(item, idx));
      } else {
        this.items = [];
      }
    }
  }

  ngAfterContentInit() {
    // transform template-items if available
    let templateItemsAr = this.templateItems.toArray();
    if (templateItemsAr.length > 0) {
      this.items = templateItemsAr.map((tItem, idx) => tItem.create(idx));
    }
  }

  get selectedItems() {
    return this.items.filter(i => i.selected);
  }

  selectItem(item: any) {
    if (item.disabled) return;

    const selectedItems = this.selectedItems;
    if (!item.selected) {
      // prevent overflow maxSelectableItems
      if (selectedItems.length >= this.maxSelectableItems) {
        selectedItems[0].selected = false;
      }
      if (this.maxSelectableItems === 1) {
        this.items.forEach(i => i.selected = false);
      }
    } else {
      // prevent click for single select or onunderflow minSelectableItems for multiselect
      if (!this.multiSelect || selectedItems.length <= this.minSelectableItems) return;
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
    const value = this.getValue();
    this.change.emit(value);
    !!this.onChangeCallback && this.onChangeCallback(value);
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

  writeValue(value: any): void {
    this.setValue(value);
  }
  registerOnChange(fn: any) {
    this.onChangeCallback = fn;
  }
  registerOnTouched(fn: any) {
    this.onTouchedCallback = fn;
  }
}
