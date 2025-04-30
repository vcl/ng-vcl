import { NgModule } from '@angular/core';
import { CalendarViewMonthComponent } from './views/month.component';
import { CalendarViewYearComponent } from './views/year.component';
import { CalendarViewYearsComponent } from './views/years.component';
import { CalendarViewHoursComponent } from './views/hours.component';
import { CalendarViewMinutesComponent } from './views/minutes.component';
import { CalendarComponent } from './calendar.component';
import {
  VCLCalendarView,
  VCLCalendarDateModifier,
  VCLCalendarHandler,
  VCLCalendar,
} from './interfaces';
import {
  DateSingleHandler,
  DateMultipleHandler,
  DateRangeHandler,
  MonthSingleHandler,
  MonthMultipleHandler,
  MonthRangeHandler,
} from './calendar.handlers';

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
  imports: [
    CalendarComponent,
    CalendarViewYearsComponent,
    CalendarViewYearComponent,
    CalendarViewMonthComponent,
    CalendarViewHoursComponent,
    CalendarViewMinutesComponent,
  ],
  exports: [
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
