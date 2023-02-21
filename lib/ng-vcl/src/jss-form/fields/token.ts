import { Component } from '@angular/core';
import { VCLFormFieldSchemaToken } from '../schemas';
import { FormFieldControl } from './field';

export class FormFieldToken extends FormFieldControl<
  VCLFormFieldSchemaToken,
  {}
> {
  protected createDefaultValue() {
    return [];
  }
}

@Component({
  selector: 'vcl-jss-form-token',
  template: `
    <vcl-form-control-group
      *ngIf="field.visible"
      [errorStateAgent]="field.errorStateAgent">
      <vcl-label *ngIf="!!field.label">{{ field.label }}</vcl-label>
      <vcl-jss-form-input-wrapper>
        <vcl-token-input [formControl]="field.control"></vcl-token-input>
      </vcl-jss-form-input-wrapper>
      <vcl-jss-form-hints vclHint></vcl-jss-form-hints>
    </vcl-form-control-group>
  `,
})
export class FormFieldTokenComponent {
  constructor(public field: FormFieldToken) {}
}
