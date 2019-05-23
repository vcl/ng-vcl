import { Component, Inject } from '@angular/core';
import { VCLFormFieldSchemaButtons } from '../schemas';
import { JSS_FORM_TOKEN, JssForm } from '../types';
import { FormField } from './field';
import { FormFieldButton } from './button';

export class FormFieldButtons extends FormField<VCLFormFieldSchemaButtons> {
  get buttons() {
    return (this.schema.buttons || [].map((btn) => new FormFieldButton(btn, this)));
  }
}

@Component({
  template: `
  <div class="vclLooseButtonGroup">
   <ng-container *ngFor="let button of field.buttons">
    <button vcl-button [disabled]="button.disabled" [type]="button.type" (click)="onAction(button)" >{{button.label}}</button>
   </ng-container>
  </div>
  `
})
export class FormFieldButtonsComponent {
  constructor(
    public field: FormFieldButtons,
    @Inject(JSS_FORM_TOKEN) private jssForm: JssForm,
  ) { }

  onAction(button: FormFieldButton) {
    if (button.type === 'button') {
      this.jssForm.onAction(button.action);
    }
  }
}

FormField.register('buttons', FormFieldButtonsComponent, FormFieldButtons);
