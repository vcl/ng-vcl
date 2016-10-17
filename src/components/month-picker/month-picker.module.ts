import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VCLButtonModule } from '../button/button.module';
import { MonthPickerComponent } from './month-picker.component';
import { L10nModule } from '../../l10n/l10n.module';

@NgModule({
  imports: [CommonModule, L10nModule, VCLButtonModule],
  exports: [MonthPickerComponent],
  declarations: [MonthPickerComponent],
  providers: [],
})
export class VCLMonthPickerModule { }


