import {
  Directive,
  HostBinding,
  Optional,
  Self,
  forwardRef,
} from '@angular/core';
import { FormGroupDirective, NgForm } from '@angular/forms';
import { NEVER } from 'rxjs';

import { FormControlGroupForm, FORM_CONTROL_GROUP_FORM } from './interfaces';

@Directive({
  selector: '[vclForm]',
  exportAs: 'vclForm',
  providers: [
    {
      provide: FORM_CONTROL_GROUP_FORM,
      useExisting: forwardRef(() => FormDirective),
    },
  ],
})
export class FormDirective implements FormControlGroupForm {
  @HostBinding('class.form')
  hostClasses = true;

  constructor(
    @Optional()
    @Self()
    formGroup?: FormGroupDirective,
    @Optional()
    @Self()
    ngForm?: NgForm
  ) {
    this.form = ngForm ?? formGroup;
  }

  form: NgForm | FormGroupDirective;

  reset(value?: any) {
    this.form.reset(value);
  }
  resetForm(value?: any) {
    this.form.resetForm(value);
  }
  get status() {
    return this.form?.status ?? undefined;
  }
  get dirty() {
    return this.form?.dirty ?? false;
  }
  get pristine() {
    return this.form?.pristine ?? false;
  }
  get value() {
    return this.form?.value ?? undefined;
  }
  get errors() {
    return this.form?.errors ?? undefined;
  }
  get pending() {
    return this.form?.pending ?? false;
  }
  get invalid() {
    return this.form?.invalid ?? false;
  }
  get valid() {
    return this.form?.valid ?? false;
  }
  get touched() {
    return this.form?.touched ?? false;
  }
  get untouched() {
    return this.form?.untouched ?? false;
  }
  get submitted() {
    return this.form?.submitted ?? false;
  }
  get valueChanges() {
    return this.form?.valueChanges ?? NEVER;
  }
  get statusChanges() {
    return this.form?.statusChanges ?? NEVER;
  }
  get ngSubmit() {
    return this.form?.ngSubmit ?? NEVER;
  }
}
