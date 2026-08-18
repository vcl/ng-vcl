import { Component, ChangeDetectionStrategy } from '@angular/core';
import {
  VCLFormFieldSchemaButtonGroup,
  VCLFormFieldSchemaButtonGroupParams,
} from '../schemas';
import { FormFieldControl } from './field';

import { FormControlGroupComponent } from '../../form-control-group/form-control-group.component';
import { EmbeddedInputFieldLabelDirective } from '../../input/embedded-label.directive';
import { VCLLabelDirective } from '../../core/label';
import { VCLButtonGroupComponent } from '../../button-group/button-group.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VCLButtonComponent } from '../../button/button.component';
import { JssFormHintsComponent } from '../jss-form-hints.component';

export class FormFieldButtonGroup extends FormFieldControl<
  VCLFormFieldSchemaButtonGroup,
  VCLFormFieldSchemaButtonGroupParams
> {
  get options() {
    return this.params.options || [];
  }
  get selectionMode() {
    return this.params.selectionMode || 'single';
  }
  protected createDefaultValue() {
    return this.selectionMode === 'single' ? null : [];
  }
}

@Component({
  selector: 'vcl-jss-form-button-group',
  template: `
    @if (field.visible) {
      <vcl-form-control-group [errorStateAgent]="field.errorStateAgent">
        @if (!!field.label) {
          <vcl-label>{{ field.label }}</vcl-label>
        }
        <vcl-button-group
          [formControl]="field.control"
          [selectionMode]="field.selectionMode">
          @for (option of field.options; track option) {
            <button vcl-button [value]="option.value">
              {{ option.label }}
            </button>
          }
        </vcl-button-group>
        <vcl-jss-form-hints vclHint></vcl-jss-form-hints>
      </vcl-form-control-group>
    }
  `,
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [
    FormControlGroupComponent,
    EmbeddedInputFieldLabelDirective,
    VCLLabelDirective,
    VCLButtonGroupComponent,
    FormsModule,
    ReactiveFormsModule,
    VCLButtonComponent,
    JssFormHintsComponent,
  ],
})
export class FormFieldButtonGroupComponent {
  constructor(public field: FormFieldButtonGroup) {}
}
