import { Component } from '@angular/core';
import { VCLFormFieldSchemaSelect, VCLFormFieldSchemaSelectParams } from '../schemas';
import { FormFieldControl } from './field';

export class FormFieldSelectList extends FormFieldControl<VCLFormFieldSchemaSelect, VCLFormFieldSchemaSelectParams> {
  get selectionMode(): 'multiple' | 'single' {
    return this.params.selectionMode || 'single';
  }
  get options()  {
    return this.params.options || [];
  }
  protected createDefaultValue() {
    return this.selectionMode === 'single' ? null : [];
  }
}

@Component({
  template: `
  <vcl-form-control-group *ngIf="field.visible">
    <label *ngIf="!!field.label" vclFormControlLabel>{{field.label}}<vcl-required *ngIf="field.required"></vcl-required></label>
    <vcl-select-list [formControl]="field.control" [errorStateAgent]="field.errorStateAgent" [selectionMode]="field.selectionMode">
      <vcl-select-list-item *ngFor="let option of field.options" [value]="option.value">
        <vcl-label>{{option.label}}</vcl-label>
        <vcl-sub-label *ngIf="option.sublabel">{{option.sublabel}}</vcl-sub-label>
      </vcl-select-list-item>
    </vcl-select-list>
    <vcl-jss-form-hints></vcl-jss-form-hints>
  </vcl-form-control-group>
  `
})
export class FormFieldSelectListComponent {
  constructor(public field: FormFieldSelectList) { }
}
