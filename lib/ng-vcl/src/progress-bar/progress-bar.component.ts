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
  minValue = 0;

  @Input()
  maxValue = 100;

  @Input()
  indeterminate = false;

  @Input()
  label: string;

  @Input()
  speed = 1;

  get showIndeterminate(): boolean {
    return this.indeterminate && !this.validateValue(this.value);
  }

  get showValue(): boolean {
    return !this.indeterminate || this.validateValue(this.value);
  }

  get showSecondaryValue(): boolean {
    return this.validateValue(this.secondaryValue);
  }

  get transformValue(): string {
    const value = this.validateValue(this.value) ? this.scaleValue(this.value) : 0;
    return `scaleX(${value})`;
  }

  get transformSecondaryValue(): string {
    const value = this.validateValue(this.secondaryValue) ? this.scaleValue(this.secondaryValue) : 0;
    return `scaleX(${value})`;
  }

  get animationDurationValue(): string {
    const value = this.isNumber(this.speed) ? this.speed : 1;
    return `${value}s`;
  }

  get range(): number {
    return this.maxValue - this.minValue;
  }

  scaleValue(value: number): number {
    return (value - this.minValue) / this.range;
  }

  validateValue(value: number): boolean {
    return this.isNumber(value) &&
           value >= this.minValue &&
           value <= this.maxValue;
  }

  isNumber(value: number): boolean {
    return typeof value === 'number' && value !== NaN;
  }
}
