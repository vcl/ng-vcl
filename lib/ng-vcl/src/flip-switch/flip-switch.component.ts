import { Component, Input, Output, ChangeDetectionStrategy, EventEmitter, ViewChild, forwardRef, HostBinding, HostListener, ChangeDetectorRef } from '@angular/core';
import { ControlValueAccessor, NgControl, NG_VALUE_ACCESSOR } from '@angular/forms';

export const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => FlipSwitchComponent),
  multi: true
};

@Component({
  selector: 'vcl-flip-switch',
  templateUrl: 'flip-switch.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR],
  host: {
    '[class.vclFlipSwitch]': 'true',
    '[class.vclFlipSwitchPressed]': 'value',
    '[attr.role]': '"button"',
    '[attr.aria-pressed]': 'value',
    '[attr.touch-action]': '"pan-y"'
  }
})
export class FlipSwitchComponent implements ControlValueAccessor {

  @HostBinding()
  tabindex = 0;

  @Input()
  onLabel = 'On';

  @Input()
  offLabel = 'Off';

  @Input()
  value = false;

  @HostBinding('class.vclDisabled')
  @Input()
  disabled = false;

  @Output()
  valueChange = new EventEmitter<boolean>();

  constructor(private cdRef: ChangeDetectorRef) { }

  @HostListener('click')
  onTap() {
    this.toggle();
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

  /**
   * things needed for ControlValueAccessor-Interface
   */
  private onTouchedCallback: (_: any) => void;
  private onChangeCallback: (_: any) => void;

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
    this.disabled = isDisabled;
    this.cdRef.markForCheck();
  }
}
