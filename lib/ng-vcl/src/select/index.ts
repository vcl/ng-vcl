import { NgModule } from '@angular/core';

import { VCLSelectComponent } from './select.component';
import { VCLFormControlGroupModule } from '../form-control-group';
import { VCLInputModule } from '../input';
import { VCLButtonModule } from '../button';
import { VCLIconModule } from '../icon';

export { VCLSelectComponent };

@NgModule({
  imports: [
    VCLSelectComponent,
    VCLButtonModule,
    VCLIconModule,
    VCLInputModule,
    VCLFormControlGroupModule,
  ],
  exports: [VCLSelectComponent, VCLInputModule, VCLFormControlGroupModule],
})
export class VCLSelectModule {}
