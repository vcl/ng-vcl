import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopoverComponent } from './popover.component';
import { VCLTetherModule } from '../tether/tether.module';
import { VCLOffClickModule } from '../../directives/off-click/off-click.module';
import { OverlayManagerService, OverlayManagedComponent } from './overlayManager.service';

@NgModule({
  imports: [
    CommonModule,
    VCLTetherModule,
    VCLOffClickModule
  ],
  providers: [ OverlayManagerService ],
  exports: [PopoverComponent],
  declarations: [PopoverComponent]
})

export class VCLPopoverModule { }
export { PopoverComponent, OverlayManagerService, OverlayManagedComponent }
