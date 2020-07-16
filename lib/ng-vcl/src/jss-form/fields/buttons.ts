import { Component, Inject } from '@angular/core';
import { VCLFormFieldSchemaButtons } from '../schemas';
import { JSS_FORM_TOKEN, JssForm } from '../types';
import { FormField } from './field';
import { FormFieldButton } from './button';

export class FormFieldButtons extends FormField<VCLFormFieldSchemaButtons> {
  constructor(schema: VCLFormFieldSchemaButtons, parent?: FormField) {
    super(schema, parent);
    this._buttons = (this.schema.buttons || []).map((btn) => new FormFieldButton(btn, this));
  }
  private _buttons: FormFieldButton[];

  get buttons(): FormFieldButton[] {
    return this._buttons;
  }
}

// TODO: workaround
// Portals will create a wrapped ng-component around each button interfering with loose button group styling
@Component({
  // template: `
  // <div class="vclLooseButtonGroup">
  //   <ng-template *ngFor="let portal of portals" [cdkPortalOutlet]="portal"></ng-template>
  // </div>
  // `
  selector: 'vcl-jss-form-buttons',  
  template: `
  <div class="vclLooseButtonGroup">
    <ng-container *ngFor="let buttonField of field.buttons">
      <button vcl-button [ngClass]="buttonField.class" [disabled]="buttonField.disabled" [type]="buttonField.type" (click)="onAction(buttonField)">
        <vcl-icogram>
          <vcl-icon *ngIf="buttonField.prepIcon" vclPrepend [icon]="">buttonField.prepIcon</vcl-icon>
          {{buttonField.label}}
          <vcl-icon *ngIf="buttonField.appIcon" vclAppend [icon]="buttonField.appIcon"></vcl-icon>
        </vcl-icogram>
      </button>
    </ng-container>
  </div>
  `
})
export class FormFieldButtonsComponent {
  constructor(
    public field: FormFieldButtons,
    @Inject(JSS_FORM_TOKEN) private jssForm: JssForm,
  ) {
    // this.portals = this.field.buttons.map(_field => _field.createPortal(injector, []));
  }

  // portals: Portal<any>[];

  onAction(button: FormFieldButton) {
    if (button.type === 'button') {
      this.jssForm.onAction(button.action);
    }
  }
}
