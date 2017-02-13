import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { L10nModule } from '../l10n/l10n.module';
import { VCLButtonModule } from '../button/button.module';
import { MonthPickerComponent } from './month-picker.component';

@NgModule({
  imports: [CommonModule, VCLButtonModule, L10nModule],
  exports: [MonthPickerComponent],
  declarations: [MonthPickerComponent],
  providers: [],
})
export class VCLMonthPickerModule { }


