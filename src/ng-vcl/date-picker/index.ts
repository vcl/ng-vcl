import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatePickerComponent } from './date-picker.component';
import { VCLButtonModule } from '../button/index';

export { DatePickerComponent };

@NgModule({
  imports: [CommonModule, VCLButtonModule],
  exports: [DatePickerComponent],
  declarations: [DatePickerComponent],
  providers: [],
})
export class VCLDatePickerModule { }
