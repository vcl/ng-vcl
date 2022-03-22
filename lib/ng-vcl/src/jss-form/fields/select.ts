import { Component } from '@angular/core';
import { VCLFormFieldSchemaSelect, VCLFormFieldSchemaSelectParams } from '../schemas';
import { FormFieldControl } from './field';

export class FormFieldSelect extends FormFieldControl<VCLFormFieldSchemaSelect, VCLFormFieldSchemaSelectParams> {
  get selectionMode(): 'multiple' | 'single' {
    return this.params.selectionMode || 'single';
  }
  get placeholder()  {
    return this.params.placeholder || '';
  }
  get search()  {
    return this.params.search || false;
  }
  get maxHeight()  {
    return this.params.maxHeight || undefined;
  }
  get options()  {
    return this.params.options || [];
  }
  protected createDefaultValue() {
    return this.selectionMode === 'single' ? null : [];
  }

}

@Component({
  selector: 'vcl-jss-form-select',
  template: `
  <vcl-form-control-group [errorStateAgent]="field.errorStateAgent" *ngIf="field.visible">
    <vcl-label *ngIf="!!field.label">{{field.label}}</vcl-label>
    <vcl-jss-form-input-wrapper>
      <vcl-select [placeholder]="field.placeholder" [search]="field.search" [maxHeight]="field.maxHeight">
        <vcl-select-list [formControl]="field.control" [selectionMode]="field.selectionMode">
          <vcl-select-list-item *ngFor="let option of field.options" [value]="option.value">
            <vcl-label>{{option.label}}</vcl-label>
            <vcl-sub-label *ngIf="option.sublabel">{{option.sublabel}}</vcl-sub-label>
          </vcl-select-list-item>
        </vcl-select-list>
      </vcl-select>
    </vcl-jss-form-input-wrapper>
    <vcl-jss-form-hints vclHint></vcl-jss-form-hints>
  </vcl-form-control-group>
  `
})
export class FormFieldSelectComponent {
  constructor(public field: FormFieldSelect) { }
}

