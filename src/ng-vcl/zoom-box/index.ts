import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ZoomBoxComponent } from './zoom-box.component';
import { ZoomBoxMagnifierComponent } from './zoom-box-magnifier.component';

@NgModule({
  imports: [CommonModule],
  exports: [ZoomBoxComponent],
  declarations: [ZoomBoxComponent]
})
export class VCLZoomBoxModule { }

@NgModule({
  imports: [CommonModule],
  exports: [ZoomBoxMagnifierComponent],
  declarations: [ZoomBoxMagnifierComponent]
})
export class VCLZoomBoxMagnifierModule { }
