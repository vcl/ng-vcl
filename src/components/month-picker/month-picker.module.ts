import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MonthPickerComponent } from './month-picker.component';
import { VCLButtonModule } from '../button/button.module';
import { L10nModule } from '../../l10n/l10n.module';

@NgModule({
  imports: [CommonModule, VCLButtonModule, L10nModule],
  exports: [MonthPickerComponent],
  declarations: [MonthPickerComponent],
  providers: [],
})
export class VCLMonthPickerModule { }


