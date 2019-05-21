import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VCLIconModule } from './../icon/index';
import { CheckboxComponent } from './checkbox.component';
// import { CheckboxInputGroupComponent } from './checkbox-input-group.component';
import { CheckboxLabelDirective } from './checkbox-label.directive';

export { CheckboxComponent, CheckboxLabelDirective };

@NgModule({
  imports: [CommonModule, VCLIconModule],
  exports: [CheckboxComponent, CheckboxLabelDirective],
  declarations: [CheckboxComponent, CheckboxLabelDirective]
})
export class VCLCheckboxModule { }
