import { Component, Input, forwardRef, HostBinding, Optional, Self, Inject, NgModule } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, NgControl, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FormControlInput, FORM_CONTROL_HOST, FormControlHost, FORM_CONTROL_ERROR_STATE_AGENT, FormControlErrorStateAgent, VCLIcogramModule, VCLButtonModule } from '@vcl/ng-vcl';
import { Subject } from 'rxjs';
import { CommonModule } from '@angular/common';

let uniqueID = 0;

@Component({
  selector: 'demo-counter',
  styles: [`
    .vclText {
      font-size: 2.5em;
      user-select: none;
      padding-left: 0.2em;
      padding-right: 0.2em;
    }
  `],
  template: `
    <button vcl-square-button vclPrepend type="button" (click)="decrement()" (keydown.enter)="decrement()" (focus)="onFocus()" (focus)="onBlur(false)">
      <vcl-icon icon="fas:minus"></vcl-icon>
    </button>
    <div class="vclText">{{value}}</div>
    <button vcl-square-button vclAppend type="button" (click)="increment()" (keydown.enter)="increment()" (focus)="onFocus()" (focus)="onBlur(true)">
      <vcl-icon icon="fas:plus"></vcl-icon>
    </button>
  `
})
export class CounterComponent implements ControlValueAccessor, FormControlInput {

  constructor(
    @Optional() @Self()
    public ngControl?: NgControl,
    @Optional() @Inject(FORM_CONTROL_HOST)
    private formControlHost?: FormControlHost,
    @Optional() @Inject(FORM_CONTROL_ERROR_STATE_AGENT)
    private _errorStateAgent?: FormControlErrorStateAgent,
  ) {
    // Set valueAccessor instead of providing it to avoid circular dependency of NgControl
    if (this.ngControl) {
      this.ngControl.valueAccessor = this;
    }
  }

  @HostBinding('class.icogram')
  _hostClasses = true;

  private _stateChangedEmitter = new Subject<void>();
  private _generatedId = 'vcl_file-input_' + uniqueID++;
  private _focused = false;
  private _cvaDisabled = false;

  stateChanged = this._stateChangedEmitter.asObservable();
  controlType = 'counter';

  value = 0;

  @Input()
  errorStateAgent?: FormControlErrorStateAgent;

  @Input()
  id?: string;

  @Input()
  disabled: false;

  @Input()
  min?: number;

  @Input()
  max?: number;

  @HostBinding('attr.id')
  get elementId() {
    return this.id || this._generatedId;
  }

  get isDisabled() {
    return this._cvaDisabled || this.disabled;
  }

  get isFocused() {
    return this._focused;
  }

  @HostBinding('class.error')
  get hasError() {
    const errorStateAgent = this.errorStateAgent || this._errorStateAgent;
    return errorStateAgent ? errorStateAgent(this.formControlHost, this) : false;
  }

  onLabelClick(event: Event): void { }

  onFocus(): void {
    this._focused = true;
    this._stateChangedEmitter.next();
  }

  onBlur(markTouched: boolean): void {
    this._focused = false;
    this._stateChangedEmitter.next();
    if (markTouched) {
      this.onTouched();
    }
  }

  increment() {
    if (typeof this.max === 'number' && this.value >= this.max) {
      return;
    }
    this.value++;
    this.onChange(this.value);
  }
  decrement() {
    if (typeof this.min === 'number' && this.value <= this.min) {
      return;
    }
    this.value--;
    this.onChange(this.value);
    this.onTouched();
  }
  writeValue(obj: any): void {
    this.value = obj;
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  onChange: (_: any) => void = () => {};
  onTouched: () => void = () => {};

  setDisabledState?(isDisabled: boolean): void {
    this._cvaDisabled = isDisabled;
  }
}

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    VCLIcogramModule,
    VCLButtonModule,
  ],
  entryComponents: [ CounterComponent ],
  declarations: [ CounterComponent ],
  exports: [ CounterComponent ]
})
export class VCLCounterModule { }
