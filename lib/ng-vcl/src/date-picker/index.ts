import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VCLButtonModule } from '../button/index';
import { VCLIconModule } from '../icon/index';
import { VCLCalendarModule, VCLCalendarHandler } from '../calendar/index';
import { VCLInputModule } from '../input/index';
import { VCLFormControlGroupModule } from '../form-control-group/index';
import { DatepickerComponent, DatepickerPick } from './date-picker.component';
import { DatepickerTimeHandler } from './date-picker-calendar.handlers';
import { VCLOffClickModule } from '../off-click';

export { DatepickerComponent, DatepickerPick, DatepickerTimeHandler };

@NgModule({
  imports: [
    CommonModule,
    VCLCalendarModule,
    VCLButtonModule,
    VCLIconModule,
    VCLInputModule,
    VCLFormControlGroupModule,
    VCLOffClickModule,
  ],
  exports: [
    DatepickerComponent,
    VCLCalendarModule,
    VCLInputModule,
    VCLFormControlGroupModule,
  ],
  declarations: [DatepickerComponent],
  providers: [
    {
      provide: VCLCalendarHandler,
      useClass: DatepickerTimeHandler,
      multi: true,
    },
  ],
})
export class VCLDatePickerModule {}
