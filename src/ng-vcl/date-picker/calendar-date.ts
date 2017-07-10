/**
 * this is a helper-class so that the Date-logic
 * is not mashed with the components logic
 */
const MONTH_NAMES = [
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

const WEEK_DAYS = [
  'Mo',
  'Tu',
  'We',
  'Th',
  'Fr',
  'Sa',
  'Su'
];

export class CalendarDate {

  date: Date;

  constructor(date?: Date) {
    if (!(date instanceof Date)) {
      date = new Date;
    }
    this.date = date;
  }

  getWeekDays(): string[] {
    return WEEK_DAYS;
  }

  getMonthString(): string {
    const monthNr = this.date.getMonth();
    return MONTH_NAMES[monthNr];
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
      12, date.getMinutes(), date.getSeconds()
    );
  }

  moveToYear(year: number): CalendarDate {
    const newDate = new Date(
      year, this.date.getMonth(), 1,
      this.date.getHours(), this.date.getMinutes(), this.date.getSeconds()
    );
    return new CalendarDate(newDate);
  }

  addYears(amount = 1): CalendarDate {
    const newDate = new Date(
      this.date.getFullYear() + amount, this.date.getMonth(), 1,
      this.date.getHours(), this.date.getMinutes(), this.date.getSeconds()
    );
    return new CalendarDate(newDate);
  }

  addDays(date: Date, amount = 1): Date {
    return new Date(date.getTime() + 24 * 60 * 60 * 1000 * amount);
  }

  moveDays(amount) {
    this.date = this.addDays(this.date, amount);
  }


  /**
   * returns true if this is greater than that
   */
  gt(date: Date): boolean {
    return this.date > date;
  }

  /**
   * returns true if this is lower than that
   */
  lt(date: Date): boolean {
    return this.date < date;
  }

  /**
   * Gets a new date incremented by the given number of months. Number of months can be negative.
   * If the date of the given month does not match the target month, the date will be set to the
   * last day of the month.
   */
  incrementMonths(numberOfMonths: number): CalendarDate {
    const dateInTargetMonth = new Date(this.date.getFullYear(), this.date.getMonth() + numberOfMonths, 1);
    const numberOfDaysInMonth = this.getNumberOfDaysInMonth(dateInTargetMonth);
    if (numberOfDaysInMonth < this.date.getDate()) {
      dateInTargetMonth.setDate(numberOfDaysInMonth);
    } else {
      dateInTargetMonth.setDate(this.date.getDate());
    }

    return new CalendarDate(dateInTargetMonth);
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
  isSameMonthAndYear(date: CalendarDate = new CalendarDate()): boolean {
    return this.date.getFullYear() === date.date.getFullYear() && this.date.getMonth() === date.date.getMonth();
  }

  /**
   * Gets whether two dates are the same day (not not necesarily the same time)
   */
  isSameDay(date: CalendarDate): boolean {
    return this.date.getDate() == date.date.getDate() && this.isSameMonthAndYear(date);
  }

  isToday(): boolean {
    return this.isSameDay(new CalendarDate());
  }

  isInYear(year: number) {
    return this.date.getFullYear() === year;
  }


  /**
   * returns a set of days which are in the given month or
   * are in the same weekNumber as a day in the given month
   */
  getMonthBlock(): CalendarDate[][] {

    let dates: Date[] = [];

    const firstDayOfMonth = this.getFirstDateOfMonth(this.date);
    const lastDayOfMonth = this.getLastDateOfMonth(this.date);
    const daysOfMonth = this.getNumberOfDaysInMonth(this.date);

    // all days of this month
    for (let i = 0; i < daysOfMonth; i++) {
      dates.push(this.addDays(firstDayOfMonth, i));
    }

    // days of prev month but in same week
    let weekDay = firstDayOfMonth.getDay();
    let minus = 0;
    while (weekDay > 1) {
      minus--;
      dates.unshift(this.addDays(firstDayOfMonth, minus));
      weekDay--;
    }

    // days of next month but in same week
    let addDays = 7 - lastDayOfMonth.getDay();
    let plus = 0;
    while (addDays > 0 && lastDayOfMonth.getDay() !== 0) {
      plus++;
      dates.push(this.addDays(lastDayOfMonth, plus));
      addDays--;
    }

    const ret = dates.map(date => new CalendarDate(date));
    const blocks: CalendarDate[][] = [];

    // split in weeks
    let chunk = 7;
    for (let i = 0, j = ret.length; i < j; i += chunk) {
      const temparray = ret.slice(i, i + chunk);
      if (temparray.length == 7) blocks.push(temparray);
    }
    return blocks;
  }

  getYearsBlock() {
    const years: number[] = [];
    let currentYear = this.date.getFullYear() - 12;
    while (years.length < 25) {
      years.push(currentYear);
      currentYear++;
    }

    // split rows
    const ret: number[][] = [];
    let chunk = 5;
    for (let i = 0, j = years.length; i < j; i += chunk) {
      const temparray = years.slice(i, i + chunk);
      if (temparray.length == 5) ret.push(temparray);
    }

    return ret;
  }

  getWeekNumber(): number {
    // Copy date so don't modify original
    let d = new Date(+this.date);
    d.setHours(0, 0, 0);
    // Set to nearest Thursday: current date + 4 - current day number
    // Make Sunday's day number 7
    d.setDate(d.getDate() + 4 - (d.getDay() || 7));
    // Get first day of year
    let yearStart = new Date(d.getFullYear(), 0, 1);
    // Calculate full weeks to nearest Thursday
    let weekNo = Math.ceil((((d.valueOf() - yearStart.valueOf()) / 86400000) + 1) / 7);
    // Return array of year and week number
    return weekNo;
  }

  /**
   * returns true if this is between the given dates
   */
  inRange(from: CalendarDate, to: CalendarDate): boolean {
    if (!(from instanceof CalendarDate) || !(to instanceof CalendarDate)) {
      return false;
    }

    return (this.date >= from.date && this.date <= to.date)
           || this.isSameDay(from) || this.isSameDay(to);
  }

  daysInRange(to: CalendarDate): number {
    const oneDay = 24 * 60 * 60 * 1000;
    return Math.round(Math.abs((this.date.getTime() - to.date.getTime()) / (oneDay))) + 1;
  }
}
