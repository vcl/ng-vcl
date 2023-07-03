import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ZoomBoxContainerComponent } from './zoom-box-container.component';
import { ZoomBoxMagnifierComponent } from './zoom-box-magnifier.component';
import { ZoomBoxComponent } from './zoom-box.component';

export {
  ZoomBoxComponent,
  ZoomBoxMagnifierComponent,
  ZoomBoxContainerComponent,
};

@NgModule({
  imports: [CommonModule],
  exports: [
    ZoomBoxComponent,
    ZoomBoxMagnifierComponent,
    ZoomBoxContainerComponent,
  ],
  declarations: [
    ZoomBoxComponent,
    ZoomBoxMagnifierComponent,
    ZoomBoxContainerComponent,
  ],
})
export class VCLZoomBoxModule {}
