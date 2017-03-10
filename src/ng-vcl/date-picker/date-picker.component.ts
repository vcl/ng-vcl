import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  forwardRef,
  ChangeDetectionStrategy
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

import {PickDate, PickDateCreate} from './pick-date';


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

  // behaviour
  @Input('closeOnSelect') closeOnSelect: boolean = false;

  // styling
  @Input('highlightToday') highlightToday: boolean = true;
  @Input('highlightSelected') highlightSelected: boolean = true;
  @Input('displayWeekNumbers') displayWeekNumbers: boolean = true;
  @Input('displayWeekdays') displayWeekdays: boolean = true;
  @Input('prevYearBtnIcon') prevYearBtnIcon: string = "fa:chevron-left";
  @Input('nextYearBtnIcon') nextYearBtnIcon: string = "fa:chevron-right";
  @Input('displayJumpToday') displayJumpToday: boolean = true;
  @Input('displayJumpSelected') displayJumpSelected: boolean = true;


  // values
  @Input('selectedDate') selectedDate: Date = new Date();
  @Input('selectRange') selectRange: boolean = false;
  @Input('selectedRangeEnd') selectedRangeEnd: Date;
  @Input('maxRangeLength') maxRangeLength: number;
  @Input('minDate') minDate: Date;
  @Input('maxDate') maxDate: Date;

  pickedDate: PickDate | null;
  pickedRangeEnd: PickDate | null;
  viewDate: PickDate;
  today: PickDate = PickDateCreate();

  showYearPick: boolean = false;

  ngOnInit() {
    if (this.selectedRangeEnd) this.selectRange = true;
    this.pickedDate = PickDateCreate(this.selectedDate);
    this.viewDate = PickDateCreate();


    if (this.selectedRangeEnd) {
      this.selectRange = true;
      this.select(PickDateCreate(this.selectedRangeEnd));
    }

    if (!this.minDate) this.minDate = new Date(0, 0, 1);
    if (!this.maxDate) this.maxDate = new Date(10000, 0, 1);
  }

  /**
   * activate the given date
   */
  select(date: PickDate) {
    if (!this.selectRange) {
      this.pickedDate = date;
      !!this.onChangeCallback && this.onChangeCallback(this.pickedDate.date);
      return;
    }

    if (this.pickedDate && this.pickedRangeEnd) {
      // reset all
      this.pickedDate = null;
      this.pickedRangeEnd = null;
    } else if (this.pickedDate && !this.pickedRangeEnd) {
      this.pickedRangeEnd = date;
    } else if (!this.pickedDate) {
      this.pickedDate = date;
    }



    // swap values if pickedDate > pickedRangeEnd
    if (
      this.pickedRangeEnd &&
      this.pickedDate &&
      this.pickedRangeEnd.date < this.pickedDate.date
    ) {
      this.pickedRangeEnd.date = [this.pickedDate.date, this.pickedDate.date = this.pickedRangeEnd.date][0]; // swap values
    }

    // if more days selected than maxRangeLength, strip days
    if (
      this.selectRange &&
      this.pickedRangeEnd &&
      this.pickedDate &&
      this.pickedDate.daysInRange(this.pickedRangeEnd) > this.maxRangeLength
    ) {
      const diffDays = this.pickedDate.daysInRange(this.pickedRangeEnd) - this.maxRangeLength;
      this.pickedRangeEnd.moveDays(diffDays * (-1));
    }

    if (this.pickedDate) {
      !!this.onChangeCallback && this.onChangeCallback(this.pickedDate.date);
    }

  }



  /**
   * ui-markers
   */
  isMarked(date: PickDate): boolean {
    if (!this.selectRange && this.pickedDate && this.pickedDate.isSameDay(date)) return true;

    return !!this.pickedDate && !!this.pickedRangeEnd && date.inRange(this.pickedDate, this.pickedRangeEnd);
  }
  isDisabled(day: PickDate): boolean {
    if (
      !this.viewDate.isSameMonthAndYear(day) ||
      day.gt(this.maxDate) ||
      day.lt(this.minDate)
    ) {
      return true;
    }
    return false;
  }



  /**
   * functions to move viewDate
   */
  nextMonth() {
    if (this.showYearPick) this.viewDate = this.viewDate.addYears(1);
    else this.viewDate = this.viewDate.incrementMonths(1);
  }
  prevMonth() {
    if (this.showYearPick) this.viewDate = this.viewDate.addYears(-1);
    else this.viewDate = this.viewDate.incrementMonths(-1);
  }
  gotoToday() {
    this.viewDate = PickDateCreate();
  }
  gotoSelected() {
    this.viewDate = this.pickedDate || PickDateCreate();
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
    this.pickedDate = PickDateCreate(value);
    if (!value) this.pickedDate = PickDateCreate();
  }
  registerOnChange(fn: any) {
    this.onChangeCallback = fn;
  }
  registerOnTouched(fn: any) {
    this.onTouchedCallback = fn;
  }

}
