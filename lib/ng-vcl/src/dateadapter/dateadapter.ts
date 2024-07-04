import { Inject, Optional, LOCALE_ID, Injectable } from '@angular/core';
import {
  DateAdapterBase,
  VCL_DATE_ADAPTER_WEEKDAY_OFFSET,
} from './dateadapter-base';
import {
  DateAdapterBaseDisplayFormats,
  DateAdapterBaseParseFormats,
  DateAdapterBasePattern,
} from './interfaces';
import {
  VCL_DATE_ADAPTER_PARSER,
  DateAdapterParser,
  DateAdapterParserISO,
} from './parsers/index';

@Injectable({
  providedIn: 'root',
})
export class DateAdapter extends DateAdapterBase<Date> {
  locale: string;
  weekDayOffset: number;

  constructor(
    @Inject(VCL_DATE_ADAPTER_WEEKDAY_OFFSET)
    weekDayOffset: number,
    @Optional()
    @Inject(LOCALE_ID)
    locale?: string,
    @Optional()
    @Inject(VCL_DATE_ADAPTER_PARSER)
    parsers?: DateAdapterParser[]
  ) {
    super();
    this.locale = locale || undefined;
    if (this.locale && Array.isArray(parsers)) {
      this.parser = parsers.find(p =>
        p.supportedLocales.some(
          l => l.toLowerCase() === this.locale.toLowerCase()
        )
      );
    }

    if (!this.parser) {
      this.parser = new DateAdapterParserISO();
    }
    this.weekDayOffset = typeof weekDayOffset === 'number' ? weekDayOffset : 0;
  }

  parser: DateAdapterParser;

  setParser(dateParser: DateAdapterParser, locale: string) {
    this.parser = dateParser;
    this.locale = locale;
  }

  isDate(date: any): date is Date {
    return date instanceof Date && isFinite(date.getTime());
  }

  use24hTime(): boolean {
    return !new Intl.DateTimeFormat(this.locale, {
      hour: 'numeric',
      minute: 'numeric',
    })
      .format(new Date())
      .match(/am|pm/i);
  }

  addMonths(date: Date, months: number): Date {
    const newDate = this.clone(date);
    // Handle overflow when the new month has less days than the old month
    newDate.setMonth(date.getMonth() + months, 1);
    const m = newDate.getMonth();
    newDate.setDate(date.getDate());
    if (newDate.getMonth() !== m) {
      newDate.setDate(0);
    }
    return newDate;
  }

  addDays(date: Date, days: number): Date {
    return this.createDate(
      date.getFullYear(),
      date.getMonth(),
      date.getDate() + days
    );
  }

  convertToNativeDate(date: Date): Date {
    return date;
  }

  getDaysInMonth(date: Date): number {
    return this.createDate(
      date.getFullYear(),
      date.getMonth() + 1,
      0
    ).getDate();
  }

  getYear(date: Date): number {
    return date.getFullYear();
  }

  getMonth(date: Date): number {
    return date.getMonth();
  }

  getDay(date: Date): number {
    return date.getDate();
  }

  getHour(date: Date): number {
    return date.getHours();
  }
  getMinute(date: Date): number {
    return date.getMinutes();
  }

  max(): Date {
    return new Date(8640000000000000);
  }

  min(): Date {
    return new Date(-8640000000000000);
  }

  format(date: Date, type: DateAdapterBaseDisplayFormats): string | undefined {
    if (!this.isDate(date)) {
      return undefined;
    }

    return this.parser.format(date, type);
  }

  pattern(type: DateAdapterBasePattern): string | undefined {
    return this.parser.pattern(type);
  }

  parse(date: string, format: DateAdapterBaseParseFormats): Date {
    return this.parser.parse(date, format);
  }

  getWeekOfTheYear(date: Date): number {
    // Copy date so don't modify original
    const d = this.clone(date);
    d.setHours(0, 0, 0);
    // Set to nearest Thursday: current date + 4 - current day number
    // Make Sunday's day number 7
    d.setDate(d.getDate() + 4 - (d.getDay() || 7));
    // Get first day of year
    const yearStart = this.createDate(d.getFullYear(), 0, 1);
    // Calculate full weeks to nearest Thursday
    const weekNo = Math.ceil(
      ((d.valueOf() - yearStart.valueOf()) / 86400000 + 1) / 7
    );
    // Return array of year and week number
    return weekNo;
  }

  getDayOfWeekNames(): string[] {
    return Array.from(Array(this.daysPerWeek).keys()).map(i => {
      return this.format(
        new Date(1970, 0, i + 4 + this.weekDayOffset),
        'weekday'
      );
    });
  }

  getDayOfWeek(date: Date): number {
    return date.getDay();
  }

  clone(date: Date): Date {
    return new Date(date.getTime());
  }

  createDate(year: number, month: number, day: number): Date {
    return new Date(year, month, day);
  }

  createDateTime(
    year: number,
    month: number,
    day: number,
    hour: number,
    minute: number,
    second: number
  ): Date {
    return new Date(year, month, day, hour, minute, second);
  }

  createTime(hour: number, minute: number, second: number): Date {
    const date = this.today();
    return new Date(
      date.getFullYear(),
      date.getMonth(),
      date.getDate(),
      hour,
      minute,
      second
    );
  }

  today(): Date {
    return new Date();
  }
}
