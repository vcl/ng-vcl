import { Component, Inject, ChangeDetectionStrategy } from '@angular/core';
import { VCLFormFieldSchemaButtons } from '../schemas';
import { JSS_FORM_TOKEN, JssForm } from '../types';
import { FormField } from './field';
import { FormFieldButton } from './button';
import { NgClass } from '@angular/common';
import { VCLButtonComponent } from '../../button/button.component';
import { VCLIcogramComponent } from '../../icogram/icogram.component';
import { VCLIconComponent } from '../../icon/icon.component';

export class FormFieldButtons extends FormField<VCLFormFieldSchemaButtons> {
  constructor(schema: VCLFormFieldSchemaButtons, parent?: FormField) {
    super(schema, parent);
    this._buttons = (this.schema.buttons || []).map(
      btn => new FormFieldButton(btn, this)
    );
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
  // <div class="loose-button-group">
  //   <ng-template *ngFor="let portal of portals" [cdkPortalOutlet]="portal"></ng-template>
  // </div>
  // `
  selector: 'vcl-jss-form-buttons',
  template: `
    <div class="loose-button-group">
      @for (buttonField of field.buttons; track buttonField) {
        <button
          vcl-button
          [ngClass]="buttonField.class"
          [disabled]="buttonField.disabled"
          [type]="buttonField.type"
          (click)="onAction(buttonField)">
          <vcl-icogram>
            @if (buttonField.prepIcon) {
              <vcl-icon vclPrepend [icon]="">buttonField.prepIcon</vcl-icon>
            }
            {{ buttonField.label }}
            @if (buttonField.appIcon) {
              <vcl-icon vclAppend [icon]="buttonField.appIcon"></vcl-icon>
            }
          </vcl-icogram>
        </button>
      }
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [VCLButtonComponent, NgClass, VCLIcogramComponent, VCLIconComponent],
})
export class FormFieldButtonsComponent {
  constructor(
    public field: FormFieldButtons,
    @Inject(JSS_FORM_TOKEN) private jssForm: JssForm
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
