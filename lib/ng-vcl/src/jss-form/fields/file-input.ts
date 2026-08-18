import { Component, ChangeDetectionStrategy } from '@angular/core';
import {
  VCLFormFieldSchemaFileInput,
  VCLFormFieldSchemaFileInputParams,
} from '../schemas';
import { FormFieldControl } from './field';

import { FormControlGroupComponent } from '../../form-control-group/form-control-group.component';
import { EmbeddedInputFieldLabelDirective } from '../../input/embedded-label.directive';
import { VCLLabelDirective } from '../../core/label';
import { JssFormInputWrapperComponent } from '../jss-form-input-wrapper.component';
import { FileInputComponent } from '../../file-input/file-input.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { JssFormHintsComponent } from '../jss-form-hints.component';

export class FormFieldFileInput extends FormFieldControl<
  VCLFormFieldSchemaFileInput,
  VCLFormFieldSchemaFileInputParams
> {
  get placeholder(): string {
    return this.params.placeholder || '';
  }
  get multiple(): boolean {
    return this.params.multiple || false;
  }
  protected createDefaultValue() {
    return null;
  }
}

@Component({
  selector: 'vcl-jss-form-file-input',
  template: `
    @if (field.visible) {
      <vcl-form-control-group [errorStateAgent]="field.errorStateAgent">
        @if (!!field.label) {
          <vcl-label>{{ field.label }}</vcl-label>
        }
        <vcl-jss-form-input-wrapper>
          <vcl-file-input
            [multiple]="field.multiple"
            [formControl]="field.control"
            [disabled]="field.disabled"
            >{{ field.placeholder }}</vcl-file-input
          >
        </vcl-jss-form-input-wrapper>
        <vcl-jss-form-hints vclHint></vcl-jss-form-hints>
      </vcl-form-control-group>
    }
  `,
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [
    FormControlGroupComponent,
    EmbeddedInputFieldLabelDirective,
    VCLLabelDirective,
    JssFormInputWrapperComponent,
    FileInputComponent,
    FormsModule,
    ReactiveFormsModule,
    JssFormHintsComponent,
  ],
})
export class FormFieldFileInputComponent {
  constructor(public field: FormFieldFileInput) {}
}
