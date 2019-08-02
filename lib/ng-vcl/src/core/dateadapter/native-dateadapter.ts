import { Inject, Optional, LOCALE_ID } from '@angular/core';
import { VCLDateAdapterDisplayFormats, VCLDateAdapter, VCL_DATE_ADAPTER_WEEKDAY_OFFSET } from './dateadapter';
import { IsoDateAdapterParser, VCL_NATIVE_DATE_ADAPTER_PARSER, VCLNativeDateAdapterParser,  } from './native-dateadapter-parsers';
import { VCL_NATIVE_DATE_ADAPTER_DISPLAY_FORMATS,  } from './native-dateadapter-formats';

export class VCLNativeDateAdapter extends VCLDateAdapter<Date> {

  locale: string;
  weekDayOffset: number;

  constructor(
    @Inject(VCL_NATIVE_DATE_ADAPTER_DISPLAY_FORMATS)
    private formats: VCLDateAdapterDisplayFormats[],
    @Inject(VCL_DATE_ADAPTER_WEEKDAY_OFFSET)
    weekDayOffset: number,
    @Optional()
    @Inject(LOCALE_ID)
    locale?: string,
    @Optional()
    @Inject(VCL_NATIVE_DATE_ADAPTER_PARSER)
    parsers?: VCLNativeDateAdapterParser[],
  ) {
    super();
    this.locale = locale || undefined;

    if (this.locale && Array.isArray(parsers)) {
      this.parser = parsers.find(p =>  p.supportedLocales.some(l => l.toLowerCase() === this.locale.toLowerCase()));
    }

    if (!this.parser) {
      this.parser = new IsoDateAdapterParser();
    }
    this.weekDayOffset = typeof weekDayOffset === 'number' ? weekDayOffset : 0;
  }

  parser: VCLNativeDateAdapterParser;

  isDate(date: any): date is Date {
    return date instanceof Date && isFinite(date.getTime());
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
    return this.createDate(date.getFullYear(), date.getMonth(), date.getDate() + days);
  }

  convertToNativeDate(date: Date): Date {
    return date;
  }

  getDaysInMonth(date: Date): number {
    return this.createDate(date.getFullYear(), date.getMonth() + 1, 0).getDate();
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

  format(date: Date, type: VCLDateAdapterDisplayFormats): string {
    if (type === 'input_date') {
      return this.parser.format(date);
    }

    const dtf = new Intl.DateTimeFormat(this.locale || 'default', {
      timeZone: 'utc',
      ...this.formats[type]
    });
    return dtf.format(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
  }

  parse(date: string): Date {
    return this.parser.parse(date);
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
    const weekNo = Math.ceil((((d.valueOf() - yearStart.valueOf()) / 86400000) + 1) / 7);
    // Return array of year and week number
    return weekNo;
  }

  getDayOfWeekNames(): string[] {
    return Array.from(Array(this.daysPerWeek).keys()).map(i => {
      return this.format(new Date(1970, 0, i + 4 + this.weekDayOffset), 'weekday');
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

  today(): Date {
    return new Date();
  }
}


