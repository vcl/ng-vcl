import { Component } from '@angular/core';
import { VCLFormFieldSchemaRadioGroup } from '../../schemas';
import { registerControlField } from '../registry';
import { FormFieldControl } from './control';

export class FormFieldRadio extends FormFieldControl<VCLFormFieldSchemaRadioGroup> {
  type: 'radio-group';
  get label(): string {
    return this.schema.label;
  }
  get iconPosition()  {
    return this.schema.iconPosition || 'right';
  }
  get options()  {
    return this.schema.options || [];
  }
  protected createDefaultValue() {
    return [];
  }
}

@Component({
  template: `
    <vcl-form-control-group>
      <label *ngIf="!!field.label" vclFormControlLabel>{{field.label}}<vcl-required *ngIf="field.required"></vcl-required></label>
        <vcl-radio-group [formControl]="field.control" [errorStateAgent]="field.errorStateAgent">
          <label vclRadioButtonLabel *ngFor="let option of field.options">
            <vcl-radio-button [value]="option.value"></vcl-radio-button>
            <vcl-icon vclAppend >{{option.label}}</vcl-icon>
          </label>
        </vcl-radio-group>
    </vcl-form-control-group>
  `
})
export class FormFieldRadioGroupComponent {
  constructor(public field: FormFieldRadio) { }
}

registerControlField('radio-group', FormFieldRadioGroupComponent, FormFieldRadio);
