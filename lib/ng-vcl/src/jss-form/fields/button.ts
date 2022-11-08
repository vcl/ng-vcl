import { Component, Inject } from '@angular/core';
import { VCLFormFieldSchemaButton } from '../schemas';
import { JSS_FORM_TOKEN, JssForm } from '../types';
import { FormField } from './field';

export class FormFieldButton extends FormField<VCLFormFieldSchemaButton> {
  field: 'button' | 'submit';

  constructor(a1, a2) {
    super(a1, a2);
    this.registerConditional(
      this.schema.disabled,
      disabled => (this._disabled = !!disabled)
    );
  }

  private _disabled: boolean;

  get disabled() {
    return this._disabled;
  }

  get label() {
    return this.schema.label;
  }
  get prepIcon(): string | undefined {
    return this.schema.prepIcon;
  }
  get appIcon(): string | undefined {
    return this.schema.appIcon;
  }
  get class(): string | undefined {
    return this.schema.class;
  }
  get action(): string {
    return this.schema.action;
  }
}

@Component({
  selector: 'vcl-jss-form-button',
  template: `
    <button
      vcl-button
      [ngClass]="field.class"
      [disabled]="field.disabled"
      [type]="field.type"
      (click)="onAction(field)">
      <vcl-icogram>
        <vcl-icon *ngIf="field.prepIcon" vclPrepend [icon]=""
          >field.prepIcon</vcl-icon
        >
        {{ field.label }}
        <vcl-icon
          *ngIf="field.appIcon"
          vclAppend
          [icon]="field.appIcon"></vcl-icon>
      </vcl-icogram>
    </button>
  `,
})
export class FormFieldButtonComponent {
  constructor(
    public field: FormFieldButton,
    @Inject(JSS_FORM_TOKEN) private jssForm: JssForm
  ) {}

  onAction(button: FormFieldButton) {
    if (button.type === 'button') {
      this.jssForm.onAction(button.action);
    }
  }
}
