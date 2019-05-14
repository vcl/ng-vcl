import { Component } from '@angular/core';
import { VCLFormFieldSchemaCheckbox } from '../../schemas';
import { registerControlField } from '../registry';
import { FormFieldControl } from './control';

export class FormFieldCheckbox extends FormFieldControl<VCLFormFieldSchemaCheckbox> {
  type: 'checkbox';
  get label(): string {
    return this.schema.label;
  }
  get iconPosition()  {
    return this.schema.iconPosition || 'right';
  }
  protected createDefaultValue() {
    return false;
  }
}

@Component({
  template: `
    <vcl-form-control-group>
      <label vclCheckboxLabel>
        <vcl-checkbox [formControl]="field.control" [errorStateAgent]="field.errorStateAgent"></vcl-checkbox>
        {{field.label}}<vcl-required *ngIf="field.required"></vcl-required>
      </label>
      <vcl-jss-form-hints></vcl-jss-form-hints>
    </vcl-form-control-group>
  `
})
export class FormFieldCheckboxComponent {
  constructor(public field: FormFieldCheckbox) { }
}

registerControlField('checkbox', FormFieldCheckboxComponent, FormFieldCheckbox);
