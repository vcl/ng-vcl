import { Injectable } from '@angular/core';
import { VCLDateAdapter } from '../dateadapter/index';
import { VCLCalendarHandler, CalendarComponent, VCLCalendarView, VCLCalendar } from '../calendar/index';

@Injectable()
export class DatepickerTimeHandler<VCLDate> extends VCLCalendarHandler<VCLDate> {
  constructor(
    protected dateAdapter: VCLDateAdapter<VCLDate>,
  ) {
    super();
  }

  readonly mode = 'time';

  init(calendar: VCLCalendar<VCLDate>, ) {
    calendar.setView('hours');
  }

  handleValueChange(calendar: VCLCalendar<VCLDate>, source: VCLCalendarView, date: VCLDate) {
    if (source === 'hours') {
      calendar.setView('minutes');
      calendar.setValue(date, false);
    } else if (source === 'minutes') {
      calendar.setView('hours');
      calendar.setValue(date, true);
    } else {
      calendar.setView('hours');
    }
  }

  handleViewDateChange(calendar: VCLCalendar<VCLDate>, source: VCLCalendarView, viewDate: VCLDate) {
    calendar.setViewDate(viewDate, true);
  }

  handleLabelClick(calendar: VCLCalendar<VCLDate>, source: VCLCalendarView) {
    if (source === 'hours') {
      calendar.setView('minutes');
    } else {
      calendar.setView('hours');
    }
  }
}
