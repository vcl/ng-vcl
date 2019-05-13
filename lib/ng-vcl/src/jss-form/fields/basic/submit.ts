import { Component } from '@angular/core';
import { VCLFormFieldSchemaSubmit } from '../../schemas';
import { registerField } from '../registry';
import { FormField } from './field';

export class FormFieldSubmit extends FormField<VCLFormFieldSchemaSubmit> {

  field: 'submit';
  get label() {
    return this.schema;
  }
  get prepIcon(): string | undefined  {
    return this.schema.appIcon;
  }
  get appIcon(): string | undefined  {
    return this.schema.appIcon;
  }
  get class(): string | undefined  {
    return this.schema.class;
  }
  get autoDisable(): boolean  {
    return this.schema.autoDisable || false;
  }
}

@Component({
  template: `
    <button vcl-button type="submit">{{field.label}}</button>
  `
})
export class FormFieldSubmitComponent {
  constructor(
    public field: FormFieldSubmit,
  ) { }
}

registerField('submit', FormFieldSubmitComponent, FormFieldSubmit);
