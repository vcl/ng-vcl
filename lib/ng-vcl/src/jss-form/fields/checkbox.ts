import { Component, ChangeDetectionStrategy } from '@angular/core';
import {
  VCLFormFieldSchemaCheckbox,
  VCLFormFieldSchemaCheckboxParams,
} from '../schemas';
import { FormFieldControl } from './field';

import { VCLFormControlGroupComponent } from '../../form-control-group/form-control-group.component';
import { EmbeddedInputFieldLabelDirective } from '../../input/embedded-label.directive';
import { JssFormInputWrapperComponent } from '../jss-form-input-wrapper.component';
import { VCLCheckboxComponent } from '../../checkbox/checkbox.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { JssFormHintsComponent } from '../jss-form-hints.component';

export class FormFieldCheckbox extends FormFieldControl<
  VCLFormFieldSchemaCheckbox,
  VCLFormFieldSchemaCheckboxParams
> {
  get iconPosition() {
    return this.params.iconPosition || 'right';
  }
  protected createDefaultValue() {
    return false;
  }
}

@Component({
  selector: 'vcl-jss-form-checkbox',
  template: `
    @if (field.visible) {
      <vcl-form-control-group [errorStateAgent]="field.errorStateAgent">
        <vcl-jss-form-input-wrapper>
          <vcl-checkbox [formControl]="field.control">{{
            field.label
          }}</vcl-checkbox>
        </vcl-jss-form-input-wrapper>
        <vcl-jss-form-hints vclHint></vcl-jss-form-hints>
      </vcl-form-control-group>
    }
  `,
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [
    VCLFormControlGroupComponent,
    EmbeddedInputFieldLabelDirective,
    JssFormInputWrapperComponent,
    VCLCheckboxComponent,
    FormsModule,
    ReactiveFormsModule,
    JssFormHintsComponent,
  ],
})
export class FormFieldCheckboxComponent {
  constructor(public field: FormFieldCheckbox) {}
}
