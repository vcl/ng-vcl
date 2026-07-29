import { Component, ChangeDetectionStrategy } from '@angular/core';
import {
  VCLFormFieldSchemaRadioGroup,
  VCLFormFieldSchemaRadioGroupParams,
} from '../schemas';
import { FormFieldControl } from './field';
import { NgIf, NgFor } from '@angular/common';
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
    <vcl-form-control-group
      *ngIf="field.visible"
      [errorStateAgent]="field.errorStateAgent">
      <vcl-label *ngIf="!!field.label">{{ field.label }}</vcl-label>
      <vcl-jss-form-input-wrapper>
        <vcl-radio-group
          [formControl]="field.control"
          [disabled]="field.disabled">
          <vcl-radio-button
            *ngFor="let option of field.options"
            [value]="option.value"
            >{{ option.label }}</vcl-radio-button
          >
        </vcl-radio-group>
      </vcl-jss-form-input-wrapper>
    </vcl-form-control-group>
  `,
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [
    NgIf,
    FormControlGroupComponent,
    EmbeddedInputFieldLabelDirective,
    VCLLabelDirective,
    JssFormInputWrapperComponent,
    VCLRadioGroupComponent,
    FormsModule,
    ReactiveFormsModule,
    NgFor,
    VCLRadioButtonComponent,
  ],
})
export class FormFieldRadioGroupComponent {
  constructor(public field: FormFieldRadio) {}
}
