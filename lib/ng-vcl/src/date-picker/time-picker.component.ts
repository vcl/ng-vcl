import {
  Component, ChangeDetectionStrategy, Input, OnInit, ChangeDetectorRef, forwardRef,
  OnChanges, SimpleChanges, HostBinding
} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';

export const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  // tslint:disable-next-line:no-use-before-declare
  useExisting: forwardRef(() => TimePickerComponent),
  multi: true
};

@Component({
  selector: 'vcl-time-picker',
  templateUrl: 'time-picker.component.html',
  // TODO height: fixes IE11
  styles: [
    `.hidden{display:none;}
     .date-picker-pointer{cursor: pointer;}
     :host {
       height: 284px;
     }
    `
  ],
  providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TimePickerComponent implements OnInit, OnChanges, ControlValueAccessor {

  constructor(private cdRef: ChangeDetectorRef) { }

  @HostBinding('class.date-picker')
  _hostClasses = true;

  @HostBinding('attr.role')
  _hostAttrRole = 'listbox';

  @HostBinding('attr.aria-multiselectable')
  _hostAttrAriaMultiselectable = false;

  @Input()
  selectedDate: Date | undefined;

  @Input()
  displayHours = true;

  @Input()
  displayMinutes = true;

  @Input()
  displaySeconds = true;

  @Input()
  displayHours24 = true;

  private currentHour = -1;
  private currentMinute = -1;
  private currentSecond = -1;

  onTouchedCallback: (_: any) => void;
  onChangeCallback: (_: Date | undefined) => void;

  ngOnInit(): void {
    if (this.selectedDate) {
      this.currentHour = this.selectedDate.getHours();
      this.currentMinute = this.selectedDate.getMinutes();
      this.currentSecond = this.selectedDate.getSeconds();
    }
  }

  isHourMarked(hour: number): boolean {
    return hour === this.currentHour;
  }

  isMinuteMarked(minute: number): boolean {
    return minute === this.currentMinute;
  }

  isSecondMarked(second: number): boolean {
    return second === this.currentSecond;
  }

  onHourTap(hour: number): void {
    this.currentHour = hour;

    if (!this.selectedDate) {
      this.selectedDate = new Date();
    }

    this.selectedDate.setHours(hour);
    this.onChangeCallback && this.onChangeCallback(this.selectedDate);
  }

  onMinuteTap(minute: number): void {
    this.currentMinute = minute;

    if (!this.selectedDate) {
      this.selectedDate = new Date();
    }

    this.selectedDate.setMinutes(minute);
    this.onChangeCallback && this.onChangeCallback(this.selectedDate);
  }

  onSecondTap(second: number): void {
    this.currentSecond = second;

    if (!this.selectedDate) {
      this.selectedDate = new Date();
    }

    this.selectedDate.setSeconds(second);
    this.onChangeCallback && this.onChangeCallback(this.selectedDate);
  }

  onSwitch24h(): void {
    this.displayHours24 = !this.displayHours24;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.selectedDate) {
      this.selectedDate = changes.selectedDate.currentValue;
      if (this.selectedDate) {
        this.currentHour = this.selectedDate.getHours();
        this.currentMinute = this.selectedDate.getMinutes();
        this.currentSecond = this.selectedDate.getSeconds();
      }
    }
  }

  writeValue(value: Date): void {
    this.selectedDate = value;
    if (this.selectedDate) {
      this.currentHour = this.selectedDate.getHours();
      this.currentMinute = this.selectedDate.getMinutes();
      this.currentSecond = this.selectedDate.getSeconds();
    }
    this.cdRef.markForCheck();
  }
  registerOnChange(fn: any) {
    this.onChangeCallback = fn;
  }
  registerOnTouched(fn: any) {
    this.onTouchedCallback = fn;
  }
  setDisabledState(isDisabled: boolean) {
    this.cdRef.markForCheck();
  }
}
