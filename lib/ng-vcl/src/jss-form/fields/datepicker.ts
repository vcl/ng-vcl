import { Component } from '@angular/core';
import { VCLFormFieldSchemaDatePicker } from '../schemas';
import { FormFieldControl } from './field';

export class FormFieldDatePicker extends FormFieldControl<VCLFormFieldSchemaDatePicker> {
  protected createDefaultValue() {
    return undefined;
  }
}

@Component({
  template: `
    <vcl-form-control-group *ngIf="field.visible">
      <label *ngIf="!!field.label" vclFormControlLabel>{{field.label}}<vcl-required *ngIf="field.required"></vcl-required></label>
      <vcl-datepicker [formControl]="field.control">
        <vcl-calendar></vcl-calendar>
      </vcl-datepicker>
      <vcl-jss-form-hints></vcl-jss-form-hints>
    </vcl-form-control-group>
  `
})
export class FormFieldDatepickerComponent {
  constructor(public field: FormFieldDatePicker) { }
}

FormFieldControl.register('datepicker', FormFieldDatepickerComponent, FormFieldDatePicker);
