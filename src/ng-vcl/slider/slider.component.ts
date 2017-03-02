import {
  Component,
  Input,
  ViewChild,
  forwardRef,
  HostListener,
  ChangeDetectionStrategy,
  HostBinding,
  NgZone
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import 'hammerjs';

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
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SliderComponent implements ControlValueAccessor {
  @HostBinding() tabindex = 0;

  @Input('value') value: number = 0;
  @Input('min') min: number;
  @Input('max') max: number;
  @Input('step') step: number;
  @Input('stepsOnly') stepsOnly: boolean = false;
  @Input('round') round: number = 0;
  @Input('scaleNames') scaleNames: string[];

  @ViewChild('scale') scale;

  constructor(private zone: NgZone) {
  }

  ngAfterContentInit() {
    /**
     * handle defaults
     * info: this is done here so @Input-values of undefined|null will be handled
     */
    this.value = this.value || 0;
    this.min = this.min || 0;
    this.max = this.max || 100;
    this.step = this.step || 10;

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
    return this.percentLeftKnob;
  }
  percentToValue(per: number): number {
    const rangeLength = this.max - this.min;
    let newVal = (rangeLength / 100) * per;
    newVal = Math.round(newVal);
    return newVal;
  }

  getScalePoints() {
    const rangeLength = this.max - this.min;
    const amount = Math.ceil(rangeLength / this.step) + 1;
    const scalePoints = [];
    while (scalePoints.length < amount) {
      scalePoints.push({
        label: this.scalePointLabel(scalePoints.length),
        percent: (100 / (amount - 1)) * scalePoints.length
      });
    }
    this.scalePoints = scalePoints;
  }


  closestScalePoint(percentValue): number {
    let closest = this.scalePoints[0];
    let dist = 100;
    this.scalePoints.forEach(sP => {
      const pDist = Math.abs(sP.percent - percentValue);
      if (pDist < dist) {
        closest = sP;
        dist = pDist;
      }
    });
    return closest.percent;
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


  /**
   * clicking the rail should also reposition the bar
   */
  @HostListener('tap', ['$event'])
  onTap(event) {
    if (event.target.className == 'vclSliderKnob') return;

    const railX = event.changedPointers[0].offsetX;
    if (railX <= 0) return;

    this.percentLeftKnob = this.deltaPxToPercent(railX);
    if (this.stepsOnly)
      this.percentLeftKnob = this.closestScalePoint(this.percentLeftKnob);

    this.value = this.percentToValue(this.percentLeftKnob);
    !!this.onChangeCallback && this.onChangeCallback(this.value);
  }



  moveToPoint(direction: 'left' | 'right' = 'right') {
    const currentPointValue = this.closestScalePoint(this.calculatePercentLeftKnob());
    const currentPoint = this.scalePoints
      .find(p => p.percent == currentPointValue);
    const i = this.scalePoints.indexOf(currentPoint);
    let nextPoint;
    let nextI = direction == 'right' ? i + 1 : i - 1;
    if (direction == 'right') {
      if (!this.scalePoints[nextI]) nextI = this.scalePoints.length - 1;
      nextPoint = this.scalePoints[nextI];
    } else {
      if (nextI < 0) nextI = 0;
      nextPoint = this.scalePoints[nextI];
    }
    this.value = this.percentToValue(nextPoint.percent);
    this.calculatePercentLeftKnob();
    !!this.onChangeCallback && this.onChangeCallback(this.value);
  }


  moveValue(direction: 'left' | 'right' = 'right') {
    let newValue;
    if (direction == 'right')
      newValue = this.value + 1;
    else newValue = this.value - 1;

    if (newValue < this.min) newValue = this.min;
    if (newValue > this.max) newValue = this.max;

    this.value = newValue;
    this.calculatePercentLeftKnob();
    !!this.onChangeCallback && this.onChangeCallback(this.value);
  }


  @HostListener('keydown', ['$event'])
  keydown(ev) {
    switch (ev.code) {
      case 'ArrowLeft':
        if (this.stepsOnly) this.moveToPoint('left');
        else this.moveValue('left');
        ev.preventDefault();
        break;
      case 'ArrowRight':
        if (this.stepsOnly) this.moveToPoint('right');
        else this.moveValue('right');
        ev.preventDefault();
        break;
      case 'Space':
        this.moveToPoint('right');
        ev.preventDefault();
        break;
    }
  }


  lastPercentLeftKnob: number;
  firstPan: boolean = true;
  onPan(ev) {
    if (this.firstPan) {
      this.firstPan = false;
      this.lastPercentLeftKnob = this.percentLeftKnob;
    }

    const deltaPx = ev.deltaX;

    this.percentLeftKnob = this.lastPercentLeftKnob + this.deltaPxToPercent(deltaPx);
    if (this.percentLeftKnob < 0) this.percentLeftKnob = 0;
    if (this.percentLeftKnob > 100) this.percentLeftKnob = 100;

    if (this.stepsOnly)
      this.percentLeftKnob = this.closestScalePoint(this.percentLeftKnob);

    if (ev.isFinal) {
      this.firstPan = true;

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
