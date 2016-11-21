import {
  Component,
  Input,
  ViewChild,
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

  @ViewChild('scale') scale;

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
  percentToValue(per: number): number {
    const rangeLength = this.max - this.min;
    const newVal = (rangeLength / 100) * per;
    return newVal;
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

  deltaPxToPercent(deltaPx: number) {
    const fullPx = this.scale.nativeElement.offsetWidth;
    let deltaPer = 100 / (fullPx / deltaPx);
    deltaPer = Math.round(deltaPer * 100) / 100; // round 2 decs
    return deltaPer;
  }


  lastPercentLeftKnob: number;
  firstPan: boolean = true;
  onPan(ev) {
    console.log('onPan '); // TODO remove log

    if (this.firstPan) {
      this.firstPan = false;
      this.lastPercentLeftKnob = this.percentLeftKnob;
    }

    const deltaPx = ev.deltaX;

    this.percentLeftKnob = this.lastPercentLeftKnob + this.deltaPxToPercent(deltaPx);
    if (this.percentLeftKnob < 0) this.percentLeftKnob = 0;
    if (this.percentLeftKnob > 100) this.percentLeftKnob = 100;


    if (ev.isFinal) {
      this.firstPan = true;


      //TODO calculate closest step and move to there

      this.value = this.percentToValue(this.percentLeftKnob);
      !!this.onChangeCallback && this.onChangeCallback(this.value);

    }
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
