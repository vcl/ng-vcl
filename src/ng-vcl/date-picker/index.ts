import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatePickerComponent } from './date-picker.component';
import { VCLButtonModule } from '../button/index';
import { L10nModule } from '../l10n/index';

@NgModule({
  imports: [CommonModule, VCLButtonModule, L10nModule],
  exports: [DatePickerComponent],
  declarations: [DatePickerComponent],
  providers: [],
})
export class VCLDatePickerModule { }
