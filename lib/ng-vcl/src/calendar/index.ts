import { NgModule, Provider, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VCLButtonModule } from '../button/index';
import { VCLIconModule } from '../icon/index';
import { VCLDateAdapterModule } from '../core/index';
import { CalendarComponent } from './calendar.component';
import { CalendarMonthComponent } from './calendar-month.component';
import { CalendarYearComponent } from './calendar-year.component';
import { CalendarYearsComponent } from './calendar-years.component';

export {
  CalendarComponent,
  CalendarYearsComponent,
  CalendarYearComponent,
  CalendarMonthComponent,
};

@NgModule({
  imports: [CommonModule, VCLButtonModule, VCLIconModule, VCLDateAdapterModule],
  exports: [CalendarComponent, CalendarYearsComponent, CalendarYearComponent, CalendarMonthComponent],
  declarations: [CalendarComponent, CalendarYearsComponent, CalendarYearComponent, CalendarMonthComponent]
})
export class VCLCalendarModule {

}
