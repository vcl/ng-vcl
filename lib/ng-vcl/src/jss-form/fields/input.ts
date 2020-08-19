import { Component } from '@angular/core';
import { VCLFormFieldSchemaInput, VCLFormFieldSchemaInputParams } from '../schemas';
import { FormFieldControl } from './field';

export class FormFieldInput extends FormFieldControl<VCLFormFieldSchemaInput, VCLFormFieldSchemaInputParams> {
  get placeholder(): string {
    return this.params.placeholder || null;
  }

  get autocomplete(): string {
    return this.params.autocomplete || null;
  }

  protected createDefaultValue() {
    return this.type !== 'number' ? '' : null;
  }

  get inputType() {
    return this.params.inputType || 'text';
  }

  get prependedIcons() {
    const prependedIcon = this.params.prependedIcon ?? null;
    if (typeof prependedIcon === 'string') {
      return [prependedIcon];
    } else if (Array.isArray(prependedIcon)) {
      return prependedIcon
    }
    return [];
  }

  get appendedIcons() {
    const appendedIcon = this.params.appendedIcon ?? null;
    if (typeof appendedIcon === 'string') {
      return [appendedIcon];
    } else if (Array.isArray(appendedIcon)) {
      return appendedIcon
    }
    return [];
  }

}

@Component({
  selector: 'vcl-jss-form-input',  
  template: `
    <vcl-form-control-group *ngIf="field.visible" [errorStateAgent]="field.errorStateAgent">
      <vcl-label *ngIf="!!field.label">{{field.label}}</vcl-label>
      <vcl-jss-form-input-wrapper>
        <vcl-input-field>
          <vcl-icon *ngFor="let icon of field.prependedIcons" vclPrepended [icon]="icon"></vcl-icon>
          <input [type]="field.inputType" vclInput [formControl]="field.control" [attr.placeholder]="field.placeholder" [attr.autocomplete]="field.autocomplete">
          <vcl-icon *ngFor="let icon of field.appendedIcons" vclPrepended [icon]="icon"></vcl-icon>
        </vcl-input-field>
      </vcl-jss-form-input-wrapper>
      <vcl-jss-form-hints vclHint></vcl-jss-form-hints>
    </vcl-form-control-group>
  `
})
export class FormFieldInputComponent {
  constructor(public field: FormFieldInput) { }
}

