import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JsonEditorComponent } from './json-editor.component';
import { VCLMetalistModule } from '../metalist/metalist.module';
import { L10nModule } from '../../l10n/l10n.module';

export * from './json-editor.component';

@NgModule({
  imports: [CommonModule, L10nModule, VCLMetalistModule],
  exports: [JsonEditorComponent],
  declarations: [JsonEditorComponent],
  providers: [],
})
export class VCLJsonEditorModule { }
