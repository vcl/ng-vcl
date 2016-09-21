import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MetalistComponent } from './metalist.component';
import { L10nModule } from '../../l10n/l10n.module';

@NgModule({
  imports: [CommonModule, L10nModule],
  exports: [MetalistComponent],
  declarations: [MetalistComponent],
  providers: [],
})
export class VCLMetalistModule { }
