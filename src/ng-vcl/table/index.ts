import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { L10nModule } from '../l10n/index';
import { directives } from './directives/directives';
import { SortIconComponent } from './components/sorticon.component';

@NgModule({
  imports: [CommonModule, L10nModule],
  exports: [SortIconComponent, ...directives],
  declarations: [SortIconComponent, ...directives],
  entryComponents: [SortIconComponent],
  providers: [],
})
export class VCLTableModule { }
