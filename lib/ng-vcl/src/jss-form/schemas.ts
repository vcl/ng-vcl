import { ValidatorFn, AbstractControl } from '@angular/forms';
import { DatePickerConfig } from '../date-picker/index';
import { FormControlErrorStateAgent, FormControlInput } from '../form-control-group/index';
import { Hint } from './types';
// import { FieldTypes, Hint } from './types';



export interface VCLFormFieldSchema {
  type: string;
  id?: string;
}

export interface VCLFormFieldControlSchema extends VCLFormFieldSchema {
  hints?: Hint[];
  required?: boolean;
  disabled?: boolean;
  validators?: ValidatorFn[];
  defaultValue?: any;
  errorStateAgent?: FormControlErrorStateAgent;
}

export interface VCLFormFieldSchemaInput extends VCLFormFieldControlSchema {
  type: 'input' | 'number' | 'password';
  label?: string;
  placeholder?: string;
}

export interface VCLFormFieldSchemaHidden extends VCLFormFieldControlSchema {
  type: 'hidden';
}

export interface VCLFormFieldSchemaTextarea extends VCLFormFieldControlSchema {
  type: 'textarea';
  label?: string;
  placeholder?: string;
  minRows?: number;
  maxRows?: number;
}

export interface VCLFormFieldSchemaOptions {
  label?: string;
  sublabel?: string;
  value: any;
}

export interface VCLFormFieldSchemaSelect extends VCLFormFieldControlSchema {
  type: 'select' | 'select-list' | 'button-group';
  label?: string;
  selectionMode?: 'multiple' | 'single';
  options: VCLFormFieldSchemaOptions[];
  placeholder?: string;
}

export interface VCLFormFieldSchemaSwitch extends VCLFormFieldControlSchema {
  type: 'switch';
  label?: string;
  onLabel?: string;
  offLabel?: string;
}

export interface VCLFormFieldSchemaSlider extends VCLFormFieldControlSchema {
  type: 'slider';
  label?: string;
  scale?: number | string[];
  lock?: boolean;
  min: number;
  max: number;
}

export interface VCLFormFieldSchemaCheckbox extends VCLFormFieldControlSchema {
  type: 'checkbox';
  label?: string;
  iconPosition?: 'left' | 'right';
}

export interface VCLFormFieldSchemaRating extends VCLFormFieldControlSchema {
  type: 'rating';
  label?: string | ((label: string) => string);
  layout?:	'horizontal' | 'vertical';
  items?: string[];
  ratingFullIcon?: string;
  ratingHalfIcon?: string;
  ratingEmptyIcon?: string;
  ratingItemCount?: number;
}

export interface VCLFormFieldSchemaRadioGroup extends VCLFormFieldControlSchema {
  type: 'radio-group';
  label?: string;
  iconPosition?: 'left' | 'right';
  options: VCLFormFieldSchemaOptions[];
}

export interface VCLFormFieldSchemaToken extends VCLFormFieldControlSchema {
  type: 'token';
  label?: string;
}

export interface VCLFormFieldSchemaDate extends VCLFormFieldControlSchema {
  type: 'date';
  label?: string;
  datePickerConfig: DatePickerConfig;
}

export interface VCLFormFieldSchemaFileInput extends VCLFormFieldControlSchema {
  type: 'file-input';
  label?: string;
  multiple: boolean;
  placeholder?: string;
}

export interface VCLFormFieldSchemaButton extends VCLFormFieldSchema {
  type: 'button';
  label?: string;
  prepIcon?: string;
  appIcon?: string;
  class?: string;
  action?: string;
}

export interface VCLFormFieldSchemaSubmit extends VCLFormFieldSchema {
  type: 'submit';
  label?: string;
  prepIcon?: string;
  appIcon?: string;
  class?: string;
  autoDisable?: boolean;
}

export interface VCLFormFieldSchemaButtons extends VCLFormFieldSchema {
  type: 'buttons';
  buttons: (VCLFormFieldSchemaButton | VCLFormFieldSchemaSubmit)[];
}

export interface VCLFormFieldSchemaObject extends VCLFormFieldControlSchema {
  type: 'object';
  layout?: 'fieldset';
  label?: string;
  fields?: { [name: string]: VCLFormFieldSchemas };
  validators?: ValidatorFn[];
  hints?: Hint[];
}

export interface VCLFormFieldSchemaRoot {
  type: 'form';
  fields?: { [name: string]: VCLFormFieldSchemas };
}

export interface VCLFormFieldSchemaCustom {
  type: string;
  [key: string]: any;
}

export type VCLFormFieldSchemas = VCLFormFieldSchemaInput | VCLFormFieldSchemaTextarea
                          | VCLFormFieldSchemaHidden | VCLFormFieldSchemaFileInput
                          | VCLFormFieldSchemaCheckbox | VCLFormFieldSchemaSelect
                          | VCLFormFieldSchemaSwitch | VCLFormFieldSchemaSlider | VCLFormFieldSchemaRating
                          | VCLFormFieldSchemaRadioGroup | VCLFormFieldSchemaToken | VCLFormFieldSchemaDate
                          | VCLFormFieldSchemaObject
                          | VCLFormFieldSchemaSubmit | VCLFormFieldSchemaButton | VCLFormFieldSchemaButtons
                          | VCLFormFieldSchemaCustom
                          ;
