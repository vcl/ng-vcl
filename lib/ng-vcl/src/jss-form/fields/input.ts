import { Component } from '@angular/core';
import { VCLFormFieldSchemaInput, VCLFormFieldSchemaInputParams } from '../schemas';
import { FormFieldControl } from './field';

export class FormFieldInput extends FormFieldControl<VCLFormFieldSchemaInput, VCLFormFieldSchemaInputParams> {
  get placeholder(): string {
    return this.params.placeholder || '';
  }
  protected createDefaultValue() {
    return this.type !== 'number' ? '' : null;
  }

  get inputType() {
    return this.params.inputType || 'text';
  }
}

@Component({
  template: `
    <vcl-form-control-group *ngIf="field.visible">
      <label *ngIf="!!field.label" vclFormControlLabel>{{field.label}}<vcl-required *ngIf="field.required"></vcl-required></label>
      <input [type]="field.inputType" vclInput [formControl]="field.control" [errorStateAgent]="field.errorStateAgent" [placeholder]="field.placeholder">
      <vcl-jss-form-hints></vcl-jss-form-hints>
    </vcl-form-control-group>
  `
})
export class FormFieldInputComponent {
  constructor(public field: FormFieldInput) { }
}

FormFieldControl.register('input', FormFieldInputComponent, FormFieldInput);
