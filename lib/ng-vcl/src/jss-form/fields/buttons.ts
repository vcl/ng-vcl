import { Component, Inject, Injector } from '@angular/core';
import { VCLFormFieldSchemaButtons } from '../schemas';
import { JSS_FORM_TOKEN, JssForm } from '../types';
import { FormField } from './field';
import { FormFieldButton } from './button';
import { Portal } from '@angular/cdk/portal';

export class FormFieldButtons extends FormField<VCLFormFieldSchemaButtons> {
  get buttons(): FormFieldButton[] {
    return (this.schema.buttons || []).map((btn) => new FormFieldButton(btn, this));
  }
}

// TODO: workaround
// Portals will create a wrapped ng-component around each button interfering with loose button group styling
@Component({
  template: `
  <div class="vclLooseButtonGroup">
    <ng-container *ngFor="let buttonField of field.buttons">
      <button vcl-button [ngClass]="buttonField.class" [disabled]="buttonField.disabled" [type]="buttonField.type" (click)="onAction(field)">
        <vcl-icogram>
          <vcl-icon *ngIf="buttonField.prepIcon" vclPrepend [icon]="">buttonField.prepIcon</vcl-icon>
          {{buttonField.label}}
          <vcl-icon *ngIf="buttonField.appIcon" vclAppend [icon]="buttonField.appIcon"></vcl-icon>
        </vcl-icogram>
      </button>
    </ng-container>
  </div>
  `
  // template: `
  // <div class="vclLooseButtonGroup">
  //   <ng-template *ngFor="let portal of portals" [cdkPortalOutlet]="portal"></ng-template>
  // </div>
  // `
})
export class FormFieldButtonsComponent {
  constructor(
    injector: Injector,
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

FormField.register('buttons', FormFieldButtonsComponent, FormFieldButtons);
