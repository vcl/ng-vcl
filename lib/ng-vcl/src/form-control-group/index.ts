import { NgModule } from '@angular/core';
import { VCLCoreLabelModule } from '../core/index';
import { FormDirective } from './form.directive';
import { FormControlGroupComponent } from './form-control-group.component';
import {
  FormControlHintComponent,
  FormControlHintErrorComponent,
} from './hint.component';
import { FormControlRequiredComponent } from './required.component';

export * from './exports';

@NgModule({
  imports: [
    VCLCoreLabelModule,
    FormControlGroupComponent,
    FormControlHintComponent,
    FormControlHintErrorComponent,
    FormControlRequiredComponent,
    FormDirective,
  ],
  exports: [
    FormControlGroupComponent,
    FormControlHintComponent,
    FormControlHintErrorComponent,
    FormControlRequiredComponent,
    VCLCoreLabelModule,
    FormDirective,
  ],
})
export class VCLFormControlGroupModule {}
