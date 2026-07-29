import { Component, ChangeDetectionStrategy } from '@angular/core';
import {
  VCLFormFieldSchemaDatePicker,
  VCLFormFieldSchemaDatePickerParams,
} from '../schemas';
import { FormFieldControl } from './field';
import { DatepickerPick } from '../../date-picker/index';
import { NgIf } from '@angular/common';
import { FormControlGroupComponent } from '../../form-control-group/form-control-group.component';
import { EmbeddedInputFieldLabelDirective } from '../../input/embedded-label.directive';
import { VCLLabelDirective } from '../../core/label';
import { JssFormInputWrapperComponent } from '../jss-form-input-wrapper.component';
import { DatepickerComponent } from '../../date-picker/date-picker.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { JssFormHintsComponent } from '../jss-form-hints.component';

export class FormFieldDatePicker extends FormFieldControl<
  VCLFormFieldSchemaDatePicker,
  VCLFormFieldSchemaDatePickerParams
> {
  protected createDefaultValue() {
    return undefined;
  }
  get pick(): DatepickerPick {
    return this.params.pick || 'date';
  }
  get placeholder(): string {
    return this.params.placeholder || '';
  }
}

@Component({
  selector: 'vcl-jss-form-date-picker',
  template: `
    <vcl-form-control-group
      *ngIf="field.visible"
      [errorStateAgent]="field.errorStateAgent">
      <vcl-label *ngIf="!!field.label">{{ field.label }}</vcl-label>
      <vcl-jss-form-input-wrapper>
        <vcl-date-picker
          [formControl]="field.control"
          [pick]="field.pick"
          [placeholder]="field.placeholder"></vcl-date-picker>
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
    DatepickerComponent,
    FormsModule,
    ReactiveFormsModule,
    JssFormHintsComponent,
  ],
})
export class FormFieldDatepickerComponent {
  constructor(public field: FormFieldDatePicker) {}
}
