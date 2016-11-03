import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MonthSelectorComponent } from './month-selector.component';
import { VCLButtonModule } from '../button/button.module';
import { L10nModule } from '../../l10n/l10n.module';

@NgModule({
  imports: [CommonModule, VCLButtonModule, L10nModule],
  exports: [MonthSelectorComponent],
  declarations: [MonthSelectorComponent],
  providers: [],
})
export class VCLMonthSelectorModule { }


