import { Component } from '@angular/core';
import { VCLFormFieldSchemaDate } from '../../schemas';
import { registerControlField } from '../registry';
import { FormFieldControl } from './control';
import { DatePickerConfig } from 'lib/ng-vcl';

export class FormFieldDate extends FormFieldControl<VCLFormFieldSchemaDate> {
  type: 'date-picker';

  get label(): string {
    return this.schema.label;
  }
  get datePickerConfig(): DatePickerConfig | undefined  {
    return this.schema.datePickerConfig;
  }
  protected createDefaultValue() {
    return Date.now();
  }
}

@Component({
  template: `
    <vcl-form-control-group>
      <label *ngIf="!!field.label" vclFormControlLabel>{{field.label}}<vcl-required *ngIf="field.required"></vcl-required></label>
      <vcl-date-picker  [config]="datePickerConfig" [formControl]="field.control"> </vcl-date-picker>
      <vcl-jss-form-hints></vcl-jss-form-hints>
    </vcl-form-control-group>
  `
})
export class FormFieldDateComponent {
  constructor(public field: FormFieldDate) { }
}

registerControlField('date-picker', FormFieldDateComponent, FormFieldDate);
