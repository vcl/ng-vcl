import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabComponent, TabLabelDirective, TabNavComponent } from './tab-nav.component';
import { L10nModule } from '../../l10n/l10n.module';
import { VCLWormholeModule } from '../../directives/wormhole/wormhole.module';

@NgModule({
  imports: [CommonModule, L10nModule, VCLWormholeModule],
  exports: [TabComponent, TabLabelDirective, TabNavComponent],
  declarations: [TabComponent, TabLabelDirective, TabNavComponent],
  providers: [],
})
export class VCLTabNavModule { }
