import { ValidatorFn } from '@angular/forms';
import { DatePickerConfig } from '../date-picker/index';
import { FormControlErrorStateAgent } from '../form-control-group/index';
import { Hint, Conditional } from './types';

export type VCLFormFieldSchemaType = 'input' | 'number' | 'password' | 'hidden' |
                                     'textarea' | 'select' | 'select-list' | 'switch' | 'slider' | 'checkbox' | 'rating' |
                                     'radio-group' | 'button-group' | 'token' | 'date-picker' | 'file-input' | 'button' | 'submit' | 'buttons' |
                                     'array' | 'object' | 'form';

export interface VCLFormFieldSchema {
  type: string;
  id?: string;
  visible?: boolean | Conditional<boolean>;
}

export interface VCLFormFieldControlSchema extends VCLFormFieldSchema {
  label?: string;
  hints?: (Hint | Conditional<Hint>)[];
  required?: boolean | Conditional<boolean>;
  disabled?: boolean | Conditional<boolean>;
  validators?: ValidatorFn[];
  defaultValue?: any;
  errorStateAgent?: FormControlErrorStateAgent;
  params?: any | Conditional<any>;
}

export interface VCLFormFieldSchemaInputParams {
  placeholder?: string;
}

export interface VCLFormFieldSchemaInput extends VCLFormFieldControlSchema {
  type: 'input';
  params?: VCLFormFieldSchemaInputParams | Conditional<VCLFormFieldSchemaInputParams>;
}

export interface VCLFormFieldSchemaNumber extends VCLFormFieldControlSchema {
  type: 'number';
  params?: VCLFormFieldSchemaInputParams | Conditional<VCLFormFieldSchemaInputParams>;
}

export interface VCLFormFieldSchemaPassword extends VCLFormFieldControlSchema {
  type: 'password';
  params?: VCLFormFieldSchemaInputParams | Conditional<VCLFormFieldSchemaInputParams>;
}

export interface VCLFormFieldSchemaHidden extends VCLFormFieldControlSchema {
  type: 'hidden';
}

export interface VCLFormFieldSchemaTextareaParams {
  placeholder?: string;
  minRows?: number;
  maxRows?: number;
}

export interface VCLFormFieldSchemaTextarea extends VCLFormFieldControlSchema {
  type: 'textarea';
  params?: VCLFormFieldSchemaTextareaParams | Conditional<VCLFormFieldSchemaTextareaParams>;
}

export interface VCLFormFieldSchemaOptions {
  label: string;
  sublabel?: string;
  value: any;
}

export interface VCLFormFieldSchemaSelectParams {
  selectionMode?: 'multiple' | 'single';
  options: VCLFormFieldSchemaOptions[];
  placeholder?: string;
}

export interface VCLFormFieldSchemaSelect extends VCLFormFieldControlSchema {
  type: 'select';
  params?: VCLFormFieldSchemaSelectParams | Conditional<VCLFormFieldSchemaSelectParams>;
}

export interface VCLFormFieldSchemaSelectList extends VCLFormFieldControlSchema {
  type: 'select-list';
  params?: VCLFormFieldSchemaSelectParams | Conditional<VCLFormFieldSchemaSelectParams>;
}

export interface VCLFormFieldSchemaSwitchParams {
  onLabel?: string;
  offLabel?: string;
}

export interface VCLFormFieldSchemaSwitch extends VCLFormFieldControlSchema {
  params?: VCLFormFieldSchemaSwitchParams | Conditional<VCLFormFieldSchemaSwitchParams>;
  type: 'switch';
}

export interface VCLFormFieldSchemaSliderParams {
  scale?: number | string[];
  lock?: boolean;
  min?: number;
  max?: number;
}

export interface VCLFormFieldSchemaSlider extends VCLFormFieldControlSchema {
  type: 'slider';
  params?: VCLFormFieldSchemaSliderParams | Conditional<VCLFormFieldSchemaSliderParams>;
}

export interface VCLFormFieldSchemaCheckboxParams {
  iconPosition?: 'left' | 'right';
}

export interface VCLFormFieldSchemaCheckbox extends VCLFormFieldControlSchema {
  type: 'checkbox';
  params?: VCLFormFieldSchemaCheckboxParams | Conditional<VCLFormFieldSchemaCheckboxParams>;
}

export interface VCLFormFieldSchemaRatingParams {
  layout?:	'horizontal' | 'vertical';
  items?: string[];
  ratingFullIcon?: string;
  ratingHalfIcon?: string;
  ratingEmptyIcon?: string;
  ratingItemCount?: number;
  valueLabel?: (ratingLabel?: string) => string;
}

