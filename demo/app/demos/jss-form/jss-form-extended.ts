import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {
  FormFieldControl,
  VCLFormFieldControlSchema,
  Conditional,
  VCLFormControlGroupModule,
} from '@vcl/ng-vcl';
import { CounterComponent } from '../form-control-group/counter.component';

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
  imports: [
    NgIf,
    ReactiveFormsModule,
    VCLFormControlGroupModule,
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
