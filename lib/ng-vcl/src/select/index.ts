import { NgModule } from '@angular/core';

import { VCLSelectComponent } from './select.component';

import { VCLIconModule } from '../icon';

export { VCLSelectComponent };

@NgModule({
  imports: [VCLSelectComponent, VCLIconModule],
  exports: [VCLSelectComponent],
})
export class VCLSelectModule {}
