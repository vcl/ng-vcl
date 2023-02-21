import { InjectionToken } from '@angular/core';

export interface RadioButton {
  readonly isDisabled: boolean;
  readonly isFocused: boolean;
  readonly value: any;
  setDisabled(disabled: boolean): void;
  setChecked(checked: boolean): void;
}

export interface RadioButtonGroup {
  notifyRadioButtonChecked(rb: RadioButton): void;
  notifyRadioButtonFocus(rb: RadioButton): void;
  notifyRadioButtonBlur(rb: RadioButton): void;
}

export const RADIO_BUTTON_GROUP_TOKEN = new InjectionToken<RadioButtonGroup>(
  'vcl_radio_button_group'
);
