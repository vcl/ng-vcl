import { Component } from '@angular/core';
import { VCLFormFieldSchemaToken } from '../schemas';
import { FormFieldControl } from './field';

export class FormFieldToken extends FormFieldControl<VCLFormFieldSchemaToken, {}> {
  protected createDefaultValue() {
    return [];
  }
}

@Component({
  template: `
    <vcl-form-control-group *ngIf="field.visible">
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

FormFieldControl.register('token', FormFieldTokenComponent, FormFieldToken);
