import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VCLButtonModule } from '../button/index';
import { VCLIconModule } from '../icon/index';
import { VCLDateAdapterModule } from '../dateadapter/index';
import { CalendarViewMonthComponent } from './views/month.component';
import { CalendarViewYearComponent } from './views/year.component';
import { CalendarViewYearsComponent } from './views/years.component';
import { CalendarViewHoursComponent } from './views/hours.component';
import { CalendarViewMinutesComponent } from './views/minutes.component';
import { CalendarComponent, VCLCalendarHandler } from './calendar.component';
import { VCLCalendarView, VCLCalendarDateModifier } from './interfaces';
import { DateSingleHandler, DateMultipleHandler, DateRangeHandler, MonthSingleHandler, MonthMultipleHandler, MonthRangeHandler } from './calendar.handlers';

export {
  CalendarComponent,
  CalendarViewYearsComponent,
  CalendarViewYearComponent,
  CalendarViewMonthComponent,
  CalendarViewHoursComponent,
  CalendarViewMinutesComponent,
  VCLCalendarView,
  VCLCalendarDateModifier,
  VCLCalendarHandler
};

@NgModule({
  imports: [CommonModule, VCLButtonModule, VCLIconModule, VCLDateAdapterModule],
  exports: [CalendarComponent, CalendarViewYearsComponent, CalendarViewYearComponent, CalendarViewMonthComponent, CalendarViewHoursComponent, CalendarViewMinutesComponent],
  declarations: [CalendarComponent, CalendarViewYearsComponent, CalendarViewYearComponent, CalendarViewMonthComponent, CalendarViewHoursComponent, CalendarViewMinutesComponent],
  providers: [
    {
      provide: VCLCalendarHandler,
      useClass: DateSingleHandler,
      multi: true
    },
    {
      provide: VCLCalendarHandler,
      useClass: DateMultipleHandler,
      multi: true

    },
    {
      provide: VCLCalendarHandler,
      useClass: DateRangeHandler,
      multi: true
    },
    {
      provide: VCLCalendarHandler,
      useClass: MonthSingleHandler,
      multi: true
    },
    {
      provide: VCLCalendarHandler,
      useClass: MonthMultipleHandler,
      multi: true

    },
    {
      provide: VCLCalendarHandler,
      useClass: MonthRangeHandler,
      multi: true
    }
  ]
})
export class VCLCalendarModule {

}
