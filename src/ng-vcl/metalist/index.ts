import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { L10nModule } from '../l10n/index';
import { VCLWormholeModule } from '../wormhole/index';
import { MetalistItem } from './metalist-item.component';
import { MetalistComponent, SelectionMode } from './metalist.component';

export { MetalistItem, MetalistComponent, SelectionMode };

@NgModule({
  imports: [CommonModule, L10nModule, VCLWormholeModule],
  exports: [MetalistComponent, MetalistItem],
  declarations: [MetalistComponent, MetalistItem],
  providers: [],
})
export class VCLMetalistModule { }
