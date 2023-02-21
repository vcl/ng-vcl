import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortalModule } from '@angular/cdk/portal';
import { ObserversModule } from '@angular/cdk/observers';
import { VCLCoreLabelModule } from '../core/index';
import { TabNavComponent } from './tab-nav.component';
import { TabComponent, TabLabelDirective } from './tab.component';

export { TabComponent, TabLabelDirective, TabNavComponent };

@NgModule({
  imports: [CommonModule, PortalModule, ObserversModule, VCLCoreLabelModule],
  exports: [
    TabComponent,
    TabLabelDirective,
    TabNavComponent,
    VCLCoreLabelModule,
  ],
  declarations: [TabComponent, TabLabelDirective, TabNavComponent],
  providers: [],
})
export class VCLTabNavModule {}
