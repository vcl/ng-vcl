import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VCLButtonModule } from '../button/index';
import { MonthPickerComponent, Month } from './month-picker.component';

export { MonthPickerComponent, Month };

@NgModule({
  imports: [CommonModule, VCLButtonModule],
  exports: [MonthPickerComponent],
  declarations: [MonthPickerComponent],
  providers: [],
})
export class VCLMonthPickerModule { }


