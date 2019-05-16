import { Component, Inject } from '@angular/core';
import { VCLFormFieldSchemaButton } from '../schemas';
import { JSS_FORM_TOKEN, JssForm } from '../types';
import { registerField } from './registry';
import { FormField } from './field';

export class FormFieldButton extends FormField<VCLFormFieldSchemaButton> {

  field: 'button';
  get label() {
    return this.schema.label;
  }
  get prepIcon(): string | undefined  {
    return this.schema.prepIcon;
  }
  get appIcon(): string | undefined  {
    return this.schema.appIcon;
  }
  get class(): string | undefined  {
    return this.schema.class;
  }
  get action(): string  {
    return this.schema.action;
  }
}

@Component({
  template: `
   <button vcl-button [type]="field.type" (click)="onAction(field.action)" >{{field.label}}</button>
  `
})
export class FormFieldButtonComponent {
  constructor(
    public field: FormFieldButton,
    @Inject(JSS_FORM_TOKEN) private jssForm: JssForm,
  ) { }

  onAction(action: string) {
    this.jssForm.onAction(action);
  }
}

registerField('button', FormFieldButtonComponent, FormFieldButton);
