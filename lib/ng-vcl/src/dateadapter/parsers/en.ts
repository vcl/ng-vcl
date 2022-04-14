import { Injectable } from '@angular/core';
import { DateAdapterBaseParseFormats, DateAdapterBaseDisplayFormats } from '../interfaces';
import { DateAdapterParser } from './types';
import { extractInt, unsupportedFormat, pad, intlFallback } from './utils';

const REGEX_DATE = /^\s*(1[012]|0?[1-9])\/(3[01]|[12][0-9]|0?[1-9])\/(\d{4})\s*$/;
const REGEX_MONTH = /^\s*(1[012]|0?[1-9])\/(\d{4})\s*$/;

function parseENTime(time: string) {
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

function formatENTime(date: Date) {
  const hours = pad((date.getHours() % 12) || 12, 2);
  const minutes = pad(date.getMinutes(), 2);
  const ampm = date.getHours() >= 12 ? 'PM' : 'AM';
  return `${hours}:${minutes} ${ampm}`;
}

@Injectable({
  providedIn: 'root'
})
export class DateAdapterParserEN implements DateAdapterParser {
  supportedLocales = ['en', 'en-us'];

  parse(value: string, format: DateAdapterBaseParseFormats): Date {
    if (format === 'date') {
      const result = extractInt(value, REGEX_DATE);
      return result ? new Date(result[2], result[0] - 1, result[1]) : undefined;
    } else if (format === 'month') {
      const result = extractInt(value, REGEX_MONTH);
      return result ? new Date(result[1], result[0] - 1, 1) : undefined;
    } else if (format === 'time') {
      return parseENTime(value);
    } else {
      unsupportedFormat(format);
    }
  }
  format(date: Date, format: DateAdapterBaseDisplayFormats): string {
    switch(format) {
      case 'date': {
        return `${pad(date.getMonth() + 1, 2)}/${pad(date.getDate(), 2)}/${pad(date.getFullYear(), 4)}`;
      }
      case 'month': {
        return `${date.toLocaleString(
          this.supportedLocales[0], { month: 'long' }
        )}`;
      }
      case 'time': {
        return formatENTime(date);
      }
      default: {
        return intlFallback('en-us', date, format);
      }
    }
  }
  pattern(format: DateAdapterBaseParseFormats): string {
    switch(format) {
      case 'date': {
        return `MM/DD/YYYY`;
      }
      case 'month': {
        return `MM/YYYY`;
      }
      case 'time': {
        return `hh:mm am/pm`;
      }
    }
  }
}
