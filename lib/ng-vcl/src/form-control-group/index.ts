import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FORM_CONTROL_INPUT, FormControlInput, FormControlErrorStateAgent, FORM_CONTROL_ERROR_STATE_AGENT, FormControlHost, FORM_CONTROL_HOST } from './interfaces';
import { FormControlGroupComponent } from './form-control-group.component';
import { FormControlHintComponent } from './hint.component';
import { FormControlLabelDirective } from './form-control-label.directive';
import { FormControlRequiredComponent } from './required.component';
import { FormControlHostDirective } from './form-control-host.directive';

export { FormControlGroupComponent, FORM_CONTROL_INPUT, FormControlInput, FormControlErrorStateAgent, FORM_CONTROL_ERROR_STATE_AGENT, FormControlHostDirective, FormControlHost, FORM_CONTROL_HOST };

export function defaultFormControlErrorMatcher(form?: FormControlHost, input?: FormControlInput<any>, error?: string) {
  return form && input && input.ngControl && !input.isFocused && input.ngControl.invalid && (input.ngControl.touched || form.submitted);
}

@NgModule({
  imports: [CommonModule],
  exports: [FormControlGroupComponent, FormControlHintComponent, FormControlLabelDirective, FormControlRequiredComponent, FormControlHostDirective],
  declarations: [FormControlGroupComponent, FormControlHintComponent, FormControlLabelDirective, FormControlRequiredComponent, FormControlHostDirective],
  providers: [{
    provide: FORM_CONTROL_ERROR_STATE_AGENT,
    useValue: defaultFormControlErrorMatcher
  }],
})
export class VCLFormControlGroupModule { }
