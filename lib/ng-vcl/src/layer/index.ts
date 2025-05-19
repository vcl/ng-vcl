import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverlayModule } from '@angular/cdk/overlay';
import { BidiModule } from '@angular/cdk/bidi';
import { PortalModule } from '@angular/cdk/portal';

import { LayerDirective } from './layer.directive';
import { LayerService } from './layer.service';
import {
  LayerRef,
  TemplateLayerRef,
  ComponentLayerRef,
  DynamicLayerParams,
} from './layer-ref';
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
  imports: [LayerDirective],
  exports: [LayerDirective, OverlayModule, BidiModule, PortalModule],
  providers: [LayerService],
})
export class VCLLayerModule {}
