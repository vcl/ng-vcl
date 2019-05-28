import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VCLOffClickModule } from '../off-click/index';
import { PopoverComponent } from './popover.component';
import { VCLLayerModule } from '../layer/index';

export { PopoverComponent };

@NgModule({
  imports: [
    CommonModule,
    VCLOffClickModule,
    VCLLayerModule,
  ],
  providers: [ ],
  exports: [
    VCLLayerModule,
    PopoverComponent
  ],
  declarations: [
    PopoverComponent
  ]
})

export class VCLPopoverModule { }
