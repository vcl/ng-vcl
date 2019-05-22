import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverlayModule } from '@angular/cdk/overlay';
import { BidiModule } from '@angular/cdk/bidi';
import { PortalModule } from '@angular/cdk/portal';

import { LayerComponent } from './layer.component';
import { LayerBase } from './layer-base';
import { LayerService } from './layer.service';
import { LayerRef } from './layer-ref';
import { LayerConfig } from './config';

export { LayerComponent, LayerBase, LayerRef, LayerService, LayerConfig };

@NgModule({
  imports: [CommonModule, OverlayModule, BidiModule, PortalModule],
  exports: [LayerComponent],
  declarations: [LayerComponent],
  providers: [LayerService],
})
export class VCLLayerModule { }
