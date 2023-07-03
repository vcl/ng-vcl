import { Component } from '@angular/core';

import {
  VCLFormFieldSchemaSlider,
  VCLFormFieldSchemaSliderParams,
} from '../schemas';

import { FormFieldControl } from './field';

export class FormFieldSlider extends FormFieldControl<
  VCLFormFieldSchemaSlider,
  VCLFormFieldSchemaSliderParams
> {
  get scale() {
    return this.params.scale;
  }
  get lock() {
    return this.params.lock;
  }
  get min() {
    return this.params.min;
  }
  get max() {
    return this.params.max;
  }
  protected createDefaultValue() {
    return null;
  }
}

@Component({
  selector: 'vcl-jss-form-slider',
  template: `
    <vcl-form-control-group
      *ngIf="field.visible"
      [errorStateAgent]="field.errorStateAgent">
      <vcl-label *ngIf="!!field.label">{{ field.label }}</vcl-label>
      <vcl-jss-form-input-wrapper>
        <vcl-slider
          [formControl]="field.control"
          [min]="field.min"
          [max]="field.max"
          [scale]="field.scale"
          [lock]="field.lock"></vcl-slider>
      </vcl-jss-form-input-wrapper>
      <vcl-jss-form-hints vclHint></vcl-jss-form-hints>
    </vcl-form-control-group>
  `,
})
export class FormFieldSliderComponent {
  constructor(public field: FormFieldSlider) {}
}
