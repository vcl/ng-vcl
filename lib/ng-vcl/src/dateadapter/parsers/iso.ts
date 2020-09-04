import { DateAdapterBaseParseFormats, DateAdapterBaseDisplayFormats } from '../interfaces';
import { DateAdapterParser } from './types';
import { extractInt, unsupportedFormat, pad, intlFallback } from './utils';

const REGEX_DATE = /^\s*(\d{4})-(1[012]|0?[1-9])-(3[01]|[12][0-9]|0?[1-9])\s*$/;
const REGEX_MONTH = /^\s*(\d{4})-(1[012]|0?[1-9])\s*$/;
const REGEX_TIME = /^\s*([0-9]|0[0-9]|1[0-9]|2[0-3]):([0-5][0-9])\s*$/;

export class DateAdapterParserISO implements DateAdapterParser {
  supportedLocales = []; // Default parser when no locale matches

  parse(value: string, format: DateAdapterBaseParseFormats): Date {
    if (format === 'date') {
      const result = extractInt(value, REGEX_DATE);
      return result ? new Date(result[0], result[1], result[2]) : undefined;
    } else if (format === 'month') {
      const result = extractInt(value, REGEX_MONTH);
      return result ? new Date(result[0], result[1], 1) : undefined;
    } else if (format === 'time') {
      const result = extractInt(value, REGEX_TIME);
      const now = new Date();
      return result ? new Date(now.getFullYear(), now.getMonth(), now.getDate(), result[0], result[1], 0) : undefined;
    } else {
      unsupportedFormat(format);
    }
  }
  format(date: Date, format: DateAdapterBaseDisplayFormats): string {
    switch(format) {
      case "date": {
        return date.toISOString().slice(0, 10);
      }
      case "month": {
        return date.toISOString().slice(0, 7);
      }
      case "time": {
        return `${pad(date.getHours(), 2)}:${pad(date.getMinutes(), 2)}`;
      }
      default: {
        return intlFallback('en-us', date, format);
      }
    }
  }
  pattern(format: DateAdapterBaseParseFormats): string {
    switch(format) {
      case "date": {
        return `YYYY-MM-DD`;
      }
      case "month": {
        return `YYYY-MM`;
      }
      case "time": {
        return `HH:mm`;
      }
    }  
  }      
}
