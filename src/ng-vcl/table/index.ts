import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { L10nModule } from '../l10n/index';
import { TableComponent } from "./table.component";

@NgModule({
  imports: [CommonModule, L10nModule],
  exports: [TableComponent],
  declarations: [TableComponent],
  providers: [],
})
export class VCLTableModule { }
