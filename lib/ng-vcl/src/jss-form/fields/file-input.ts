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
    <vcl-form-control-group *ngIf="field.visible" [errorStateAgent]="field.errorStateAgent">
      <vcl-label *ngIf="!!field.label">{{field.label}}</vcl-label>
      <vcl-file-input [multiple]="field.multiple" [formControl]="field.control">{{field.placeholder}}</vcl-file-input>
      <vcl-jss-form-hints></vcl-jss-form-hints>
    </vcl-form-control-group>
  `
})
export class FormFieldFileInputComponent {
  constructor(public field: FormFieldFileInput) { }
}

