import {
  Component,
  Input,
  HostListener,
  ChangeDetectionStrategy,
  HostBinding,
  SimpleChanges,
  Output,
  EventEmitter,
  ViewChild,
  ElementRef,
  forwardRef,
  ChangeDetectorRef
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

export enum MoveDirection {
  Left, Right
}

export interface ScalePoint {
  label: string;
  percent: number;
}

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

  @HostBinding()
  tabindex = 0;

  @Input()
  value: number = 0;

  @Output()
  valueChange = new EventEmitter<number>();

  @HostBinding('class.vclDisabled')
  @Input()
  disabled: boolean = false;

  @Input()
  min: number = 0;

  @Input()
  max: number = 10;

  @Input('mousewheel')
  wheel: boolean = false;

  @Input()
  lock: boolean = false;

  @Input()
  scale: string[] | number | undefined;

  @HostBinding('class.vclFocused')
  focused: boolean = false;

  @ViewChild('scale')
  scaleElement: ElementRef;

  get pmin(): number {
    const min = Number(this.min);
    return !isNaN(min) ? min : 0;
  }

  get pmax(): number {
    const max = Number(this.max);
    return !isNaN(max) ? max : 0;
  }

  percentLeftKnob: number = 0;

  scalePoints: ScalePoint[] = [];

  constructor(private cdRef: ChangeDetectorRef) { }

  ngAfterContentInit() {
    this.percentLeftKnob = this.calculatePercentLeftKnob(this.value);
  }

  get valueValid() {
    return this.validateValue(this.value);
  }

  validateValue(value: number) {
    return typeof this.value === 'number' && this.value >= this.min && this.value <= this.max;
  }

  get showScale() {
    return Array.isArray(this.scale) || (typeof this.scale === 'boolean' && this.scale);
  }

  ngOnChanges(changes: SimpleChanges) {
    if ('min' in  changes || 'max' in  changes || 'scale' in  changes) {
      this.updateScalePoints();
    }
  }

  setValue(value: number, updateKnob: boolean) {
    this.value = value;
    if (updateKnob) {
      this.percentLeftKnob = this.calculatePercentLeftKnob(value);
    }
    this.valueChange.emit(this.value);
    this.onChange(this.value);
  }

  calculatePercentLeftKnob(value: number) {
    if (!this.validateValue(value)) {
      return 0;
    }
    const rangeLength = this.pmax - this.pmin;
    const valueLeft = value - this.pmin;
    const delta = rangeLength / valueLeft;
    return 100 / delta;
  }

  percentToValue(per: number): number {
    const rangeLength = this.pmax - this.pmin;
    const newVal = (rangeLength / 100) * per;
    return Math.round(newVal);
  }

  updateScalePoints() {
    if (Array.isArray(this.scale)) {
      const steps = this.scale.length;
      this.scalePoints = this.scale.map((label, idx) => {
        return {
          label,
          percent: (100 / (steps - 1)) * idx
        };
      });
    } else {
      let steps: number;
      if (typeof this.scale === 'number') {
        steps = this.scale;
      } else {
        steps = this.pmax - this.pmin + 1;
        while (steps > 50) {
          steps = Math.floor(steps / 2);
        }
      }
      this.scalePoints = Array.from(Array(steps).keys()).map((i) => {
        const percent = (100 / (steps - 1)) * i;
        return {
          label: this.percentToValue(percent).toString(),
          percent
        };
      });
    }
  }

  closestScalePoint(percentValue: number): number {
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

  deltaPxToPercent(deltaPx: number) {
    const fullPx = this.scaleElement.nativeElement.offsetWidth;
    const deltaPer = 100 / (fullPx / deltaPx);
    return Math.round(deltaPer * 100) / 100; // round 2 decs
  }

  @HostListener('focus')
  onFocus() {
    this.focused = true;
  }

  @HostListener('blur')
  onBlur() {
    this.focused = false;
    this.onTouched();
  }

  /**
   * clicking the rail should also reposition the bar
   */
  @HostListener('tap', ['$event'])
  onTap(event) {
    if (this.disabled || event.target.className == 'vclSliderKnob') {
      return;
    }

    const railX = event.changedPointers[0].offsetX;
    if (railX <= 0) {
      return;
    }

    const percentLeftKnob = this.deltaPxToPercent(railX);
    this.percentLeftKnob = this.lock ? this.closestScalePoint(percentLeftKnob) : percentLeftKnob;
    const value = this.percentToValue(this.percentLeftKnob);
    this.setValue(value, false);
  }

  selectPoint(p: ScalePoint) {
    const value = this.percentToValue(p.percent);
    this.setValue(value, true);
  }

  move(direction: MoveDirection) {
    if (this.lock) {
      this.moveToPoint(direction);
    } else {
      this.moveValue(direction);
    }
  }

  moveToPoint(direction: MoveDirection) {
    const currentPointValue = this.closestScalePoint(this.calculatePercentLeftKnob(this.value));
    const currentPoint = this.scalePoints.find(p => p.percent == currentPointValue);
    let i = currentPoint ? this.scalePoints.indexOf(currentPoint) : 0;
    let nextPoint;
    if (direction == MoveDirection.Right) {
      i++;
      if (i >= this.scalePoints.length) {
        i = this.scalePoints.length - 1;
      }
      nextPoint = this.scalePoints[i];
    } else {
      i--;
      if (i < 0) {
        i = 0;
      }
      nextPoint = this.scalePoints[i];
    }

    const value = this.percentToValue(nextPoint.percent);
    this.setValue(value, true);
  }

  moveValue(direction: MoveDirection) {
    let value = this.valueValid ? this.value : this.pmin;

    if (direction === MoveDirection.Right) {
      value++;
      if (value > this.pmax)
        value = this.pmax;
    } else {
      value--;
      if (value < this.pmin)
        value = this.pmin;
    }

    this.setValue(value, true);
  }

  @HostListener('wheel', ['$event'])
  onWheel(ev) {
    if (this.disabled || !this.wheel) {
      return;
    }
    if (ev.deltaY < 0) {
      this.move(MoveDirection.Right);
      ev.preventDefault();
    } else if (ev.deltaY > 0) {
      this.move(MoveDirection.Left);
      ev.preventDefault();
    }
  }

  @HostListener('keydown', ['$event'])
  keydown(ev) {
    if (this.disabled) {
      return;
    }
    switch (ev.code) {
      case 'ArrowLeft':
        this.move(MoveDirection.Left);
        ev.preventDefault();
        break;
      case 'ArrowRight':
        this.move(MoveDirection.Right);
        ev.preventDefault();
        break;
      case 'Space':
        this.moveToPoint(MoveDirection.Right);
        ev.preventDefault();
        break;
    }
  }


  lastPercentLeftKnob: number;
  firstPan: boolean = true;
  onPan(ev) {
    if (this.disabled) {
      return;
    }
    if (this.firstPan) {
      this.firstPan = false;
      this.lastPercentLeftKnob = this.percentLeftKnob;
    }

    const deltaPx = ev.deltaX;

    let percentLeftKnob = this.lastPercentLeftKnob + this.deltaPxToPercent(deltaPx);
    if (percentLeftKnob < 0) {
      percentLeftKnob = 0;
    } else if (percentLeftKnob > 100) {
      percentLeftKnob = 100;
    }

    if (this.lock) {
      this.percentLeftKnob = this.closestScalePoint(percentLeftKnob);
    } else {
      const newValue = this.percentToValue(percentLeftKnob);
      this.percentLeftKnob = this.calculatePercentLeftKnob(newValue);
    }

    if (ev.isFinal) {
      this.firstPan = true;
      const value = this.percentToValue(this.percentLeftKnob);
      this.setValue(value, false);
    }
  }


  /**
   * things needed for ControlValueAccessor-Interface
   */
  private onChange: (_: any) => void = () => {};
  private onTouched: () => any = () => {};

  writeValue(value: any): void {
    this.setValue(value, true);
    this.cdRef.markForCheck();
  }
  registerOnChange(fn: any) {
    this.onChange = fn;
  }
  registerOnTouched(fn: any) {
    this.onTouched = fn;
  }
}
