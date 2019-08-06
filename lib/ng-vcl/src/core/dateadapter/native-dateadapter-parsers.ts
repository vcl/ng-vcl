import { Injectable, InjectionToken } from '@angular/core';
import { VCLDateAdapterParseFormats, VCLDateAdapterDisplayFormats, VCLDateAdapterDisplayInputFormats } from './dateadapter';

export const VCL_NATIVE_DATE_ADAPTER_PARSER = new InjectionToken('VCL_NATIVE_DATE_ADAPTER_PARSER');

function unsupportedFormat(format: string): never {
  throw new Error('Unsupported format: ' + format);
}

export interface VCLNativeDateAdapterParser {
  readonly supportedLocales: ReadonlyArray<string>;
  parse(date: string, format: VCLDateAdapterParseFormats): Date | undefined;
  format(date: Date, format: VCLDateAdapterDisplayInputFormats): string;
}

function parseDate(date: string, {regex, groupYear, groupMonth, groupDay}: {regex: RegExp; groupYear: number; groupMonth: number; groupDay: number }) {
  const result = regex.exec(date);
  if (result) {
    const day = parseInt(result[groupDay], 10);
    const month = parseInt(result[groupMonth], 10);
    const year = parseInt(result[groupYear], 10);
    if (isFinite(year) && isFinite(month) && isFinite(day)) {
      return new Date(year, month - 1, day);
    }
  }
  return undefined;
}

function parseMonth(date: string, {regex, groupYear, groupMonth}: {regex: RegExp; groupYear: number; groupMonth: number }) {
  const result = regex.exec(date);
  if (result) {
    const month = parseInt(result[groupMonth], 10);
    const year = parseInt(result[groupYear], 10);
    if (isFinite(year) && isFinite(month)) {
      return new Date(year, month - 1);
    }
  }
  return undefined;
}

function parseIsoTime(time: string) {
  const result = /^(?:(?:([01]?\d|2[0-3]):)?([0-5]?\d):)?([0-5]?\d)$/.exec(time);
  if (result) {
    const hour = parseInt(result[2], 10);
    const minute = parseInt(result[3], 10);
    if (isFinite(hour) && isFinite(minute)) {
      return new Date(2019, 0, 1, hour, minute, 0);
    }
  }
  return undefined;
}

function parseUSTime(time: string) {
  const result = /((1[0-2]|0?[1-9]):([0-5][0-9]) ?([AaPp][Mm]))/.exec(time);
  if (result) {
    const hour = parseInt(result[2], 10) % 12;
    const minute = parseInt(result[3], 10);
    const pm = result[4].toLowerCase() === 'pm';
    if (isFinite(hour) && isFinite(minute)) {
      return new Date(2019, 0, 1, pm ? hour + 12 : hour, minute, 0);
    }
  }
  return undefined;
}

function formatDate(date: Date, locale: string) {
  const dtf = new Intl.DateTimeFormat(locale, {
    timeZone: 'utc',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit'
  });
  return dtf.format(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
}

function formatMonth(date: Date, locale: string) {
  const dtf = new Intl.DateTimeFormat(locale, {
    timeZone: 'utc',
    year: 'numeric',
    month: '2-digit'
  });
  return dtf.format(Date.UTC(date.getFullYear(), date.getMonth(), 1));
}

function formatTime(date: Date, locale: string) {
  const dtf = new Intl.DateTimeFormat(locale, {
    timeZone: 'utc',
    hour: 'numeric',
    minute: 'numeric',
  });
  return dtf.format(Date.UTC(2019, 0, 1, date.getHours(), date.getMinutes(), date.getSeconds()));
}

@Injectable({
  providedIn: 'root'
})
export class NativeDateAdapterParserDE implements VCLNativeDateAdapterParser {
  supportedLocales = ['de', 'de-AT', 'de-CH', 'de-DE', 'de-LI', 'de-LU'];

  parse(date: string, format: VCLDateAdapterParseFormats): Date {
    if (format === 'input_date') {
      return parseDate(date, {
        regex: /^\s*(3[01]|[12][0-9]|0?[1-9])\.(1[012]|0?[1-9])\.(\d{4})\s*$/,
        groupDay: 1,
        groupMonth: 2,
        groupYear: 3,
      });
    } else if (format === 'input_month') {
      return parseMonth(date, {
        regex: /^\s*(1[012]|0?[1-9])\.(\d{4})\s*$/,
        groupMonth: 1,
        groupYear: 2,
      });
    } else if (format === 'input_time') {
      return parseIsoTime(date);
    } else {
      unsupportedFormat(format);
    }
  }
  format(date: Date, format: VCLDateAdapterDisplayFormats): string {
    if (format === 'input_date') {
      return formatDate(date, 'de');
    } else if (format === 'input_month') {
      return formatMonth(date, 'de');
    } else if (format === 'input_time') {
      return formatTime(date, 'de');
    } else {
      unsupportedFormat(format);
    }

  }
}

@Injectable({
  providedIn: 'root'
})
export class NativeDateAdapterParserENGB implements VCLNativeDateAdapterParser {
  supportedLocales = ['en-gb'];

  parse(date: string, format: VCLDateAdapterParseFormats): Date {
    if (format === 'input_date') {
      return parseDate(date, {
        regex: /^\s*(3[01]|[12][0-9]|0?[1-9])\/(1[012]|0?[1-9])\/(\d{4})\s*$/,
        groupDay: 1,
        groupMonth: 2,
        groupYear: 3,
      });
    } else if (format === 'input_month') {
      return parseMonth(date, {
        regex: /^\s*(1[012]|0?[1-9])\/(\d{4})\s*$/,
        groupMonth: 1,
        groupYear: 2,
      });
    } else if (format === 'input_time') {
      return parseIsoTime(date);
    } else {
      unsupportedFormat(format);
    }
  }
  format(date: Date, format: VCLDateAdapterDisplayFormats): string {
    if (format === 'input_date') {
      return formatDate(date, 'en-gb');
    } else if (format === 'input_month') {
      return formatMonth(date, 'en-gb');
    } else if (format === 'input_time') {
      return formatTime(date, 'en-gb');
    } else {
      unsupportedFormat(format);
    }
  }
}

@Injectable({
  providedIn: 'root'
})
export class NativeDateAdapterParserEN implements VCLNativeDateAdapterParser {
  supportedLocales = ['en', 'en-us'];

  parse(date: string, format: VCLDateAdapterParseFormats): Date {
    if (format === 'input_date') {
      return parseDate(date, {
        regex: /^\s*(1[012]|0?[1-9])\/(3[01]|[12][0-9]|0?[1-9])\/(\d{4})\s*$/,
        groupMonth: 1,
        groupDay: 2,
        groupYear: 3,
      });
    } else if (format === 'input_month') {
      return parseMonth(date, {
        regex: /^\s*(1[012]|0?[1-9])\/(\d{4})\s*$/,
        groupMonth: 1,
        groupYear: 2,
      });
    } else if (format === 'input_time') {
      return parseUSTime(date);
    } else {
      unsupportedFormat(format);
    }
  }
  format(date: Date, format: VCLDateAdapterDisplayFormats): string {
    if (format === 'input_date') {
      return formatDate(date, 'en-us');
    } else if (format === 'input_month') {
      return formatMonth(date, 'en-us');
    } else if (format === 'input_time') {
      return formatTime(date, 'en-us');
    } else {
      unsupportedFormat(format);
    }
  }
}
