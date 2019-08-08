import { Injectable } from '@angular/core';
import { VCLDateAdapterParseFormats, VCLDateAdapterDisplayFormats } from '../interfaces';
import { VCLNativeDateAdapterParser } from './types';
import { extractInt, unsupportedFormat, pad } from './utils';

const REGEX_DATE = /^\s*(3[01]|[12][0-9]|0?[1-9])\.(1[012]|0?[1-9])\.(\d{4})\s*$/;
const REGEX_MONTH = /^\s*(1[012]|0?[1-9])\.(\d{4})\s*$/;
const REGEX_TIME = /^\s*([0-9]|0[0-9]|1[0-9]|2[0-3]):([0-5][0-9])\s*$/;

@Injectable({
  providedIn: 'root'
})
export class NativeDateAdapterParserDE implements VCLNativeDateAdapterParser {
  supportedLocales = ['de', 'de-AT', 'de-CH', 'de-DE', 'de-LI', 'de-LU'];

  parse(value: string, format: VCLDateAdapterParseFormats): Date {
    if (format === 'input_date') {
      const result = extractInt(value, REGEX_DATE);
      return result ? new Date(result[2], result[1], result[0]) : undefined;
    } else if (format === 'input_month') {
      const result = extractInt(value, REGEX_MONTH);
      return result ? new Date(result[1], result[0], 1) : undefined;
    } else if (format === 'input_time') {
      const result = extractInt(value, REGEX_TIME);
      const now = new Date();
      return result ? new Date(now.getFullYear(), now.getMonth(), now.getDate(), result[0], result[1], 0) : undefined;
    } else {
      unsupportedFormat(format);
    }
  }
  format(date: Date, format: VCLDateAdapterDisplayFormats): string {
    if (format === 'input_date') {
      return `${pad(date.getDate(), 2)}.${pad(date.getMonth(), 2)}.${pad(date.getFullYear(), 4)}`;
    } else if (format === 'input_month') {
      return `${pad(date.getMonth(), 2)}.${pad(date.getFullYear(), 4)}`;
    } else if (format === 'input_time') {
      return `${pad(date.getHours(), 2)}:${pad(date.getMinutes(), 2)}`;
    } else {
      unsupportedFormat(format);
    }
  }
}




