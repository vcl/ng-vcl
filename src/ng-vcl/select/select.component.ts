import { Component, forwardRef, ChangeDetectionStrategy, HostBinding, ViewChild, ContentChildren, ElementRef, Input, QueryList, EventEmitter, Output, HostListener, ChangeDetectorRef } from "@angular/core";
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { MetalistItem, SelectionMode } from '../metalist/index';
import { DropdownComponent, DropdownOption } from '../dropdown/index';
import { SelectOption } from './select-option.component';
import 'rxjs/add/operator/startWith';

enum DropDirection { Top, Bottom }

export const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => SelectComponent),
  multi: true
};
@Component({
  selector: 'vcl-select',
  templateUrl: 'select.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
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

  // If `Single`, a single item can be selected
  // If `Multiple` multiple items can be selected
  @Input()
  selectionMode: SelectionMode = SelectionMode.Single;

  // String alias for selectionMode
  @Input()
  set mode(value: 'multiple' | 'single') {
    this.selectionMode = value === 'multiple' ? SelectionMode.Multiple : SelectionMode.Single;
  }
  get mode(): 'multiple' | 'single' {
    return this.selectionMode === SelectionMode.Multiple ? 'multiple' : 'single';
  }

  @HostBinding('attr.tabindex')
  @Input()
  tabindex = 0;

  @Input()
  expanded: boolean = false;

  @Input()
  disabled: boolean = false;

  @Input()
  listenKeys: boolean = true;

  // multi-select
  @Input()
  maxSelectableItems?: number;

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

  @HostListener('blur', ['$event'])
  onBlur(event?) {
    // When the element loses focus, the dropdown should close
    // Only close when the active element is not a child element of the select component
    setTimeout(() => { // Wait for document.activeElement update
      const target = typeof document !== undefined && document.activeElement;
      const nativeElement = this.elementRef && this.elementRef.nativeElement;
      if (target && nativeElement && !this.elementRef.nativeElement.contains(target)) {
        this.close();
        this.cdRef.markForCheck();
      }
    }, 1);
    this.focused = false;
    this.onTouched();
  }

  toggle() {
    if (this.disabled) {
      return;
    }
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
    return items.map(metaItem => <SelectOption> metaItem.metadata.metadata);
  }

  get showDisplayValue() {
    return this.selectionMode === SelectionMode.Single || this.selectedMetaItems.length === 0;
  }

  deselectItem(item: SelectOption, event?: any) {
    const idx = this.items.toArray().findIndex(citem => item === citem);
    this.dropdown.metalist.deselect(idx);
  }

  ngAfterViewInit() {
    this.items.changes.startWith(null).subscribe(() => {
      this.cdRef.markForCheck();
    });
  }

  onDropdownChange(value: any) {
    if (this.selectionMode === SelectionMode.Single) {
      this.close();
    }

    // propagate value change
    this.change.emit(value);

    // propagate form-change
    this.onChange(value);

    // refocus
    setTimeout(() => this.reFocus(), 0);
  }

  setValue(value: any) {
    this.dropdown.setValue(value);
  }

  /**
   * Things needed for ControlValueAccessor-Interface.
   */
  private onChange: (_: any) => void = () => {};
  private onTouched: () => any = () => {};
  writeValue(value: any): void {
    this.setValue(value);
  }
  registerOnChange(fn: any) {
    this.onChange = fn;
  }
  registerOnTouched(fn: any) {
    this.onTouched = fn;
  }
  setDisabledState(isDisabled: boolean) {
    this.disabled = isDisabled;
    this.cdRef.markForCheck();
  }
}
