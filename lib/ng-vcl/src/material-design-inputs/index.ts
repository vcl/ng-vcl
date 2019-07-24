import { NgModule } from '@angular/core';

import { VCLFormControlGroupModule } from '../form-control-group/index';
import { FormControlGroupMaterialDirective } from './form-control-group.directive';
import { FormControlMaterialInput, FORM_CONTROL_MATERIAL_INPUT, FORM_CONTROL_MATERIAL_HOST, FormControlMaterialHost, MaterialMode, FormControlGroupMaterialConfig } from './types';
import { FormControlGroupMaterialConfigDirective } from './config.directive';

export function materialDesignInputsConfigFactory() {
  return new FormControlGroupMaterialConfig();
}

export {
  MaterialMode,
  FormControlGroupMaterialConfig,
  FormControlGroupMaterialConfigDirective,
  FormControlGroupMaterialDirective,
  FORM_CONTROL_MATERIAL_INPUT,
  FormControlMaterialInput,
  FormControlMaterialHost,
  FORM_CONTROL_MATERIAL_HOST
};

@NgModule({
  imports: [VCLFormControlGroupModule],
  exports: [VCLFormControlGroupModule, FormControlGroupMaterialDirective, FormControlGroupMaterialConfigDirective],
  declarations: [FormControlGroupMaterialDirective, FormControlGroupMaterialConfigDirective],
  providers: [{
    provide: FormControlGroupMaterialConfig,
    useFactory: materialDesignInputsConfigFactory
  }]
})
export class VCLMaterialDesignInputsModule { }
