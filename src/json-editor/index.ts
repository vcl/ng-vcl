import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JsonEditorComponent } from './json-editor.component';

export * from './json-editor.component';

@NgModule({
  imports: [CommonModule],
  exports: [JsonEditorComponent],
  declarations: [JsonEditorComponent],
  providers: [],
})
export class VCLJsonEditorModule { }
