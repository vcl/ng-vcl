import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, OnChanges, SimpleChanges, OnInit } from '@angular/core';
import { VCLDateAdapter, VCLDateRange } from '../../core/index';
import { VCLCalendarMonth, VCLCalendarDay } from '../interfaces';
import { VCLCreateCalendarMonthOptions, VCLCalendarWeek } from '../interfaces';
import { compare } from '../utils';

@Component({
  selector: 'vcl-calendar-view-month',
  templateUrl: 'month.component.html',
  exportAs: 'vclCalendarViewMonth',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CalendarViewMonthComponent<VCLDate> implements OnChanges, OnInit {

  constructor(
    private dateAdapter: VCLDateAdapter<VCLDate>,
  ) { }

  @Input()
  showWeekOfTheYear = false;

  @Input()
  value?: VCLDate | VCLDate[] | VCLDateRange<VCLDate>;

  @Input()
  viewDate: VCLDate;

  @Input()
  available?: VCLDate | VCLDate[] | VCLDateRange<VCLDate>;

  @Input()
  unavailable?: VCLDate | VCLDate[] | VCLDateRange<VCLDate>;

  @Input()
  disabled?: boolean;

  @Input()
  minDate?: VCLDate;

  @Input()
  maxDate?: VCLDate;

  @Output()
  viewDateChange = new EventEmitter<VCLDate>();

  @Output()
  valueChange = new EventEmitter<VCLDate | VCLDateRange<VCLDate>>();

  @Output()
  labelClick = new EventEmitter<any>();

  calendarMonth: VCLCalendarMonth<VCLDate>;
  weekdayLabels = this.dateAdapter.getDayOfWeekNames();

  private updateCalendar() {
    let date = this.viewDate || this.dateAdapter.today();
    if (!this.dateAdapter.isDate(date)) {
      date = this.dateAdapter.today();
    }

    this.calendarMonth = this.createCalendarMonth(date, {
      selectedDate: this.value,
      available: this.available,
      unavailable: this.unavailable,
      min: this.minDate,
      max: this.maxDate,
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.value || changes.viewDate || changes.minDate || changes.maxDate) {
      if (changes.value && changes.value.currentValue && (!this.viewDate)) {
        this.viewDate = this.dateAdapter.toDate(changes.value.currentValue);
      }
      this.updateCalendar();
    }
  }

  ngOnInit() {
    if (!this.calendarMonth) {
      this.updateCalendar();
    }
  }

  onLabelClick() {
    this.labelClick.emit();
  }

  onGoToPrevMonth() {
    this.viewDate = this.dateAdapter.addMonths(this.calendarMonth.date, -1);
    this.updateCalendar();
    this.viewDateChange.emit(this.viewDate);
  }

  onGoToNextMonth() {
    this.viewDate = this.dateAdapter.addMonths(this.calendarMonth.date, 1);
    this.viewDateChange.emit(this.viewDate);
    this.updateCalendar();
  }

  onSelectDay(day: VCLCalendarDay<VCLDate>) {
    if (this.disabled || day.disabled) {
      return;
    }
    this.value = day.date;
    this.updateCalendar();
    this.valueChange.emit(this.value);
  }

  createCalendarMonth(date: VCLDate, opts?: VCLCreateCalendarMonthOptions<VCLDate>): VCLCalendarMonth<VCLDate> {
    const weeks: VCLCalendarWeek<VCLDate>[] = [];

    const daysInMonth = this.dateAdapter.getDaysInMonth(date);

    const beginWeekday = this.dateAdapter.getFirstWeekdayOfMonth(date);
    const lastWeekday = this.dateAdapter.getLastWeekdayOfMonth(date);

    // Calculate days of prev month shown in the first week
    let leakingDaysBefore =  beginWeekday - this.dateAdapter.weekDayOffset;
    // Check for negative numbers
    leakingDaysBefore = leakingDaysBefore < 0 ? this.dateAdapter.daysPerWeek + leakingDaysBefore : leakingDaysBefore;
    // Calculate days of next month shown in the last week
    let leakingDaysAfter = this.dateAdapter.daysPerWeek - lastWeekday - 1 + this.dateAdapter.weekDayOffset;
    // Strip if its a whole week
    leakingDaysAfter = leakingDaysAfter % this.dateAdapter.daysPerWeek;

    let days: VCLCalendarDay<VCLDate>[];
    let week: VCLCalendarWeek<VCLDate>;

    for (let dayInMonth = 1 - leakingDaysBefore, dayInWeek = 0; dayInMonth <= daysInMonth + leakingDaysAfter; dayInMonth++) {
      if (!week || !days) {
        const weekDate = this.dateAdapter.createDate(this.dateAdapter.getYear(date), this.dateAdapter.getMonth(date), dayInMonth);
        days = [];
        week = {
          date: weekDate,
          days,
          label: this.dateAdapter.getWeekOfTheYear(weekDate).toString()
        };
      }

      const inMonth = dayInMonth >= 1 && dayInMonth <= daysInMonth;
      const dayDate = this.dateAdapter.createDate(this.dateAdapter.getYear(date), this.dateAdapter.getMonth(date), dayInMonth);

      let available = compare(this.dateAdapter, opts.available, dayDate, 'date');
      let unavailable = compare(this.dateAdapter, opts.unavailable, dayDate, 'date');

      // Prefer direct date hits over range hits on conflicts
      // Prefer available over unavailable when both are direct date hits
      if (available && unavailable) {
        if (typeof available === 'boolean' && typeof unavailable === 'string' ) {
          unavailable = false;
        } else if (typeof available === 'string' && typeof unavailable === 'boolean' ) {
          available = false;
        } else {
          unavailable = false;
        }
      }

      let disabled = !!unavailable;

      if (!unavailable && opts.min) {
        if (this.dateAdapter.compareDate(dayDate, opts.min) <= 0) {
          disabled = true;
        }
      }

      if (!unavailable && opts.max) {
        if (this.dateAdapter.compareDate(dayDate, opts.max) >= 0) {
          disabled = true;
        }
      }

      let selected = compare(this.dateAdapter, opts.selectedDate, dayDate, 'date');
      // Disabled days cannot be selected
      if (disabled && selected) {
        selected = false;
      }

      days.push({
        date: dayDate,
        inMonth,
        label: this.dateAdapter.format(dayDate, 'day'),
        selected,
        unavailable: !!unavailable,
        disabled,
        available: !!available,
        isToday: this.dateAdapter.compareDate(dayDate, this.dateAdapter.today()) === 0
      });

      if (dayInWeek === (this.dateAdapter.daysPerWeek - 1)) {
        weeks.push(week);
        week = undefined;
        days = undefined;
        dayInWeek = 0;
      } else {
        dayInWeek++;
      }
    }

    return {
      date,
      label: this.dateAdapter.format(date, 'month'),
      yearAndMonthLabel: this.dateAdapter.format(date, 'yearAndMonth'),
      weeks,
    };
  }
}
