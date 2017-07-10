import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  forwardRef,
  ChangeDetectionStrategy,
  ChangeDetectorRef
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { CalendarDate } from './calendar-date';


export const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => DatePickerComponent),
  multi: true
};

@Component({
  selector: 'vcl-date-picker',
  templateUrl: 'date-picker.component.html',
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
export class DatePickerComponent implements OnInit, ControlValueAccessor {

  // behavior
  @Input()
  closeOnSelect: boolean = false;

  // styling
  @Input()
  highlightToday: boolean = true;

  @Input()
  highlightSelected: boolean = true;

  @Input()
  displayWeekNumbers: boolean = true;

  @Input()
  displayWeekdays: boolean = true;

  @Input()
  prevYearBtnIcon: string = "fa:chevron-left";

  @Input()
  nextYearBtnIcon: string = "fa:chevron-right";

  @Input()
  displayJumpToday: boolean = true;

  @Input()
  displayJumpSelected: boolean = true;

  // values
  @Input()
  selectedDate: Date = new Date();

  @Input()
  selectRange: boolean = false;

  @Input()
  selectedRangeEnd: Date | undefined;

  @Input()
  maxRangeLength: number = Infinity;

  @Input()
  minDate: Date | undefined;

  @Input()
  maxDate: Date | undefined;

  currentDate: CalendarDate | null;
  currentRangeEnd: CalendarDate | null;
  viewDate: CalendarDate;
  today: CalendarDate = new CalendarDate();

  showYearPick: boolean = false;

  constructor(private cdRef: ChangeDetectorRef) { }

  ngOnInit() {
    this.currentDate = new CalendarDate(this.selectedDate);
    this.viewDate = new CalendarDate();

    if (this.selectedRangeEnd) {
      this.selectRange = true;
      this.select(new CalendarDate(this.selectedRangeEnd));
    }
  }

  /**
   * activate the given date
   */
  select(date: CalendarDate) {

    if (this.isDisabled(date)) {
      return;
    }

    if (!this.selectRange) {
      this.currentDate = date;
      if (!date.isSameMonthAndYear(this.viewDate)) {
        this.gotoSelected();
      }

      !!this.onChangeCallback && this.onChangeCallback(this.currentDate.date);
      return;
    }

    if (this.currentDate && this.currentRangeEnd) {
      // reset all
      this.currentDate = null;
      this.currentRangeEnd = null;
    } else if (this.currentDate && !this.currentRangeEnd) {
      this.currentRangeEnd = date;
    } else if (!this.currentDate) {
      this.currentDate = date;
    }



    // swap values if currentDate > currentRangeEnd
    if (
      this.currentRangeEnd &&
      this.currentDate &&
      this.currentRangeEnd.date < this.currentDate.date
    ) {
      this.currentRangeEnd.date = [this.currentDate.date, this.currentDate.date = this.currentRangeEnd.date][0]; // swap values
    }

    // if more days selected than maxRangeLength, strip days
    if (
      this.selectRange &&
      this.currentRangeEnd &&
      this.currentDate &&
      this.currentDate.daysInRange(this.currentRangeEnd) > this.maxRangeLength
    ) {
      const diffDays = this.currentDate.daysInRange(this.currentRangeEnd) - this.maxRangeLength;
      this.currentRangeEnd.moveDays(diffDays * (-1));
    }

    if (this.currentDate) {
      !!this.onChangeCallback && this.onChangeCallback(this.currentDate.date);
    }

  }

  /**
   * ui-markers
   */
  isMarked(date: CalendarDate): boolean {
    if (!this.selectRange && this.currentDate && this.currentDate.isSameDay(date)) return true;

    return !!this.currentDate && !!this.currentRangeEnd && date.inRange(this.currentDate, this.currentRangeEnd);
  }

  isDisabled(day: CalendarDate): boolean {
    const minDate = this.minDate || new Date(0, 0, 1);
    const maxDate = this.maxDate || new Date(10000, 0, 1);
    return day.gt(maxDate) || day.lt(minDate);
  }

  /**
   * functions to move viewDate
   */
  nextMonth() {
    if (this.showYearPick) {
      this.viewDate = this.viewDate.addYears(1);
    } else {
      this.viewDate = this.viewDate.incrementMonths(1);
    }
  }

  prevMonth() {
    if (this.showYearPick) {
      this.viewDate = this.viewDate.addYears(-1);
    } else {
      this.viewDate = this.viewDate.incrementMonths(-1);
    }
  }

  gotoToday() {
    this.viewDate = new CalendarDate();
  }

  gotoSelected() {
    this.viewDate = this.currentDate || new CalendarDate();
  }

  yearPickSelect(year: number) {
    this.viewDate = this.viewDate.moveToYear(year);
    this.showYearPick = false;
  }

  /**
   * things needed for ControlValueAccessor-Interface
   */
  private onTouchedCallback: (_: any) => void;
  private onChangeCallback: (_: Date) => void;

  writeValue(value: Date): void {
    this.currentDate = new CalendarDate(value);
    this.cdRef.markForCheck();
  }
  registerOnChange(fn: any) {
    this.onChangeCallback = fn;
  }
  registerOnTouched(fn: any) {
    this.onTouchedCallback = fn;
  }

}
