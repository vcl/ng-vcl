import { Directive, Inject, Self, Optional, HostBinding } from '@angular/core';
import { FormGroupDirective, NgForm } from '@angular/forms';
import { FormControlHost, FORM_CONTROL_HOST } from './interfaces';

export function formControlHostFactory(ngForm, formGroup) {
  return ngForm || formGroup;
}

@Directive({
  selector: 'form[vclForm]',
  exportAs: 'vclFormControlHost',
  providers: [{
    provide: FORM_CONTROL_HOST,
    deps: [
      [new Optional(), NgForm],
      [new Optional(), FormGroupDirective]
    ],
    useFactory: formControlHostFactory
  }]
})
export class FormControlHostDirective implements FormControlHost {

  constructor(
    @Optional()
    @Self()
    private formGroup?: FormGroupDirective,
    @Optional()
    @Self()
    private ngForm?: NgForm,
  ) { }

  @HostBinding('class.vclForm')
  classVclForm = true;

  private get _form() {
    return this.ngForm || this.formGroup;
  }

  get pending() {
    return this._form.pending;
  }

  get invalid() {
    return this._form.invalid;
  }

  get valid() {
    return this._form.valid;
  }

  get touched() {
    return this._form.touched;
  }

  get untouched() {
    return this._form.untouched;
  }

  get submitted() {
    return this._form.submitted;
  }
}
