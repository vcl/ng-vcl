import { Component, Input, HostBinding, ViewChild, ElementRef, HostListener, ContentChild, forwardRef, ChangeDetectorRef, Output, EventEmitter } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { ESCAPE, UP_ARROW, DOWN_ARROW, TAB } from '@angular/cdk/keycodes';
import { DropdownComponent } from '../dropdown';
import { FormControlInput, FORM_CONTROL_INPUT } from '../form-control-group';

let UNIQUE_ID = 0;

@Component({
  selector: 'vcl-select',
  templateUrl: 'select.component.html',
  exportAs: 'vclSelect',
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => SelectComponent),
    multi: true
  }, {
    provide: FORM_CONTROL_INPUT,
    useExisting: forwardRef(() => SelectComponent)
  }]
})
export class SelectComponent implements ControlValueAccessor, FormControlInput {

  constructor(
    private elementRef: ElementRef<HTMLElement>,
    private cdRef: ChangeDetectorRef
  ) { }

  private cvaDisabled = false;
  private generatedId = 'vcl_select_' + UNIQUE_ID++;

  @Input()
  id?: string;

  @HostBinding('attr.id')
  get elementId() {
    return this.id || this.generatedId;
  }

  @ContentChild(DropdownComponent)
  dropdown?: DropdownComponent;

  @ViewChild('input', { read: ElementRef })
  input: ElementRef<HTMLInputElement>;

  @ViewChild('btn', { read: ElementRef })
  button: ElementRef<HTMLInputElement>;

  @HostBinding('attr.role')
  attrRole = 'listbox';

  @HostBinding('attr.tabindex')
  attrTabindex = -1;

  @HostBinding('class.vclSelect')
  classVCLSelect = true;

  @HostBinding('class.vclInputGroupEmb')
  classVCLInputGroupEmb = true;

  @Input()
  tabindex = 0;

  @Input()
  disabled = false;

  @Input()
  label?: string;

  @Input()
  selectionMode: 'single' | 'multiple' = 'single';

  @Input()
  value: any | any[];

  @Output()
  selectionChange = new EventEmitter();

  @Input()
  prepIcon?: string;

  @HostListener('blur')
  onBlur() {
    this.onTouched();
  }

  onKeyUp(event: KeyboardEvent) {
    const code = event.keyCode;
    if (code === ESCAPE) {
      this.closeDropdown();
      this.elementRef.nativeElement.blur();
    } else if (code === UP_ARROW) {
      this.dropdown && this.dropdown.highlightPrev();
      event.preventDefault();
      return false;
    } else if (code === DOWN_ARROW) {
      if (this.dropdown.isOpen) {
        this.dropdown && this.dropdown.highlightNext();
      } else {
        this.openDropdown();
      }
      event.preventDefault();
      return false;
    }
  }

  onKeyDown(event: KeyboardEvent) {
    const code = event.keyCode;
    if (code === TAB) {
      this.closeDropdown();
    }
  }

  onKeyPress(event: KeyboardEvent) {
    const code = event.code || event.key;
    if (this.dropdown && code === 'Enter') {
      event.preventDefault();
      this.dropdown.selectItem(this.dropdown.getHighlightedItem());
    }
  }

  get isDisabled() {
    return this.disabled || this.cvaDisabled;
  }

  get inputValue() {
    if (!this.dropdown) {
      return '';
    }

    if (this.selectionMode === 'single') {
      const items = this.dropdown.getItems();
      const item = items.find(_item => _item.value === this.value);
      return item ? item.label : (this.label || '');
    } else {
      const value = Array.isArray(this.value) ? this.value : [];

      const items = this.dropdown.getItems();
      const labels = items.filter(item => value.includes(item.value)).map(item => item.label);

      return labels.length === 0 ? (this.label || '') : labels.join(', ');
    }

  }

  private openDropdown() {
    if (this.isDisabled || !this.dropdown) {
      this.dropdown.close();
      return;
    }

    let values;
    if (this.selectionMode === 'single') {
      values = [this.value];
    } else {
      values = Array.isArray(this.value) ? this.value : [];
    }


    this.dropdown.open({
      target: this.elementRef,
      offClickExcludes: [this.button],
      selectionMode: this.selectionMode,
      value: values
    }).subscribe(action => {
      if (action.type === 'select') {
        if (this.selectionMode === 'single') {
          this.value = action.item.value;
          this.closeDropdown();
        } else {
          this.value = action.selectedItems.map(item => item.value);
        }
        this.selectionChange.emit(this.value);
        this.onChange(this.value);
        this.onTouched();
      }

    });
  }

  private closeDropdown() {
    this.dropdown.close();
  }

  notifyFormControlLabelClick(event: Event): void {
    this.openDropdown();
  }

  private onChange: (_: any) => void = () => {};
  private onTouched: () => any = () => {};

  writeValue(value: any): void {
    this.value = value;
    this.cdRef.markForCheck();
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.cvaDisabled = isDisabled;
  }

}
