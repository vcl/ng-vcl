import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VCLWormholeModule } from '../wormhole/index';
import { MetalistComponent, MetalistItem } from './metalist.component';

export { MetalistItem, MetalistComponent };

@NgModule({
  imports: [CommonModule, VCLWormholeModule],
  exports: [MetalistComponent, MetalistItem],
  declarations: [MetalistComponent, MetalistItem],
  providers: [],
})
export class VCLMetalistModule { }
