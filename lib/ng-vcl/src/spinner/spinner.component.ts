import { Component, ChangeDetectionStrategy, Input, HostBinding, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'vcl-spinner',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: 'spinner.component.html',
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => SpinnerComponent),
    multi: true
  }]
})
export class SpinnerComponent implements ControlValueAccessor {

  @Input()
  orientation: 'horizontal' | 'vertical' = 'vertical';

  @HostBinding('class.button-group')
  get classButtonGroupButton() {
    return this.orientation === 'vertical';
  }

  value = 0;

  onChange: (_: any) => void = (_: any) => {
  };
  onTouched: () => void = () => {
  };

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  writeValue(value: number | string | undefined | null): void {
    this.value = parseInt(value?.toString(), 10) || 0;
    this.onChange(this.value);
  }

}
