import {
  Component, ChangeDetectionStrategy, Input, OnInit, ChangeDetectorRef, forwardRef,
  OnChanges, SimpleChanges
} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';

export const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => TimePickerComponent),
  multi: true
};

@Component({
  selector: 'vcl-time-picker',
  templateUrl: 'time-picker.component.html',
  styles: [
    `.hidden{display:none;}
     .date-picker-pointer{cursor: pointer;}
    `
  ],
  providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class.vclDatePicker]': 'true',
    '[attr.role]': '"listbox"',
    '[attr.aria-multiselectable]': 'false',
    '[style.height]': '"284px"' // TODO this fixes for IE11
  }
})
export class TimePickerComponent implements OnInit, OnChanges, ControlValueAccessor {

  @Input()
  selectedDate: Date | undefined;

  @Input()
  displayHours: boolean = true;

  @Input()
  displayMinutes: boolean = true;

  @Input()
  displaySeconds: boolean = true;

  @Input()
  displayHours24: boolean = true;

  constructor(private cdRef: ChangeDetectorRef) { }

  ngOnInit(): void {
    if (this.selectedDate) {
      this.currentHour = this.selectedDate.getHours();
      this.currentMinute = this.selectedDate.getMinutes();
      this.currentSecond = this.selectedDate.getSeconds();
    }
  }

  private currentHour: number = -1;
  private currentMinute: number = -1;
  private currentSecond: number = -1;

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

    this.selectedDate!.setHours(hour);
    this.onChangeCallback && this.onChangeCallback(this.selectedDate);
  }

  onMinuteTap(minute: number): void {
    this.currentMinute = minute;

    if (!this.selectedDate) {
      this.selectedDate = new Date();
    }

    this.selectedDate!.setMinutes(minute);
    this.onChangeCallback && this.onChangeCallback(this.selectedDate);
  }

  onSecondTap(second: number): void {
    this.currentSecond = second;

    if (!this.selectedDate) {
      this.selectedDate = new Date();
    }

    this.selectedDate!.setSeconds(second);
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

  private onTouchedCallback: (_: any) => void;
  private onChangeCallback: (_: Date | undefined) => void;

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
