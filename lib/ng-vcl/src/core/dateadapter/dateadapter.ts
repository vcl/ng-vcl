import { Inject, InjectionToken } from '@angular/core';

function invalidDateParameter(): never {
  throw new Error('Invalid Date Parameter');
}

// export const VCL_LOCALE = new InjectionToken('VCL_LOCALE');
export const VCL_DATE_ADAPTER = new InjectionToken('VCL_DATE_ADAPTER');
export const VCL_DATE_ADAPTER_WEEKDAY_OFFSET = new InjectionToken('VCL_DATE_ADAPTER_WEEKDAY_OFFSET');

export interface VCLDateRange<VCLDate> {
  start: VCLDate;
  end: VCLDate;
}

export type VCLDateAdapterDisplayFormats = 'day' | 'month' | 'year' | 'yearAndMonth' | 'weekday' | 'date' | 'input_date';

export abstract class VCLDateAdapter<VCLDate> {

  daysPerWeek = 7;

  abstract locale?: string;
  abstract weekDayOffset: number;

  abstract isDate(date: any): date is VCLDate;
  abstract today(): VCLDate;
  abstract clone(date: VCLDate): VCLDate;
  abstract parse(date: string): VCLDate | undefined;
  abstract addMonths(date: VCLDate, months: number): VCLDate;
  abstract addDays(date: VCLDate, days: number): VCLDate;
  abstract getDaysInMonth(date: VCLDate): number;
  abstract getYear(date: VCLDate): number;
  abstract getMonth(date: VCLDate): number;
  abstract getDay(date: VCLDate): number;
  abstract getDayOfWeek(date: VCLDate): number;
  abstract getWeekOfTheYear(date: VCLDate): number;
  abstract getDayOfWeekNames(): string[];
  abstract createDate(year: number, month: number, day: number): VCLDate;

  getFirstWeekdayOfMonth(date: VCLDate): number {
    const firstOfMonthDate =  this.createDate(this.getYear(date), this.getMonth(date), 1);
    return this.getDayOfWeek(firstOfMonthDate);
  }

  getLastWeekdayOfMonth(date: VCLDate): number {
    const daysInMonth = this.getDaysInMonth(date);
    const lastOfMonthDate =  this.createDate(this.getYear(date), this.getMonth(date), daysInMonth);
    return this.getDayOfWeek(lastOfMonthDate);
  }

  /**
   * Compares two dates
   * @param date1 The first date to compare.
   * @param date2 The second date to compare.
   * @returns 0 if  equal, less than 0 if the first date is earlier, greater than 0 if the first date is later.
   */
  compareDate(date1: VCLDate, date2: VCLDate): number {
    return this.getYear(date1) - this.getYear(date2) ||
           this.getMonth(date1) - this.getMonth(date2) ||
           this.getDay(date1) - this.getDay(date2);
  }

  isSameMonth(date1: VCLDate, date2: VCLDate): boolean {
    return this.getMonth(date1) === this.getMonth(date2) &&
           this.getYear(date1) === this.getYear(date2);
  }
  isSameYear(date1: VCLDate, date2: VCLDate): boolean {
    return this.getYear(date1) === this.getYear(date2);
  }

  addYears(date: VCLDate, years: number): VCLDate {
    return this.addMonths(date, years * 12);
  }

  isSameDay(date1: VCLDate, date2: VCLDate): boolean {
    return this.compareDate(date1, date2) === 0;
  }

  abstract format(date: VCLDate, format: VCLDateAdapterDisplayFormats): string;

  isDateArray(date: any): date is VCLDate[] {
    return Array.isArray(date) && date.every(d => this.isDate(d));
  }

  isRange(date: any): date is VCLDateRange<VCLDate> {
    return typeof date === 'object' && date && this.isDate((date as any).start) && this.isDate((date as any).end);
  }

  toDate(date: any): VCLDate {
    if (this.isDate(date)) {
      return date;
    } else if (this.isRange(date)) {
      return date.start;
    } else if (this.isDateArray(date)) {
      if (date.length > 0) {
        return date[0];
      }
    }
    invalidDateParameter();
  }
}
