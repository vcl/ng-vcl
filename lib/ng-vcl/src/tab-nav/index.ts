import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortalModule } from '@angular/cdk/portal';
import { ObserversModule } from '@angular/cdk/observers';
import { VCLCoreContentProjectionModule  } from '../core';
import { TabNavComponent } from './tab-nav.component';
import { TabComponent, TabLabelDirective } from './tab.component';

export { TabComponent, TabLabelDirective, TabNavComponent };

@NgModule({
  imports: [CommonModule, PortalModule, ObserversModule, VCLCoreContentProjectionModule],
  exports: [TabComponent, TabLabelDirective, TabNavComponent, VCLCoreContentProjectionModule],
  declarations: [TabComponent, TabLabelDirective, TabNavComponent],
  providers: [],
})
export class VCLTabNavModule { }
