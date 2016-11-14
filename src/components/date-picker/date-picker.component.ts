import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  forwardRef
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

import {PickDate, PickDateCreate} from './PickDate';


export const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => DatePickerComponent),
  multi: true
};

@Component({
  selector: 'vcl-date-picker',
  templateUrl: 'date-picker.component.html',
  styles: [`.hidden{display:none;}`]
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
  @Input('selectedTime') selectedDate: Date = new Date();
  @Input('selectRange') selectRange: boolean = false;
  @Input('selectedRangeEnd') selectedRangeEnd: Date; // if selectRange==true, this will be used
  @Input('maxRangeLength') maxRangeLength: number;
  @Input('minDate') minDate: Date;
  @Input('maxDate') maxDate: Date;

  pickedDate: PickDate;
  pickedRangeEnd: PickDate;
  viewDate: PickDate;


  constructor() {
  }


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


  select(date: PickDate) {
    if (!this.selectRange) {
      this.pickedDate = date;
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
      this.pickedDate.daysInRange(this.pickedRangeEnd) > this.maxRangeLength
    ) {
      const diffDays = this.pickedDate.daysInRange(this.pickedRangeEnd) - this.maxRangeLength;
      this.pickedRangeEnd.moveDays(diffDays * (-1));
    }

    !!this.onChangeCallback && this.onChangeCallback(this.pickedDate);
  }



  isMarked(date: PickDate): boolean {
    if (!this.selectRange && this.pickedDate.isSameDay(date)) return true;

    return date.inRange(this.pickedDate, this.pickedRangeEnd);
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



  nextMonth() {
    this.viewDate = this.viewDate.incrementMonths(1);
  }
  prevMonth() {
    this.viewDate = this.viewDate.incrementMonths(-1);
  }
  gotoToday() {
    this.viewDate = PickDateCreate();
  }
  gotoSelected() {
    this.viewDate = this.pickedDate;
  }



  /**
   * things needed for ControlValueAccessor-Interface
   */
  private onTouchedCallback: (_: any) => void;
  private onChangeCallback: (_: any) => void;

  writeValue(value: Date): void {
    this.pickedDate = PickDateCreate(value);
  }
  registerOnChange(fn: any) {
    this.onChangeCallback = fn;
  }
  registerOnTouched(fn: any) {
    this.onTouchedCallback = fn;
  }


  ngOnInit2(): void {





    /*
        // TODO: Localize here instead of in the template so outside components
        // when calling date-picker.getDate(date) get calendar's localized and used label.
        this.dates = (this.useShortNames ? DatePickerComponent.dateNamesShort :
          DatePickerComponent.dateNames).map(date => ({
            label: date
          }));

        if (!this.maxSelectableItems) {
          this.maxSelectableItems = this.colors && this.colors.length || 1;
        }

        if (this.colors) {
          this.availableColors = this.colors.map(color => true);
        }

        this.setYearMeta(this.currentYear);

        */
  }



  /*


  @Input()
  currentYear: number = new Date().getUTCFullYear();
  @Output()
  currentYearChange: EventEmitter<number> = new EventEmitter<number>();

  @Input()
  useShortNames: boolean = false;

  @Input()
  useAvailableDates: boolean = false;

  @Input()
  colors: string[] = null;

  @Input()
  maxSelectableItems: number;

  @Input()
  minSelectableItems: number = 1;

  @Input()
  prevYearAvailable: boolean = false;

  @Input()
  nextYearAvailable: boolean = false;

  @Output()
  prevYearBtnTap = new EventEmitter();

  @Output()
  nextYearBtnTap = new EventEmitter();

  @Output()
  select = new EventEmitter<string>();
  @Output()
  deselect = new EventEmitter<string>();

  @Input()
  tabindex: number = 0;

  selectDate(date: number, year: number = this.currentYear): void {
    if (!this.isDateAvailable(date, year)) {
      return;
    }

    const dateMeta: any = this.getYearMeta(year)[date];
    if (dateMeta.selected) {
      return this.deselectDate(date, year);
    }

    if (this.maxSelectableItems === 1) {
      this.iterateDateMetas((date, year, mMeta) => {
        mMeta.selected = mMeta === dateMeta;
      });
    } else if (this.getSelectedDates().length < this.maxSelectableItems) {
      dateMeta.selected = true;
    }
    if (dateMeta.selected) {
      this.setDateBackgroundColor(date, year);
      this.notifySelect(`${year}.${date}`);

      if (this.maxSelectableItems === 1 && this.expandable) {
        this.expanded = false;
        this.expandedChange.emit(this.expanded);
      }
    }
  }

  isDateAvailable(date: number, year: number): boolean {
    return this.isDateInBounds(date, year) && (!this.useAvailableDates ||
      this.yearMeta[year] && this.yearMeta[year][date].available);
  }

  isDateInBounds(date: number, year: number): boolean {
    return this.isDateInBounds2(date) && this.isYearInBounds(year);
  }

  isDateInBounds2(date: number): boolean {
    return date > -1 && date < this.dates.length;
  }

  isYearInBounds(year: number): boolean {
    return year > -1 && year < this.maxYear;
  }

  private getYearMeta(year: number): any[] {
    if (!this.yearMeta[year]) {
      this.yearMeta[year] = this.createYearMeta(year);
    }
    return this.yearMeta[year];
  }

  private iterateDateMetas(cb) {
    Object.keys(this.yearMeta).forEach(year => {
      this.yearMeta[year].forEach((dateMeta, date) => {
        cb(date, +year, dateMeta);
      });
    });
  }

  getSelectedDates(): string[] {
    const selectedDates: string[] = [];
    Object.keys(this.yearMeta).forEach(year => {
      this.yearMeta[year].forEach((dateMeta, date) => {
        if (dateMeta.selected) {
          selectedDates.push(`${year}.${date}`);
        }
      });
    });
    return selectedDates;
  }

  private setDateBackgroundColor(date: number, year: number): void {
    const color: string = this.getDateBackgroundColor();
    if (color) {
      const dateMeta: any = this.getYearMeta(year)[date];
      dateMeta.color = color;
    }
  }

  private getDateBackgroundColor(): string {
    const index: number = this.availableColors.findIndex(available => available);
    if (index !== undefined) {
      this.availableColors[index] = false;
      return this.colors[index];
    }
  }

  deselectDate(date: number, year: number = this.currentYear): void {
    if (this.isDateSelected(date, year)) {
      const dateMeta: any = this.getYearMeta(year)[date];
      dateMeta.selected = false;
      this.clearDateBackgroundColor(date, year);
      this.notifyDeselect(`${year}.${date}`);
    }
  }

  isDateSelected(date: number, year: number): boolean {
    return this.isDateInBounds(date, year) &&
      this.yearMeta[year] && this.yearMeta[year][date].selected;
  }

  private clearDateBackgroundColor(date: number, year: number): void {
    if (this.availableColors) {
      const dateMeta: any = this.getYearMeta(year)[date];
      if (dateMeta.color) {
        const index: number = this.colors.indexOf(dateMeta.color);
        this.availableColors[index] = true;
        dateMeta.color = undefined;
      }
    }
  }

  deselectAllDates(): void {
    this.iterateDateMetas((date, year, dateMeta) => {
      dateMeta.selected = false;
      this.clearDateBackgroundColor(date, year);
      this.notifyDeselect(`${year}.${date}`);
    });
  }

  addAvailableDate(date: number, year: number): void {
    if (this.isDateInBounds(date, year)) {
      this.getYearMeta(year)[date].available = true;
    }
  }

  removeAvailableDate(date: number, year: number): void {
    if (this.isDateInBounds(date, year) && this.yearMeta[year]) {
      this.yearMeta[year][date].available = false;
    }
  }

  removeAllAvailableDates(): void {
    this.iterateDateMetas((date, year, dateMeta) => {
      dateMeta.available = false;
    });
  }

  private onPrevYearTap(): void {
    if (this.prevYearAvailable) {
      this.currentYear--;
      this.setYearMeta(this.currentYear);
      this.currentYearChange.emit(this.currentYear);
      this.prevYearBtnTap.emit();
    }
  }

  private onNextYearTap(): void {
    if (this.nextYearAvailable) {
      this.currentYear++;
      this.setYearMeta(this.currentYear);
      this.currentYearChange.emit(this.currentYear);
      this.nextYearBtnTap.emit();
    }
  }

  private onCloseBtnTap(): void {
    if (this.expandable) {
      if (this.expanded) {
        this.expanded = false;
        this.expandedChange.emit(this.expanded);
      }
    }
  }

  private notifySelect(date: string): void {
    this.select.emit(date);
  }

  private notifyDeselect(date: string): void {
    this.deselect.emit(date);
  }

  isCurrentDate(date: number, year: number = this.currentYear): boolean {
    const now: Date = new Date();
    return now.getFullYear() == year && now.getUTCDate() === date;
  }

  getDate(date: number): any {
    return this.isDateInBounds2(date) ? this.dates[date] : null;
  }


  static dateNamesShort: string[] = DatePickerComponent.dateNames
    .map(name => name.substr(0, 3));


*/


}
