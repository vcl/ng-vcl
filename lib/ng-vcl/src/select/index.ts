import { NgModule } from '@angular/core';

import { VCLSelectComponent } from './select.component';

export { VCLSelectComponent };

@NgModule({
  imports: [VCLSelectComponent],
  exports: [VCLSelectComponent],
})
export class VCLSelectModule {}
