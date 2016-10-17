import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayerBaseComponent, LayerDirective } from './layer.component';
import { LayerService } from './layer.service';
import { VCLOffClickModule } from '../../directives/off-click/off-click.module';
import { VCLWormholeModule } from '../../directives/wormhole';

export { LayerBaseComponent, LayerDirective, LayerService };

@NgModule({
  imports: [CommonModule, VCLWormholeModule, VCLOffClickModule],
  exports: [LayerBaseComponent, LayerDirective],
  declarations: [LayerBaseComponent, LayerDirective],
  providers: [LayerService]
})
export class VCLLayerModule { }
