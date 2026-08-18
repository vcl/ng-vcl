import { NgModule } from '@angular/core';
import { VCLButtonGroupComponent } from './button-group.component';
import { VCLButtonComponent } from '../button';

export { VCLButtonGroupComponent };

@NgModule({
  imports: [VCLButtonGroupComponent, VCLButtonComponent],
  exports: [VCLButtonGroupComponent, VCLButtonComponent],
  declarations: [],
  providers: [],
})
export class VCLButtonGroupModule {}
