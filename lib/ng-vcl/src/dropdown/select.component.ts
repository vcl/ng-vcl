import { Component, Input, HostBinding, ViewChild, ElementRef, HostListener, ContentChild, forwardRef, ChangeDetectorRef } from '@angular/core';
import { DropdownComponent } from './dropdown.component';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { ESCAPE, UP_ARROW, DOWN_ARROW, TAB } from '@angular/cdk/keycodes';
import { DropdownItem } from './types';

@Component({
  selector: 'vcl-select',
  templateUrl: 'select.component.html',
  exportAs: 'vclSelect',
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => SelectComponent),
    multi: true
  }]
})
export class SelectComponent implements ControlValueAccessor {
  constructor(
    private elementRef: ElementRef<HTMLElement>,
    private cdRef: ChangeDetectorRef
  ) { }

  private cvaDisabled = false;

  // @Input()
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
  mode: 'single' | 'multiple' = 'single';

  @Input()
  value: any | any[];

  @Input()
  prepIcon?: string;

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

    if (this.mode === 'single') {
      const items = this.dropdown.getItems();
      const item = items.find(_item => _item.value === this.value);
      return item ? item.label : '';
    } else {
      const value = Array.isArray(this.value) ? this.value : [];

      const items = this.dropdown.getItems();
      const labels = items.filter(item => value.includes(item.value)).map(item => item.label);
      return labels.join(', ');
    }

  }

  private openDropdown() {
    if (this.isDisabled || !this.dropdown) {
      this.dropdown.close();
      return;
    }

    let values;
    if (this.mode === 'single') {
      values = [this.value];
    } else {
      values = Array.isArray(this.value) ? this.value : [];
    }


    this.dropdown.open({
      target: this.elementRef,
      offClickExclude: [this.button],
      values
    }).subscribe(action => {
      if (action.type === 'select') {
        if (this.mode === 'single') {
          this.value = action.item.value;
          this.closeDropdown();
        } else {
          this.value = action.selectedItems.map(item => item.value);
        }
      }

    });
  }

  private closeDropdown() {
    this.dropdown.close();
  }

  writeValue(value: any): void {
    this.value = value;
    this.cdRef.markForCheck();
  }

  registerOnChange(fn: any): void {
    throw new Error('Method not implemented.');
  }

  registerOnTouched(fn: any): void {
    throw new Error('Method not implemented.');
  }

  setDisabledState?(isDisabled: boolean): void {
    this.cvaDisabled = isDisabled;
  }

}
