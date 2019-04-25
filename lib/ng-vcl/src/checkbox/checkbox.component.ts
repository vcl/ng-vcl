import { Component,
  Input, Output, HostListener,
  EventEmitter,
  ChangeDetectionStrategy, ChangeDetectorRef, forwardRef, HostBinding, Optional, Inject, OnDestroy, Self } from '@angular/core';
import { ControlValueAccessor, NgControl, NgForm, FormGroupDirective } from '@angular/forms';
import { FormControlInput, FORM_CONTROL_INPUT, FORM_CONTROL_ERROR_MATCHER, FormControlErrorMatcher } from '../form-control-group';
import { Subject } from 'rxjs';

let UNIQUE_ID = 0;

@Component({
  selector: 'vcl-checkbox',
  templateUrl: 'checkbox.component.html',
  providers: [
    {
      provide: FORM_CONTROL_INPUT,
      useExisting: forwardRef(() => CheckboxComponent)
    },
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  exportAs: 'vclCheckbox',
})
export class CheckboxComponent implements OnDestroy, ControlValueAccessor, FormControlInput<boolean> {

  constructor(
    private cdRef: ChangeDetectorRef,
    @Self()
    @Optional()
    public ngControl?: NgControl,
    @Optional()
    private ngForm?: NgForm,
    @Optional()
    private formGroup?: FormGroupDirective,
    @Optional()
    @Inject(FORM_CONTROL_ERROR_MATCHER)
    private errorMatcher?: FormControlErrorMatcher,
  ) {
    // Set valueAccessor instead of providing it to avoid circular dependency of NgControl
    if (this.ngControl) {
      this.ngControl.valueAccessor = this;
    }
  }

  private stateChangeEmitter = new Subject<void>();

  stateChange = this.stateChangeEmitter.asObservable();

  controlType = 'checkbox';

  private _focused = false;
  private generatedId = 'vcl_checkbox_' + UNIQUE_ID++;

  @Input()
  id?: string;

  @HostBinding('attr.id')
  get elementId() {
    return this.id || this.generatedId;
  }

  get isFocused() {
    return this._focused;
  }

  @HostBinding('class.vclCheckbox')
  classVCLCheckbox = true;

  @HostBinding('attr.role')
  attrRole = 'checkbox';

  @HostBinding('attr.aria-checked')
  get attrAriaChecked() {
    return this.checked;
  }

  @HostBinding('attr.aria-disabled')
  get attrAriaDisabled() {
    return this.isDisabled;
  }

  @HostBinding('class.vclDisabled')
  get isDisabled() {
    return this.formDisabled || this.disabled;
  }

  @HostBinding('class.vclError')
  get hasError() {
    return this.errorMatcher ? this.errorMatcher(this, this.ngForm || this.formGroup) : false;
  }

  @HostBinding('attr.tabindex')
  @Input()
  tabindex = 0;

  @Input()
  disabled = false;

  @Input()
  checked = false;

  /**
  Action fired when the `checked` state changes due to user interaction.
  */
  @Output()
  checkedChange = new EventEmitter<boolean>();

  // Store form disabled state in an extra property to remember the old state after the radio group has been disabled
  private formDisabled = false;

  get value() {
    return this.checked;
  }

  onLabelClick(event: Event): void {
    this.toggleValue();
  }

  @HostListener('keyup', ['$event'])
  onKeyup(e) {
    switch (e.code) {
      case 'Space':
        e.preventDefault();
        this.toggleValue();
        break;
    }
  }

  @HostListener('click', ['$event'])
  onClick(e) {
    e.preventDefault();
    return this.toggleValue();
  }

  @HostListener('blur', ['$event'])
  onBlur() {
    this._focused = false;
    this.onTouched();
    this.stateChangeEmitter.next();
  }

  @HostListener('focus', ['$event'])
  onFocus() {
    this._focused = true;
    this.stateChangeEmitter.next();
  }

  toggleValue() {
    if (this.isDisabled) {
      return;
    }
    this.checked = !this.checked;
    this.checkedChange.emit(this.checked);
    this.cdRef.markForCheck();
    this.onTouched();
    this.onChange(this.checked);
    this.stateChangeEmitter.next();
  }

  ngOnDestroy() {
    this.stateChangeEmitter && this.stateChangeEmitter.complete();
  }

  /**
   * things needed for ControlValueAccessor-Interface
   */
  private onChange: (_: any) => void = () => {};
  private onTouched: () => any = () => {};

  writeValue(value: any): void {
    this.checked = !!value;
    this.cdRef.markForCheck();
  }
  registerOnChange(fn: any) {
    this.onChange = fn;
  }
  registerOnTouched(fn: any) {
    this.onTouched = fn;
  }
  setDisabledState(disabled: boolean) {
    this.formDisabled = disabled;
    this.cdRef.markForCheck();
  }
}
