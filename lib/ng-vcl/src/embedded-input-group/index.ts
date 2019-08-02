import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmbeddedInputGroupComponent } from './embedded-input-group.component';
import { VCLCoreContentProjectionModule } from '../core/index';

export { EmbeddedInputGroupComponent };
@NgModule({
  imports: [CommonModule, VCLCoreContentProjectionModule],
  exports: [EmbeddedInputGroupComponent, VCLCoreContentProjectionModule ],
  declarations: [EmbeddedInputGroupComponent],
})
export class VCLEmbeddedInputGroupModule { }
