import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VCLCoreContentProjectionModule } from '../core/index';
import { VCLIconModule } from '../icon/index';
import { VCLInputModule } from '../input/index';
import { EmbeddedInputGroupComponent } from './embedded-input-group.component';

export { EmbeddedInputGroupComponent };
@NgModule({
  imports: [CommonModule, VCLCoreContentProjectionModule, VCLInputModule, VCLIconModule],
  exports: [EmbeddedInputGroupComponent, VCLCoreContentProjectionModule, VCLInputModule, VCLIconModule ],
  declarations: [EmbeddedInputGroupComponent],
})
export class VCLEmbeddedInputGroupModule { }
