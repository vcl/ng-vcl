import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatePickerComponent } from './date-picker.component';
import { VCLButtonModule } from '../button/index';
import { TimePickerComponent } from './time-picker.component';
import { FormsModule } from '@angular/forms';

export { DatePickerComponent, TimePickerComponent };

@NgModule({
  imports: [CommonModule, VCLButtonModule, FormsModule],
  exports: [DatePickerComponent, TimePickerComponent],
  declarations: [DatePickerComponent, TimePickerComponent],
  providers: [],
})
export class VCLDatePickerModule { }
