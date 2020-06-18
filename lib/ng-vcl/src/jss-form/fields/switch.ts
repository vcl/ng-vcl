import { Component } from '@angular/core';
import { VCLFormFieldSchemaSwitch, VCLFormFieldSchemaSwitchParams } from '../schemas';
import { FormFieldControl } from './field';

export class FormFieldSwitch extends FormFieldControl<VCLFormFieldSchemaSwitch, VCLFormFieldSchemaSwitchParams> {
  get onLabel()  {
    return this.params.onLabel;
  }
  get offLabel()  {
    return this.params.onLabel;
  }
  protected createDefaultValue() {
    return false;
  }
}

@Component({
  template: `
    <vcl-form-control-group *ngIf="field.visible" [errorStateAgent]="field.errorStateAgent">
      <vcl-label *ngIf="!!field.label">{{field.label}}</vcl-label>
      <vcl-flip-switch [formControl]="field.control"></vcl-flip-switch>
      <vcl-jss-form-hints></vcl-jss-form-hints>
    </vcl-form-control-group>
  `
})
export class FormFieldSwitchComponent {
  constructor(public field: FormFieldSwitch) { }
}

