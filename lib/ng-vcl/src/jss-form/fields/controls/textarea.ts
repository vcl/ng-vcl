import { Component } from '@angular/core';
import { VCLFormFieldSchemaTextarea } from '../../schemas';
import { registerControlField } from '../registry';
import { FormFieldControl } from './control';

export class FormFieldTextarea extends FormFieldControl<VCLFormFieldSchemaTextarea> {
  type: 'textarea';

  get label(): string {
    return this.schema.label;
  }
  get placeholder(): string | undefined {
    return this.schema.placeholder || '';
  }
  get minRows(): number | undefined {
    return this.schema.minRows;
  }
  get maxRows(): number | undefined {
    return this.schema.maxRows;
  }
  protected createDefaultValue() {
    return '';
  }
}

@Component({
  template: `
    <vcl-form-control-group>
      <label *ngIf="!!field.label" vclFormControlLabel>{{field.label}}<vcl-required *ngIf="field.required"></vcl-required></label>
      <textarea vclInput
                [formControl]="field.control"
                [errorStateAgent]="field.errorStateAgent"
                [placeholder]="field.placeholder"
                [autogrow]="true"
                [minRows]="field.minRows || 3"
                [maxRows]="field.minRows || 10"></textarea>
      <vcl-jss-form-hints></vcl-jss-form-hints>
    </vcl-form-control-group>
  `
})
export class FormFieldTextareaComponent {
  constructor(public field: FormFieldTextarea) { }
}

registerControlField('textarea', FormFieldTextareaComponent, FormFieldTextarea);
