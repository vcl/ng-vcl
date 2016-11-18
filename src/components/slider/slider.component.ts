import {
  Component,
  Input,
  Output,
  EventEmitter,
  forwardRef
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';


export const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => SliderComponent),
  multi: true
};

@Component({
  selector: 'vcl-slider',
  templateUrl: 'slider.component.html',
  providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR],
  host: {
    '[class.vclSlider]': 'true'
  }
})
export class SliderComponent implements ControlValueAccessor {


  @Input('value') value: number = 0;
  @Input('min') min: number = 0;
  @Input('max') max: number = 100;
  @Input('step') step: number = 10;
  @Input('round') round: number = 0;
  @Input('scaleNames') scaleNames: string[];


  constructor() {

  }

  ngAfterContentInit() {
    this.calculatePercentLeftKnob();
    this.getScalePoints();
  }

  percentLeftKnob: number = 0;
  scalePoints: any[];

  calculatePercentLeftKnob() {
    const rangeLength = this.max - this.min;
    const valueLeft = this.value - this.min;
    const delta = rangeLength / valueLeft;
    this.percentLeftKnob = 100 / delta;
  }

  getScalePoints() {
    const rangeLength = this.max - this.min;
    const amount = Math.ceil(rangeLength / this.step);
    const scalePoints = [];
    while (scalePoints.length < amount) {
      scalePoints.push({
        label: this.scalePointLabel(scalePoints.length)
      });
    }
    this.scalePoints = scalePoints;
  }

  scalePointLabel(i: number): string {
    if (!this.scaleNames) return (i * this.step + this.min).toString();
    if (this.scaleNames[i]) return this.scaleNames[i];
    return '';
  }

  /**
   * things needed for ControlValueAccessor-Interface
   */
  private onTouchedCallback: (_: any) => void;
  private onChangeCallback: (_: any) => void;
  writeValue(value: any): void {
    if (value !== this.value) {
      this.value = value;
    }
  }
  registerOnChange(fn: any) {
    this.onChangeCallback = fn;
  }
  registerOnTouched(fn: any) {
    this.onTouchedCallback = fn;
  }
}
