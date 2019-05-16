import { InjectionToken } from '@angular/core';
import { AbstractControl, NgForm } from '@angular/forms';
import { FormControlInput } from '../form-control-group/index';
import { Observable } from 'rxjs';

export const JSS_FORM_TOKEN = new InjectionToken<JssForm>('jss_form');

export interface JssForm {
  readonly field: any;
  readonly ngForm: NgForm;
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
  error?: string;
}
export interface DefaultHint {
  type: 'default';
  message: string;
  error?: string;
}

export type HintObject = DefaultHint | ErrorHint | WarningHint;

export type HintCallback = ((control: AbstractControl, input?: FormControlInput) => HintObject);

export type Hint = DefaultHint | ErrorHint | WarningHint | string | HintCallback;

export interface FormFieldHints {
  hints: Hint[];
}
