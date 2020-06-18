import { FormControlGroupFormState } from './interfaces';
import { NgControl } from '@angular/forms';

export const defaultFormControlErrorStateAgent = (form?: FormControlGroupFormState, ngControl?: NgControl) => {
  return (form && ngControl) ? ngControl && ngControl.invalid && (ngControl.touched || form.submitted) : false;
}

export const dirtyFormControlErrorStateAgent = (form?: FormControlGroupFormState, ngControl?: NgControl) => {
  return (form && ngControl) ? ngControl && ngControl.invalid && (ngControl.dirty || form.submitted) : false;
}
