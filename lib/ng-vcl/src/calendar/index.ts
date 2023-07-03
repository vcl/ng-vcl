import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { VCLButtonModule } from '../button/index';
import { VCLIconModule } from '../icon/index';

import { CalendarComponent } from './calendar.component';
import {
  DateSingleHandler,
  DateMultipleHandler,
  DateRangeHandler,
  MonthSingleHandler,
  MonthMultipleHandler,
  MonthRangeHandler,
} from './calendar.handlers';
import {
  VCLCalendarView,
  VCLCalendarDateModifier,
  VCLCalendarHandler,
  VCLCalendar,
} from './interfaces';
import { CalendarViewHoursComponent } from './views/hours.component';
import { CalendarViewMinutesComponent } from './views/minutes.component';
import { CalendarViewMonthComponent } from './views/month.component';
import { CalendarViewYearComponent } from './views/year.component';
import { CalendarViewYearsComponent } from './views/years.component';

export {
  CalendarComponent,
  CalendarViewYearsComponent,
  CalendarViewYearComponent,
  CalendarViewMonthComponent,
  CalendarViewHoursComponent,
  CalendarViewMinutesComponent,
  VCLCalendarView,
  VCLCalendarDateModifier,
  VCLCalendarHandler,
  VCLCalendar,
};

@NgModule({
  imports: [CommonModule, VCLButtonModule, VCLIconModule],
  exports: [
    CalendarComponent,
    CalendarViewYearsComponent,
    CalendarViewYearComponent,
    CalendarViewMonthComponent,
    CalendarViewHoursComponent,
    CalendarViewMinutesComponent,
  ],
  declarations: [
    CalendarComponent,
    CalendarViewYearsComponent,
    CalendarViewYearComponent,
    CalendarViewMonthComponent,
    CalendarViewHoursComponent,
    CalendarViewMinutesComponent,
  ],
  providers: [
    {
      provide: VCLCalendarHandler,
      useClass: DateSingleHandler,
      multi: true,
    },
    {
      provide: VCLCalendarHandler,
      useClass: DateMultipleHandler,
      multi: true,
    },
    {
      provide: VCLCalendarHandler,
      useClass: DateRangeHandler,
      multi: true,
    },
    {
      provide: VCLCalendarHandler,
      useClass: MonthSingleHandler,
      multi: true,
    },
    {
      provide: VCLCalendarHandler,
      useClass: MonthMultipleHandler,
      multi: true,
    },
    {
      provide: VCLCalendarHandler,
      useClass: MonthRangeHandler,
      multi: true,
    },
  ],
})
export class VCLCalendarModule {}
