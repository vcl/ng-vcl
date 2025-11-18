import { NgModule } from '@angular/core';
import { VCLCoreLabelModule } from '../core/index';
import { VCLTabNavComponent } from './tab-nav.component';
import { VCLTabComponent, VCLTabLabelDirective } from './tab.component';

export { VCLTabComponent, VCLTabLabelDirective, VCLTabNavComponent };

@NgModule({
  imports: [
    VCLCoreLabelModule,
    VCLTabComponent,
    VCLTabLabelDirective,
    VCLTabNavComponent,
  ],
  exports: [
    VCLTabComponent,
    VCLTabLabelDirective,
    VCLTabNavComponent,
    VCLCoreLabelModule,
  ],
})
export class VCLTabNavModule {}
