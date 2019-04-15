import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverlayModule } from '@angular/cdk/overlay';
import { BidiModule } from '@angular/cdk/bidi';
import { PortalModule } from '@angular/cdk/portal';

import { LayerComponent } from './layer.component';
import { LayerBase, LAYER_TOKEN } from './layer-base';
import { LayerService } from './layer.service';
import { Layer } from './interfaces';

export { LayerComponent, LayerBase, LAYER_TOKEN, LayerService, Layer };

@NgModule({
  imports: [CommonModule, OverlayModule, BidiModule, PortalModule],
  exports: [LayerComponent],
  declarations: [LayerComponent],
  providers: [LayerService],
})
export class VCLLayerModule { }
