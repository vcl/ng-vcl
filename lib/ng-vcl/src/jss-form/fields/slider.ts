import { Component } from '@angular/core';
import { VCLFormFieldSchemaSlider, VCLFormFieldSchemaSliderParams } from '../schemas';
import { FormFieldControl } from './field';

export class FormFieldSlider extends FormFieldControl<VCLFormFieldSchemaSlider, VCLFormFieldSchemaSliderParams> {
  type: 'slider';
  get scale()  {
    return this.params.scale;
  }
  get lock()  {
    return this.params.lock;
  }
  get min()  {
    return this.params.min;
  }
  get max()  {
    return this.params.max;
  }
  protected createDefaultValue() {
    return null;
  }
}

@Component({
  template: `
    <vcl-form-control-group *ngIf="field.visible">
      <label *ngIf="!!field.label" vclFormControlLabel>{{field.label}}<vcl-required *ngIf="field.required"></vcl-required></label>
      <vcl-slider [formControl]="field.control" [errorStateAgent]="field.errorStateAgent" [min]="field.min" [max]="field.max" [scale]="field.scale" [lock]="field.lock"></vcl-slider>
      <vcl-jss-form-hints></vcl-jss-form-hints>
    </vcl-form-control-group>
  `
})
export class FormFieldSliderComponent {
  constructor(public field: FormFieldSlider) { }
}

FormFieldControl.register('slider', FormFieldSliderComponent, FormFieldSlider);
