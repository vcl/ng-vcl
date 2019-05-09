import { DatePickerConfig } from '../date-picker/index';
import { ValidatorFn } from '@angular/forms';


export type FormControlTypes = 'input' | 'textarea' | 'password' | 'number' | 'select' | 'select-list' |
                               'switch' | 'slider' | 'radio-group' | 'checkbox' | 'token' | 'date' | 'button-group' | 'file-input' |
                               // jss form specific types
                               'hidden' | 'buttons' | 'submit' | 'button' | 'object' | 'root';

                               export interface ErrorHint {
  type: 'error';
  error: String;
  message: String;
}
export interface WarningHint {
  type: 'warning';
  message: String;
}
export interface DefaultHint {
  type: 'default';
  message: String;
}

export type Hint = DefaultHint | ErrorHint | WarningHint;


export interface VCLFormSchemaBase {
  formControl: FormControlTypes;
  id?: string;
  label?: string;
  hints?: (Hint | String)[];
  required?: boolean;
  disabled?: boolean;
  validators?: ValidatorFn[];
  defaultValue?: any;
}

export interface VCLFormSchemaInput extends VCLFormSchemaBase {
  formControl: 'input' | 'number' | 'password';
  placeholder?: string;
}

export interface VCLFormSchemaHidden extends VCLFormSchemaBase {
  formControl: 'hidden';
}

export interface VCLFormSchemaTextarea extends VCLFormSchemaBase {
  formControl: 'textarea';
  placeholder?: string;
  minRows?: number;
  maxRows?: number;
}

export interface VCLFormSchemaOptions {
  label?: string;
  sublabel?: string;
  value: any;
}

export interface VCLFormSchemaSelect extends VCLFormSchemaBase {
  formControl: 'select' | 'select-list' | 'button-group';
  selectionMode?: 'multiple' | 'single';
  options: VCLFormSchemaOptions[];
  placeholder?: string;
}


export interface VCLFormSchemaSwitch extends VCLFormSchemaBase {
  formControl: 'switch';
  onLabel?: string;
  offLabel?: string;
}

export interface VCLFormSchemaSlider extends VCLFormSchemaBase {
  formControl: 'slider';
  scale?: number | string[];
  lock?: boolean;
  min: number;
  max: number;
}
export interface VCLFormSchemaCheckbox extends VCLFormSchemaBase {
  formControl: 'checkbox';
  iconPosition?: 'left' | 'right';
  checkedIcon?: string;
  uncheckedIcon?: string;
}

export interface VCLFormSchemaRadioGroup extends VCLFormSchemaBase {
  formControl: 'radio-group';
  iconPosition?: 'left' | 'right';
  options: VCLFormSchemaOptions[];
}

export interface VCLFormSchemaToken extends VCLFormSchemaBase {
  formControl: 'token';
}

export interface VCLFormSchemaDate extends VCLFormSchemaBase {
  formControl: 'date';
  datePickerConfig: DatePickerConfig;
}

export interface VCLFormSchemaFileInput extends VCLFormSchemaBase {
  formControl: 'file-input';
  multiple: boolean;
  placeholder?: string;
}

export interface VCLFormSchemaSubmit extends VCLFormSchemaBase {
  formControl: 'submit';
  prepIcon?: string;
  appIcon?: string;
  class?: string;
  autoDisable?: boolean;
}

export interface VCLFormSchemaButton extends VCLFormSchemaBase {
  formControl: 'button';
  prepIcon?: string;
  appIcon?: string;
  class?: string;
  action?: any;
}

export interface VCLFormSchemaObject extends VCLFormSchemaBase {
  formControl: 'object';
  title?: string;
  properties?: { [name: string]: VCLFormSchema };
}

export interface VCLFormSchemaButtons extends VCLFormSchemaBase {
  formControl: 'buttons';
  buttons: (VCLFormSchemaButton | VCLFormSchemaSubmit)[];
}

export interface VCLFormSchemaRoot extends VCLFormSchemaObject {
  formControl: 'object';
  description?: string;
}

export type VCLFormSchema = VCLFormSchemaObject | VCLFormSchemaInput | VCLFormSchemaTextarea
                          | VCLFormSchemaHidden | VCLFormSchemaFileInput
                          | VCLFormSchemaCheckbox | VCLFormSchemaSelect
                          | VCLFormSchemaSwitch | VCLFormSchemaSlider
                          | VCLFormSchemaRadioGroup | VCLFormSchemaToken | VCLFormSchemaDate
                          | VCLFormSchemaSubmit | VCLFormSchemaButton
                          | VCLFormSchemaButtons;
