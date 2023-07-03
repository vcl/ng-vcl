import { NgControl } from '@angular/forms';

import { FormControlGroupForm } from './interfaces';

export const defaultFormControlErrorStateAgent = (
  form?: FormControlGroupForm,
  ngControl?: NgControl
) => {
  return form && ngControl
    ? ngControl && ngControl.invalid && (ngControl.touched || form.submitted)
    : false;
};

export const dirtyFormControlErrorStateAgent = (
  form?: FormControlGroupForm,
  ngControl?: NgControl
) => {
  return form && ngControl
    ? ngControl && ngControl.invalid && (ngControl.dirty || form.submitted)
    : false;
};
