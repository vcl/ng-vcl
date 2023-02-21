import { InjectionToken } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { FormControlGroupForm } from '../form-control-group/index';

export const JSS_FORM_TOKEN = new InjectionToken<JssForm>('jss_form');

export type ConditionalCallback<T> = (...controls: AbstractControl[]) => T;

export class Conditional<T> {
  constructor(
    protected fields: string[],
    protected cb: ConditionalCallback<T>
  ) {}
}
export interface InternalConditional<T> {
  fields: string[];
  cb: ConditionalCallback<T>;
}

export function conditional<T>(fields: string[], cb: ConditionalCallback<T>) {
  return new Conditional(fields, cb);
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

export interface HelpConfig {
  icon?: string;
  confirmButtonLabel?: string;
  layerWidth?: string;
}

export interface HelpObject extends HelpConfig {
  text: string;
  title?: string;
}

export type Help = HelpObject | string;

export interface FormHints {
  hints?: (Hint | Conditional<Hint>)[];
}

export function hasFormHints(arg: any): arg is FormHints {
  return Array.isArray(arg.hints);
}

export interface JssForm {
  readonly field: any;
  readonly form: FormControlGroupForm;
  onAction(action: string): void;
  help?: HelpConfig;
}

export const JSS_FORM_HELP_CONFIG_TOKEN = new InjectionToken<HelpConfig>(
  'JSS_FORM_HELP_CONFIG'
);
