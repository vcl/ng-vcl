import { Component } from '@angular/core';
import { VCLFormFieldSchemaTextarea, VCLFormFieldSchemaTextareaParams } from '../schemas';
import { FormFieldControl } from './field';

export class FormFieldTextarea extends FormFieldControl<VCLFormFieldSchemaTextarea, VCLFormFieldSchemaTextareaParams> {
  get placeholder(): string | undefined {
    return this.params.placeholder || null;
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
    <vcl-form-control-group [errorStateAgent]="field.errorStateAgent" *ngIf="field.visible">
      <vcl-label *ngIf="!!field.label">{{field.label}}</vcl-label>
      <vcl-input-field>
        <textarea vclInput
                  [formControl]="field.control"
                  [attr.placeholder]="field.placeholder"
                  [autogrow]="true"
                  [minRows]="field.minRows || 3"
                  [maxRows]="field.minRows || 10"></textarea>
      </vcl-input-field>
      <vcl-jss-form-hints></vcl-jss-form-hints>
    </vcl-form-control-group>
  `
})
export class FormFieldTextareaComponent {
  constructor(public field: FormFieldTextarea) { }
}

