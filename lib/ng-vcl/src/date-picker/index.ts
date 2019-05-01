import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatePickerComponent } from './date-picker.component';
import { VCLButtonModule } from '../button/index';
import { TimePickerComponent } from './time-picker.component';
import { FormsModule } from '@angular/forms';
import { VCLIconModule } from '../icon';

export { DatePickerComponent, TimePickerComponent };

@NgModule({
  imports: [CommonModule, VCLButtonModule, VCLIconModule, FormsModule],
  exports: [DatePickerComponent, TimePickerComponent],
  declarations: [DatePickerComponent, TimePickerComponent],
  providers: [],
})
export class VCLDatePickerModule { }
