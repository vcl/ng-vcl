import { NgModule } from '@angular/core';

import { VCLTabNavComponent } from './tab-nav.component';
import { VCLTabComponent, VCLTabLabelDirective } from './tab.component';

export { VCLTabComponent, VCLTabLabelDirective, VCLTabNavComponent };

@NgModule({
  imports: [VCLTabComponent, VCLTabLabelDirective, VCLTabNavComponent],
  exports: [VCLTabComponent, VCLTabLabelDirective, VCLTabNavComponent],
})
export class VCLTabNavModule {}
