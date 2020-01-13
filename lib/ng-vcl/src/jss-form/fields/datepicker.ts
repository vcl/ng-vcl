import { Component } from '@angular/core';
import { VCLFormFieldSchemaDatePicker, VCLFormFieldSchemaDatePickerParams } from '../schemas';
import { FormFieldControl } from './field';
import { DatepickerPick } from '../../datepicker/index';

export class FormFieldDatePicker extends FormFieldControl<VCLFormFieldSchemaDatePicker, VCLFormFieldSchemaDatePickerParams> {
  protected createDefaultValue() {
    return undefined;
  }
  get pick(): DatepickerPick  {
    return this.params.pick || 'date';
  }
  get placeholder(): string  {
    return this.params.placeholder || '';
  }
}

@Component({
  template: `
    <vcl-form-control-group *ngIf="field.visible">
      <label *ngIf="!!field.label" vclFormControlLabel>{{field.label}}<vcl-required *ngIf="field.required"></vcl-required></label>
      <vcl-datepicker [formControl]="field.control" [pick]="field.pick" [placeholder]="field.placeholder"></vcl-datepicker>
      <vcl-jss-form-hints></vcl-jss-form-hints>
    </vcl-form-control-group>
  `
})
export class FormFieldDatepickerComponent {
  constructor(public field: FormFieldDatePicker) { }
}

