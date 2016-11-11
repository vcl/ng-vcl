
/**
 * this is a helper-class so that the Date-logic
 * is not mashed with the components logic
 */
export class PickDate {


  static monthNames = [
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
  static weekDays = [
    'Mo',
    'Di',
    'Mi',
    'Do',
    'Fr',
    'Sa',
    'So'
  ];



  date: Date;

  constructor(date: Date = new Date()) {
    this.date = date;
  }


  getMonthString(): string {
    const monthNr = this.date.getMonth();
    return PickDate.monthNames[monthNr];
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
   * Gets a new date incremented by the given number of months. Number of months can be negative.
   * If the date of the given month does not match the target month, the date will be set to the
   * last day of the month.
   */
  incrementMonths(numberOfMonths: number): PickDate {
    const dateInTargetMonth = new Date(this.date.getFullYear(), this.date.getMonth() + numberOfMonths, 1);
    const numberOfDaysInMonth = this.getNumberOfDaysInMonth(dateInTargetMonth);
    if (numberOfDaysInMonth < this.date.getDate()) {
      dateInTargetMonth.setDate(numberOfDaysInMonth);
    } else {
      dateInTargetMonth.setDate(this.date.getDate());
    }

    return new PickDate(dateInTargetMonth);
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
  isSameMonthAndYear(date: PickDate = new PickDate()): boolean {
    return this.date.getFullYear() === date.date.getFullYear() && this.date.getMonth() === date.date.getMonth();
  }

  /**
   * Gets whether two dates are the same day (not not necesarily the same time)
   */
  isSameDay(date: PickDate): boolean {
    return this.date.getDate() == date.date.getDate() && this.isSameMonthAndYear(date);
  }

  isToday(): boolean {
    return this.isSameDay(new PickDate());
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
    while (addDays > 0 && lastDayOfMonth.getDay() !== 0) {
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
      if (temparray.length == 7) blocks.push(temparray);
    }
    return blocks;
  }


  getWeekDays(): string[] {
    return PickDate.weekDays;
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
  inRange(from: PickDate, to: PickDate): boolean {
    try {
      if (this.isSameDay(from) || this.isSameDay(to)) return true;
    } catch (e) { }

    if (!from || !to) return false;

    return this.date >= from.date && this.date <= to.date;
  }

  dir() { console.dir(this.date); return ''; };
}



export function PickDateCreate(date: Date = new Date()) {
  return new PickDate(date);
}
