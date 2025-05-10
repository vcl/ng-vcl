import {
  Directive,
  ElementRef,
  HostBinding,
  Input,
  HostListener,
  forwardRef,
  OnDestroy,
  Injector,
} from '@angular/core';
import { Subject } from 'rxjs';
import {
  FORM_CONTROL_GROUP_INPUT_STATE,
  FormControlGroupInputState,
} from '../form-control-group/index';
import { NgControl } from '@angular/forms';

export let UNIQUE_ID = 0;

@Directive({
  selector: 'input[vclInput]',
  exportAs: 'vclInput',
  providers: [
    {
      provide: FORM_CONTROL_GROUP_INPUT_STATE,
      useExisting: forwardRef(() => InputDirective),
    },
  ],
})
export class InputDirective
  implements OnDestroy, FormControlGroupInputState<string>
{
  constructor(
    public elementRef: ElementRef<HTMLInputElement>,
    private injector: Injector
  ) {}

  private uniqueId = 'vcl_input_' + UNIQUE_ID++;

  private _disabled = false;
  private _focused = false;

  private stateChangedEmitter = new Subject<void>();

  stateChanged = this.stateChangedEmitter.asObservable();

  controlType = 'input';

  @Input()
  id?: string;

  @HostBinding('attr.id')
  get elementId() {
    return this.id || this.uniqueId;
  }

  get ngControl() {
    return this.injector.get(NgControl, null);
  }

  get isFocused() {
    return this._focused;
  }

  @Input()
  disabled = false;

  @Input()
  autoselect = false;

  @HostBinding('class.input')
  hostClasses = true;

  @HostBinding('class.error')
  hasError = false;

  @HostBinding('class.disabled')
  get isDisabled() {
    return this.disabled ?? this._disabled ?? false;
  }

  @HostBinding('attr.disabled')
  get attrDisabled() {
    return this.isDisabled ? true : null;
  }

  ngOnInit() {
    const ngControl = this.ngControl;
    if (ngControl && ngControl.valueChanges) {
      this.ngControl.valueChanges.subscribe(this.stateChangedEmitter);
    }
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
    this.stateChangedEmitter.next();
  }

  @HostListener('blur')
  onBlur() {
    this._focused = false;
    this.ngControl?.control.markAsTouched();
    this.stateChangedEmitter.next();
  }

  onLabelClick(event: Event): void {
    this.focus();
  }

  setErrorState(error: boolean): void {
    const oldState = this.hasError;
    this.hasError = error;
    if (oldState !== error) {
      this.stateChangedEmitter.next();
    }
  }

  get value() {
    return this.elementRef.nativeElement.value ?? '';
  }

  set value(value: string) {
    this.elementRef.nativeElement.value = value;
    this.stateChangedEmitter.next();
  }

  ngOnDestroy() {
    this.stateChangedEmitter && this.stateChangedEmitter.complete();
  }

  @HostListener('input')
  @HostListener('change')
  @HostListener('ngModelChange')
  onInput() {
    this.stateChangedEmitter.next();
  }

  setDisabledState(isDisabled: boolean) {
    this._disabled = isDisabled;
  }
}
