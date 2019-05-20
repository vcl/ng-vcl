import { Component } from '@angular/core';
import { VCLFormFieldSchemaHidden } from '../schemas';
import { FormFieldControl } from './field';

export class FormFieldHidden extends FormFieldControl<VCLFormFieldSchemaHidden, {}> { }

@Component({
  template: ``
})
export class FormFieldHiddenComponent {
  constructor(public field: FormFieldHidden) { }
}

FormFieldControl.register('hidden', FormFieldHiddenComponent, FormFieldHidden);
