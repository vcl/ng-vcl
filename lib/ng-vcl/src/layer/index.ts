import { BidiModule } from '@angular/cdk/bidi';
import { OverlayModule } from '@angular/cdk/overlay';
import { PortalModule } from '@angular/cdk/portal';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import {
  LayerRef,
  TemplateLayerRef,
  ComponentLayerRef,
  DynamicLayerParams,
} from './layer-ref';
import { LayerDirective } from './layer.directive';
import { LayerService } from './layer.service';
import { LayerConfig, Layer } from './types';

export {
  Layer,
  LayerDirective,
  LayerRef,
  TemplateLayerRef,
  ComponentLayerRef,
  DynamicLayerParams,
  LayerService,
  LayerConfig,
};

@NgModule({
  imports: [CommonModule, OverlayModule, BidiModule, PortalModule],
  exports: [LayerDirective, OverlayModule, BidiModule, PortalModule],
  declarations: [LayerDirective],
  providers: [LayerService],
})
export class VCLLayerModule {}
