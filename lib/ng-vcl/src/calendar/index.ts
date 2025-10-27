import {
  EnvironmentProviders,
  makeEnvironmentProviders,
  NgModule,
  Provider,
} from '@angular/core';
import { VCLCalendarViewMonthComponent } from './views/month.component';
import { VCLCalendarViewYearComponent } from './views/year.component';
import { VCLCalendarViewYearsComponent } from './views/years.component';
import { VCLCalendarViewHoursComponent } from './views/hours.component';
import { VCLCalendarViewMinutesComponent } from './views/minutes.component';
import { VCLCalendarComponent } from './calendar.component';
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
  VCLCalendarComponent,
  VCLCalendarViewYearsComponent,
  VCLCalendarViewYearComponent,
  VCLCalendarViewMonthComponent,
  VCLCalendarViewHoursComponent,
  VCLCalendarViewMinutesComponent,
  VCLCalendarView,
  VCLCalendarDateModifier,
  VCLCalendarHandler,
  VCLCalendar,
};

export function provideVclCalendar(
  extraHandlers: Provider[] = []
): EnvironmentProviders {
  return makeEnvironmentProviders([
    { provide: VCLCalendarHandler, useClass: DateSingleHandler, multi: true },
    { provide: VCLCalendarHandler, useClass: DateMultipleHandler, multi: true },
    { provide: VCLCalendarHandler, useClass: DateRangeHandler, multi: true },
    { provide: VCLCalendarHandler, useClass: MonthSingleHandler, multi: true },
    {
      provide: VCLCalendarHandler,
      useClass: MonthMultipleHandler,
      multi: true,
    },
    { provide: VCLCalendarHandler, useClass: MonthRangeHandler, multi: true },
    ...extraHandlers,
  ]);
}

@NgModule({
  imports: [
    VCLCalendarComponent,
    VCLCalendarViewYearsComponent,
    VCLCalendarViewYearComponent,
    VCLCalendarViewMonthComponent,
    VCLCalendarViewHoursComponent,
    VCLCalendarViewMinutesComponent,
  ],
  exports: [
    VCLCalendarComponent,
    VCLCalendarViewYearsComponent,
    VCLCalendarViewYearComponent,
    VCLCalendarViewMonthComponent,
    VCLCalendarViewHoursComponent,
    VCLCalendarViewMinutesComponent,
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
