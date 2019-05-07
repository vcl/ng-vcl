import { Component, Input, HostBinding, ViewChild, ElementRef, HostListener, ContentChild, forwardRef, ChangeDetectorRef, Output, EventEmitter, Optional, Inject, OnDestroy, ChangeDetectionStrategy } from '@angular/core';
import { ControlValueAccessor, NgControl } from '@angular/forms';
import { ESCAPE, UP_ARROW, DOWN_ARROW, TAB } from '@angular/cdk/keycodes';
import { Subject } from 'rxjs';
import { DropdownComponent } from '../dropdown/index';
import { FormControlInput, FORM_CONTROL_INPUT, FORM_CONTROL_HOST, FormControlHost, FORM_CONTROL_ERROR_STATE_AGENT, FormControlErrorStateAgent } from '../form-control-group/index';

let UNIQUE_ID = 0;

@Component({
  selector: 'vcl-select',
  templateUrl: 'select.component.html',
  exportAs: 'vclSelect',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{
    provide: FORM_CONTROL_INPUT,
    useExisting: forwardRef(() => SelectComponent)
  }]
})
export class SelectComponent implements OnDestroy, ControlValueAccessor, FormControlInput {
  constructor(
    private elementRef: ElementRef<HTMLElement>,
    private cdRef: ChangeDetectorRef,
    @Optional()
    public ngControl?: NgControl,
    @Optional()
    @Inject(FORM_CONTROL_HOST)
    private formControlHost?: FormControlHost,
    @Optional()
    @Inject(FORM_CONTROL_ERROR_STATE_AGENT)
    private _errorStateAgent?: FormControlErrorStateAgent,
  ) {
    // Set valueAccessor instead of providing it to avoid circular dependency of NgControl
    if (this.ngControl) {
      this.ngControl.valueAccessor = this;
    }
  }

  private _focused = false;
  private cvaDisabled = false;
  private generatedId = 'vcl_select_' + UNIQUE_ID++;
  private stateChangeEmitter = new Subject<void>();

  stateChange = this.stateChangeEmitter.asObservable();
  controlType = 'select';

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

  @HostBinding('class.vclSelect')
  classVCLSelect = true;

  @HostBinding('class.vclInputGroupEmb')
  classVCLInputGroupEmb = true;

  @HostBinding('attr.tabindex')
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

  @Input()
  errorStateAgent?: FormControlErrorStateAgent;

  @Output()
  valueChange = new EventEmitter<any | any[]>();

  get isFocused() {
    return this._focused || this.dropdown.isOpen;
  }

  @HostBinding('class.vclError')
  get hasError() {
    const errorStateAgent = this.errorStateAgent || this._errorStateAgent;
    return errorStateAgent ? errorStateAgent(this.formControlHost, this) : false;
  }

  @HostListener('focus')
  onFocus() {
    this._focused = true;
    this.stateChangeEmitter.next();
    this.openDropdown();
  }
  @HostListener('blur')
  onBlur() {
    this._focused = false;
    this.onTouched();
    this.stateChangeEmitter.next();
  }

  @HostListener('keyup', ['$event'])
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

  @HostListener('keydown', ['$event'])
  onKeyDown(event: KeyboardEvent) {
    const code = event.keyCode;
    if (code === TAB) {
      this.closeDropdown();
    }
  }

  @HostListener('keypress', ['$event'])
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
      const item = items.find(_item => this.value === _item.value);
      return item ? item.label : (this.label || '');
    } else {
      const value = Array.isArray(this.value) ? this.value : [];

      const items = this.dropdown.getItems();
      const labels = items.filter(item => value.includes(item.value)).map(item => item.label);

      return labels.length === 0 ? (this.label || '') : labels.join(', ');
    }
  }

  @HostListener('click')
  onClick() {
    if (this.dropdown.isOpen) {
      this.closeDropdown();
    } else {
      this.openDropdown();
    }
  }

  private openDropdown() {
    if (this.isDisabled || !this.dropdown) {
      this.dropdown.close();
      return;
    }

    let values: any[];
    if (this.selectionMode === 'single') {
      values = [this.value];
    } else {
      values = Array.isArray(this.value) ? this.value : [];
    }

    this.dropdown.open({
      target: this.elementRef,
      offClickExcludes: [this.input, this.button],
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
        this.valueChange.emit(this.value);
        this.onChange(this.value);
        this.onTouched();
      }
    });
  }

  private closeDropdown() {
    this.dropdown.close();
  }

  onLabelClick(event: Event): void {
    this.openDropdown();
  }

  ngOnDestroy() {
    this.stateChangeEmitter && this.stateChangeEmitter.complete();
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
