import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { L10nModule } from '../l10n/index';
import { TableComponent } from "./table.component";
import { directives } from './directives/directives';

@NgModule({
  imports: [CommonModule, L10nModule],
  exports: [TableComponent, ...directives],
  declarations: [TableComponent, ...directives],
  providers: [],
})
export class VCLTableModule { }
