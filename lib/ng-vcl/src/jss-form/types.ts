import { InjectionToken } from '@angular/core';
import { AbstractControl, NgForm } from '@angular/forms';
import { FormControlGroupForm } from '../form-control-group/index';

export const JSS_FORM_TOKEN = new InjectionToken<JssForm>('jss_form');

export type ConditionalCallback<T> = (...controls: AbstractControl[]) => T;

export class Conditional<T> {
  constructor(protected fields: string[], protected cb: ConditionalCallback<T>) { }
}
export interface InternalConditional<T> {
  fields: string[];
  cb: ConditionalCallback<T>;
}

export function conditional<T>(fields: string[], cb: ConditionalCallback<T>) {
  return new Conditional(fields, cb);
}

export interface JssForm {
  readonly field: any;
  readonly form: FormControlGroupForm;
  onAction(action: string): void;
}

export interface ErrorHint {
  type: 'error';
  message: string;
  error?: string;
}
export interface WarningHint {
  type: 'warning';
  message: string;
}
export interface DefaultHint {
  type: 'default';
  message: string;
}

export type Hint = DefaultHint | ErrorHint | WarningHint;

export interface FormHints {
  hints?: (Hint | Conditional<Hint>)[];
}

export function hasFormHints(arg: any): arg is FormHints {
  return Array.isArray(arg.hints);
}
