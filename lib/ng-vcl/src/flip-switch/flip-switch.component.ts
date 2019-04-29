import { Component, Input, Output, ChangeDetectionStrategy, EventEmitter, ViewChild, forwardRef, HostBinding, HostListener, ChangeDetectorRef, Self, Optional, Inject } from '@angular/core';
import { ControlValueAccessor, NgControl, NG_VALUE_ACCESSOR } from '@angular/forms';
import { FormControlInput, FORM_CONTROL_HOST, FormControlHost, FORM_CONTROL_ERROR_STATE_AGENT, FormControlErrorStateAgent, FORM_CONTROL_INPUT } from '../form-control-group';
import { Subject } from 'rxjs';

let UNIQUE_ID = 0;

@Component({
  selector: 'vcl-flip-switch',
  templateUrl: 'flip-switch.component.html',
  exportAs: 'vclFlipSwitch',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{
    provide: FORM_CONTROL_INPUT,
    useExisting: forwardRef(() => FlipSwitchComponent)
  }],
  host: {
    '[class.vclFlipSwitch]': 'true',
    '[class.vclFlipSwitchPressed]': 'value',
    '[attr.role]': '"button"',
    '[attr.aria-pressed]': 'value',
    '[attr.touch-action]': '"pan-y"'
  }
})
export class FlipSwitchComponent implements ControlValueAccessor, FormControlInput {

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

  private uniqueId = 'vcl_flipswitch_' + UNIQUE_ID++;

  private _disabled = false;
  private _focused = false;

  private stateChangeEmitter = new Subject<void>();

  get stateChange() {
    return this.stateChangeEmitter.asObservable();
  }

  controlType = 'flip-switch';

  @HostBinding('attr.id')
  get elementId() {
    return this.id || this.uniqueId;
  }

  @Input()
  id?: string;

  @HostBinding()
  tabindex = 0;

  @Input()
  onLabel = 'On';

  @Input()
  offLabel = 'Off';

  @Input()
  value = false;

  @Input()
  disabled = false;

  @Input()
  errorStateAgent?: FormControlErrorStateAgent;

  @HostBinding('class.vclDisabled')
  get isDisabled() {
    return this.disabled || this._disabled;
  }

  @HostBinding('class.vclError')
  get hasError() {
    const errorStateAgent = this.errorStateAgent || this._errorStateAgent;
    return errorStateAgent ? errorStateAgent(this.formControlHost, this) : false;
  }

  get isFocused() {
    return this._focused;
  }

  @Output()
  valueChange = new EventEmitter<boolean>();

  private onTouchedCallback: () => void = () => {};
  private onChangeCallback: (_: any) => void =  () => {};

  @HostListener('click')
  onClick() {
    this.toggle();
    this.onTouchedCallback();
  }

  @HostListener('focus')
  onFocus() {
    this._focused = true;
  }

  @HostListener('blur')
  onBlur() {
    this._focused = false;
    this.onTouchedCallback();
  }


  @HostListener('keydown', ['$event'])
  keydown(ev) {
    switch (ev.code) {
      case 'Space':
        ev.preventDefault();
        this.toggle();
        break;
      case 'ArrowLeft':
        ev.preventDefault();
        if (!this.value) {
          this.toggle();
        }
        break;
      case 'ArrowRight':
        ev.preventDefault();
        if (this.value) {
          this.toggle();
        }
        break;
    }
  }

  toggle() {
    if (this.disabled) {
      return;
    }

    this.value = !this.value;
    this.valueChange.emit(this.value);
    this.onChangeCallback && this.onChangeCallback(this.value);
  }

  onLabelClick(event: Event): void {
    this.toggle();
  }

  writeValue(value: boolean): void {
    this.value = value;
    this.cdRef.markForCheck();
  }
  registerOnChange(fn: any) {
    this.onChangeCallback = fn;
  }
  registerOnTouched(fn: any) {
    this.onTouchedCallback = fn;
  }
  setDisabledState(isDisabled: boolean) {
    this._disabled = isDisabled;
    this.cdRef.markForCheck();
  }
}
