export interface VCLDateRange<VCLDate> {
  start: VCLDate;
  end: VCLDate;
}

export type DateAdapterBaseParseFormats = 'date' | 'time' | 'month';
export type DateAdapterBaseDisplayFormats =
  | 'date'
  | 'time'
  | 'month'
  | 'yearMonth'
  | 'yearMonthLong'
  | 'day'
  | 'weekday'
  | 'month'
  | 'year'
  | 'minute'
  | 'hour';
export type DateAdapterBasePattern = 'date' | 'time' | 'month';
