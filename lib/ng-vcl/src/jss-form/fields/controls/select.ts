import { Component } from '@angular/core';
import { VCLFormFieldSchemaSelect } from '../../schemas';
import { registerControlField } from '../registry';
import { FormFieldControl } from './control';

export class FormFieldSelect extends FormFieldControl<VCLFormFieldSchemaSelect> {
  type: 'select' | 'select-list';
  get label(): string {
    return this.schema.label;
  }
  get selectionMode(): 'multiple' | 'single' {
    return this.schema.selectionMode || 'single';
  }
  get placeholder()  {
    return this.schema.placeholder || '';
  }
  get options()  {
    return this.schema.options || [];
  }
  protected createDefaultValue() {
    return this.selectionMode === 'single' ? undefined : [];
  }

}

@Component({
  template: `
  <vcl-form-control-group>
    <label *ngIf="!!field.label" vclFormControlLabel>{{field.label}}<vcl-required *ngIf="field.required"></vcl-required></label>
    <vcl-select *ngIf="field.type === 'select'" [placeholder]="field.placeholder">
      <vcl-select-list [formControl]="field.control" [errorStateAgent]="field.errorStateAgent" [selectionMode]="field.selectionMode">
        <vcl-select-list-item *ngFor="let option of field.options" [value]="option.value">
          <vcl-select-list-label>{{option.label}}</vcl-select-list-label>
          <vcl-select-list-sublabel>{{option.sublabel}}</vcl-select-list-sublabel>
        </vcl-select-list-item>
      </vcl-select-list>
    </vcl-select>
    <vcl-jss-form-hints></vcl-jss-form-hints>
  </vcl-form-control-group>
  `
})
export class FormFieldSelectComponent {
  constructor(public field: FormFieldSelect) { }
}

registerControlField('select', FormFieldSelectComponent, FormFieldSelect);
registerControlField('select-list', FormFieldSelectComponent, FormFieldSelect);