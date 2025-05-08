import { NgModule } from '@angular/core';
import { CheckboxComponent } from './checkbox.component';
// import { CheckboxInputGroupComponent } from './checkbox-input-group.component';
// import { CheckboxLabelDirective } from './checkbox-label.directive';

export { CheckboxComponent };

@NgModule({
  imports: [CheckboxComponent],
  exports: [CheckboxComponent],
})
export class VCLCheckboxModule {}
