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
  @Input('step') step: number = 100;
  @Input('round') round: number = 100;

  @Input('scaleNames') scaleNames: string[];


  ngAfterViewInit() {
    this.calculatePercentLeftKnob();
  }

  percentLeftKnob: number = 0;

  calculatePercentLeftKnob() {
    console.log('....');
    const rangeLength = this.max - this.min;
    const valueLeft = this.value - this.min;
    const delta = rangeLength / valueLeft;
    this.percentLeftKnob = 100 / delta;
    console.log('aaa');
    console.log(this.percentLeftKnob);
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
