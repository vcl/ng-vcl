import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VCLWormholeModule } from '../wormhole/index';
import { MetalistComponent, MetalistItemComponent } from './metalist.component';

export { MetalistItemComponent, MetalistComponent };

@NgModule({
  imports: [CommonModule, VCLWormholeModule],
  exports: [MetalistComponent, MetalistItemComponent],
  declarations: [MetalistComponent, MetalistItemComponent],
  providers: [],
})
export class VCLMetalistModule { }
