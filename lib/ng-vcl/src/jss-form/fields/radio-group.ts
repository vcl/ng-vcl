import { Component, ChangeDetectionStrategy } from '@angular/core';
import {
  VCLFormFieldSchemaRadioGroup,
  VCLFormFieldSchemaRadioGroupParams,
} from '../schemas';
import { FormFieldControl } from './field';

import { FormControlGroupComponent } from '../../form-control-group/form-control-group.component';
import { EmbeddedInputFieldLabelDirective } from '../../input/embedded-label.directive';
import { VCLLabelDirective } from '../../core/label';
import { JssFormInputWrapperComponent } from '../jss-form-input-wrapper.component';
import { VCLRadioGroupComponent } from '../../radio-button/radio-group.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VCLRadioButtonComponent } from '../../radio-button/radio-button.component';

export class FormFieldRadio extends FormFieldControl<
  VCLFormFieldSchemaRadioGroup,
  VCLFormFieldSchemaRadioGroupParams
> {
  get label(): string {
    return this.schema.label;
  }
  get iconPosition() {
    return this.params.iconPosition || 'right';
  }
  get options() {
    return this.params.options || [];
  }
  protected createDefaultValue() {
    return null;
  }
}

@Component({
  selector: 'vcl-jss-form-radio-group',
  template: `
    @if (field.visible) {
      <vcl-form-control-group [errorStateAgent]="field.errorStateAgent">
        @if (!!field.label) {
          <vcl-label>{{ field.label }}</vcl-label>
        }
        <vcl-jss-form-input-wrapper>
          <vcl-radio-group
            [formControl]="field.control"
            [disabled]="field.disabled">
            @for (option of field.options; track option) {
              <vcl-radio-button [value]="option.value">{{
                option.label
              }}</vcl-radio-button>
            }
          </vcl-radio-group>
        </vcl-jss-form-input-wrapper>
      </vcl-form-control-group>
    }
  `,
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [
    FormControlGroupComponent,
    EmbeddedInputFieldLabelDirective,
    VCLLabelDirective,
    JssFormInputWrapperComponent,
    VCLRadioGroupComponent,
    FormsModule,
    ReactiveFormsModule,
    VCLRadioButtonComponent,
  ],
})
export class FormFieldRadioGroupComponent {
  constructor(public field: FormFieldRadio) {}
}
