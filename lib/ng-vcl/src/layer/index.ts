import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverlayModule } from '@angular/cdk/overlay';
import { BidiModule } from '@angular/cdk/bidi';
import { PortalModule } from '@angular/cdk/portal';

import { LayerRef } from './layer-ref';
import { LayerRefComponent } from './layer-ref.component';
import { ComponentLayerRef } from './component-layer-ref';
import { LayerFactory } from './layer-factory.service';

export { LayerRefComponent, ComponentLayerRef, LayerFactory, LayerRef };

@NgModule({
  imports: [CommonModule, OverlayModule, BidiModule, PortalModule],
  exports: [LayerRefComponent],
  declarations: [LayerRefComponent],
  providers: [LayerFactory],
})
export class VCLLayerModule { }
