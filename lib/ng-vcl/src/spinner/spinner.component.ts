import {
  Component,
  ChangeDetectionStrategy,
  Input,
  HostBinding,
  forwardRef,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { VCLIconModule } from '../icon';
import { VCLButtonGroupModule } from '../button-group';
import { CommonModule } from '@angular/common';
import { VCLButtonModule } from '../button';

@Component({
  selector: 'vcl-spinner',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: 'spinner.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => VCLSpinnerComponent),
      multi: true,
    },
  ],
  imports: [VCLIconModule, VCLButtonModule, VCLButtonGroupModule, CommonModule],
})
export class VCLSpinnerComponent implements ControlValueAccessor {
  @Input()
  orientation: 'horizontal' | 'vertical' = 'vertical';

  @HostBinding('class.button-group')
  get classButtonGroupButton() {
    return this.orientation === 'vertical';
  }

  value = 0;

  onChange: (_: any) => void = (_: any) => {};
  onTouched: () => void = () => {};

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
