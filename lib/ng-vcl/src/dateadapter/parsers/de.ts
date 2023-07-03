import { Injectable } from '@angular/core';

import {
  DateAdapterBaseParseFormats,
  DateAdapterBaseDisplayFormats,
} from '../interfaces';

import { DateAdapterParser } from './types';
import { extractInt, unsupportedFormat, pad, intlFallback } from './utils';

const REGEX_DATE =
  /^\s*(3[01]|[12][0-9]|0?[1-9])\.(1[012]|0?[1-9])\.(\d{4})\s*$/;
const REGEX_MONTH = /^\s*(1[012]|0?[1-9])\.(\d{4})\s*$/;
const REGEX_TIME = /^\s*([0-9]|0[0-9]|1[0-9]|2[0-3]):([0-5][0-9])\s*$/;

@Injectable({
  providedIn: 'root',
})
export class DateAdapterParserDE implements DateAdapterParser {
  supportedLocales = ['de', 'de-AT', 'de-CH', 'de-DE', 'de-LI', 'de-LU'];

  parse(value: string, format: DateAdapterBaseParseFormats): Date {
    if (format === 'date') {
      const result = extractInt(value, REGEX_DATE);
      return result ? new Date(result[2], result[1] - 1, result[0]) : undefined;
    } else if (format === 'month') {
      const result = extractInt(value, REGEX_MONTH);
      return result ? new Date(result[1], result[0] - 1, 1) : undefined;
    } else if (format === 'time') {
      const result = extractInt(value, REGEX_TIME);
      const now = new Date();
      return result
        ? new Date(
            now.getFullYear(),
            now.getMonth(),
            now.getDate(),
            result[0],
            result[1],
            0
          )
        : undefined;
    } else {
      unsupportedFormat(format);
    }
  }
  format(date: Date, format: DateAdapterBaseDisplayFormats): string {
    switch (format) {
      case 'date': {
        return `${pad(date.getDate(), 2)}.${pad(date.getMonth() + 1, 2)}.${pad(
          date.getFullYear(),
          4
        )}`;
      }
      case 'month': {
        return `${date.toLocaleString(this.supportedLocales[0], {
          month: 'long',
        })}`;
      }
      case 'time': {
        return `${pad(date.getHours(), 2)}:${pad(date.getMinutes(), 2)}`;
      }
      case 'weekday': {
        return new Intl.DateTimeFormat('de', {
          weekday: 'short',
        }).format(date);
      }
      default: {
        return intlFallback('de', date, format);
      }
    }
  }
  pattern(format: DateAdapterBaseParseFormats): string {
    switch (format) {
      case 'date': {
        return `DD.MM.JJJJ`;
      }
      case 'month': {
        return `MM.JJJJ`;
      }
      case 'time': {
        return `HH:mm`;
      }
    }
  }
}
