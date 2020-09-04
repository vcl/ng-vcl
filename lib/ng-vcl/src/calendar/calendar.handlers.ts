import { Injectable } from '@angular/core';
import { DateAdapterBase } from '../dateadapter/index';
import { VCLCalendarView, VCLCalendarHandler, VCLCalendar } from './interfaces';

export abstract class DateHandler<VCLDate> extends VCLCalendarHandler<VCLDate> {
  constructor(
    protected dateAdapter: DateAdapterBase<VCLDate>,
  ) {
    super();
  }

  readonly abstract mode: string;

  init(calendar: VCLCalendar<VCLDate>, ) {
    calendar.setView('month');
  }

  handleValueChange(calendar: VCLCalendar<VCLDate>, source: VCLCalendarView, date: VCLDate) {
    if (source === 'years') {
      calendar.setView('year');
      calendar.setViewDate(date, true);
    } else if (source === 'year') {
      calendar.setView('month');
      calendar.setViewDate(date, true);
    } else if (source === 'month') {
      this.handleMonthValueChange(calendar, date);
    } else {
      calendar.setView('month');
    }
  }

  abstract handleMonthValueChange(calendar: VCLCalendar<VCLDate>, date: VCLDate): void;

  handleViewDateChange(calendar: VCLCalendar<VCLDate>, source: VCLCalendarView, viewDate: VCLDate) {
    calendar.setViewDate(viewDate, true);
  }

  handleLabelClick(calendar: VCLCalendar<VCLDate>, source: VCLCalendarView) {
    if (source === 'year') {
      calendar.setView('years');
    } else if (source === 'month') {
      calendar.setView('year');
    } else {
      calendar.setView('month');
    }
  }
}

@Injectable()
export class DateSingleHandler<VCLDate> extends DateHandler<VCLDate> {
  constructor(
    dateAdapter: DateAdapterBase<VCLDate>,
  ) {
    super(dateAdapter);
  }

  mode = 'date';

  handleMonthValueChange(calendar: VCLCalendar<VCLDate>, date: VCLDate) {
    calendar.setValue(date, true);
    calendar.setViewDate(date, true);
  }
}

@Injectable()
export class DateMultipleHandler<VCLDate> extends DateHandler<VCLDate> {
  constructor(
    dateAdapter: DateAdapterBase<VCLDate>,
  ) {
    super(dateAdapter);
  }

  mode = 'multiple';

  handleMonthValueChange(calendar: VCLCalendar<VCLDate>, date: VCLDate) {
    if (!this.dateAdapter.isDateArray(calendar.value)) {
      calendar.setValue([date], true);
    } else {
      const idx = calendar.value.findIndex(d => this.dateAdapter.isSameDay(d, date));
      if (idx >= 0) {
        const tmpValue = [...calendar.value];
        tmpValue.splice(idx, 1);
        calendar.setValue(tmpValue, true);
      } else {
        const maxSelectableDates = typeof calendar.maxSelectableDates === 'number' ? calendar.maxSelectableDates : Infinity;
        // If less than max selectable items
        if (calendar.value.length < maxSelectableDates) {
          // Add date element as the last element
          calendar.setValue([...calendar.value, date], true);
        } else {
          // Remove element and add date as the last element
          calendar.setValue([...([...calendar.value].splice(1)), date], true);
        }
      }
    }
    calendar.setViewDate(date, true);
  }
}

@Injectable()
export class DateRangeHandler<VCLDate> extends DateHandler<VCLDate> {
  constructor(
    dateAdapter: DateAdapterBase<VCLDate>,
  ) {
    super(dateAdapter);
  }

  mode = 'range';

  init(calendar: VCLCalendar<VCLDate>) {
    super.init(calendar);
  }

  handleMonthValueChange(calendar: VCLCalendar<VCLDate>, date: VCLDate) {
    if (this.dateAdapter.isPartialRange(calendar.value)) {
      calendar.setValue(this.dateAdapter.createRange(calendar.value.start, date), true);
    } else {
      calendar.setValue(this.dateAdapter.createRange(date, null), false);
    }
    calendar.setViewDate(date, true);
  }
}

export abstract class MonthHandler<VCLDate> extends VCLCalendarHandler<VCLDate> {
  constructor(
    protected dateAdapter: DateAdapterBase<VCLDate>,
  ) {
    super();
  }

  readonly abstract mode: string;

  init(calendar: VCLCalendar<VCLDate>, ) {
    calendar.setView('year');
  }

  handleValueChange(calendar: VCLCalendar<VCLDate>, source: VCLCalendarView, date: VCLDate) {
    if (source === 'years') {
      calendar.setView('year');
      calendar.setViewDate(date, true);
    } else if (source === 'year') {
      this.handleYearValueChange(calendar, date);
    } else {
      calendar.setView('year');
    }
  }

  abstract handleYearValueChange(calendar: VCLCalendar<VCLDate>, date: VCLDate): void;

  handleViewDateChange(calendar: VCLCalendar<VCLDate>, source: VCLCalendarView, viewDate: VCLDate) {
    calendar.setViewDate(viewDate, true);
  }

  handleLabelClick(calendar: VCLCalendar<VCLDate>, source: VCLCalendarView) {
    if (source === 'year') {
      calendar.setView('years');
    } else {
      calendar.setView('year');
    }
  }
}

@Injectable()
export class MonthSingleHandler<VCLDate> extends MonthHandler<VCLDate> {
  constructor(
    dateAdapter: DateAdapterBase<VCLDate>,
  ) {
    super(dateAdapter);
  }

  mode = 'month';

  handleYearValueChange(calendar: VCLCalendar<VCLDate>, date: VCLDate) {
    calendar.setValue(date, true);
  }
}

@Injectable()
export class MonthMultipleHandler<VCLDate> extends MonthHandler<VCLDate> {
  constructor(
    dateAdapter: DateAdapterBase<VCLDate>,
  ) {
    super(dateAdapter);
  }

  mode = 'month-multiple';

  handleYearValueChange(calendar: VCLCalendar<VCLDate>, date: VCLDate) {
    if (!this.dateAdapter.isDateArray(calendar.value)) {
      calendar.setValue([date], true);
    } else {
      const idx = calendar.value.findIndex(d => this.dateAdapter.isSameMonth(d, date));
      if (idx >= 0) {
        const tmpValue = [...calendar.value];
        tmpValue.splice(idx, 1);
        calendar.setValue(tmpValue, true);
      } else {
        // If less than max selectable items
        const maxSelectableDates = typeof calendar.maxSelectableDates === 'number' ? calendar.maxSelectableDates : Infinity;
        if (calendar.value.length < maxSelectableDates) {
          // Add date element as the last element
          calendar.setValue([...calendar.value, date], true);
        } else {
          // Remove element and add date as the last element
          calendar.setValue([...([...calendar.value].splice(1)), date], true);
        }
      }
    }
  }
}

@Injectable()
export class MonthRangeHandler<VCLDate> extends MonthHandler<VCLDate> {
  constructor(
    dateAdapter: DateAdapterBase<VCLDate>,
  ) {
    super(dateAdapter);
  }

  mode = 'month-range';

  init(calendar: VCLCalendar<VCLDate>) {
    super.init(calendar);
  }

  handleYearValueChange(calendar: VCLCalendar<VCLDate>, date: VCLDate) {
    if (this.dateAdapter.isPartialRange(calendar.value)) {
      calendar.setValue(this.dateAdapter.createRange(calendar.value.start, date), true);
    } else {
      calendar.setValue(this.dateAdapter.createRange(date, null), false);
    }
  }
}
