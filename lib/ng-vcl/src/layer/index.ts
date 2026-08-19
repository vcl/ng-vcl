import { BidiModule } from '@angular/cdk/bidi';
import { OverlayModule } from '@angular/cdk/overlay';
import { PortalModule } from '@angular/cdk/portal';
import { NgModule } from '@angular/core';

import {
  ComponentLayerRef,
  DynamicLayerParams,
  LayerRef,
  TemplateLayerRef,
} from './layer-ref';
import { LayerDirective } from './layer.directive';
import { LayerService } from './layer.service';
import { Layer, LayerConfig } from './types';

export {
  ComponentLayerRef,
  DynamicLayerParams, Layer, LayerConfig, LayerDirective,
  LayerRef, LayerService, TemplateLayerRef
};

@NgModule({
  imports: [LayerDirective],
  exports: [LayerDirective, OverlayModule, BidiModule, PortalModule],
  providers: [LayerService],
})
export class VCLLayerModule {}
