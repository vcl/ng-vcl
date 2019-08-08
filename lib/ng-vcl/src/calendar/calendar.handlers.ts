import { Injectable } from '@angular/core';
import { VCLDateAdapter } from '../dateadapter/index';
import { VCLCalendarView } from './interfaces';
import { CalendarComponent, CalendarHandler } from './calendar.component';

export abstract class DateHandler<VCLDate> extends CalendarHandler<VCLDate> {
  constructor(
    protected dateAdapter: VCLDateAdapter<VCLDate>,
  ) {
    super();
  }

  readonly abstract mode: string;

  init(calendar: CalendarComponent<VCLDate>, ) {
    calendar.view = 'month';
  }

  handleValueChange(calendar: CalendarComponent<VCLDate>, source: VCLCalendarView, date: VCLDate) {
    if (source === 'years') {
      calendar.view = 'year';
      calendar.viewDate = date;
    } else if (source === 'year') {
      calendar.view = 'month';
      calendar.viewDate = date;
    } else if (source === 'month') {
      this.handleMonthValueChange(calendar, date);
    } else {
      calendar.view = 'month';
    }
  }

  abstract handleMonthValueChange(calendar: CalendarComponent<VCLDate>, date: VCLDate);

  handleViewDateChange(calendar: CalendarComponent<VCLDate>, source: VCLCalendarView, viewDate: VCLDate) {
    calendar.viewDate = viewDate;
    calendar.viewDateChange.emit(viewDate);
  }

  handleLabelClick(calendar: CalendarComponent<VCLDate>, source: VCLCalendarView) {
    if (source === 'year') {
      calendar.view = 'years';
    } else if (source === 'month') {
      calendar.view = 'year';
    } else {
      calendar.view = 'month';
    }
  }
}

@Injectable()
export class DateSingleHandler<VCLDate> extends DateHandler<VCLDate> {
  constructor(
    dateAdapter: VCLDateAdapter<VCLDate>,
  ) {
    super(dateAdapter);
  }

  mode = 'date';

  handleMonthValueChange(calendar: CalendarComponent<VCLDate>, date: VCLDate) {
    calendar.value = date;
    calendar.valueChange.emit(calendar.value);
    calendar.viewDate = date;
    calendar.viewDateChange.emit(calendar.viewDate);
  }
}

@Injectable()
export class DateMultipleHandler<VCLDate> extends DateHandler<VCLDate> {
  constructor(
    dateAdapter: VCLDateAdapter<VCLDate>,
  ) {
    super(dateAdapter);
  }

  mode = 'multiple';

  handleMonthValueChange(calendar: CalendarComponent<VCLDate>, date: VCLDate) {
    if (!this.dateAdapter.isDateArray(calendar.value)) {
      calendar.value = [date];
    } else {
      const idx = calendar.value.findIndex(d => this.dateAdapter.isSameDay(d, date));
      if (idx >= 0) {
        const tmpValue = [...calendar.value];
        tmpValue.splice(idx, 1);
        calendar.value = tmpValue;
      } else {
        calendar.value = [...calendar.value, date];
      }
    }
    calendar.viewDate = date;
    calendar.viewDateChange.emit(calendar.viewDate);
    calendar.valueChange.emit(calendar.value);
  }
}

@Injectable()
export class DateRangeHandler<VCLDate> extends DateHandler<VCLDate> {
  constructor(
    dateAdapter: VCLDateAdapter<VCLDate>,
  ) {
    super(dateAdapter);
  }

  mode = 'range';

  init(calendar: CalendarComponent<VCLDate>) {
    super.init(calendar);
  }

  handleMonthValueChange(calendar: CalendarComponent<VCLDate>, date: VCLDate) {
    if (this.dateAdapter.isPartialRange(calendar.value)) {
      calendar.value = this.dateAdapter.createRange(calendar.value.start, date);
      calendar.valueChange.emit(calendar.value);
    } else {
      calendar.value = this.dateAdapter.createRange(date, null);
    }
    calendar.viewDate = date;
    calendar.viewDateChange.emit(calendar.viewDate);
  }
}

export abstract class MonthHandler<VCLDate> extends CalendarHandler<VCLDate> {
  constructor(
    protected dateAdapter: VCLDateAdapter<VCLDate>,
  ) {
    super();
  }

  readonly abstract mode: string;

  init(calendar: CalendarComponent<VCLDate>, ) {
    calendar.view = 'year';
  }

  handleValueChange(calendar: CalendarComponent<VCLDate>, source: VCLCalendarView, date: VCLDate) {
    if (source === 'years') {
      calendar.view = 'year';
      calendar.viewDate = date;
    } else if (source === 'year') {
      this.handleYearValueChange(calendar, date);
    } else {
      calendar.view = 'year';
    }
  }

  abstract handleYearValueChange(calendar: CalendarComponent<VCLDate>, date: VCLDate);

  handleViewDateChange(calendar: CalendarComponent<VCLDate>, source: VCLCalendarView, viewDate: VCLDate) {
    calendar.viewDate = viewDate;
    calendar.viewDateChange.emit(viewDate);
  }

  handleLabelClick(calendar: CalendarComponent<VCLDate>, source: VCLCalendarView) {
    if (source === 'year') {
      calendar.view = 'years';
    } else {
      calendar.view = 'year';
    }
  }
}

@Injectable()
export class MonthSingleHandler<VCLDate> extends MonthHandler<VCLDate> {
  constructor(
    dateAdapter: VCLDateAdapter<VCLDate>,
  ) {
    super(dateAdapter);
  }

  mode = 'month';

  handleYearValueChange(calendar: CalendarComponent<VCLDate>, date: VCLDate) {
    calendar.value = date;
    calendar.valueChange.emit(calendar.value);
  }
}

@Injectable()
export class MonthMultipleHandler<VCLDate> extends MonthHandler<VCLDate> {
  constructor(
    dateAdapter: VCLDateAdapter<VCLDate>,
  ) {
    super(dateAdapter);
  }

  mode = 'month-multiple';

  handleYearValueChange(calendar: CalendarComponent<VCLDate>, date: VCLDate) {
    if (!this.dateAdapter.isDateArray(calendar.value)) {
      calendar.value = [date];
    } else {
      const idx = calendar.value.findIndex(d => this.dateAdapter.isSameMonth(d, date));
      if (idx >= 0) {
        const tmpValue = [...calendar.value];
        tmpValue.splice(idx, 1);
        calendar.value = tmpValue;
      } else {
        calendar.value = [...calendar.value, date];
      }
    }
    calendar.valueChange.emit(calendar.value);
  }
}

@Injectable()
export class MonthRangeHandler<VCLDate> extends MonthHandler<VCLDate> {
  constructor(
    dateAdapter: VCLDateAdapter<VCLDate>,
  ) {
    super(dateAdapter);
  }

  mode = 'month-range';

  init(calendar: CalendarComponent<VCLDate>) {
    super.init(calendar);
  }

  handleYearValueChange(calendar: CalendarComponent<VCLDate>, date: VCLDate) {
    if (this.dateAdapter.isPartialRange(calendar.value)) {
      calendar.value = this.dateAdapter.createRange(calendar.value.start, date);
      calendar.valueChange.emit(calendar.value);
    } else {
      calendar.value = this.dateAdapter.createRange(date, null);
    }
  }
}
