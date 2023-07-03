import { InjectionToken } from '@angular/core';
import { NgControl, ValidationErrors } from '@angular/forms';
import { Observable } from 'rxjs';

export interface FormControlGroupInputState<T = any> {
  readonly stateChanged: Observable<void>;
  readonly controlType: string;
  readonly elementId: string;
  readonly isDisabled: boolean;
  readonly isFocused: boolean;
  readonly value: T;
  readonly ngControl: NgControl | null;
  setErrorState(error: boolean): void;
  onLabelClick?(event: Event): void;
}

export const FORM_CONTROL_GROUP_INPUT_STATE =
  new InjectionToken<FormControlGroupInputState>(
    'vcl-form-control-input-state'
  );

export interface FormControlGroupForm {
  reset(value?: any): void;
  resetForm(value?: any): void;
  readonly status: string;
  readonly valueChanges: Observable<void>;
  readonly statusChanges: Observable<void>;
  readonly ngSubmit: Observable<void>;
  readonly pending: boolean;
  readonly invalid: boolean;
  readonly valid: boolean;
  readonly touched: boolean;
  readonly untouched: boolean;
  readonly dirty: boolean;
  readonly pristine: boolean;
  readonly submitted: boolean;
  readonly errors: ValidationErrors;
}

export const FORM_CONTROL_GROUP_FORM =
  new InjectionToken<FormControlGroupInputState>('vcl-form-control-form');

export interface FormControlGroupState<T = any> {
  readonly stateChanged: Observable<void>;
  readonly form: FormControlGroupForm;
  readonly input: FormControlGroupInputState<T>;
  readonly errorStateAgent: FormControlErrorStateAgent;
  readonly hasError: boolean;
  readonly isRequired: boolean;
  getError(errorCode: string, path?: string | (string | number)[]): any;
  onLabelClick?(event: Event): void;
}

export const FORM_CONTROL_GROUP_STATE =
  new InjectionToken<FormControlGroupInputState>('vcl-form-control-state');

export const FORM_CONTROL_GROUP_ERROR_STATE_AGENT_TOKEN = new InjectionToken(
  'vcl-form-control-error-state-agent-token'
);

export const FORM_CONTROL_GROUP_REQUIRED_INDICATOR = new InjectionToken<string>(
  'vcl-form-control-required-indicator-token'
);

export interface FormControlErrorStateAgent {
  (form?: FormControlGroupForm, ngControl?: NgControl): boolean;
}
