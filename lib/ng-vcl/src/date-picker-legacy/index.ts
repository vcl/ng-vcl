import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatePickerLegacyComponent, DatePickerConfig } from './date-picker.component';
import { VCLButtonModule } from '../button/index';
import { TimePickerComponent } from './time-picker.component';
import { FormsModule } from '@angular/forms';
import { VCLIconModule } from '../icon/index';

export { DatePickerLegacyComponent, TimePickerComponent, DatePickerConfig };

@NgModule({
  imports: [CommonModule, VCLButtonModule, VCLIconModule, FormsModule],
  exports: [DatePickerLegacyComponent, TimePickerComponent],
  declarations: [DatePickerLegacyComponent, TimePickerComponent],
  providers: [],
})
export class VCLDatePickerLegacyModule { }
