import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatepickerComponent } from './datepicker.component';
import { VCLButtonModule } from '../button/index';
import { VCLIconModule } from '../icon/index';
import { VCLCalendarModule } from '../calendar/index';
import { VCLInputModule } from '../input/index';
import { VCLFormControlGroupModule } from '../form-control-group/index';

export { DatepickerComponent };

@NgModule({
  imports: [CommonModule, VCLCalendarModule, VCLButtonModule, VCLIconModule, VCLInputModule, VCLFormControlGroupModule],
  exports: [DatepickerComponent, VCLCalendarModule],
  declarations: [DatepickerComponent],
  providers: [],
})
export class VCLDatepickerModule { }
