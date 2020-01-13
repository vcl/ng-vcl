import { Component } from '@angular/core';
import { VCLFormFieldSchemaTextarea, VCLFormFieldSchemaTextareaParams } from '../schemas';
import { FormFieldControl } from './field';

export class FormFieldTextarea extends FormFieldControl<VCLFormFieldSchemaTextarea, VCLFormFieldSchemaTextareaParams> {
  get placeholder(): string | undefined {
    return this.params.placeholder || '';
  }
  get minRows(): number | undefined {
    return this.params.minRows;
  }
  get maxRows(): number | undefined {
    return this.params.maxRows;
  }
  protected createDefaultValue() {
    return '';
  }
}

@Component({
  template: `
    <vcl-form-control-group [vclMaterial]="field.material" *ngIf="field.visible">
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

