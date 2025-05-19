import { NgModule } from '@angular/core';

import { VCLSelectListModule } from '../select-list/index';
import { SelectComponent } from './select.component';

export { SelectComponent };

@NgModule({
  imports: [SelectComponent, VCLSelectListModule],
  exports: [SelectComponent, VCLSelectListModule],
})
export class VCLSelectModule {}
