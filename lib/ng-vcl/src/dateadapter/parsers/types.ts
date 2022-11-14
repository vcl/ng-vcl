import { InjectionToken } from '@angular/core';
import {
  DateAdapterBaseParseFormats,
  DateAdapterBaseDisplayFormats,
  DateAdapterBasePattern,
} from '../interfaces';

export interface DateAdapterParser {
  readonly supportedLocales: ReadonlyArray<string>;
  parse(date: string, format: DateAdapterBaseParseFormats): Date | undefined;
  format(date: Date, format: DateAdapterBaseDisplayFormats): string;
  pattern(format: DateAdapterBasePattern): string;
}

export const VCL_DATE_ADAPTER_PARSER = new InjectionToken(
  'VCL_DATE_ADAPTER_PARSER'
);
