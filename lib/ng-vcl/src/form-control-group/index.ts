import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VCLCoreLabelModule } from '../core/index';
import { FormDirective } from './form.directive';
import { FormControlGroupComponent } from './form-control-group.component';
import { FormControlHintComponent, FormControlHintErrorComponent } from './hint.component';
import { FormControlRequiredComponent } from './required.component';

export * from "./exports";

@NgModule({
  imports: [CommonModule, VCLCoreLabelModule],
  exports: [FormControlGroupComponent, FormControlHintComponent, FormControlHintErrorComponent, FormControlRequiredComponent, VCLCoreLabelModule, FormDirective],
  declarations: [FormControlGroupComponent, FormControlHintComponent, FormControlHintErrorComponent, FormControlRequiredComponent, FormDirective],
})
export class VCLFormControlGroupModule { }
