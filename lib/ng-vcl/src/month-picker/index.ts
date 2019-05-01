import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VCLButtonModule } from '../button/index';
import { MonthPickerComponent, Month } from './month-picker.component';
import { VCLIconModule } from '../icon/index';

export { MonthPickerComponent, Month };

@NgModule({
  imports: [CommonModule, VCLButtonModule, VCLIconModule],
  exports: [MonthPickerComponent],
  declarations: [MonthPickerComponent],
  providers: [],
})
export class VCLMonthPickerModule { }


