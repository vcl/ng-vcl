import { Component } from '@angular/core';
import { VCLFormFieldSchemaFileInput, VCLFormFieldSchemaFileInputParams } from '../schemas';
import { FormFieldControl } from './field';

export class FormFieldFileInput extends FormFieldControl<VCLFormFieldSchemaFileInput, VCLFormFieldSchemaFileInputParams> {
  get placeholder(): string  {
    return this.params.placeholder || '';
  }
  get multiple(): boolean  {
    return this.params.multiple || false;
  }
  protected createDefaultValue() {
    return null;
  }
}

@Component({
  template: `
    <vcl-form-control-group *ngIf="field.visible">
      <label *ngIf="!!field.label" vclFormControlLabel>{{field.label}}<vcl-required *ngIf="field.required"></vcl-required></label>
      <vcl-file-input [multiple]="field.multiple" [formControl]="field.control" [errorStateAgent]="field.errorStateAgent">{{field.placeholder}}</vcl-file-input>
      <vcl-jss-form-hints></vcl-jss-form-hints>
    </vcl-form-control-group>
  `
})
export class FormFieldFileInputComponent {
  constructor(public field: FormFieldFileInput) { }
}

