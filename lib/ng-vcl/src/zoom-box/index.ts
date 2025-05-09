import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ZoomBoxComponent } from './zoom-box.component';
import { ZoomBoxMagnifierComponent } from './zoom-box-magnifier.component';
import { ZoomBoxContainerComponent } from './zoom-box-container.component';

export {
  ZoomBoxComponent,
  ZoomBoxMagnifierComponent,
  ZoomBoxContainerComponent,
};

@NgModule({
  imports: [
    CommonModule,
    ZoomBoxComponent,
    ZoomBoxMagnifierComponent,
    ZoomBoxContainerComponent,
  ],
  exports: [
    ZoomBoxComponent,
    ZoomBoxMagnifierComponent,
    ZoomBoxContainerComponent,
  ],
})
export class VCLZoomBoxModule {}
