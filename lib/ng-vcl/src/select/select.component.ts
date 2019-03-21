import { Component, forwardRef, HostBinding, ViewChild, ContentChildren, ElementRef, Input, QueryList, EventEmitter, Output, HostListener, ChangeDetectorRef, AfterViewInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { MetalistItemComponent } from '../metalist/index';
import { DropdownComponent } from '../dropdown/index';
import { SelectOptionDirective } from './select-option.component';

export enum DropDirection { Top, Bottom }

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
export class SelectComponent implements ControlValueAccessor, AfterViewInit {
  private static readonly Tag: string = 'SelectComponent';

  @Input()
  debug = false;

  @ViewChild('dropdown')
  dropdown: DropdownComponent;

  @ContentChildren(SelectOptionDirective)
  items: QueryList<SelectOptionDirective>;

  @ViewChild('select')
  select: ElementRef;

  // If `Single`, a single item can be selected
  // If `Multiple` multiple items can be selected
  @Input()
  mode: 'multiple' | 'single' = 'single';

  @Input()
  placeholder = 'Select value';

  @HostBinding('attr.tabindex')
  @Input()
  tabindex = 0;

  @Input()
  expanded = false;

  @Input()
  zIndex = 999999;

  @Input()
  disabled = false;

  @Input()
  listenKeys = true;

  // multi-select
  @Input()
  maxSelectableItems?: number;

  // styling
  @Input()
  expandedIcon = 'fas:chevron-up';

  @Input()
  collapsedIcon = 'fas:chevron-down';

  @Output()
  change = new EventEmitter<any>();

  focused = false;

  @Input()
  dropDirection: DropDirection;

  @Input()
  value: any | any[];

  dropdownTop = -1;

  displayValue?: string;
  selectedItems: { metaItem: MetalistItemComponent, label: string }[] = [];

  constructor(
    private elementRef: ElementRef,
    private cdRef: ChangeDetectorRef
  ) { }

  public ngAfterViewInit(): void {
    const tag = `${SelectComponent.Tag}.ngAfterViewInit()`;
    const debug: boolean = this.debug || false;
    if (debug) { console.log(tag); }
    this.onItemsChange();
  }

  @HostListener('keydown', ['$event'])
  keydown(ev) {
    if (this.listenKeys) {
      let prevent = true;
      switch (ev.code) {
        case 'ArrowDown':
          if (this.expanded) {
            this.dropdown.onMetalistKeydown(ev);
            // this.dropdown.metalist.markNext();
          } else {
            this.open();
          }
          break;
        case 'ArrowUp':
          if (this.expanded) {
            this.dropdown.onMetalistKeydown(ev);
            // this.dropdown.metalist.markPrev();
          } else {
            this.open();
          }
          break;
        case 'Enter':
          if (this.expanded) {
            this.dropdown.onMetalistKeydown(ev);
            // this.dropdown.metalist.selectMarked();
            // this.cdRef.detectChanges();
          } else {
            this.open();
          }
          break;
        case 'Space':
          this.toggle();
          break;
        case 'Tab':
          this.close();
          break;
        case 'Escape':
          this.close();
          break;
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

  get showDisplayValue() {
    return this.mode === 'single' || this.selectedItems.length === 0;
  }

  async open() {
    const tag = `${SelectComponent.Tag}.open()`;
    const debug: boolean = this.debug || false;

    this.expanded = true;

    /**
    * calculate if the dropdown should be displayed above or under the select-input
    */
    const position = this.elementRef.nativeElement.getBoundingClientRect();
    if (this.debug) { console.log(tag, 'position:', position); }
    const clientHeight =  document.documentElement ? document.documentElement.clientHeight : undefined;
    const screenHeight = window.innerHeight
      || clientHeight
      || document.body.clientHeight;
    if (this.debug) { console.log(tag, 'screenHeight:', screenHeight); }

    const spaceBottom = screenHeight - position.bottom;
    if (this.debug) { console.log(tag, 'spaceBottom:', spaceBottom); }

    const spaceTop = position.top;
    if (this.debug) { console.log(tag, 'spaceTop:', spaceTop); }

    const dropDirection = (this.dropDirection === DropDirection.Top ||
      this.dropDirection === DropDirection.Bottom) ? this.dropDirection :
      (spaceBottom < spaceTop) ? DropDirection.Top : DropDirection.Bottom;
    if (this.debug) { console.log(tag, 'dropDirection:', DropDirection[dropDirection]); }

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

  syncDisplayValue() {
    const items = ((this.dropdown && this.dropdown.metalist && this.dropdown.metalist.selectedItems) || []);
    this.selectedItems = items.map(_item => {
      const label = (_item.metadata && _item.metadata.metadata && _item.metadata.metadata.label) || String(_item.value);
      return {
        label,
        metaItem: _item
      };
    });

    const item = this.selectedItems[0];
    if (item) {
      this.displayValue = item.label;
    } else {
      this.displayValue = this.placeholder;
    }
  }

  deselectItem(item: MetalistItemComponent) {
    this.dropdown.metalist.deselect(item);
  }

  onItemsChange() {
    this.syncDisplayValue();
    this.cdRef.detectChanges();
    this.cdRef.markForCheck();
  }

  onDropdownChange(value: any) {
    if (this.mode === 'single') {
      this.close();
    }

    this.syncDisplayValue();

    // propagate value change
    this.change.emit(value);

    // propagate form-change
    this.onChange(value);

    // refocus
    setTimeout(() => this.reFocus(), 0);
  }

  /**
   * Things needed for ControlValueAccessor-Interface.
   */
  private onChange: (_: any) => void = () => { };
  private onTouched: () => any = () => { };
  writeValue(value: any): void {
    this.value = value;
    this.dropdown.writeValue(value);
    this.syncDisplayValue();
    this.cdRef.markForCheck();
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
