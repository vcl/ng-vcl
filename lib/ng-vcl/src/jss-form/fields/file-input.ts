import { Component } from '@angular/core';
import { VCLFormFieldSchemaFileInput } from '../schemas';
import { registerControlField } from './registry';
import { FormFieldControl } from './field';

export class FormFieldFileInput extends FormFieldControl<VCLFormFieldSchemaFileInput> {
  type: 'file-input';
  get label(): string {
    return this.schema.label;
  }
  get placeholder(): string  {
    return this.schema.placeholder || '';
  }
  get multiple(): boolean  {
    return this.schema.multiple || false;
  }
  protected createDefaultValue() {
    return undefined;
  }
}

@Component({
  template: `
    <vcl-form-control-group>
      <label *ngIf="!!field.label" vclFormControlLabel>{{field.label}}<vcl-required *ngIf="field.required"></vcl-required></label>
      <vcl-file-input [multiple]="field.multiple" [formControl]="field.control" [errorStateAgent]="field.errorStateAgent">{{field.placeholder}}</vcl-file-input>
      <vcl-jss-form-hints></vcl-jss-form-hints>
    </vcl-form-control-group>
  `
})
export class FormFieldFileInputComponent {
  constructor(public field: FormFieldFileInput) { }
}

registerControlField('file-input', FormFieldFileInputComponent, FormFieldFileInput);
