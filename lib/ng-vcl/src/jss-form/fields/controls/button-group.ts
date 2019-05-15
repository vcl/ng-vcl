import { Component } from '@angular/core';
import { VCLFormFieldSchemaButtonGroup } from '../../schemas';
import { registerControlField } from '../registry';
import { FormFieldControl } from './control';

export class FormFieldButtonGroup extends FormFieldControl<VCLFormFieldSchemaButtonGroup> {
  type: 'file-input';
  get label(): string {
    return this.schema.label;
  }
  get options()  {
    return this.schema.options || [];
  }
  protected createDefaultValue() {
    return undefined;
  }
}

@Component({
  template: `
    <vcl-form-control-group>
      <label *ngIf="!!field.label" vclFormControlLabel>{{field.label}}<vcl-required *ngIf="field.required"></vcl-required></label>
      <vcl-button-group [formControl]="field.control" [errorStateAgent]="field.errorStateAgent">
        <button vcl-button *ngFor="let option of field.options" [type]="option.formControl" [value]="option.value">{{option.label}}</button>
      </vcl-button-group>
      <vcl-jss-form-hints></vcl-jss-form-hints>
    </vcl-form-control-group>
  `
})
export class FormFieldButtonGroupComponent {
  constructor(public field: FormFieldButtonGroup) { }
}

registerControlField('button-group', FormFieldButtonGroupComponent, FormFieldButtonGroup);
