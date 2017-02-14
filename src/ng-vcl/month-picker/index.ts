import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { L10nModule } from '../l10n/index';
import { VCLButtonModule } from '../button/index';
import { MonthPickerComponent } from './month-picker.component';

@NgModule({
  imports: [CommonModule, VCLButtonModule, L10nModule],
  exports: [MonthPickerComponent],
  declarations: [MonthPickerComponent],
  providers: [],
})
export class VCLMonthPickerModule { }


