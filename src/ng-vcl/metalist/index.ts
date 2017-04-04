import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { L10nModule } from '../l10n/index';
import { VCLWormholeModule } from '../wormhole/index';
import { MetalistItemComponent, MetalistItem } from './metalist-item.component';
import { MetalistComponent } from './metalist.component';

export { MetalistItem, MetalistComponent, MetalistItemComponent };

@NgModule({
  imports: [CommonModule, L10nModule, VCLWormholeModule],
  exports: [MetalistComponent, MetalistItemComponent],
  declarations: [MetalistComponent, MetalistItemComponent],
  providers: [],
})
export class VCLMetalistModule { }
