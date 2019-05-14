import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabNavComponent } from './tab-nav.component';
import { TabComponent, TabLabelComponent } from './tab.component';
import { PortalModule } from '@angular/cdk/portal';
import { ObserversModule } from '@angular/cdk/observers';

@NgModule({
  imports: [CommonModule, PortalModule, ObserversModule],
  exports: [TabComponent, TabLabelComponent, TabNavComponent],
  declarations: [TabComponent, TabLabelComponent, TabNavComponent],
  providers: [],
})
export class VCLTabNavModule { }
