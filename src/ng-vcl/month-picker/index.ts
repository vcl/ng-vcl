import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VCLButtonModule } from '../button/index';
import { MonthPickerComponent } from './month-picker.component';

export { MonthPickerComponent };

@NgModule({
  imports: [CommonModule, VCLButtonModule],
  exports: [MonthPickerComponent],
  declarations: [MonthPickerComponent],
  providers: [],
})
export class VCLMonthPickerModule { }


