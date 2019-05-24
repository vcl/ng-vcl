import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FORM_CONTROL_INPUT, FormControlInput, FormControlErrorStateAgent, FORM_CONTROL_ERROR_STATE_AGENT, FormControlHost, FORM_CONTROL_HOST } from './interfaces';
import { FormControlGroupComponent } from './form-control-group.component';
import { FormControlHintComponent } from './hint.component';
import { FormControlLabelDirective } from './form-control-label.directive';
import { FormControlRequiredComponent } from './required.component';

export { FormControlGroupComponent, FORM_CONTROL_INPUT, FormControlInput, FormControlErrorStateAgent, FORM_CONTROL_ERROR_STATE_AGENT, FormControlHost, FORM_CONTROL_HOST };
// tslint:disable-next-line:only-arrow-functions
export function defaultFormControlErrorStateAgent(form?, input?) {
  return form &&
         input &&
         input.ngControl &&
         input.ngControl.invalid &&
         (input.ngControl.touched || form.submitted);
}

// tslint:disable-next-line:only-arrow-functions
export function dirtyFormControlErrorStateAgent(form?, input?) {
  return form &&
         input &&
         input .ngControl &&
         input.ngControl.invalid &&
         (input.ngControl.dirty || form.submitted);
}

@NgModule({
  imports: [CommonModule],
  exports: [FormControlGroupComponent, FormControlHintComponent, FormControlLabelDirective, FormControlRequiredComponent],
  declarations: [FormControlGroupComponent, FormControlHintComponent, FormControlLabelDirective, FormControlRequiredComponent],
  providers: [{
    provide: FORM_CONTROL_ERROR_STATE_AGENT,
    useValue: defaultFormControlErrorStateAgent
  }],
})
export class VCLFormControlGroupModule { }
