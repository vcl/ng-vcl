import { NgModule } from '@angular/core';
import { VCLCheckboxComponent } from './checkbox.component';
// import { CheckboxInputGroupComponent } from './checkbox-input-group.component';
// import { CheckboxLabelDirective } from './checkbox-label.directive';

export { VCLCheckboxComponent };

@NgModule({
  imports: [VCLCheckboxComponent],
  exports: [VCLCheckboxComponent],
})
export class VCLCheckboxModule {}
