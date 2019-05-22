import { Component } from '@angular/core';
import { VCLFormFieldSchemaRoot, FormFieldControl } from '@ng-vcl/ng-vcl';

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

// Add counter to schema
export type ExtendedFormFieldSchemaRoot = VCLFormFieldSchemaRoot<'counter'>;
