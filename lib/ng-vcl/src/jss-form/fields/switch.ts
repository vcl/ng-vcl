import { Component, ChangeDetectionStrategy } from '@angular/core';
import {
  VCLFormFieldSchemaSwitch,
  VCLFormFieldSchemaSwitchParams,
} from '../schemas';
import { FormFieldControl } from './field';

import { FormControlGroupComponent } from '../../form-control-group/form-control-group.component';
import { EmbeddedInputFieldLabelDirective } from '../../input/embedded-label.directive';
import { VCLLabelDirective } from '../../core/label';
import { JssFormInputWrapperComponent } from '../jss-form-input-wrapper.component';
import { FlipSwitchComponent } from '../../flip-switch/flip-switch.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { JssFormHintsComponent } from '../jss-form-hints.component';

export class FormFieldSwitch extends FormFieldControl<
  VCLFormFieldSchemaSwitch,
  VCLFormFieldSchemaSwitchParams
> {
  get onLabel() {
    return this.params.onLabel;
  }
  get offLabel() {
    return this.params.onLabel;
  }
  protected createDefaultValue() {
    return false;
  }
}

@Component({
  selector: 'vcl-jss-form-switch',
  template: `
    @if (field.visible) {
      <vcl-form-control-group [errorStateAgent]="field.errorStateAgent">
        @if (!!field.label) {
          <vcl-label>{{ field.label }}</vcl-label>
        }
        <vcl-jss-form-input-wrapper>
          <vcl-flip-switch [formControl]="field.control"></vcl-flip-switch>
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
    FlipSwitchComponent,
    FormsModule,
    ReactiveFormsModule,
    JssFormHintsComponent,
  ],
})
export class FormFieldSwitchComponent {
  constructor(public field: FormFieldSwitch) {}
}
