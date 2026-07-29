import { Component, ChangeDetectionStrategy } from '@angular/core';
import {
  VCLFormFieldSchemaTextarea,
  VCLFormFieldSchemaTextareaParams,
} from '../schemas';
import { FormFieldControl } from './field';
import { NgIf } from '@angular/common';
import { FormControlGroupComponent } from '../../form-control-group/form-control-group.component';
import { EmbeddedInputFieldLabelDirective } from '../../input/embedded-label.directive';
import { VCLLabelDirective } from '../../core/label';
import { JssFormInputWrapperComponent } from '../jss-form-input-wrapper.component';
import { VCLInputFieldComponent } from '../../input/input-field.component';
import { TextareaDirective } from '../../input/textarea.directive';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { JssFormHintsComponent } from '../jss-form-hints.component';

export class FormFieldTextarea extends FormFieldControl<
  VCLFormFieldSchemaTextarea,
  VCLFormFieldSchemaTextareaParams
> {
  get placeholder(): string | undefined {
    return this.params.placeholder || null;
  }
  get minRows(): number | undefined {
    return this.params.minRows;
  }
  get maxRows(): number | undefined {
    return this.params.maxRows;
  }
  protected createDefaultValue() {
    return '';
  }
}

@Component({
  selector: 'vcl-jss-form-textarea',
  template: `
    <vcl-form-control-group
      [errorStateAgent]="field.errorStateAgent"
      *ngIf="field.visible">
      <vcl-label *ngIf="!!field.label">{{ field.label }}</vcl-label>
      <vcl-jss-form-input-wrapper>
        <vcl-input-field class="auto-height">
          <textarea
            vclInput
            [formControl]="field.control"
            [attr.placeholder]="field.placeholder"
            [autogrow]="true"
            [minRows]="field.minRows || 3"
            [maxRows]="field.minRows || 10"
            [disabled]="field.disabled"></textarea>
        </vcl-input-field>
      </vcl-jss-form-input-wrapper>
      <vcl-jss-form-hints vclHint></vcl-jss-form-hints>
    </vcl-form-control-group>
  `,
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [
    NgIf,
    FormControlGroupComponent,
    EmbeddedInputFieldLabelDirective,
    VCLLabelDirective,
    JssFormInputWrapperComponent,
    VCLInputFieldComponent,
    TextareaDirective,
    FormsModule,
    ReactiveFormsModule,
    JssFormHintsComponent,
  ],
})
export class FormFieldTextareaComponent {
  constructor(public field: FormFieldTextarea) {}
}
