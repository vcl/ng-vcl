import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VCLIconModule } from './../icon/index';
import { CheckboxComponent } from './checkbox.component';
// import { CheckboxInputGroupComponent } from './checkbox-input-group.component';
// import { CheckboxLabelDirective } from './checkbox-label.directive';

export { CheckboxComponent };

@NgModule({
  imports: [CommonModule, VCLIconModule],
  exports: [CheckboxComponent],
  declarations: [CheckboxComponent]
})
export class VCLCheckboxModule { }
