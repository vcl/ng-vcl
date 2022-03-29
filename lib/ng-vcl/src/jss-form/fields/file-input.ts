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
  selector: 'vcl-jss-form-file-input',
  template: `
    <vcl-form-control-group *ngIf="field.visible" [errorStateAgent]="field.errorStateAgent">
      <vcl-label *ngIf="!!field.label">{{field.label}}</vcl-label>
      <vcl-jss-form-input-wrapper>
        <vcl-file-input [multiple]="field.multiple" [formControl]="field.control" [disabled]="field.disabled">{{field.placeholder}}</vcl-file-input>
      </vcl-jss-form-input-wrapper>
      <vcl-jss-form-hints vclHint></vcl-jss-form-hints>
    </vcl-form-control-group>
  `
})
export class FormFieldFileInputComponent {
  constructor(public field: FormFieldFileInput) { }
}

