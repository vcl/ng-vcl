import { Directive, ElementRef, HostBinding, Input, HostListener, forwardRef, Optional, Inject, OnDestroy } from '@angular/core';
import { FORM_CONTROL_INPUT, FormControlInput, FORM_CONTROL_ERROR_MATCHER, FormControlErrorMatcher } from '../form-control-group';
import { FormControl, NgControl, NgForm, FormGroupDirective } from '@angular/forms';
import { Observable, Subject } from 'rxjs';

export let UNIQUE_ID = 0;

export interface VCLInput {
  readonly isDisabled: boolean;
  setDisabled(disabled: boolean): void;
}

@Directive({
  selector: 'input[vclInput]',
  exportAs: 'vclInput',
  providers: [
    {
      provide: FORM_CONTROL_INPUT,
      useExisting: forwardRef(() => InputDirective)
    },
  ],
})
export class InputDirective implements OnDestroy, FormControlInput<string>, VCLInput {

  constructor(
    protected elementRef: ElementRef<HTMLInputElement>,
    @Optional()
    public ngControl?: NgControl,
    @Optional()
    private ngForm?: NgForm,
    @Optional()
    private formGroup?: FormGroupDirective,
    @Optional()
    @Inject(FORM_CONTROL_ERROR_MATCHER)
    private errorMatcher?: FormControlErrorMatcher,
  ) { }

  private uniqueId = 'vcl_input_' + UNIQUE_ID++;

  private _disabled = false;
  private _focused = false;

  private stateChangeEmitter = new Subject<void>();

  get stateChange() {
    return this.stateChangeEmitter.asObservable();
  }

  controlType = 'input';

  @Input()
  id?: string;

  @HostBinding('attr.id')
  get elementId() {
    return this.id || this.uniqueId;
  }

  @HostBinding('attr.id')
  get isFocused() {
    return this._focused;
  }

  @Input()
  disabled = false;

  @Input()
  autoselect = false;

  @HostBinding('class.vclInput')
  classVclInput = true;

  @HostBinding('class.vclDisabled')
  get isDisabled() {
    return this.disabled || this._disabled;
  }

  @HostBinding('class.vclError')
  get hasError() {
    return this.errorMatcher ? this.errorMatcher(this, this.ngForm || this.formGroup) : false;
  }

  @HostBinding('attr.disabled')
  get attrDisabled() {
    return this.disabled ? true : null;
  }

  @HostListener('focus')
  onFocus() {
    this._focused = true;
    // Autoselect
    if (this.autoselect) {
      this.elementRef.nativeElement.select();
    }
  }

  @HostListener('blur')
  onBlur() {
    this._focused = false;
  }

  setDisabled(disabled: boolean) {
    this._disabled = disabled;
  }

  onLabelClick(event: Event): void {
    this.elementRef.nativeElement.focus();
  }

  get value() {
    return this.elementRef.nativeElement.value;
  }

  ngOnDestroy() {
    this.stateChangeEmitter && this.stateChangeEmitter.complete();
  }

}
