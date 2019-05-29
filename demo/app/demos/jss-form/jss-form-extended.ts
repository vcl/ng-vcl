import { Component } from '@angular/core';
import { VCLFormFieldSchemaRoot, FormFieldControl, VCLFormFieldControlSchema, Conditional } from '@ng-vcl/ng-vcl';

@Component({
  template: `
    <vcl-form-control-group *ngIf="field.visible">
      <label *ngIf="!!field.label" vclFormControlLabel>{{field.label}}<vcl-required *ngIf="field.required"></vcl-required></label>
      <demo-counter [formControl]="field.control" [min]="field.params.min" [max]="field.params.max"></demo-counter>
    </vcl-form-control-group>
    `,
})
export class FormFieldCounterComponent {
  constructor(public field: FormFieldControl) { }
}

// Register counter component as field
FormFieldControl.register('counter', FormFieldCounterComponent);

export interface CounterSchemaParams {
  min?: number;
  max?: number;
}

export interface CounterSchema extends VCLFormFieldControlSchema {
  type: 'counter';
  params?: CounterSchemaParams | Conditional<CounterSchemaParams>;
}
