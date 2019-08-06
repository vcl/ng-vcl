import { InjectionToken } from '@angular/core';

export const VCL_DATE_ADAPTER = new InjectionToken('VCL_DATE_ADAPTER');
export const VCL_DATE_ADAPTER_WEEKDAY_OFFSET = new InjectionToken('VCL_DATE_ADAPTER_WEEKDAY_OFFSET');

export interface VCLDateRange<VCLDate> {
  start: VCLDate;
  end: VCLDate;
}

export type VCLDateAdapterDisplayInputFormats = 'input_date' | 'input_time' | 'input_month';
export type VCLDateAdapterDisplayFormats = VCLDateAdapterDisplayInputFormats | 'day' | 'month' | 'year' | 'yearAndMonth' | 'weekday' | 'date' | 'time' | 'minute' | 'hour';
export type VCLDateAdapterParseFormats = 'input_date' | 'input_time' | 'input_month';

export abstract class VCLDateAdapter<VCLDate> {

  daysPerWeek = 7;

  abstract locale?: string;
  abstract weekDayOffset: number;

  abstract isDate(date: any): date is VCLDate;
  abstract use24hTime(): boolean;
  abstract today(): VCLDate;
  abstract max(): VCLDate;
  abstract min(): VCLDate;
  abstract clone(date: VCLDate): VCLDate;
  abstract parse(date: string, format: VCLDateAdapterParseFormats): VCLDate | undefined;
  abstract addMonths(date: VCLDate, months: number): VCLDate;
  abstract addDays(date: VCLDate, days: number): VCLDate;
  abstract getDaysInMonth(date: VCLDate): number;
  abstract getYear(date: VCLDate): number;
  abstract getMonth(date: VCLDate): number;
  abstract getDay(date: VCLDate): number;
  abstract getHour(date: VCLDate): number;
  abstract getMinute(date: VCLDate): number;
  abstract getDayOfWeek(date: VCLDate): number;
  abstract getWeekOfTheYear(date: VCLDate): number;
  abstract getDayOfWeekNames(): string[];
  abstract createDate(year: number, month: number, day: number): VCLDate;
  abstract createDateTime(year: number, month: number, day: number, hour: number, minute: number, second: number): VCLDate;
  abstract createTime(hour: number, minute: number, second: number): VCLDate;

  always(): VCLDateRange<VCLDate> {
    return {
      start: this.min(),
      end: this.max()
    };
  }

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
   * @returns 0 if  equal, less than 0 if the first date is earlier, greater than 0 if the first date is later.
   */
  compareDate(date1: VCLDate, date2: VCLDate): number {
    return this.getYear(date1) - this.getYear(date2) ||
           this.getMonth(date1) - this.getMonth(date2) ||
           this.getDay(date1) - this.getDay(date2);
  }

  /**
   * @returns 0 if  equal, less than 0 if the first date's month is earlier, greater than 0 if the first date's month is later.
   */
  compareMonth(date1: VCLDate, date2: VCLDate): number {
    return this.getYear(date1) - this.getYear(date2) ||
           this.getMonth(date1) - this.getMonth(date2);
  }

  /**
   * @returns 0 if  equal, less than 0 if the first date's year is earlier, greater than 0 if the first date's year is later.
   */
  compareYear(date1: VCLDate, date2: VCLDate): number {
    return this.getYear(date1) - this.getYear(date2);
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

  createRange(start: VCLDate, end: VCLDate): VCLDateRange<VCLDate> {
    if (this.compareDate(start, end) <= 0) {
      return {
        start,
        end
      };
    } else {
      return {
        start: end,
        end: start
      };
    }
  }

  toDate(date: any): VCLDate | undefined {
    if (this.isDate(date)) {
      return date;
    } else if (this.isRange(date)) {
      return date.start;
    } else if (this.isDateArray(date)) {
      if (date.length > 0) {
        return date[0];
      }
    }
    return undefined;
  }
}
