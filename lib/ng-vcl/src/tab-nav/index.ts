import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabNavComponent } from './tab-nav.component';
import { TabComponent, TabLabelDirective } from './tab.component';
import { PortalModule } from '@angular/cdk/portal';
import { ObserversModule } from '@angular/cdk/observers';

@NgModule({
  imports: [CommonModule, PortalModule, ObserversModule],
  exports: [TabComponent, TabLabelDirective, TabNavComponent],
  declarations: [TabComponent, TabLabelDirective, TabNavComponent],
  providers: [],
})
export class VCLTabNavModule { }
