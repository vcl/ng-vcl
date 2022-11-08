import { Component } from '@angular/core';
import {
  VCLFormFieldSchemaRoot,
  FormFieldControl,
  VCLFormFieldControlSchema,
  Conditional,
} from '@vcl/ng-vcl';

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
