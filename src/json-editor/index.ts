import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VCLMetalistModule, L10nModule } from '@ng-vcl/ng-vcl';
import { JsonEditorComponent } from './json-editor.component';

export * from './json-editor.component';

@NgModule({
  imports: [CommonModule, L10nModule, VCLMetalistModule],
  exports: [JsonEditorComponent],
  declarations: [JsonEditorComponent],
  providers: [],
})
export class VCLJsonEditorModule { }
