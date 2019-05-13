import { Component, Inject } from '@angular/core';
import { VCLFormFieldSchemaButtons } from '../../schemas';
import { JSS_FORM_TOKEN, JssForm } from '../../types';
import { registerField } from '../registry';
import { FormField } from './field';

export class FormFieldButtons extends FormField<VCLFormFieldSchemaButtons> {

  field: 'buttons';
  get buttons() {
    return this.schema.buttons || [];
  }
}

@Component({
  template: `
  <div class="vclLooseButtonGroup">
    <button vcl-button *ngFor="let button of field.buttons" [type]="button.type" (click)="onAction(button.action)">{{button.label}}</button>
  </div>
  `
})
export class FormFieldButtonsComponent {
  constructor(
    public field: FormFieldButtons,
    @Inject(JSS_FORM_TOKEN) private jssForm: JssForm,
  ) { }

  onAction(action: string) {
    this.jssForm.onAction(action);
  }
}

registerField('buttons', FormFieldButtonsComponent, FormFieldButtons);
