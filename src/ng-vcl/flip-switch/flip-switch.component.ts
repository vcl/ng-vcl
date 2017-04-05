import {
  Component,
  Input,
  Output,
  ChangeDetectionStrategy,
  EventEmitter,
  ViewChild,
  forwardRef,
  HostBinding,
  HostListener
} from '@angular/core';
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
  onLabel: string = 'On';

  @Input()
  offLabel: string = 'Off';

  @Input()
  value: boolean = false;

  @Output()
  valueChange = new EventEmitter<boolean>();

  @HostListener('tap', ['$event'])
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
  }
  registerOnChange(fn: any) {
    this.onChangeCallback = fn;
  }
  registerOnTouched(fn: any) {
    this.onTouchedCallback = fn;
  }
}
