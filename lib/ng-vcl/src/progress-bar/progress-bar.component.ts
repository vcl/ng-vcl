import { NgIf } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  HostBinding,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'vcl-progress-bar',
  templateUrl: 'progress-bar.component.html',
  exportAs: 'vclProgressBar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['progress-bar.component.scss'],
  encapsulation: ViewEncapsulation.None,
  imports: [NgIf],
})
export class ProgressBarComponent {
  @HostBinding('attr.role')
  _hostAttrRole = 'progressbar';

  @HostBinding('class.progress-bar')
  hostClasses = true;

  @HostBinding('attr.valuenow')
  @Input()
  value: number;

  @Input()
  secondaryValue: number;

  @HostBinding('attr.valuemin')
  @Input()
  minValue = 0;

  @HostBinding('attr.valuemax')
  @Input()
  maxValue = 100;

  @Input()
  indeterminate = false;

  @HostBinding('attr.aria-valuetext')
  @Input()
  label: string;

  @Input()
  speed = 1;

  @HostBinding('class.indeterminate')
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
    const value = this.validateValue(this.value)
      ? this.scaleValue(this.value)
      : 0;
    return `scaleX(${value})`;
  }

  get transformSecondaryValue(): string {
    const value = this.validateValue(this.secondaryValue)
      ? this.scaleValue(this.secondaryValue)
      : 0;
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
    return (
      this.isNumber(value) && value >= this.minValue && value <= this.maxValue
    );
  }

  isNumber(value: number): boolean {
    return typeof value === 'number' && isFinite(value);
  }
}
