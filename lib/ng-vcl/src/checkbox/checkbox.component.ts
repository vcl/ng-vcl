import { Component,
  Input, Output, HostListener,
  EventEmitter,
  ChangeDetectionStrategy, ChangeDetectorRef, forwardRef, HostBinding, Optional, Inject, OnDestroy, Self } from '@angular/core';
import { ControlValueAccessor, NgControl, NgForm, FormGroupDirective } from '@angular/forms';
import { FormControlInput, FORM_CONTROL_INPUT, FORM_CONTROL_HOST, FormControlHost, FORM_CONTROL_ERROR_STATE_AGENT, FormControlErrorStateAgent } from '../form-control-group/index';
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

  private stateChangedEmitter = new Subject<void>();

  stateChanged = this.stateChangedEmitter.asObservable();

  controlType = 'checkbox';

  private _focused = false;
  private generatedId = 'vcl_checkbox_' + UNIQUE_ID++;

  @Input()
  id?: string;

  @Input()
  errorStateAgent?: FormControlErrorStateAgent;

  @HostBinding('attr.id')
  get elementId() {
    return this.id || this.generatedId;
  }

  get isFocused() {
    return this._focused;
  }

  @HostBinding('class.vclCheckbox')
  _hostClasses = true;

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
    const errorStateAgent = this.errorStateAgent || this._errorStateAgent;
    return errorStateAgent ? errorStateAgent(this.formControlHost, this) : false;
  }

  @HostBinding('attr.tabindex')
  @Input()
  tabindex = 0;

  _disabled = false;

  @Input()
  set disabled(disabled: boolean) {
    this._disabled = disabled;
    this.stateChangedEmitter.next();
  }
  get disabled() {
    return this._disabled;
  }

  @Input()
  checked = false;

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
  onClick(e: Event) {
    this.toggleValue();
    e.stopPropagation();
  }

  @HostListener('blur')
  onBlur() {
    this._focused = false;
    this.onTouched();
    this.stateChangedEmitter.next();
  }

  @HostListener('focus')
  onFocus() {
    this._focused = true;
    this.stateChangedEmitter.next();
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
    this.stateChangedEmitter.next();
  }

  ngOnDestroy() {
    this.stateChangedEmitter && this.stateChangedEmitter.complete();
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
