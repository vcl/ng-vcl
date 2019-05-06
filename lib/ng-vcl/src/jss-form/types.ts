import { DatePickerConfig } from '@ng-vcl/ng-vcl';
import { ValidatorFn } from '@angular/forms';


export type Hint = string | {
  error: string;
  message: string;
};

export interface VCLFormSchemaBase {
  formControl: 'input' | 'textarea' | 'password' | 'hidden'| 'number' | 'select' |
               'flip-switch' | 'slider' | 'radio-group' | 'checkbox' | 'token' | 'date' | 'custom' | 'object' | 'submit' | 'button'| 'button-group';
  id?: string;
  label?: string;
  hints?: Hint[];
  required?: boolean;
  validator?: ValidatorFn | ValidatorFn[];
}

export interface VCLFormSchemaInput extends VCLFormSchemaBase {
  formControl: 'input' | 'number';
  placeholder?: string;
}

export interface VCLFormSchemaPassword extends VCLFormSchemaBase {
  formControl: 'password';
  placeholder?: string;
}

export interface VCLFormSchemaHidden extends VCLFormSchemaBase {
  formControl: 'hidden';
}

export interface VCLFormSchemaTextarea extends VCLFormSchemaBase {
  formControl: 'textarea';
  minRows?: number;
  maxRows?: number;
}

export interface VCLFormSchemaOptions {
  label?: string;
  sublabel?: string;
  value: string;
}

export interface VCLFormSchemaSelect extends VCLFormSchemaBase {
  formControl: 'select';
  selectionMode?: 'multiple' | 'single';
  options: VCLFormSchemaOptions[];
}

export interface VCLFormSchemaFlipSwitch extends VCLFormSchemaBase {
  formControl: 'flip-switch';
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

// export interface VCLFormSchemaCustom extends VCLFormSchemaBase {
//   formControl: 'custom';
//   customComponent: any;
//   customParameters: any;
// }

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

export interface VCLFormSchemaButtonGroup extends VCLFormSchemaBase {
  formControl: 'button-group';
  buttons: (VCLFormSchemaButton | VCLFormSchemaSubmit)[];
}

export type VCLFormSchema = VCLFormSchemaInput | VCLFormSchemaTextarea
                          | VCLFormSchemaPassword | VCLFormSchemaHidden
                          | VCLFormSchemaCheckbox | VCLFormSchemaSelect
                          | VCLFormSchemaFlipSwitch | VCLFormSchemaSlider
                          | VCLFormSchemaRadioGroup | VCLFormSchemaToken | VCLFormSchemaDate
                          | VCLFormSchemaSubmit | VCLFormSchemaButton
                          | VCLFormSchemaButtonGroup;
