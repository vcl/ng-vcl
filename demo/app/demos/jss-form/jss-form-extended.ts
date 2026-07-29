import { NgIf } from '@angular/common';
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {
  FormFieldControl,
  VCLFormFieldControlSchema,
  Conditional,
} from '@vcl/ng-vcl';
import { CounterComponent } from '../form-control-group/counter.component';
import { FormControlGroupComponent } from '../../../../lib/ng-vcl/src/form-control-group/form-control-group.component';

@Component({
  template: `
    <vcl-form-control-group *ngIf="field.visible">
      <vcl-label *ngIf="!!field.label">{{ field.label }}</vcl-label>
      <demo-counter
        [formControl]="field.control"
        [min]="field.params.min"
        [max]="field.params.max"></demo-counter>
    </vcl-form-control-group>
  `,
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [
    NgIf,
    ReactiveFormsModule,
    FormControlGroupComponent,
    CounterComponent,
  ],
})
export class FormFieldCounterComponent {
  constructor(public field: FormFieldControl) {}
}

export interface CounterSchemaParams {
  min?: number;
  max?: number;
}

export interface CounterSchema extends VCLFormFieldControlSchema {
  type: 'counter';
  params?: CounterSchemaParams | Conditional<CounterSchemaParams>;
}
