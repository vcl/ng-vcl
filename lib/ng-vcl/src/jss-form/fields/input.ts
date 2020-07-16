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
  selector: 'vcl-jss-form-input',  
  template: `
    <vcl-form-control-group *ngIf="field.visible" [errorStateAgent]="field.errorStateAgent">
      <vcl-label *ngIf="!!field.label">{{field.label}}</vcl-label>
      <vcl-input-field>
        <input [type]="field.inputType" vclInput [formControl]="field.control" [attr.placeholder]="field.placeholder" [attr.autocomplete]="field.autocomplete">
      </vcl-input-field>
      <vcl-jss-form-hints vclHint></vcl-jss-form-hints>
    </vcl-form-control-group>
  `
})
export class FormFieldInputComponent {
  constructor(public field: FormFieldInput) { }
}

