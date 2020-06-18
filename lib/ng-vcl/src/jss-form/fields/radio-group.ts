import { Component } from '@angular/core';
import { VCLFormFieldSchemaRadioGroup, VCLFormFieldSchemaRadioGroupParams } from '../schemas';
import { FormFieldControl } from './field';

export class FormFieldRadio extends FormFieldControl<VCLFormFieldSchemaRadioGroup, VCLFormFieldSchemaRadioGroupParams> {
  get label(): string {
    return this.schema.label;
  }
  get iconPosition()  {
    return this.params.iconPosition || 'right';
  }
  get options()  {
    return this.params.options || [];
  }
  protected createDefaultValue() {
    return null;
  }
}

@Component({
  template: `
    <vcl-form-control-group *ngIf="field.visible" [errorStateAgent]="field.errorStateAgent">
      <vcl-label *ngIf="!!field.label">{{field.label}}</vcl-label>
        <vcl-radio-group [formControl]="field.control">
          <vcl-radio-button *ngFor="let option of field.options" [value]="option.value">{{option.label}}</vcl-radio-button>
        </vcl-radio-group>
    </vcl-form-control-group>
  `
})
export class FormFieldRadioGroupComponent {
  constructor(public field: FormFieldRadio) { }
}

