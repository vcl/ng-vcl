import { Component, Inject } from '@angular/core';
import { VCLFormFieldSchemaButton } from '../schemas';
import { JSS_FORM_TOKEN, JssForm } from '../types';
import { FormField } from './field';

export class FormFieldButton extends FormField<VCLFormFieldSchemaButton> {
  field: 'button' | 'submit';

  constructor(a1, a2, a3) {
    super(a1, a2, a3);
    this.registerConditional(this.schema.disabled, (disabled) => this._disabled = !!disabled);
  }

  private _disabled: boolean;

  get disabled() {
    return this._disabled;
  }

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
   <button vcl-button [disabled]="field.disabled" [type]="field.type" (click)="onAction(field.action)" >{{field.label}}</button>
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

FormField.register('button', FormFieldButtonComponent, FormFieldButton);
