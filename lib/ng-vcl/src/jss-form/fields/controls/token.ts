import { Component } from '@angular/core';
import { VCLFormFieldSchemaToken } from '../../schemas';
import { registerControlField } from '../registry';
import { FormFieldControl } from './control';

export class FormFieldToken extends FormFieldControl<VCLFormFieldSchemaToken> {
  type: 'token';

  get label(): string {
    return this.schema.label;
  }

  protected createDefaultValue() {
    return undefined;
  }
}

@Component({
  template: `
    <vcl-form-control-group>
      <label *ngIf="!!field.label" vclFormControlLabel>{{field.label}}<vcl-required *ngIf="field.required"></vcl-required></label>
      <vcl-token-input-container [formControl]="field.control" >
        <input vclInput vclTokenInput [errorStateAgent]="field.errorStateAgent" />
      </vcl-token-input-container>
      <vcl-jss-form-hints></vcl-jss-form-hints>
    </vcl-form-control-group>
  `
})
export class FormFieldTokenComponent {
  constructor(public field: FormFieldToken) { }
}

registerControlField('token', FormFieldTokenComponent, FormFieldToken);
