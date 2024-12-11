import { Component } from '@angular/core';
import { VCLFormFieldSchemaHidden } from '../schemas';
import { FormFieldControl } from './field';

export class FormFieldHidden extends FormFieldControl<
  VCLFormFieldSchemaHidden,
  {}
> {}

@Component({
    selector: 'vcl-jss-form-hidden',
    template: ``,
    standalone: false
})
export class FormFieldHiddenComponent {
  constructor(public field: FormFieldHidden) {}
}
