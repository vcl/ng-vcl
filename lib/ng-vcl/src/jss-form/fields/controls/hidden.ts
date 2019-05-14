import { Component } from '@angular/core';
import { VCLFormFieldSchemaInput } from '../../schemas';
import { registerControlField } from '../registry';
import { FormFieldControl } from './control';

export class FormFieldHidden extends FormFieldControl<VCLFormFieldSchemaInput> {
  type: 'hidden';
  protected createDefaultValue() {
    return undefined;
  }
}

@Component({
  template: `
    <vcl-form-control-group>
      <label *ngIf="!!field.label" vclFormControlLabel>{{field.label}}<vcl-required *ngIf="field.required"></vcl-required></label>
      <input vclInput type="hidden" [formControl]="field.control" >
      <vcl-jss-form-hints></vcl-jss-form-hints>
    </vcl-form-control-group>
  `
})
export class FormFieldHiddenComponent {
  constructor(public field: FormFieldHidden) { }
}

registerControlField('hidden', FormFieldHiddenComponent, FormFieldHidden);
