import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  FormFieldControl,
  VCLFormFieldControlSchema,
  Conditional,
  VCLFormControlGroupComponent,
  VCLLabelDirective,
} from '@vcl/ng-vcl';
import { CounterComponent } from '../form-control-group/counter.component';

@Component({
  template: `
    @if (field.visible) {
      <vcl-form-control-group>
        @if (!!field.label) {
          <vcl-label>{{ field.label }}</vcl-label>
        }
        <demo-counter
          [formControl]="formControl"
          [min]="field.params.min"
          [max]="field.params.max"></demo-counter>
      </vcl-form-control-group>
    }
  `,
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [
    ReactiveFormsModule,
    VCLFormControlGroupComponent,
    CounterComponent,
    VCLLabelDirective,
    FormsModule,
  ],
})
export class FormFieldCounterComponent {
  constructor(public field: FormFieldControl) {}

  // Cast AbstractControl to FormControl safely for the template
  get formControl(): FormControl {
    return this.field.control as FormControl;
  }
}

export interface CounterSchemaParams {
  min?: number;
  max?: number;
}

export interface CounterSchema extends VCLFormFieldControlSchema {
  type: 'counter';
  params?: CounterSchemaParams | Conditional<CounterSchemaParams>;
}
