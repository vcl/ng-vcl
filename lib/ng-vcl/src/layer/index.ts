import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverlayModule } from '@angular/cdk/overlay';
import { BidiModule } from '@angular/cdk/bidi';
import { PortalModule } from '@angular/cdk/portal';

import { LayerComponent } from './layer.component';
import { LayerService } from './layer.service';
import { LayerRef, TemplateLayerRef, ComponentLayerRef, DynamicLayerRef, DynamicLayerParams } from './layer-ref';
import { LayerConfig, Layer } from './types';

export { Layer, LayerComponent, LayerRef, TemplateLayerRef, ComponentLayerRef, DynamicLayerRef, DynamicLayerParams, LayerService, LayerConfig };

@NgModule({
  imports: [CommonModule, OverlayModule, BidiModule, PortalModule],
  exports: [LayerComponent, OverlayModule, BidiModule, PortalModule],
  declarations: [LayerComponent],
  providers: [LayerService]
})
export class VCLLayerModule { }
