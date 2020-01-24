import { Directive, ElementRef, HostBinding, Input, HostListener, forwardRef, Optional, Inject, OnDestroy, InjectionToken } from '@angular/core';
import { NgControl } from '@angular/forms';
import { Subject } from 'rxjs';
import { FORM_CONTROL_INPUT, FormControlInput, FORM_CONTROL_ERROR_STATE_AGENT, FormControlErrorStateAgent, FormControlHost, FORM_CONTROL_HOST } from '../form-control-group/index';
import { FORM_CONTROL_MATERIAL_INPUT, FormControlMaterialInput } from '../material-design-inputs/index';

export interface InputHost {
  readonly isDisabled: boolean;
  notifyInputFocus(btn: InputDirective): void;
  notifyInputBlur(btn: InputDirective): void;
}
export const INPUT_HOST_TOKEN = new InjectionToken<InputHost>('vcl_input_host');

export let UNIQUE_ID = 0;

@Directive({
  selector: 'input[vclInput]',
  exportAs: 'vclInput',
  providers: [
    {
      provide: FORM_CONTROL_INPUT,
      useExisting: forwardRef(() => InputDirective)
    },
    {
      provide: FORM_CONTROL_MATERIAL_INPUT,
      useExisting: forwardRef(() => InputDirective)
    },
  ],
})
export class InputDirective implements OnDestroy, FormControlInput<string>, FormControlMaterialInput {
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
    @Optional()
    @Inject(INPUT_HOST_TOKEN)
    private inputHost?: InputHost,
  ) { 
    if (this.formControlHost) {
      this.formControlHost.registerInput(this);
    }
  }

  private uniqueId = 'vcl_input_' + UNIQUE_ID++;

  private _disabled = false;
  private _focused = false;

  private stateChangedEmitter = new Subject<void>();

  stateChanged = this.stateChangedEmitter.asObservable();

  controlType = 'input';

  materialModifierClass: string = undefined;

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

  get isLabelFloating() {
    return this.isFocused || this.value.length > 0;
  }

  @Input()
  disabled = false;

  @Input()
  autoselect = false;

  @HostBinding('class.input')
  classVclInput = true;

  @HostBinding('class.disabled')
  get isDisabled() {
    return this.disabled || this._disabled || (this.inputHost && this.inputHost.isDisabled);
  }

  @HostBinding('class.error')
  get hasError() {
    const errorStateAgent = this.errorStateAgent || this._errorStateAgent;
    return errorStateAgent ? errorStateAgent(this.formControlHost, this) : false;
  }

  @HostBinding('attr.disabled')
  get attrDisabled() {
    return this.isDisabled ? true : null;
  }

  focus() {
    this.elementRef.nativeElement.focus();
  }

  @HostListener('focus')
  onFocus() {
    this._focused = true;
    // Autoselect
    if (this.autoselect) {
      this.elementRef.nativeElement.select();
    }
    this.inputHost && this.inputHost.notifyInputFocus(this);
    this.stateChangedEmitter.next();
  }

  @HostListener('blur')
  onBlur() {
    this._focused = false;
    this.inputHost && this.inputHost.notifyInputBlur(this);
    this.stateChangedEmitter.next();
  }

  onLabelClick(event: Event): void {
    this.elementRef.nativeElement.focus();
  }

  get value() {
    return this.elementRef.nativeElement.value || '';
  }

  set value(value: string) {
    this.elementRef.nativeElement.value = value;
    this.stateChangedEmitter.next();
  }

  ngOnDestroy() {
    this.stateChangedEmitter && this.stateChangedEmitter.complete();
  }

  getError(error: string) {
    return this.hasError && this.ngControl.getError(error);
  }

  @HostListener('input')
  @HostListener('change')
  @HostListener('ngModelChange')
  onInput() {
    this.stateChangedEmitter.next();
  }
}
