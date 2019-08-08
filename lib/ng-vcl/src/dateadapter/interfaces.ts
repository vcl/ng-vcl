export interface VCLDateRange<VCLDate> {
  start: VCLDate;
  end: VCLDate;
}

export type VCLDateAdapterParseFormats = 'input_date' | 'input_time' | 'input_month';
export type VCLDateAdapterDisplayFormats = VCLDateAdapterParseFormats | 'day' | 'month' | 'year' | 'yearMonth' | 'yearMonthLong' | 'weekday' | 'date' | 'time' | 'minute' | 'hour';
