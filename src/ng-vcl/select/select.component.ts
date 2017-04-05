import { Component, forwardRef, ChangeDetectionStrategy, HostBinding, ViewChild, ContentChildren, ElementRef, Input, QueryList, EventEmitter, Output, HostListener, ChangeDetectorRef } from "@angular/core";
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { MetalistItem } from '../metalist/index';
import { DropdownComponent, DropdownOption } from '../dropdown/index';
import { SelectOption } from './select-option.component';

enum DropDirection { Top, Bottom };

export const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => SelectComponent),
  multi: true
};
@Component({
  selector: 'vcl-select',
  templateUrl: 'select.component.html',
  // changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR],
  host: {
    '[style.position]': '"relative"',
    '[style.display]': '"block"'
  }
})
export class SelectComponent implements ControlValueAccessor {

  @ViewChild('dropdown')
  dropdown: DropdownComponent;

  @ContentChildren(SelectOption)
  items: QueryList<SelectOption>;

  @ViewChild('select')
  select: ElementRef;

  @HostBinding('attr.tabindex')
  @Input()
  tabindex = 0;

  @Input()
  expanded: boolean = false;

  @Input()
  listenKeys: boolean = true;

  // multi-select
  @Input()
  maxSelectableItems: number = 1;

  // styling
  @Input()
  expandedIcon: string = 'fa:chevron-up';

  @Input()
  collapsedIcon: string = 'fa:chevron-down';

  @Output('change')
  change = new EventEmitter<any>();

  focused: boolean = false;

  constructor(
    private elementRef: ElementRef,
    private cdRef: ChangeDetectorRef
  ) { }

  @HostListener('keydown', ['$event'])
  keydown(ev) {
    if (this.listenKeys) {
      let prevent = true;
      switch (ev.code) {
        case 'ArrowDown':
          if (this.expanded) {
            this.dropdown.metalist.markNext();
          } else {
            this.open();
          }
          break;
        case 'ArrowUp':
          if (this.expanded) {
            this.dropdown.metalist.markPrev();
          } else {
            this.open();
          }
          break;
        case 'Enter':
          if (this.expanded) {
            this.dropdown.metalist.selectMarked();
          } else {
            this.open();
          }
          break;
        case 'Space':
          this.toggle();
          break;
        case 'Tab':
          this.close();
        case 'Escape':
          this.close();
        default:
         prevent = false;
      }
      prevent && ev.preventDefault();
    }
  }

  reFocus() {
    this.elementRef.nativeElement.focus();
  }

  @HostListener('focus', ['$event'])
  async onFocus(event?) {
    this.focused = true;
  }

  /**
   * when the element losses focus, the dropdown should close
   * and should not listen to the key-downs anymore
   */
  @HostListener('blur', ['$event'])
  onBlur(event?) {
    // this.close();
    this.focused = false;
  }

  toggle() {
    if (!this.expanded) {
      this.open();
    } else {
      this.close();
    }
  }

  close() {
    this.expanded = false;
  }

  dropdownTop: number = -1;

  async open() {
    this.expanded = true;

    /**
    * calculate if the dropdown should be displayed above or under the select-input
    */
    const position = this.elementRef.nativeElement.getBoundingClientRect();
    const screenHeight = window.innerHeight
      || document.documentElement.clientHeight
      || document.body.clientHeight;

    const spaceBottom = screenHeight - position.bottom;
    const spaceTop = position.top;

    const dropDirection = (spaceBottom < spaceTop) ? DropDirection.Top : DropDirection.Bottom;

    // Wait for the dropdown to be rendered, so the offsetHeight can be determined
    await new Promise(res => setTimeout(res, 0));

    switch (dropDirection) {
      case DropDirection.Top:
        this.dropdownTop = -1 *
          (
            this.dropdown.elementRef.nativeElement.children[0].offsetHeight
            - 1 // border
            + 0.3 // fix chrome ugly 1-pixel-render
          );
        break;
      case DropDirection.Bottom:
        this.dropdownTop = -1.1
          + this.select.nativeElement.offsetHeight;
        break;
    }
    this.cdRef.markForCheck();
  }

  get displayValue() {
    const item = this.selectedItems.shift();
    if (item) {
      return item.label || String(item.value);
    } else {
      return 'Select Value';
    }
  }

  get selectedMetaItems(): MetalistItem[] {
    return (this.dropdown && this.dropdown.metalist && this.dropdown.metalist.selectedItems) || [];
  }

  get selectedItems(): SelectOption[] {
    const items = (this.dropdown && this.dropdown.metalist && this.dropdown.metalist.selectedItems) || [];
    return items.map(metaItem => metaItem.metadata.metadata);
  }

  get showDisplayValue() {
    return this.maxSelectableItems <= 1 || this.selectedMetaItems.length === 0;
  }

  deselectItem(item: SelectOption, event?: Event) {
    const idx = this.items.toArray().findIndex(citem => item === citem);
    this.dropdown.metalist.deselect(idx);
    if (event) {
      event.stopPropagation();
    }
  }

  onDropdownChange(value: any) {
    if (this.maxSelectableItems <= 1) {
      this.close();
    }

    // propagate value change
    this.change.emit(value);

    // propagate form-change
    !!this.onChangeCallback && this.onChangeCallback(value);

    // refocus
    setTimeout(() => this.reFocus(), 0);
  }

  /**
   * Things needed for ControlValueAccessor-Interface.
   */
  private onTouchedCallback: (_: any) => void;
  private onChangeCallback: (_: any) => void;
  writeValue(value: any): void {
    this.dropdown.metalist.setValue(value);
  }
  registerOnChange(fn: any) {
    this.onChangeCallback = fn;
  }
  registerOnTouched(fn: any) {
    this.onTouchedCallback = fn;
  }
}
