import { Injectable, InjectionToken } from '@angular/core';

export const VCL_NATIVE_DATE_ADAPTER_PARSER = new InjectionToken('VCL_NATIVE_DATE_ADAPTER_PARSER');

export interface VCLNativeDateAdapterParser {
  readonly supportedLocales: ReadonlyArray<string>;
  parse(date: string): Date | undefined;
  format(date: Date): string;
}

export abstract class NativeDateAdapterRegexParser implements VCLNativeDateAdapterParser {

  abstract readonly regex: RegExp;
  abstract readonly supportedLocales: string[];
  abstract readonly groupYear: number;
  abstract readonly groupMonth: number;
  abstract readonly groupDay: number;

  constructor() { }

  parse(date: string) {
    const result = this.regex.exec(date);
    if (result) {
      const day = parseInt(result[this.groupDay], 10);
      const month = parseInt(result[this.groupMonth], 10);
      const year = parseInt(result[this.groupYear], 10);
      if (isFinite(year) && isFinite(month) && isFinite(day)) {
        return new Date(year, month - 1, day);
      }
    }
    return undefined;
  }
  format(date: Date) {
    const dtf = new Intl.DateTimeFormat(this.supportedLocales[0], {
      timeZone: 'utc',
      year: 'numeric',
      month: '2-digit',
      day: '2-digit'
    });
    return dtf.format(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
  }
}

@Injectable({
  providedIn: 'root'
})
export class NativeDateAdapterParserDE extends NativeDateAdapterRegexParser {
  regex = /^\s*(3[01]|[12][0-9]|0?[1-9])\.(1[012]|0?[1-9])\.(\d{4})\s*$/;
  supportedLocales = ['de', 'de-AT', 'de-CH', 'de-DE', 'de-LI', 'de-LU'];
  groupDay = 1;
  groupMonth = 2;
  groupYear = 3;
}

@Injectable({
  providedIn: 'root'
})
export class NativeDateAdapterParserEN extends NativeDateAdapterRegexParser {
  regex = /^\s*(1[012]|0?[1-9])\/(3[01]|[12][0-9]|0?[1-9])\/(\d{4})\s*$/;
  supportedLocales = ['en', 'en-US'];
  groupMonth = 1;
  groupDay = 2;
  groupYear = 3;
}

@Injectable({
  providedIn: 'root'
})
export class NativeDateAdapterParserENGB extends NativeDateAdapterRegexParser {
  regex = /^\s*(3[01]|[12][0-9]|0?[1-9])\/(1[012]|0?[1-9])\/(\d{4})\s*$/;
  supportedLocales = ['en-gb'];
  groupYear = 3;
  groupMonth = 2;
  groupDay = 1;
}

@Injectable({
  providedIn: 'root'
})
export class IsoDateAdapterParser implements VCLNativeDateAdapterParser {
  supportedLocales: [];
  parse(date: string) {
    const result = new Date(Date.parse(date));
    if (isNaN(result.getTime())) {
      return undefined;
    }
    return result;
  }

  format(date: Date): string {
    return date.toISOString().substring (0, 10);
  }
}




