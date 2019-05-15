import { Component } from '@angular/core';
import { VCLFormFieldSchemaInput } from '../../schemas';
import { registerControlField } from '../registry';
import { FormFieldControl } from './control';

export class FormFieldHidden extends FormFieldControl<VCLFormFieldSchemaInput> {
  type: 'hidden';
  protected createDefaultValue() {
    return '';
  }
}

@Component({
  template: `
    <vcl-form-control-group>
      <input vclInput type="hidden" [formControl]="field.control" [errorStateAgent]="field.errorStateAgent" >
      <vcl-jss-form-hints></vcl-jss-form-hints>
    </vcl-form-control-group>
  `
})
export class FormFieldHiddenComponent {
  constructor(public field: FormFieldHidden) { }
}

registerControlField('hidden', FormFieldHiddenComponent, FormFieldHidden);
