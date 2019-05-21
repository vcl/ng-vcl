import { Component, Inject } from '@angular/core';
import { VCLFormFieldSchemaButtons } from '../schemas';
import { JSS_FORM_TOKEN, JssForm } from '../types';
import { FormField } from './field';
import { FormFieldButton } from './button';

export class FormFieldButtons extends FormField<VCLFormFieldSchemaButtons> {
  get buttons() {
    return (this.schema.buttons || [].map((btn, idx) => new FormFieldButton(btn, this.key + idx, this)));
  }
}

@Component({
  template: `
  <div class="vclLooseButtonGroup">
   <ng-container *ngFor="let button of field.buttons">
    <button vcl-button [disabled]="button.disabled" [type]="field.type" (click)="onAction(button.action)" >{{button.label}}</button>
   </ng-container>
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

FormField.register('buttons', FormFieldButtonsComponent, FormFieldButtons);