export interface VCLFormFieldSchemaRating extends VCLFormFieldControlSchema {
  type: 'rating';
  params?: VCLFormFieldSchemaRatingParams | Conditional<VCLFormFieldSchemaRatingParams>;
}

export interface VCLFormFieldSchemaRadioGroupParams {
  layout?:	'horizontal' | 'vertical';
  iconPosition?: 'left' | 'right';
  options: VCLFormFieldSchemaOptions[];
}

export interface VCLFormFieldSchemaRadioGroup extends VCLFormFieldControlSchema {
  type: 'radio-group';
  params?: VCLFormFieldSchemaRadioGroupParams | Conditional<VCLFormFieldSchemaRadioGroupParams>;
}

export interface VCLFormFieldSchemaButtonGroupParams {
  label?: string;
  selectionMode?: 'multiple' | 'single';
  options: VCLFormFieldSchemaOptions[];
}

export interface  VCLFormFieldSchemaButtonGroup extends VCLFormFieldControlSchema {
  type: 'button-group';
  params?: VCLFormFieldSchemaButtonGroupParams | Conditional<VCLFormFieldSchemaButtonGroupParams>;
}

export interface VCLFormFieldSchemaToken extends VCLFormFieldControlSchema {
  params?: {} | Conditional<{}>;
  type: 'token';
}

export interface VCLFormFieldSchemaDatePicker extends VCLFormFieldControlSchema {
  type: 'date-picker';
  params?: DatePickerConfig | Conditional<DatePickerConfig>;
}

export interface VCLFormFieldSchemaFileInputParams {
  label?: string;
  multiple: boolean;
  placeholder?: string;
}

export interface VCLFormFieldSchemaFileInput extends VCLFormFieldControlSchema {
  type: 'file-input';
  params?: VCLFormFieldSchemaFileInputParams | Conditional<VCLFormFieldSchemaFileInputParams>;
}

export interface VCLFormFieldSchemaButton extends VCLFormFieldSchema {
  type: 'button';
  disabled?: boolean | Conditional<boolean>;
  label?: string;
  prepIcon?: string;
  appIcon?: string;
  class?: string;
  action?: string;
}

export interface VCLFormFieldSchemaSubmit extends VCLFormFieldSchema {
  type: 'submit';
  disabled?: boolean | Conditional<boolean>;
  label?: string;
  prepIcon?: string;
  appIcon?: string;
  class?: string;
  action?: string;
}

export interface VCLFormFieldSchemaButtons extends VCLFormFieldSchema {
  type: 'buttons';
  buttons: (VCLFormFieldSchemaButton | VCLFormFieldSchemaSubmit)[];
}

export interface VCLFormFieldSchemaArray<TCustomType extends string = never> extends VCLFormFieldControlSchema {
  type: 'array';
  noFieldsLabel?: string;
  fieldLabel?: string | ((index: number) => string);
  initialFields?: number;
  field: VCLFormFieldSchemas<TCustomType>;
}

export interface VCLFormFieldSchemaObject<TCustomType extends string = never> extends VCLFormFieldControlSchema {
  type: 'object';
  fields?: { [name: string]: VCLFormFieldSchemas<TCustomType> };
  validators?: ValidatorFn[];
  layout?: 'fieldset';
}

export interface VCLFormFieldSchemaRoot<TCustomType extends string = never> extends VCLFormFieldControlSchema {
  type: 'form';
  fields?: { [name: string]: VCLFormFieldSchemas<TCustomType> };
  validators?: ValidatorFn[];
  layout?: 'fieldset';
}

export interface VCLFormFieldSchemaCustom<TCustomType extends string> {
  type: TCustomType;
  [key: string]: any;
}

export type VCLFormFieldSchemas<TCustomType extends string> =
                            VCLFormFieldSchemaInput | VCLFormFieldSchemaNumber | VCLFormFieldSchemaPassword | VCLFormFieldSchemaTextarea
                          | VCLFormFieldSchemaHidden | VCLFormFieldSchemaFileInput  | VCLFormFieldSchemaObject<TCustomType>
                          | VCLFormFieldSchemaCheckbox | VCLFormFieldSchemaSelect | VCLFormFieldSchemaSelectList | VCLFormFieldSchemaButtonGroup
                          | VCLFormFieldSchemaSwitch | VCLFormFieldSchemaSlider | VCLFormFieldSchemaRating
                          | VCLFormFieldSchemaRadioGroup | VCLFormFieldSchemaToken | VCLFormFieldSchemaDatePicker
                          | VCLFormFieldSchemaButton | VCLFormFieldSchemaSubmit | VCLFormFieldSchemaButtons
                          | VCLFormFieldSchemaCustom<TCustomType> | VCLFormFieldSchemaArray<TCustomType>
                          ;
