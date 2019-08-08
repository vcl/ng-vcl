import { VCLDateRange } from '../dateadapter/index';

export type VCLCalendarView = 'month' | 'year' | 'years' | 'hours' | 'minutes';

export type VCLCalendarSelection = boolean | 'range' | 'range-start' | 'range-end' | 'range-start-end' | 'range-partial';


export interface VCLCalendarBase<VCLDate> {
  readonly date: VCLDate;
  readonly label: string;
}

export interface VCLCalendarYears<VCLDate> extends VCLCalendarBase<VCLDate> {
  readonly years: ReadonlyArray<ReadonlyArray<VCLCalendarBase<VCLDate> & {
    readonly isCurrentYear: boolean;
  }>>;
}

export interface VCLCalendarYear<VCLDate> extends VCLCalendarBase<VCLDate> {
  readonly months: ReadonlyArray<ReadonlyArray<VCLCalendarBase<VCLDate> & {
    readonly isCurrentMonth: boolean;
    readonly selected: VCLCalendarSelection;
  }>>;
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
  readonly selected: VCLCalendarSelection;
  readonly disabled: boolean;
  readonly available: boolean;
  readonly unavailable: boolean;
}

export interface VCLCalendarHours {
  readonly use24hTime: boolean;
  readonly hours: ReadonlyArray<ReadonlyArray<VCLCalendarHour>>;
}
export interface VCLCalendarMinutes {
  readonly minutes: ReadonlyArray<ReadonlyArray<VCLCalendarMinute>>;
}

export interface VCLCalendarHour {
  hour: number;
  label: string;
}

export interface VCLCalendarMinute {
  minute: number;
  label: string;
}

export interface VCLCreateCalendarMonthOptions<VCLDate> {
  selectedDate?: VCLDate | VCLDate[] | VCLDateRange<VCLDate>;
  available?: VCLDate | VCLDate[] | VCLDateRange<VCLDate>;
  unavailable?: VCLDate | VCLDate[] | VCLDateRange<VCLDate>;
  min?: VCLDate;
  max?: VCLDate;
}

export interface VCLCreateCalendarYearOptions<VCLDate> {
  selectedDate?: VCLDate | VCLDate[] | VCLDateRange<VCLDate>;
  min?: VCLDate;
  max?: VCLDate;
}
