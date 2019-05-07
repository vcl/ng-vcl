import { Schema } from 'jsonschema';
import { DatePickerConfig } from '@ng-vcl/ng-vcl/date-picker/date-picker.component';
import { ValidatorFn } from '@angular/forms';


interface Error {
  error: String;
  message: String;
}
export interface VCLFormSchemaBase {
  formControl: 'input' | 'textarea' | 'password' | 'hidden'| 'number' | 'select' | 'dropdown' |
               'switch' | 'slider' | 'radio' | 'checkbox' | 'token' | 'date' | 'custom' | 'object' |
               'array' | 'submit' | 'button'| 'button-group';
  label?: string;
  hints?: (Error | String)[];
  required?: boolean;
  disabled?: boolean;
  validator?: ValidatorFn | ValidatorFn[];
}

export interface VCLFormSchemaInput extends VCLFormSchemaBase {
  formControl: 'input' | 'number';
  placeholder?: string;
}

export interface VCLFormSchemaPassword extends VCLFormSchemaBase {
  formControl: 'password';
  placeholder?: string;
  visibleIcon?: string;
  invisibleIcon?: string;
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
  value: string;
}

// export interface VCLFormSchemaSelect extends VCLFormSchemaBase {
//   formControl: 'select';
//   selectionMode?: 'multiple' | 'single';
//   expandedIcon?: string;
//   collapsedIcon?: string;
//   options: VCLFormSchemaOptions[];
// }

export interface VCLFormSchemaDropdown extends VCLFormSchemaBase {
  formControl: 'dropdown';
  selectionMode?: 'multiple' | 'single';
  options: VCLFormSchemaOptions[];
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
  minimum: number;
  maximum: number;
}
export interface VCLFormSchemaCheckbox extends VCLFormSchemaBase {
  formControl: 'checkbox';
  iconPosition?: 'left' | 'right';
  checkedIcon?: string;
  uncheckedIcon?: string;
}

export interface VCLFormSchemaRadio extends VCLFormSchemaBase {
  formControl: 'radio';
  iconPosition?: 'left' | 'right';
  checkedIcon?: string;
  uncheckedIcon?: string;
  options: VCLFormSchemaOptions[];
}

export interface VCLFormSchemaToken extends VCLFormSchemaBase {
  formControl: 'token';
}

export interface VCLFormSchemaDate extends VCLFormSchemaBase {
  formControl: 'date';
  datePickerConfig: DatePickerConfig;
}

export interface VCLFormSchemaCustom extends VCLFormSchemaBase {
  formControl: 'custom';
  customComponent: any;
  customParameters: any;
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

export interface VCLFormSchemaButtons extends VCLFormSchemaBase {
  formControl: 'button-group';
  buttons: (VCLFormSchemaButton | VCLFormSchemaSubmit)[];
}


export interface VCLFormSchemaArray extends VCLFormSchemaBase {
  formControl: 'array';
  singularLabel: string;
  items: VCLFormSchema;
  count?: number;
}

export interface VCLFormSchemaRoot extends VCLFormSchemaBase {
  formControl: 'object';
  title?: string;
  description?: string;
  properties?: { [name: string]: VCLFormSchema };
}

export type VCLFormSchema = VCLFormSchemaRoot | VCLFormSchemaInput | VCLFormSchemaTextarea
                          | VCLFormSchemaPassword | VCLFormSchemaHidden
                          | VCLFormSchemaCheckbox | VCLFormSchemaArray 
                          | VCLFormSchemaDropdown | VCLFormSchemaSwitch | VCLFormSchemaSlider
                          | VCLFormSchemaRadio | VCLFormSchemaToken | VCLFormSchemaDate
                          | VCLFormSchemaCustom | VCLFormSchemaSubmit | VCLFormSchemaButton
                          | VCLFormSchemaButtons;
