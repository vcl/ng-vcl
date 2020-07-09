import { Directive, HostBinding, Optional, Self, forwardRef, OnInit, OnDestroy } from "@angular/core";
import { FormGroupDirective, NgForm } from '@angular/forms';
import { Observable, never, NEVER, Subject } from 'rxjs';
import { FormControlGroupFormState, FORM_CONTROL_GROUP_FORM_STATE } from './interfaces';

@Directive({ 
  selector: '[vclForm]',
  providers: [
    {
      provide: FORM_CONTROL_GROUP_FORM_STATE,
      useExisting: forwardRef(() => FormDirective)
    }
  ]
})
export class FormDirective implements FormControlGroupFormState, OnInit, OnDestroy {

  @HostBinding('class.form')
  hostClasses = true;

  constructor(
    @Optional()
    @Self()
    formGroup?: FormGroupDirective,
    @Optional()
    @Self()
    ngForm?: NgForm,
  ) {
    this.form = ngForm ?? formGroup;
  }

  ngOnInit(): void {
    this.form?.statusChanges.subscribe(this._stateChangedEmitter);
  }

  ngOnDestroy(): void {
    this._stateChangedEmitter.complete();
  }

  private _stateChangedEmitter = new Subject<void>();
  stateChanged = this._stateChangedEmitter.asObservable();

  form: NgForm | FormGroupDirective;

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
}
