import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './toolbar.component';
import { L10nModule } from '../l10n/index';

@NgModule({
  imports: [CommonModule, L10nModule],
  exports: [ToolbarComponent],
  declarations: [ToolbarComponent],
  providers: [],
})
export class VCLToolbarModule { }
