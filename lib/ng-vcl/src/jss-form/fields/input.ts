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
    return this.params.inputType !== 'number' ? '' : null;
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

  get spinner(): boolean {
    return this.params.spinner || false;
  }

}

@Component({
  selector: 'vcl-jss-form-input',
  template: `
    <vcl-form-control-group *ngIf="field.visible" [errorStateAgent]="field.errorStateAgent" [spinner]="field.spinner">
      <vcl-label *ngIf="!!field.label">{{field.label}}</vcl-label>
      <vcl-jss-form-input-wrapper>
        <vcl-input-field>
          <vcl-icon *ngFor="let icon of field.prependedIcons" vclPrepended [icon]="icon"></vcl-icon>
          <input [type]="field.inputType" vclInput [formControl]="field.control" [attr.placeholder]="field.placeholder" [attr.autocomplete]="field.autocomplete" [disabled]="field.disabled">
          <vcl-icon *ngFor="let icon of field.appendedIcons" vclPrepended [icon]="icon"></vcl-icon>
        </vcl-input-field>
      </vcl-jss-form-input-wrapper>
      <vcl-spinner *ngIf="field.spinner" [(ngModel)]="value"></vcl-spinner>
      <vcl-jss-form-hints vclHint></vcl-jss-form-hints>
    </vcl-form-control-group>
  `
})
export class FormFieldInputComponent {

  private _value = '';

  get value(): any {
    return this._value;
  }

  set value(value: any) {
    const wasNull = this._value === null;
    this._value = value;
    this.field.control.setValue(value);
    if (!wasNull) {
      this.field.control.markAllAsTouched();
    }
  }

  constructor(public field: FormFieldInput) {
    this._value = field.defaultValue;
    field.control.valueChanges.subscribe((change) => this._value = change);
  }
}

