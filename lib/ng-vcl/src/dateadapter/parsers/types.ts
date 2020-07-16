import { InjectionToken } from '@angular/core';
import { VCLDateAdapterParseFormats, VCLDateAdapterDisplayFormats, VCLDateAdapterPattern } from '../interfaces';

export interface VCLNativeDateAdapterParser {
  readonly supportedLocales: ReadonlyArray<string>;
  parse(date: string, format: VCLDateAdapterParseFormats): Date | undefined;
  format(date: Date, format: VCLDateAdapterDisplayFormats): string;
  pattern(format: VCLDateAdapterPattern): string;
}

export const VCL_NATIVE_DATE_ADAPTER_PARSER = new InjectionToken('VCL_NATIVE_DATE_ADAPTER_PARSER');
