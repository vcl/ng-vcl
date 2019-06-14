import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { NgControl } from '@angular/forms';

export interface FormControlHost {
  readonly input?: FormControlInput;
  readonly pending: boolean;
  readonly invalid: boolean;
  readonly valid: boolean;
  readonly touched: boolean;
  readonly untouched: boolean;
  readonly submitted: boolean;
}

export interface FormControlInput<T = any> {
  readonly stateChanged: Observable<void>;
  readonly controlType: string;
  readonly elementId: string;
  readonly isDisabled: boolean;
  readonly isFocused: boolean;
  readonly hasError: boolean;
  readonly ngControl?: NgControl;
  readonly value: T;
  onLabelClick(event: Event): void;
}

export interface FormControlAgentInput<T = any> {
  readonly controlType: string;
  readonly elementId: string;
  readonly isDisabled: boolean;
  readonly isFocused: boolean;
  readonly ngControl?: NgControl;
  readonly value: T;
}

export type FormControlErrorStateAgent = (host?: FormControlHost, input?: FormControlAgentInput) => (boolean);

export const FORM_CONTROL_HOST = new InjectionToken<FormControlHost>('vcl-form-control-host');
export const FORM_CONTROL_ERROR_STATE_AGENT = new InjectionToken<FormControlErrorStateAgent>('vcl-form-control-error-state-agent');
export const FORM_CONTROL_INPUT = new InjectionToken<FormControlInput>('vcl-form-control-input');
