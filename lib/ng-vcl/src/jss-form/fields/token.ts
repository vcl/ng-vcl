import { Component, ChangeDetectionStrategy } from '@angular/core';
import { VCLFormFieldSchemaToken } from '../schemas';
import { FormFieldControl } from './field';
import { NgIf } from '@angular/common';
import { FormControlGroupComponent } from '../../form-control-group/form-control-group.component';
import { EmbeddedInputFieldLabelDirective } from '../../input/embedded-label.directive';
import { VCLLabelDirective } from '../../core/label';
import { JssFormInputWrapperComponent } from '../jss-form-input-wrapper.component';
import { VCLTokenInputContainerComponent } from '../../token/token-input.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { JssFormHintsComponent } from '../jss-form-hints.component';

export class FormFieldToken extends FormFieldControl<
  VCLFormFieldSchemaToken,
  {}
> {
  protected createDefaultValue() {
    return [];
  }
}

@Component({
  selector: 'vcl-jss-form-token',
  template: `
    <vcl-form-control-group
      *ngIf="field.visible"
      [errorStateAgent]="field.errorStateAgent">
      <vcl-label *ngIf="!!field.label">{{ field.label }}</vcl-label>
      <vcl-jss-form-input-wrapper>
        <vcl-token-input [formControl]="field.control"></vcl-token-input>
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
    VCLTokenInputContainerComponent,
    FormsModule,
    ReactiveFormsModule,
    JssFormHintsComponent,
  ],
})
export class FormFieldTokenComponent {
  constructor(public field: FormFieldToken) {}
}
