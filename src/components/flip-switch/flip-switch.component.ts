import {
  Component,
  Input,
  Output,
  ChangeDetectionStrategy,
  EventEmitter,
  ViewChild,
  forwardRef
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
  providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR]
})
export class FlipSwitchComponent implements ControlValueAccessor {

  @Input('onLabel') onLabel: string = 'On';
  @Input('offLabel') offLabel: string = 'Off';
  @Input('value') value: boolean = false;

  @Output('change') change$ = new EventEmitter<boolean>();

  constructor() {
    this.change$.subscribe(newVal => {
      this.value = newVal;
      !!this.onChangeCallback && this.onChangeCallback(newVal);
    });
  }

  onClick() {
    this.value = !this.value;
    this.change$.emit(this.value);
  }

  /**
   * things needed for ControlValueAccessor-Interface
   */
  private onTouchedCallback: (_: any) => void;
  private onChangeCallback: (_: any) => void;

  writeValue(value: boolean): void {
    if (value !== this.value) this.value = value;
  }
  registerOnChange(fn: any) {
    this.onChangeCallback = fn;
  }
  registerOnTouched(fn: any) {
    this.onTouchedCallback = fn;
  }
}
