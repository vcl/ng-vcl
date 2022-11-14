import { VCLDateRange } from '../dateadapter/index';

export type VCLCalendarView = 'month' | 'year' | 'years' | 'hours' | 'minutes';

export type VCLCalendarSelection =
  | boolean
  | 'range'
  | 'range-start'
  | 'range-end'
  | 'range-start-end'
  | 'range-partial';

export interface VCLCalendarBase<VCLDate> {
  readonly date: VCLDate;
  readonly label: string;
}

export interface VCLCalendarYearsYear<VCLDate>
  extends VCLCalendarBase<VCLDate> {
  readonly isCurrentYear: boolean;
  readonly selected: VCLCalendarSelection;
}

export interface VCLCalendarYears<VCLDate> extends VCLCalendarBase<VCLDate> {
  readonly years: ReadonlyArray<ReadonlyArray<VCLCalendarYearsYear<VCLDate>>>;
}

export interface VCLCalendarYearMonth<VCLDate>
  extends VCLCalendarBase<VCLDate> {
  readonly isCurrentMonth: boolean;
  readonly selected: VCLCalendarSelection;
  readonly disabled: boolean;
  readonly class: string;
}

export interface VCLCalendarYear<VCLDate> extends VCLCalendarBase<VCLDate> {
  readonly months: ReadonlyArray<ReadonlyArray<VCLCalendarYearMonth<VCLDate>>>;
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
  readonly class: string;
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

export interface VCLCalendarDateModifier<VCLDate> {
  match: VCLDate | VCLDate[] | VCLDateRange<VCLDate>;
  view?: VCLCalendarView;
  class?: string;
  disabled?: boolean;
}

export abstract class VCLCalendarHandler<VCLDate> {
  abstract readonly mode: string;
  abstract init(calendar: VCLCalendar<VCLDate>): void;
  abstract handleValueChange(
    calendar: VCLCalendar<VCLDate>,
    source: VCLCalendarView,
    date: VCLDate
  ): void;
  abstract handleViewDateChange(
    calendar: VCLCalendar<VCLDate>,
    source: VCLCalendarView,
    viewDate: VCLDate
  ): void;
  abstract handleLabelClick(
    calendar: VCLCalendar<VCLDate>,
    source: VCLCalendarView
  ): void;
}

export interface VCLCalendar<VCLDate> {
  readonly value: VCLDate | VCLDate[] | VCLDateRange<VCLDate> | undefined;
  readonly view: VCLCalendarView;
  readonly maxSelectableDates?: number;
  readonly disabled: boolean;
  setValue(
    value: VCLDate | VCLDate[] | VCLDateRange<VCLDate>,
    propagate: boolean
  ): void;
  setViewDate(date: VCLDate, propagate: boolean): void;
  setView(view: VCLCalendarView): void;
}
