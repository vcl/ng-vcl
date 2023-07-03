import { InjectionToken } from '@angular/core';

import {
  DateAdapterBaseParseFormats,
  DateAdapterBaseDisplayFormats,
  VCLDateRange,
  DateAdapterBasePattern,
} from './interfaces';

export const VCL_DATE_ADAPTER = new InjectionToken('VCL_DATE_ADAPTER');
export const VCL_DATE_ADAPTER_WEEKDAY_OFFSET = new InjectionToken(
  'VCL_DATE_ADAPTER_WEEKDAY_OFFSET'
);

export abstract class DateAdapterBase<VCLDate = any> {
  daysPerWeek = 7;

  abstract locale?: string;
  abstract weekDayOffset: number;

  abstract isDate(date: any): date is VCLDate;
  /**
   * Checks if value is an array with valid dates
   */
  isDateArray(date: any): date is VCLDate[] {
    return Array.isArray(date) && date.every(d => this.isDate(d));
  }
  /**
   * Checks if value is a valid date range
   */
  isRange(date: any): date is VCLDateRange<VCLDate> {
    return (
      typeof date === 'object' &&
      date &&
      this.isDate(date.start) &&
      this.isDate(date.end)
    );
  }
  /**
   * Checks if value is a date range consisting of at least a starting date
   */
  isPartialRange(date: any): date is VCLDateRange<VCLDate> {
    return (
      typeof date === 'object' &&
      date &&
      this.isDate(date.start) &&
      (date.end === undefined || date.end === null)
    );
  }

  /**
   * Checks if defined locale is in 24h format
   */
  abstract use24hTime(): boolean;
  /**
   * Returns a date representing today's date
   */
  abstract today(): VCLDate;
  /**
   * Returns a the latest possible date
   */
  abstract max(): VCLDate;
  /**
   * Returns a the earliest possible date
   */
  abstract min(): VCLDate;
  /**
   * Returns a date range that represents all possible dates
   */
  always(): VCLDateRange<VCLDate> {
    return {
      start: this.min(),
      end: this.max(),
    };
  }
  /**
   * Clones a Date
   */
  abstract clone(date: VCLDate): VCLDate;
  /**
   * Parses a date string in specified format and returns a VCLDate instance
   */
  abstract parse(
    date: string,
    format: DateAdapterBaseParseFormats
  ): VCLDate | undefined;
  /**
   * Formats a VCLDate tp the specified format and returns it as a string
   */
  abstract format(
    date: VCLDate,
    format: DateAdapterBaseDisplayFormats
  ): string | undefined;
  abstract pattern(pattern: DateAdapterBasePattern): string | undefined;

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
  abstract createDateTime(
    year: number,
    month: number,
    day: number,
    hour: number,
    minute: number,
    second: number
  ): VCLDate;
  abstract createTime(hour: number, minute: number, second: number): VCLDate;

  getFirstWeekdayOfMonth(date: VCLDate): number {
    const firstOfMonthDate = this.createDate(
      this.getYear(date),
      this.getMonth(date),
      1
    );
    return this.getDayOfWeek(firstOfMonthDate);
  }

  getLastWeekdayOfMonth(date: VCLDate): number {
    const daysInMonth = this.getDaysInMonth(date);
    const lastOfMonthDate = this.createDate(
      this.getYear(date),
      this.getMonth(date),
      daysInMonth
    );
    return this.getDayOfWeek(lastOfMonthDate);
  }

  /**
   * @returns 0 if  equal, less than 0 if the first date is earlier, greater than 0 if the first date is later.
   */
  compareDate(date1: VCLDate, date2: VCLDate): number {
    return (
      this.getYear(date1) - this.getYear(date2) ||
      this.getMonth(date1) - this.getMonth(date2) ||
      this.getDay(date1) - this.getDay(date2)
    );
  }

  /**
   * @returns 0 if  equal, less than 0 if the first date's month is earlier, greater than 0 if the first date's month is later.
   */
  compareMonth(date1: VCLDate, date2: VCLDate): number {
    return (
      this.getYear(date1) - this.getYear(date2) ||
      this.getMonth(date1) - this.getMonth(date2)
    );
  }

  /**
   * @returns 0 if  equal, less than 0 if the first date's year is earlier, greater than 0 if the first date's year is later.
   */
  compareYear(date1: VCLDate, date2: VCLDate): number {
    return this.getYear(date1) - this.getYear(date2);
  }

  isSameMonth(date1: VCLDate, date2: VCLDate): boolean {
    return (
      this.getMonth(date1) === this.getMonth(date2) &&
      this.getYear(date1) === this.getYear(date2)
    );
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

  createRange(start: VCLDate, end?: VCLDate): VCLDateRange<VCLDate> {
    if (!end || this.compareDate(start, end) <= 0) {
      return {
        start,
        end,
      };
    } else {
      return {
        start: end,
        end: start,
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
