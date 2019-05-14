import { Component } from '@angular/core';
import { VCLFormFieldSchemaSlider } from '../../schemas';
import { registerControlField } from '../registry';
import { FormFieldControl } from './control';

export class FormFieldSlider extends FormFieldControl<VCLFormFieldSchemaSlider> {
  type: 'slider';
  get label(): string {
    return this.schema.label;
  }
  get scale()  {
    return this.schema.scale;
  }
  get lock()  {
    return this.schema.lock;
  }
  get min()  {
    return this.schema.min;
  }
  get max()  {
    return this.schema.max;
  }
  protected createDefaultValue() {
    return undefined;
  }
}

@Component({
  template: `
    <vcl-form-control-group>
      <label *ngIf="!!field.label" vclFormControlLabel>{{field.label}}<vcl-required *ngIf="field.required"></vcl-required></label>
      <vcl-slider [formControl]="field.control" [errorStateAgent]="field.errorStateAgent" [min]="field.min" [max]="field.max" [scale]="field.scale" [lock]="field.lock"></vcl-slider>
      <vcl-jss-form-hints></vcl-jss-form-hints>
    </vcl-form-control-group>
  `
})
export class FormFieldSliderComponent {
  constructor(public field: FormFieldSlider) { }
}

registerControlField('slider', FormFieldSliderComponent, FormFieldSlider);
