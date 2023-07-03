import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { VCLButtonModule } from '../button/index';
import { VCLCalendarModule, VCLCalendarHandler } from '../calendar/index';
import { VCLFormControlGroupModule } from '../form-control-group/index';
import { VCLIconModule } from '../icon/index';
import { VCLInputModule } from '../input/index';
import { VCLOffClickModule } from '../off-click';

import { DatepickerTimeHandler } from './date-picker-calendar.handlers';
import { DatepickerComponent, DatepickerPick } from './date-picker.component';

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
