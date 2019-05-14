import { Component } from '@angular/core';
import { VCLFormFieldSchemaSwitch } from '../../schemas';
import { registerControlField } from '../registry';
import { FormFieldControl } from './control';

export class FormFieldSwitch extends FormFieldControl<VCLFormFieldSchemaSwitch> {
  type: 'switch';
  get label(): string {
    return this.schema.label;
  }
  get onLabel()  {
    return this.schema.onLabel;
  }
  get offLabel()  {
    return this.schema.onLabel;
  }
  get defaultValue() {
    return this.schema.defaultValue || false;
  }
  protected createDefaultValue() {
    return false;
  }
}

@Component({
  template: `
    <vcl-form-control-group>
      <label *ngIf="!!field.label" vclFormControlLabel>{{field.label}}<vcl-required *ngIf="field.required"></vcl-required></label>
      <vcl-flip-switch [formControl]="field.control" [errorStateAgent]="field.errorStateAgent"></vcl-flip-switch>
      <vcl-jss-form-hints></vcl-jss-form-hints>
    </vcl-form-control-group>
  `
})
export class FormFieldSwitchComponent {
  constructor(public field: FormFieldSwitch) { }
}

registerControlField('switch', FormFieldSwitchComponent, FormFieldSwitch);
