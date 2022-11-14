import { Component } from '@angular/core';
import {
  VCLFormFieldSchemaCheckbox,
  VCLFormFieldSchemaCheckboxParams,
} from '../schemas';
import { FormFieldControl } from './field';

export class FormFieldCheckbox extends FormFieldControl<
  VCLFormFieldSchemaCheckbox,
  VCLFormFieldSchemaCheckboxParams
> {
  get iconPosition() {
    return this.params.iconPosition || 'right';
  }
  protected createDefaultValue() {
    return false;
  }
}

@Component({
  selector: 'vcl-jss-form-checkbox',
  template: `
    <vcl-form-control-group
      *ngIf="field.visible"
      [errorStateAgent]="field.errorStateAgent">
      <vcl-jss-form-input-wrapper>
        <vcl-checkbox [formControl]="field.control">{{
          field.label
        }}</vcl-checkbox>
      </vcl-jss-form-input-wrapper>
      <vcl-jss-form-hints vclHint></vcl-jss-form-hints>
    </vcl-form-control-group>
  `,
})
export class FormFieldCheckboxComponent {
  constructor(public field: FormFieldCheckbox) {}
}
