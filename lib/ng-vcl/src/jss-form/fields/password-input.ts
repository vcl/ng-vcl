import { Component } from '@angular/core';
import { VCLFormFieldSchemaInput, VCLFormFieldSchemaInputParams } from '../schemas';
import { FormFieldControl } from './field';

export class FormFieldPasswordInput extends FormFieldControl<VCLFormFieldSchemaInput, VCLFormFieldSchemaInputParams> {
  get placeholder(): string {
    return this.params.placeholder || null;
  }
  protected createDefaultValue() {
    return '';
  }

  get autocomplete() {
    return this.params.autocomplete || 'current-password';
  }
}

@Component({
  template: `
    <vcl-form-control-group *ngIf="field.visible" [errorStateAgent]="field.errorStateAgent">
      <vcl-label *ngIf="!!field.label">{{field.label}}</vcl-label>
      <vcl-password-input>
        <input vclInput [formControl]="field.control" [attr.placeholder]="field.placeholder" [attr.autocomplete]="field.autocomplete">
      </vcl-password-input>
      <vcl-jss-form-hints></vcl-jss-form-hints>
    </vcl-form-control-group>
  `
})
export class FormFieldPasswordInputComponent {
  constructor(public field: FormFieldPasswordInput) { }
}

