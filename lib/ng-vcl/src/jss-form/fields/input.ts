import { Component } from '@angular/core';
import { VCLFormFieldSchemaInput } from '../schemas';
import { registerControlField } from './registry';
import { FormFieldControl } from './field';

export class FormFieldInput extends FormFieldControl<VCLFormFieldSchemaInput> {
  type: 'input' | 'number' | 'password';
  get label(): string {
    return this.schema.label;
  }
  get placeholder(): string {
    return this.schema.placeholder || '';
  }
  protected createDefaultValue() {
    return this.type !== 'number' ? '' : undefined;
  }
}

@Component({
  template: `
    <vcl-form-control-group *ngIf="field.visible">
      <label *ngIf="!!field.label" vclFormControlLabel>{{field.label}}<vcl-required *ngIf="field.required"></vcl-required></label>
      <input vclInput [formControl]="field.control" [errorStateAgent]="field.errorStateAgent" [placeholder]="field.placeholder">
      <vcl-jss-form-hints></vcl-jss-form-hints>
    </vcl-form-control-group>
  `
})
export class FormFieldInputComponent {
  constructor(public field: FormFieldInput) { }
}

registerControlField('input', FormFieldInputComponent, FormFieldInput);
