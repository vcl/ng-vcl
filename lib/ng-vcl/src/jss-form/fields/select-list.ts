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
  selector: 'vcl-jss-form-select-list',  
  template: `
  <vcl-form-control-group *ngIf="field.visible" [errorStateAgent]="field.errorStateAgent">
    <vcl-label *ngIf="!!field.label">{{field.label}}</vcl-label>
    <vcl-select-list [formControl]="field.control" [selectionMode]="field.selectionMode">
      <vcl-select-list-item *ngFor="let option of field.options" [value]="option.value">
        <vcl-label>{{option.label}}</vcl-label>
        <vcl-sub-label *ngIf="option.sublabel">{{option.sublabel}}</vcl-sub-label>
      </vcl-select-list-item>
    </vcl-select-list>
    <vcl-jss-form-hints vclHint></vcl-jss-form-hints>
  </vcl-form-control-group>
  `
})
export class FormFieldSelectListComponent {
  constructor(public field: FormFieldSelectList) { }
}
