import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VCLButtonModule } from '../button/index';
import { VCLIconModule } from '../icon/index';
import { VCLDateAdapterModule } from '../core/index';
import { CalendarViewMonthComponent } from './views/month.component';
import { CalendarViewYearComponent } from './views/year.component';
import { CalendarViewYearsComponent } from './views/years.component';
import { CalendarViewHoursComponent } from './views/hours.component';
import { CalendarViewMinutesComponent } from './views/minutes.component';
import { CalendarComponent, CalendarHandler } from './calendar.component';
import { VCLCalendarView } from './interfaces';
import { DateSingleHandler, DateMultipleHandler, DateRangeHandler, MonthSingleHandler, MonthMultipleHandler, MonthRangeHandler } from './calendar.handlers';

export {
  CalendarComponent,
  CalendarViewYearsComponent,
  CalendarViewYearComponent,
  CalendarViewMonthComponent,
  CalendarViewHoursComponent,
  CalendarViewMinutesComponent,
  VCLCalendarView,
  CalendarHandler
};

@NgModule({
  imports: [CommonModule, VCLButtonModule, VCLIconModule, VCLDateAdapterModule],
  exports: [CalendarComponent, CalendarViewYearsComponent, CalendarViewYearComponent, CalendarViewMonthComponent, CalendarViewHoursComponent, CalendarViewMinutesComponent],
  declarations: [CalendarComponent, CalendarViewYearsComponent, CalendarViewYearComponent, CalendarViewMonthComponent, CalendarViewHoursComponent, CalendarViewMinutesComponent],
  providers: [
    {
      provide: CalendarHandler,
      useClass: DateSingleHandler,
      multi: true
    },
    {
      provide: CalendarHandler,
      useClass: DateMultipleHandler,
      multi: true

    },
    {
      provide: CalendarHandler,
      useClass: DateRangeHandler,
      multi: true
    },
    {
      provide: CalendarHandler,
      useClass: MonthSingleHandler,
      multi: true
    },
    {
      provide: CalendarHandler,
      useClass: MonthMultipleHandler,
      multi: true

    },
    {
      provide: CalendarHandler,
      useClass: MonthRangeHandler,
      multi: true
    }
  ]
})
export class VCLCalendarModule {

}
