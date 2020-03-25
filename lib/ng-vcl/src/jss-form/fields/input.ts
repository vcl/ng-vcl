import { Component } from '@angular/core';
import { VCLFormFieldSchemaInput, VCLFormFieldSchemaInputParams } from '../schemas';
import { FormFieldControl } from './field';

export class FormFieldInput extends FormFieldControl<VCLFormFieldSchemaInput, VCLFormFieldSchemaInputParams> {
  get placeholder(): string {
    return this.params.placeholder || null;
  }
  protected createDefaultValue() {
    return this.type !== 'number' ? '' : null;
  }

  get inputType() {
    return this.params.inputType || 'text';
  }

  get autocomplete() {
    return this.params.autocomplete || null;
  }
}

@Component({
  template: `
    <vcl-form-control-group [vclMaterial]="field.material" *ngIf="field.visible">
      <label *ngIf="!!field.label" vclFormControlLabel>{{field.label}}<vcl-required *ngIf="field.required"></vcl-required></label>
      <input [type]="field.inputType" vclInput [formControl]="field.control" [errorStateAgent]="field.errorStateAgent" [attr.placeholder]="field.placeholder" [attr.autocomplete]="field.autocomplete">
      <vcl-jss-form-hints></vcl-jss-form-hints>
    </vcl-form-control-group>
  `
})
export class FormFieldInputComponent {
  constructor(public field: FormFieldInput) { }
}

