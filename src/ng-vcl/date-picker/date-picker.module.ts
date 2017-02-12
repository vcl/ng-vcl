import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatePickerComponent } from './date-picker.component';
import { VCLButtonModule } from '../button/button.module';
import { L10nModule } from '../l10n/l10n.module';

@NgModule({
  imports: [CommonModule, VCLButtonModule, L10nModule],
  exports: [DatePickerComponent],
  declarations: [DatePickerComponent],
  providers: [],
})
export class VCLDatePickerModule { }
