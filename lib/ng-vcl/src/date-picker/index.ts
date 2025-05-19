import { NgModule } from '@angular/core';
import { VCLCalendarModule, VCLCalendarHandler } from '../calendar/index';
import { VCLInputModule } from '../input/index';
import { VCLFormControlGroupModule } from '../form-control-group/index';
import { DatepickerComponent, DatepickerPick } from './date-picker.component';
import { DatepickerTimeHandler } from './date-picker-calendar.handlers';

export { DatepickerComponent, DatepickerPick, DatepickerTimeHandler };

@NgModule({
  imports: [DatepickerComponent],
  exports: [
    DatepickerComponent,
    VCLCalendarModule,
    VCLInputModule,
    VCLFormControlGroupModule,
  ],
  providers: [
    {
      provide: VCLCalendarHandler,
      useClass: DatepickerTimeHandler,
      multi: true,
    },
  ],
})
export class VCLDatePickerModule {}
