import { Component } from '@angular/core';
import { DatePickerConfig } from '../../date-picker/index';
import { VCLFormFieldSchemaDatePicker } from '../schemas';
import { FormFieldControl } from './field';

export class FormFieldDatePicker extends FormFieldControl<VCLFormFieldSchemaDatePicker, DatePickerConfig> {
  get datePickerConfig(): DatePickerConfig | undefined  {
    return this.params;
  }
  protected createDefaultValue() {
    return new Date();
  }
}

@Component({
  template: `
    <vcl-form-control-group *ngIf="field.visible">
      <label *ngIf="!!field.label" vclFormControlLabel>{{field.label}}<vcl-required *ngIf="field.required"></vcl-required></label>
      <vcl-date-picker [config]="field.datePickerConfig" [formControl]="field.control"> </vcl-date-picker>
      <vcl-jss-form-hints></vcl-jss-form-hints>
    </vcl-form-control-group>
  `
})
export class FormFieldDatePickerComponent {
  constructor(public field: FormFieldDatePicker) { }
}

FormFieldControl.register('date-picker', FormFieldDatePickerComponent, FormFieldDatePicker);
