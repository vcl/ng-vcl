import {
  Component,
  Directive,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
  ViewChild,
  ContentChildren,
  QueryList,
  Optional,
  forwardRef,
  ElementRef,
  HostListener,
  OnInit,
  NgZone,
  HostBinding,
  ChangeDetectorRef
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

import { DropdownItem, DropdownComponent, DropdownOptionBase } from '../dropdown/index';

enum DropDirection { Top, Bottom };

/**
 * see
 * @link http://www.w3schools.com/tags/tag_option.asp
 */
@Directive({
  selector: 'vcl-select-option'
})
export class SelectOptionComponent extends DropdownOptionBase implements OnInit {

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

export const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => SelectComponent),
  multi: true
};
@Component({
  selector: 'vcl-select',
  templateUrl: 'select.component.html',
  /**
   * OnPush cannot be used because then the this.dropdownTop - style will not
   * be applied. Maybe this is a bug of ng2?
   */
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR],
  host: {
    '[style.position]': '"relative"',
    '[style.display]': '"block"'
  }
})
export class SelectComponent implements ControlValueAccessor {

  @HostBinding() tabindex = 0;

  @ViewChild('dropdown') dropdown: DropdownComponent;
  @ViewChild('select') select;

  @Input('expanded') expanded: boolean = false;

  @Input('items') items: DropdownItem[];

  @ContentChildren(SelectOptionComponent) templateItems: QueryList<SelectOptionComponent>;

  // multi-select
  @Input() minSelectableItems: number = 1;
  @Input() maxSelectableItems: number = 1;

  // styling
  @Input() expandedIcon: string = 'fa:chevron-up';
  @Input() collapsedIcon: string = 'fa:chevron-down';

  @Output('change') changeEE = new EventEmitter<any | any[]>(); // any[] if multi-select

  focused: boolean = false;

  constructor(
    private elementRef: ElementRef,
    private zone: NgZone,
    private cdref: ChangeDetectorRef
  ) { }

  @HostListener('keydown', ['$event'])
  keydown(ev) {
    switch (ev.code) {
      case 'ArrowDown':
      case 'ArrowUp':
        this.open();
        break;
      case 'Space':
        this.toggle();
        break;
      case 'Tab':
        if (!this.expanded)
          this.elementRef.nativeElement.blur();
      case 'Escape':
        this.close();
        break;
    }
  }

  reFocus() {
    this.elementRef.nativeElement.focus();
  }

  @HostListener('focus', ['$event'])
  async onFocus(event?) {
    this.focused = true;
    await new Promise(res => setTimeout(res, 0));
    this.dropdown.listenKeys = true;
  }

  /**
   * when the element losses focus, the dropdown should close
   * and should not listen to the key-downs anymore
   */
  @HostListener('blur', ['$event'])
  onBlur(event?) {
    // this.close();
    this.focused = false;
    this.dropdown.listenKeys = false;
  }

  ngAfterContentInit() {
    // transform template-items if available
    let templateItemsAr = this.templateItems.toArray();
    if (templateItemsAr.length > 0) {
      this.items = templateItemsAr.map(i => i.createItem());
    }
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
    this.cdref.markForCheck();
  }

  get displayValue() {
    const item = this.selectedItems.shift();
    return item && item.label || 'Select Value';
  }

  get selectedItems(): DropdownItem[] {
    return this.dropdown.items.filter(item => item.selected);
  }

  get multiSelect() {
    return !(this.maxSelectableItems <= 1);
  }

  unselectItem(event: Event, item: DropdownItem) {
    event.stopPropagation();
    this.dropdown.unselectItem(item);
  }

  public selectItem(item: any) {
    this.dropdown.selectItem(item);
  }

  onDropdownChange(newValue: any[]) {
    if (this.maxSelectableItems <= 1)
      this.close();

    // propagate form-change
    !!this.onChangeCallback && this.onChangeCallback(newValue);

    // propagate value change
    this.changeEE.emit(newValue);

    // refocus
    setTimeout(() => this.reFocus(), 0);
  }

  /**
   * Things needed for ControlValueAccessor-Interface.
   */
  private onTouchedCallback: (_: any) => void;
  private onChangeCallback: (_: any) => void;
  writeValue(value: any): void {
    this.dropdown.value = value;
    this.cdref.markForCheck();
  }
  registerOnChange(fn: any) {
    this.onChangeCallback = fn;
  }
  registerOnTouched(fn: any) {
    this.onTouchedCallback = fn;
  }
}
