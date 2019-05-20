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
    <vcl-form-control-group *ngIf="field.visible">
      <label *ngIf="!!field.label" vclFormControlLabel>{{field.label}}<vcl-required *ngIf="field.required"></vcl-required></label>
        <vcl-radio-group [formControl]="field.control" [errorStateAgent]="field.errorStateAgent">
          <label vclRadioButtonLabel *ngFor="let option of field.options">
            <vcl-radio-button [value]="option.value"></vcl-radio-button>
            {{option.label}}
          </label>
        </vcl-radio-group>
    </vcl-form-control-group>
  `
})
export class FormFieldRadioGroupComponent {
  constructor(public field: FormFieldRadio) { }
}

FormFieldControl.register('radio-group', FormFieldRadioGroupComponent, FormFieldRadio);
