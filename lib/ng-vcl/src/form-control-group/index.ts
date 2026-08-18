import { NgModule } from '@angular/core';
import { VCLFormDirective } from './form.directive';
import { VCLFormControlRequiredComponent } from './required.component';
import {
  VCLFormControlHintComponent,
  VCLFormControlHintErrorComponent,
} from './hint.component';
import { VCLFormControlGroupComponent } from './form-control-group.component';

export * from './exports';

@NgModule({
  imports: [
    VCLFormControlGroupComponent,
    VCLFormControlHintComponent,
    VCLFormControlHintErrorComponent,
    VCLFormControlRequiredComponent,
    VCLFormDirective,
  ],
  exports: [
    VCLFormControlGroupComponent,
    VCLFormControlHintComponent,
    VCLFormControlHintErrorComponent,
    VCLFormControlRequiredComponent,
    VCLFormDirective,
  ],
})
export class VCLFormControlGroupModule {}
