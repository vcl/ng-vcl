import {
  Component,
  Input,
  Output,
  ChangeDetectionStrategy,
  EventEmitter,
  forwardRef,
  HostBinding,
  HostListener,
  ChangeDetectorRef,
  OnDestroy,
  Injector,
  ViewEncapsulation,
} from '@angular/core';
import {
  ControlValueAccessor,
  NgControl,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';
import {
  FormControlGroupInputState,
  FORM_CONTROL_GROUP_INPUT_STATE,
  VCLFormControlGroupModule,
} from '../form-control-group/index';
import { Subject } from 'rxjs';
import { CommonModule } from '@angular/common';

let UNIQUE_ID = 0;

@Component({
  selector: 'vcl-flip-switch',
  templateUrl: 'flip-switch.component.html',
  styleUrls: ['flip-switch.component.scss'],
  encapsulation: ViewEncapsulation.None,
  exportAs: 'vclFlipSwitch',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: FORM_CONTROL_GROUP_INPUT_STATE,
      useExisting: forwardRef(() => FlipSwitchComponent),
    },
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FlipSwitchComponent),
      multi: true,
    },
  ],
  imports: [CommonModule, VCLFormControlGroupModule],
})
export class FlipSwitchComponent
  implements ControlValueAccessor, FormControlGroupInputState, OnDestroy
{
  constructor(
    private cdRef: ChangeDetectorRef,
    private injector: Injector
  ) {}

  @HostBinding('class.flip-switch')
  _hostClasses = true;

  @HostBinding('attr.role')
  _attrRole = 'button';

  @HostBinding('attr.touch-action')
  _attrTouchAction = 'pan-y';

  @Input()
  @HostBinding('class.rounded')
  rounded = false;

  private uniqueId = 'vcl_flipswitch_' + UNIQUE_ID++;

  private _disabled = false;
  private _focused = false;

  private stateChangedEmitter = new Subject<void>();

  stateChanged = this.stateChangedEmitter.asObservable();

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

  @HostBinding('class.flip-switch-pressed')
  @HostBinding('attr.aria-pressed')
  @Input()
  value = false;

  @Input()
  disabled = false;

  @HostBinding('class.disabled')
  get isDisabled() {
    return this.disabled || this._disabled;
  }

  get ngControl() {
    return this.injector.get(NgControl, null);
  }

  get isFocused() {
    return this._focused;
  }

  @Output()
  valueChange = new EventEmitter<boolean>();

  @HostBinding('class.error')
  hasError = false;

  setErrorState(error: boolean): void {
    this.hasError = error;
  }

  private onTouchedCallback: () => void = () => {};
  private onChangeCallback: (_: any) => void = () => {};

  @HostListener('click')
  onClick() {
    this.toggle();
    this.onTouchedCallback();
  }

  @HostListener('focus')
  onFocus() {
    this._focused = true;
    this.stateChangedEmitter.next();
  }

  @HostListener('blur')
  onBlur() {
    this._focused = false;
    this.onTouchedCallback();
    this.stateChangedEmitter.next();
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

  ngOnDestroy() {
    this.stateChangedEmitter && this.stateChangedEmitter.complete();
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
