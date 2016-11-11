import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';




/**
 * this is a helper-class so that the Date-logic
 * is not mashed with the components logic
 */
class PickDate {


  date: Date;

  constructor(date: Date = new Date()) {
    this.date = date;
  }

  getMonthString(): string {
    const monthNr = this.date.getMonth();
    return [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December'
    ][monthNr];
  }

  getYearString(): string {
    return this.date.getFullYear().toString();
  }


  /**
   * gets the first day of the month for the given date's month.
   */
  getFirstDateOfMonth(date: Date): Date {
    return new Date(
      date.getFullYear(), date.getMonth(), 1,
      date.getHours(), date.getMinutes(), date.getSeconds()
    );
  }


  addDays(date: Date, amount = 1): Date {
    return new Date(date.getTime() + 24 * 60 * 60 * 1000 * amount);
  }

  /**
    * Gets the number of days in the month for the given date's month
    */
  getNumberOfDaysInMonth(date: Date): number {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  }


  getLastDateOfMonth(date: Date): Date {
    const dayNr = this.getNumberOfDaysInMonth(date);
    return new Date(
      date.getFullYear(), date.getMonth(), dayNr,
      date.getHours(), date.getMinutes(), date.getSeconds()
    );
  }

  /**
    * Gets whether two dates have the same month and year
    */
  isSameMonthAndYear(date: PickDate): boolean {
    return this.date.getFullYear() === date.date.getFullYear() && this.date.getMonth() === date.date.getMonth();
  }

  /**
   * Gets whether two dates are the same day (not not necesarily the same time)
   */
  isSameDay(date: PickDate): boolean {
    return this.date.getDate() == date.date.getDate() && this.isSameMonthAndYear(date);
  }

  /**
   * returns a set of days which are in the given month or
   * are in the same weekNumber as a day in the given month
   */
  getMonthBlock(): PickDate[][] {

    let ret = [];


    const firstDayOfMonth = this.getFirstDateOfMonth(this.date);
    const lastDayOfMonth = this.getLastDateOfMonth(this.date);
    const daysOfMonth = this.getNumberOfDaysInMonth(this.date);

    // all days of this month
    for (let i = 0; i < daysOfMonth; i++) {
      ret.push(this.addDays(firstDayOfMonth, i));
    }

    // days of prev month but in same week
    let weekDay = firstDayOfMonth.getDay();
    let minus = 0;
    while (weekDay > 1) {
      minus--;
      ret.unshift(this.addDays(firstDayOfMonth, minus));
      weekDay--;
    }

    // days of next month but in same week
    let addDays = 7 - lastDayOfMonth.getDay();
    let plus = 0;
    while (addDays > 0) {
      plus++;
      ret.push(this.addDays(lastDayOfMonth, plus));
      addDays--;
    }

    ret = ret.map(date => new PickDate(date));
    const blocks = [];

    // split in weeks
    let temparray, chunk = 7;
    for (let i = 0, j = ret.length; i < j; i += chunk) {
      temparray = ret.slice(i, i + chunk);
      blocks.push(temparray);
    }
    return blocks;
  }


}






@Component({
  selector: 'vcl-date-picker',
  templateUrl: 'date-picker.component.html'
})
export class DatePickerComponent implements OnInit {
  dates: any[];
  yearMeta: any = {};
  currentMeta: any[];
  availableColors: boolean[];



  @Input('displayJumpToday') displayJumpToday: boolean = false;
  @Input('displayJumpSelected') displayJumpSelected: boolean = false;
  @Input('highlightToday') highlightToday: boolean = true;
  @Input('displayWeekNumbers') displayWeekNumbers: boolean = false;
  @Input('closeOnSelect') closeOnSelect: boolean = false;
  @Input('selectRange') selectRange: boolean = false;


  @Input('selectedTime') selectedTime: Date = new Date();
  @Input('selectedRangeEnd') selectedRangeEnd: Date; // if selectRange==true, this will be used



  isDate: PickDate = new PickDate(this.selectedTime);
  isDateRangeEnd: PickDate = new PickDate(this.selectedRangeEnd);


  viewDate: PickDate = new PickDate();

  constructor() {
  }


  ngOnInit(): void {





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

  private setYearMeta(year: number): void {
    if (!this.yearMeta[year]) {
      this.yearMeta[year] = this.createYearMeta(year);
    }
    this.currentMeta = this.yearMeta[year];
  }

  private createYearMeta(year: number): any[] {
    return this.dates.map(dateMeta => new Object());
  }

  @Input()
  prevYearBtnIcon: string = "fa:chevron-left";

  @Input()
  nextYearBtnIcon: string = "fa:chevron-right";

  @Input()
  closeBtnIcon: string = "fa:times";

  @Input()
  datesPerRow: number = 3;

  @Input()
  expandable: boolean = false;

  @Input()
  expanded: boolean = true;
  @Output()
  expandedChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  @Input()
  maxYear: number = Number.MAX_SAFE_INTEGER;

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

  static dateNames: string[] = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ];

  static dateNamesShort: string[] = DatePickerComponent.dateNames
    .map(name => name.substr(0, 3));


*/


}
