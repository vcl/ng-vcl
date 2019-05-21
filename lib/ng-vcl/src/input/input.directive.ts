import { Directive, ElementRef, HostBinding, Input, HostListener, forwardRef, Optional, Inject, OnDestroy } from '@angular/core';
import { NgControl } from '@angular/forms';
import { Subject } from 'rxjs';
import { FORM_CONTROL_INPUT, FormControlInput, FORM_CONTROL_ERROR_STATE_AGENT, FormControlErrorStateAgent, FormControlHost, FORM_CONTROL_HOST } from '../form-control-group/index';

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
    public elementRef: ElementRef<HTMLInputElement>,
    @Optional()
    public ngControl?: NgControl,
    @Optional()
    @Inject(FORM_CONTROL_HOST)
    private formControlHost?: FormControlHost,
    @Optional()
    @Inject(FORM_CONTROL_ERROR_STATE_AGENT)
    private _errorStateAgent?: FormControlErrorStateAgent,
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

  @Input()
  errorStateAgent?: FormControlErrorStateAgent;

  @HostBinding('attr.id')
  get elementId() {
    return this.id || this.uniqueId;
  }

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
    const errorStateAgent = this.errorStateAgent || this._errorStateAgent;
    return errorStateAgent ? errorStateAgent(this.formControlHost, this) : false;
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
    this.stateChangeEmitter.next();
  }

  @HostListener('blur')
  onBlur() {
    this._focused = false;
    this.stateChangeEmitter.next();
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

  getError(error: string) {
    return this.hasError && this.ngControl.getError(error);
  }

}
