import { Component } from '@angular/core';
import { VCLFormFieldSchemaButtonGroup, VCLFormFieldSchemaButtonGroupParams } from '../schemas';
import { FormFieldControl } from './field';

export class FormFieldButtonGroup extends FormFieldControl<VCLFormFieldSchemaButtonGroup, VCLFormFieldSchemaButtonGroupParams> {
  type: 'button-group';
  get options()  {
    return this.params.options || [];
  }
  get selectionMode()  {
    return this.params.selectionMode || 'single';
  }
  protected createDefaultValue() {
    return this.selectionMode === 'single' ? null : [];
  }
}

@Component({
  template: `
    <vcl-form-control-group *ngIf="field.visible">
      <label *ngIf="!!field.label" vclFormControlLabel>{{field.label}}<vcl-required *ngIf="field.required"></vcl-required></label>
      <vcl-button-group [formControl]="field.control" [selectionMode]="field.selectionMode" [errorStateAgent]="field.errorStateAgent">
        <button vcl-button *ngFor="let option of field.options" [value]="option.value">{{option.label}}</button>
      </vcl-button-group>
      <vcl-jss-form-hints></vcl-jss-form-hints>
    </vcl-form-control-group>
  `
})
export class FormFieldButtonGroupComponent {
  constructor(public field: FormFieldButtonGroup) { }
}
