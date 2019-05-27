import { Component } from '@angular/core';
import { VCLFormFieldSchemaRoot, FormFieldControl, VCLFormFieldControlSchema, Conditional } from '@ng-vcl/ng-vcl';

@Component({
  template: `
    <span *ngIf="field.label">{{ field.label }}</span><br>
    <demo-counter [formControl]="field.control" [min]="field.params.min" [max]="field.params.max"></demo-counter>
    `,
    styles: [
      `:host {
        display: block;
        padding-top: 1em;
        padding-bottom: 1em;
      }`
    ]
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
