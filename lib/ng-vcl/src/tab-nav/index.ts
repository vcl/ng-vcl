import { NgModule } from '@angular/core';
import { VCLCoreLabelModule } from '../core/index';
import { TabNavComponent } from './tab-nav.component';
import { TabComponent, TabLabelDirective } from './tab.component';

export { TabComponent, TabLabelDirective, TabNavComponent };

@NgModule({
  imports: [
    VCLCoreLabelModule,
    TabComponent,
    TabLabelDirective,
    TabNavComponent,
  ],
  exports: [
    TabComponent,
    TabLabelDirective,
    TabNavComponent,
    VCLCoreLabelModule,
  ],
})
export class VCLTabNavModule {}
