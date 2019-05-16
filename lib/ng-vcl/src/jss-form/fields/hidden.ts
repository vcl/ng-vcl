import { Component } from '@angular/core';
import { VCLFormFieldSchemaInput } from '../schemas';
import { registerControlField } from './registry';
import { FormFieldControl } from './field';

export class FormFieldHidden extends FormFieldControl<VCLFormFieldSchemaInput> {
  type: 'hidden';
  protected createDefaultValue() {
    return '';
  }
}

@Component({
  template: ``
})
export class FormFieldHiddenComponent {
  constructor(public field: FormFieldHidden) { }
}

registerControlField('hidden', FormFieldHiddenComponent, FormFieldHidden);
