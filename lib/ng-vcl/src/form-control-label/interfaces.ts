import { InjectionToken } from '@angular/core';

export interface FormControlLabelMember {
  readonly isDisabled: boolean;
  readonly elementId: string;
  notifyFormControlLabelClick(event: Event): void;
}

export const FORM_CONTROL_LABEL_MEMBER_TOKEN = new InjectionToken<FormControlLabelMember>('vcl-form-control-label-member');
