import {
  Component,
  Input,
  forwardRef,
  HostBinding,
  Optional,
  Self,
  Inject,
  NgModule,
  Injector,
} from '@angular/core';
import {
  ControlValueAccessor,
  NG_VALUE_ACCESSOR,
  NgControl,
  ReactiveFormsModule,
  FormsModule,
} from '@angular/forms';
import {
  VCLIcogramModule,
  VCLButtonModule,
  FormControlGroupInputState,
  FORM_CONTROL_GROUP_INPUT_STATE,
} from '@vcl/ng-vcl';
import { Subject } from 'rxjs';
import { CommonModule } from '@angular/common';

let uniqueID = 0;

@Component({
    selector: 'demo-counter',
    styles: [
        `
      :host {
        display: flex;
        align-items: center;
      }
      :host > span {
        font-size: 2em;
        user-select: none;
        padding-left: 0.2em;
        padding-right: 0.2em;
      }
    `,
    ],
    template: `
    <button
      vcl-button
      square
      class="transparent"
      type="button"
      (click)="decrement()"
      (keydown.enter)="decrement(); $event.preventDefault()"
      (focus)="onFocus()"
      (focus)="onBlur(false)">
      <vcl-icon icon="vcl:remove"></vcl-icon>
    </button>
    <span>{{ value }}</span>
    <button
      vcl-button
      square
      class="transparent"
      type="button"
      (click)="increment()"
      (keydown.enter)="increment(); $event.preventDefault()"
      (focus)="onFocus()"
      (focus)="onBlur(true)">
      <vcl-icon icon="vcl:add"></vcl-icon>
    </button>
  `,
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => CounterComponent),
            multi: true,
        },
        {
            provide: FORM_CONTROL_GROUP_INPUT_STATE,
            useExisting: forwardRef(() => CounterComponent),
        },
    ],
    standalone: false
})
export class CounterComponent
  implements ControlValueAccessor, FormControlGroupInputState
{
  constructor(private injector: Injector) {}

  _hostClasses = true;

  private _stateChangedEmitter = new Subject<void>();
  private _generatedId = 'vcl_file-input_' + uniqueID++;
  private _focused = false;
  private _cvaDisabled = false;

  stateChanged = this._stateChangedEmitter.asObservable();
  controlType = 'counter';

  value = 0;

  get ngControl() {
    return this.injector.get(NgControl, null);
  }

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
  hasError = false;

  setErrorState(error: boolean): void {
    this.hasError = error;
  }

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
  declarations: [CounterComponent],
  exports: [CounterComponent],
})
export class VCLCounterModule {}
