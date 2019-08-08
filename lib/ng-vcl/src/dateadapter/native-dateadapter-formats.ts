import { InjectionToken, Provider } from '@angular/core';
import { VCLDateAdapterDisplayFormats } from './interfaces';

export const VCL_NATIVE_DATE_ADAPTER_DISPLAY_FORMATS = new InjectionToken('VCL_NATIVE_DATE_ADAPTER_DISPLAY_FORMATS');

const DEFAULT_DISPLAY_FORMATS: {[key in VCLDateAdapterDisplayFormats]: Intl.DateTimeFormatOptions } = {
  day: {
    day: 'numeric'
  },
  month: {
    month: 'long'
  },
  year: {
    year: 'numeric'
  },
  yearAndMonth: {
    year: 'numeric',
    month: 'long'
  },
  weekday: {
    weekday: 'short'
  },
  date: {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit'
  },
  time: {
    hour: 'numeric',
    minute: '2-digit',
  },
  minute: {
    minute: 'numeric',
  },
  hour: {
    hour: 'numeric',
  },
  input_date: null,
  input_time: null,
  input_month: null,
};

export const VCL_NATIVE_DATE_ADAPTER_DISPLAY_FORMATS_DEFAULT_PROVIDER: Provider = {
  provide: VCL_NATIVE_DATE_ADAPTER_DISPLAY_FORMATS,
  useValue: DEFAULT_DISPLAY_FORMATS
};
