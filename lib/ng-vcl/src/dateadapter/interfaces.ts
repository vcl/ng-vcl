export interface VCLDateRange<VCLDate> {
  start: VCLDate;
  end: VCLDate;
}

export type VCLDateAdapterParseFormats = 'date' | 'time' | 'month';
export type VCLDateAdapterDisplayFormats = 'date' | 'time' | 'month' | 'yearMonth' | 'yearMonthLong' | 'day' | 'weekday' | 'month' | 'year' | 'minute' | 'hour';
export type VCLDateAdapterPattern = 'date' | 'time' | 'month';
