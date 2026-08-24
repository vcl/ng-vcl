import { NgModule } from '@angular/core';
import { VCLFormDirective } from './form.directive';
import { VCLFormControlRequiredComponent } from './required.component';
import {
  VCLFormControlHintComponent,
  VCLFormControlHintErrorComponent,
} from './hint.component';
import { VCLFormControlGroupComponent } from './form-control-group.component';
import { VCLCoreLabelModule } from '../core';

export * from './exports';

@NgModule({
  imports: [
    VCLFormControlGroupComponent,
    VCLFormControlHintComponent,
    VCLFormControlHintErrorComponent,
    VCLFormControlRequiredComponent,
    VCLFormDirective,
    VCLCoreLabelModule
  ],
  exports: [
    VCLFormControlGroupComponent,
    VCLFormControlHintComponent,
    VCLFormControlHintErrorComponent,
    VCLFormControlRequiredComponent,
    VCLFormDirective,
    VCLCoreLabelModule
  ],
})
export class VCLFormControlGroupModule {}
