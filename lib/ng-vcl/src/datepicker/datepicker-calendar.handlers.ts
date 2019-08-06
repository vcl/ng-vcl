import { Injectable } from '@angular/core';
import { VCLDateAdapter } from '../core/index';
import { CalendarHandler, CalendarComponent, VCLCalendarView } from '../calendar/index';

@Injectable()
export class DatepickerTimeHandler<VCLDate> extends CalendarHandler<VCLDate> {
  constructor(
    protected dateAdapter: VCLDateAdapter<VCLDate>,
  ) {
    super();
  }

  readonly mode = 'time';

  init(calendar: CalendarComponent<VCLDate>, ) {
    calendar.view = 'hours';
  }

  handleValueChange(calendar: CalendarComponent<VCLDate>, source: VCLCalendarView, date: VCLDate) {
    if (source === 'hours') {
      calendar.view = 'minutes';
      calendar.value = date;
    } else if (source === 'minutes') {
      calendar.value = date;
      calendar.valueChange.emit(calendar.value);
    } else {
      calendar.view = 'hours';
    }
  }

  handleViewDateChange(calendar: CalendarComponent<VCLDate>, source: VCLCalendarView, viewDate: VCLDate) {
    calendar.viewDate = viewDate;
    calendar.viewDateChange.emit(viewDate);
  }

  handleLabelClick(calendar: CalendarComponent<VCLDate>, source: VCLCalendarView) {
    if (source === 'hours') {
      calendar.view = 'minutes';
    } else if (source === 'minutes') {
      calendar.view = 'hours';
    } else {
      calendar.view = 'hours';
    }
  }
}
