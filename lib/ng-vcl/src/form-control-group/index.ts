import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VCLCoreLabelModule } from '../core/index';
import { FormControlGroupInputState, FormControlGroupFormState, FormControlErrorStateAgent, FORM_CONTROL_GROUP_INPUT_STATE, FORM_CONTROL_GROUP_STATE, FormControlGroupState, FORM_CONTROL_GROUP_FORM_STATE } from './interfaces';
import { FormDirective } from './form.directive';
import { FormControlGroupComponent } from './form-control-group.component';
import { FormControlHintComponent, FormControlHintErrorComponent } from './hint.component';
import { FormControlRequiredComponent } from './required.component';
import { defaultFormControlErrorStateAgent, dirtyFormControlErrorStateAgent } from './error-state-agent';

export {
  defaultFormControlErrorStateAgent,
  dirtyFormControlErrorStateAgent,
  FORM_CONTROL_GROUP_FORM_STATE,
  FORM_CONTROL_GROUP_INPUT_STATE,
  FORM_CONTROL_GROUP_STATE,
  FormControlGroupComponent,
  FormControlHintComponent, 
  FormControlHintErrorComponent,
  FormControlGroupInputState,
  FormControlGroupFormState, 
  FormControlGroupState, 
  FormControlErrorStateAgent,
  FormControlRequiredComponent,
};

@NgModule({
  imports: [CommonModule, VCLCoreLabelModule],
  exports: [FormControlGroupComponent, FormControlHintComponent, FormControlHintErrorComponent, FormControlRequiredComponent, VCLCoreLabelModule, FormDirective],
  declarations: [FormControlGroupComponent, FormControlHintComponent, FormControlHintErrorComponent, FormControlRequiredComponent, FormDirective],
})
export class VCLFormControlGroupModule { }
