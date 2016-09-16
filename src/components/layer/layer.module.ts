import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  LayerBaseComponent, LayerDirective } from './layer.component';
import { VCLWormholeModule } from '../../directives/wormhole';

@NgModule({
  imports: [CommonModule, VCLWormholeModule],
  exports: [LayerBaseComponent, LayerDirective],
  declarations: [LayerBaseComponent, LayerDirective]
})
export class VCLLayerModule { }
