import { FormControlGroupForm } from './interfaces';
import { NgControl } from '@angular/forms';

export const defaultFormControlErrorStateAgent = (form?: FormControlGroupForm, ngControl?: NgControl) => {
  return (form && ngControl) ? ngControl && ngControl.invalid && (ngControl.touched || form.submitted) : false;
}

export const dirtyFormControlErrorStateAgent = (form?: FormControlGroupForm, ngControl?: NgControl) => {
  return (form && ngControl) ? ngControl && ngControl.invalid && (ngControl.dirty || form.submitted) : false;
}
