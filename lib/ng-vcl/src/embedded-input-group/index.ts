import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmbeddedInputGroupComponent } from './embedded-input-group.component';
import { VCLCoreModule } from '../core';

export { EmbeddedInputGroupComponent };
@NgModule({
  imports: [CommonModule, VCLCoreModule],
  exports: [EmbeddedInputGroupComponent, VCLCoreModule ],
  declarations: [EmbeddedInputGroupComponent],
})
export class VCLEmbeddedInputGroupModule { }
