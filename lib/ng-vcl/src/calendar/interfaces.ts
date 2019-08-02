import { VCLDateRange } from '../core/index';

export type CalendarView = 'month' | 'year' | 'years';

export interface VCLCalendarBase<VCLDate> {
  readonly date: VCLDate;
  readonly label: string;
}

export interface VCLCalendarYears<VCLDate> extends VCLCalendarBase<VCLDate> {
  readonly years: ReadonlyArray<VCLCalendarBase<VCLDate> & {
    readonly isCurrentYear: boolean;
  }>;
}

export interface VCLCalendarYear<VCLDate> extends VCLCalendarBase<VCLDate> {
  readonly months: ReadonlyArray<VCLCalendarBase<VCLDate> & {
    readonly isCurrentMonth: boolean;
  }>;
}
export interface VCLCalendarMonth<VCLDate> extends VCLCalendarBase<VCLDate> {
  readonly yearAndMonthLabel: string;
  readonly weeks: ReadonlyArray<VCLCalendarWeek<VCLDate>>;
}

export interface VCLCalendarWeek<VCLDate> extends VCLCalendarBase<VCLDate> {
  readonly days: ReadonlyArray<VCLCalendarDay<VCLDate>>;
}

export interface VCLCalendarDay<VCLDate> extends VCLCalendarBase<VCLDate> {
  readonly inMonth: boolean;
  readonly isToday: boolean;
  readonly selected: 'range' | 'range-end' | 'range-start' | boolean;
  readonly disabled: boolean;
  readonly available: boolean;
  readonly unavailable: boolean;
}

export interface VCLCreateCalendarMonthOptions<VCLDate> {
  selectedDate?: VCLDate | VCLDate[] | VCLDateRange<VCLDate>;
  available?: VCLDate | VCLDate[] | VCLDateRange<VCLDate>;
  unavailable?: VCLDate | VCLDate[] | VCLDateRange<VCLDate>;
  min?: VCLDate;
  max?: VCLDate;
}
