import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownComponent } from './dropdown.component';
import { VCLMetalistModule } from '../metalist/metalist.module';
import { L10nModule } from '../../l10n/l10n.module';

@NgModule({
  imports: [CommonModule, L10nModule, VCLMetalistModule],
  exports: [DropdownComponent],
  declarations: [DropdownComponent],
  providers: [],
})
export class VCLDropdownModule { }
