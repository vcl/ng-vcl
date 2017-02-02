import { ChangeDetectionStrategy, Component, Input, HostBinding } from '@angular/core';

@Component({
  selector: 'vcl-progress-bar',
  templateUrl: 'progress-bar.component.html',
  host: {
    '[attr.role]': '"progressbar"',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProgressBarComponent {

  @Input()
  value: number;

  @Input()
  secondaryValue: number;

  @Input()
  minValue: number = 0;

  @Input()
  maxValue: number = 100;

  @Input()
  indeterminate: boolean = false;

  @Input()
  label: string;

  get showIndeterminate() {
    return this.indeterminate && !this.validateValue(this.value);
  }

  get showValue() {
    return !this.indeterminate || this.validateValue(this.value);
  }

  get showSecondaryValue() {
    return this.validateValue(this.secondaryValue);
  }

  get transformValue() {
    const value = this.validateValue(this.value) ? this.scaleValue(this.value) : 0;
    return `scaleX(${value})`;
  }

  get transformSecondaryValue() {
    const value = this.validateValue(this.secondaryValue) ? this.scaleValue(this.secondaryValue) : 0;
    return `scaleX(${value})`;
  }

  get range() {
    return this.maxValue - this.minValue;
  }

  scaleValue(value: number) {
    return (value - this.minValue) / this.range;
  }

  validateValue(value: number) {
    return typeof value === 'number' &&
           value !== NaN &&
           value >= this.minValue &&
           value <= this.maxValue;
  }
}
