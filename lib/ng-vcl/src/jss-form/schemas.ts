import { ValidatorFn } from '@angular/forms';
import { DatePickerConfig } from '../date-picker/index';
import { FormControlErrorStateAgent } from '../form-control-group/index';
import { Hint, Conditional,  } from './types';

export interface VCLFormFieldSchema {
  type: string;
  id?: string;
  visible?: boolean | Conditional<boolean>;
}

export interface VCLFormFieldControlSchema<TParams> extends VCLFormFieldSchema {
  label?: string;
  hints?: (Hint | Conditional<Hint>)[];
  required?: boolean | Conditional<boolean>;
  disabled?: boolean | Conditional<boolean>;
  validators?: ValidatorFn[];
  defaultValue?: any;
  errorStateAgent?: FormControlErrorStateAgent;
  params?: TParams | Conditional<TParams>;
}

export interface VCLFormFieldSchemaInputParams {
  placeholder?: string;
}

export interface VCLFormFieldSchemaInput extends VCLFormFieldControlSchema<VCLFormFieldSchemaInputParams> {
  type: 'input';
}

export interface VCLFormFieldSchemaNumber extends VCLFormFieldControlSchema<VCLFormFieldSchemaInputParams> {
  type: 'number';
}

export interface VCLFormFieldSchemaPassword extends VCLFormFieldControlSchema<VCLFormFieldSchemaInputParams> {
  type: 'password';
}

export interface VCLFormFieldSchemaHidden extends VCLFormFieldControlSchema<{}> {
  type: 'hidden';
}

export interface VCLFormFieldSchemaTextareaParams {
  placeholder?: string;
  minRows?: number;
  maxRows?: number;
}

export interface VCLFormFieldSchemaTextarea extends VCLFormFieldControlSchema<VCLFormFieldSchemaTextareaParams> {
  type: 'textarea';
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

export interface VCLFormFieldSchemaSelect extends VCLFormFieldControlSchema<VCLFormFieldSchemaSelectParams> {
  type: 'select';
}

export interface VCLFormFieldSchemaSelectList extends VCLFormFieldControlSchema<VCLFormFieldSchemaSelectParams> {
  type: 'select-list';
}

export interface VCLFormFieldSchemaSwitchParams {
  onLabel?: string;
  offLabel?: string;
}

export interface VCLFormFieldSchemaSwitch extends VCLFormFieldControlSchema<VCLFormFieldSchemaSwitchParams> {
  type: 'switch';
}

export interface VCLFormFieldSchemaSliderParams {
  scale?: number | string[];
  lock?: boolean;
  min?: number;
  max?: number;
}

export interface VCLFormFieldSchemaSlider extends VCLFormFieldControlSchema<VCLFormFieldSchemaSliderParams> {
  type: 'slider';
}

export interface VCLFormFieldSchemaCheckboxParams {
  iconPosition?: 'left' | 'right';
}

export interface VCLFormFieldSchemaCheckbox extends VCLFormFieldControlSchema<VCLFormFieldSchemaCheckboxParams> {
  type: 'checkbox';
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

export interface VCLFormFieldSchemaRating extends VCLFormFieldControlSchema<VCLFormFieldSchemaRatingParams> {
  type: 'rating';
}

export interface VCLFormFieldSchemaRadioGroupParams {
  layout?:	'horizontal' | 'vertical';
  iconPosition?: 'left' | 'right';
  options: VCLFormFieldSchemaOptions[];
}

export interface VCLFormFieldSchemaRadioGroup extends VCLFormFieldControlSchema<VCLFormFieldSchemaRadioGroupParams> {
  type: 'radio-group';
}

export interface VCLFormFieldSchemaButtonGroupParams {
  label?: string;
  selectionMode?: 'multiple' | 'single';
  options: VCLFormFieldSchemaOptions[];
}

export interface  VCLFormFieldSchemaButtonGroup extends VCLFormFieldControlSchema<VCLFormFieldSchemaButtonGroupParams> {
  type: 'button-group';
}

export interface VCLFormFieldSchemaToken extends VCLFormFieldControlSchema<{}> {
  type: 'token';
}

export interface VCLFormFieldSchemaDatePicker extends VCLFormFieldControlSchema<DatePickerConfig> {
  type: 'date-picker';
}

export interface VCLFormFieldSchemaFileInputParams {
  label?: string;
  multiple: boolean;
  placeholder?: string;
}

export interface VCLFormFieldSchemaFileInput extends VCLFormFieldControlSchema<VCLFormFieldSchemaFileInputParams> {
  type: 'file-input';
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

export interface VCLFormFieldSchemaArray<TCustomType extends string = never> extends VCLFormFieldControlSchema<{}> {
  type: 'array';
  noFieldsLabel?: string;
  fieldLabel?: string | ((index: number) => string);
  initialFields?: number;
  field: VCLFormFieldSchemas<TCustomType>;
}

export interface VCLFormFieldSchemaObject<TCustomType extends string = never> extends VCLFormFieldControlSchema<{}> {
  type: 'object';
  fields?: { [name: string]: VCLFormFieldSchemas<TCustomType> };
  validators?: ValidatorFn[];
  layout?: 'fieldset';
}

export interface VCLFormFieldSchemaRoot<TCustomType extends string = never> extends VCLFormFieldControlSchema<{}> {
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

// const x: VCLFormFieldSchemaRoot = {
// fields: {
//   name: {
//     type: 'input',
//   },
//   x: {
//     type: 'button',

//   },
//   a: {
//     type: 'array',
//     field: {
//       type: 'button',
//     }
//   }
// }

// };
