import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabComponent, TabContentDirective, TabLabelDirective, TabNavComponent } from './tab.component';
import { L10nModule } from '../../l10n/l10n.module';
import { VCLWormholeModule } from '../../directives/wormhole/wormhole.module';

@NgModule({
  imports: [CommonModule, L10nModule, VCLWormholeModule],
  exports: [TabComponent, TabContentDirective, TabLabelDirective, TabNavComponent],
  declarations: [TabComponent, TabContentDirective, TabLabelDirective, TabNavComponent],
  providers: [],
})
export class VCLTabNavModule { }
