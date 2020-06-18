import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { NgControl } from '@angular/forms';

export interface FormControlGroupInputState<T = any>  {
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


export const FORM_CONTROL_GROUP_INPUT_STATE = new InjectionToken<FormControlGroupInputState>('vcl-form-control-input-state');

export interface FormControlGroupFormState {
  readonly stateChanged: Observable<void>;
  readonly pending: boolean;
  readonly invalid: boolean;
  readonly valid: boolean;
  readonly touched: boolean;
  readonly untouched: boolean;
  readonly submitted: boolean;
}

export const FORM_CONTROL_GROUP_FORM_STATE = new InjectionToken<FormControlGroupInputState>('vcl-form-control-form-state');

export interface FormControlGroupState<T = any> {
  readonly stateChanged: Observable<void>;
  readonly form: FormControlGroupFormState;
  readonly input: FormControlGroupInputState<T>;
  readonly errorStateAgent: FormControlErrorStateAgent,
  readonly hasError: boolean;
  readonly isRequired: boolean;
  getError(errorCode: string, path?: string | (string | number)[]): any;  onLabelClick?(event: Event): void;
}

export const FORM_CONTROL_GROUP_STATE = new InjectionToken<FormControlGroupInputState>('vcl-form-control-state');

export const FORM_CONTROL_GROUP_ERROR_STATE_AGENT_TOKEN = new InjectionToken('vcl-form-control-error-state-agent-token');

export const FORM_CONTROL_GROUP_REQUIRED_INDICATOR = new InjectionToken<string>('vcl-form-control-required-indicator-token');

export interface FormControlErrorStateAgent {
  (form?: FormControlGroupFormState, ngControl?: NgControl): boolean;
}
