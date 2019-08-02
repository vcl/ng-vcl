import { Injectable } from '@angular/core';
import { VCLDateAdapter, VCLDateRange } from '../core/index';
import { VCLCalendarWeek, VCLCalendarDay, VCLCalendarYear, VCLCalendarMonth, VCLCreateCalendarMonthOptions, VCLCalendarYears } from './interfaces';

@Injectable()
export class CalendarService<VCLDate> {

  constructor(private adapter: VCLDateAdapter<VCLDate>) { }

  createCalendarMonth(date: VCLDate, opts?: VCLCreateCalendarMonthOptions<VCLDate>): VCLCalendarMonth<VCLDate> {
    const weeks: VCLCalendarWeek<VCLDate>[] = [];

    const daysInMonth = this.adapter.getDaysInMonth(date);

    const beginWeekday = this.adapter.getFirstWeekdayOfMonth(date);
    const lastWeekday = this.adapter.getLastWeekdayOfMonth(date);

    // Calculate days of prev month shown in the first week
    let leakingDaysBefore =  beginWeekday - this.adapter.weekDayOffset;
    // Check for negative numbers
    leakingDaysBefore = leakingDaysBefore < 0 ? this.adapter.daysPerWeek + leakingDaysBefore : leakingDaysBefore;
    // Calculate days of next month shown in the last week
    let leakingDaysAfter = this.adapter.daysPerWeek - lastWeekday - 1 + this.adapter.weekDayOffset;
    // Strip if its a whole week
    leakingDaysAfter = leakingDaysAfter % this.adapter.daysPerWeek;

    let days: VCLCalendarDay<VCLDate>[];
    let week: VCLCalendarWeek<VCLDate>;

    for (let dayInMonth = 1 - leakingDaysBefore, dayInWeek = 0; dayInMonth <= daysInMonth + leakingDaysAfter; dayInMonth++) {
      if (!week || !days) {
        const weekDate = this.adapter.createDate(this.adapter.getYear(date), this.adapter.getMonth(date), dayInMonth);
        days = [];
        week = {
          date: weekDate,
          days,
          label: this.adapter.getWeekOfTheYear(weekDate).toString()
        };
      }

      const inMonth = dayInMonth >= 1 && dayInMonth <= daysInMonth;
      const dayDate = this.adapter.createDate(this.adapter.getYear(date), this.adapter.getMonth(date), dayInMonth);

      let available = this.isInDateContainerRange(opts.available, dayDate);
      let unavailable = this.isInDateContainerRange(opts.unavailable, dayDate);

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
        if (this.adapter.compareDate(dayDate, opts.min) <= 0) {
          disabled = true;
        }
      }

      if (!unavailable && opts.max) {
        if (this.adapter.compareDate(dayDate, opts.max) >= 0) {
          disabled = true;
        }
      }

      let selected = this.isInDateContainerRange(opts.selectedDate, dayDate);
      // Disabled days cannot be selected
      if (disabled && selected) {
        selected = false;
      }

      days.push({
        date: dayDate,
        inMonth,
        label: this.adapter.format(dayDate, 'day'),
        selected,
        unavailable: !!unavailable,
        disabled,
        available: !!available,
        isToday: this.adapter.compareDate(dayDate, this.adapter.today()) === 0
      });

      if (dayInWeek === (this.adapter.daysPerWeek - 1)) {
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
      label: this.adapter.format(date, 'month'),
      yearAndMonthLabel: this.adapter.format(date, 'yearAndMonth'),
      weeks,
    };
  }

  createCalendarYears(date: VCLDate): VCLCalendarYears<VCLDate> {
    const years = Array.from(Array(25).keys()).map(i => {
      const yearDate = this.adapter.createDate(this.adapter.getYear(date) + (i - 12), 0, 1);
      return {
        label: this.adapter.format(yearDate, 'year'),
        date: yearDate,
        isCurrentYear: this.adapter.isSameYear(this.adapter.today(), yearDate),
      };
    });

    const yearStartLabel = this.adapter.format(years[0].date, 'year');

    const yearEndLabel = this.adapter.format(years[years.length - 1].date, 'year');

    return {
      date,
      years,
      label: `${yearStartLabel} - ${yearEndLabel}`
    };
  }

  createCalendarYear(date: VCLDate): VCLCalendarYear<VCLDate> {
    const months = Array.from(Array(12).keys()).map(i => {
      const monthDate = this.adapter.createDate(this.adapter.getYear(date), i, 1);
      return {
        label: this.adapter.format(monthDate, 'month'),
        date: monthDate,
        isCurrentMonth: this.adapter.isSameMonth(this.adapter.today(), monthDate),
      };
    });
    return {
      date,
      months,
      label: this.adapter.format(date, 'year'),
    };
  }

  private isInDateContainerRange(cnt: VCLDate | VCLDate[] | VCLDateRange<VCLDate>, date: VCLDate): boolean | 'range' | 'range-start' | 'range-end' {
    if (this.adapter.isRange(cnt) && !this.adapter.isSameDay(cnt.start, cnt.end)) {
      if (this.adapter.compareDate(date, cnt.start) > 0 && this.adapter.compareDate(date, cnt.end) < 0) {
        return 'range';
      } else if (this.adapter.compareDate(cnt.start, date) === 0) {
        return 'range-start';
      } else if (this.adapter.compareDate(cnt.end, date) === 0) {
        return 'range-start';
      }
    } else if (this.adapter.isRange(cnt)) {
      return this.adapter.compareDate(cnt.start, date) === 0;
    } else if (this.adapter.isDateArray(cnt)) {
      return cnt.some(d => this.adapter.compareDate(d, date) === 0);
    } else if (this.adapter.isDate(cnt)) {
      return this.adapter.compareDate(cnt, date) === 0;
    } else {
      return false;
    }
  }

}
