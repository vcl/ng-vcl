import { ValidatorFn, AbstractControl } from '@angular/forms';
import { DatePickerConfig } from '../date-picker/index';
import { FormControlErrorStateAgent, FormControlInput } from '../form-control-group/index';


export type FormControlTypes = 'input' | 'textarea' | 'password' | 'number' | 'select' | 'select-list' |
                               'switch' | 'slider' | 'radio-group' | 'checkbox' | 'token' | 'date' | 'button-group' | 'file-input' |
                               'rating' |
                               // jss form specific types
                               'hidden' | 'buttons' | 'submit' | 'button' | 'object' | 'form';

export interface ErrorHint {
  type: 'error';
  message: String;
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

export type Hint = DefaultHint | ErrorHint | WarningHint;

export interface VCLFormSchemaBase {
  formControl: FormControlTypes;
  id?: string;
}
export interface VCLFormSchemaGroupBase extends VCLFormSchemaBase {
  properties?: { [name: string]: VCLFormSchema };
  validators?: ValidatorFn[];
  hints?: (Hint | string | ((control: AbstractControl, input?: FormControlInput) => Hint))[];
}

export interface VCLFormSchemaControlBase extends VCLFormSchemaBase {
  hints?: (Hint | string | ((control: AbstractControl, input?: FormControlInput) => Hint))[];
  required?: boolean;
  disabled?: boolean;
  validators?: ValidatorFn[];
  defaultValue?: any;
  errorStateAgent?: FormControlErrorStateAgent;
}

export interface VCLFormSchemaInput extends VCLFormSchemaControlBase {
  formControl: 'input' | 'number' | 'password';
  label?: string;
  placeholder?: string;
}

export interface VCLFormSchemaHidden extends VCLFormSchemaControlBase {
  formControl: 'hidden';
}

export interface VCLFormSchemaTextarea extends VCLFormSchemaControlBase {
  formControl: 'textarea';
  label?: string;
  placeholder?: string;
  minRows?: number;
  maxRows?: number;
}

export interface VCLFormSchemaOptions {
  label?: string;
  sublabel?: string;
  value: any;
}

export interface VCLFormSchemaSelect extends VCLFormSchemaControlBase {
  formControl: 'select' | 'select-list' | 'button-group';
  label?: string;
  selectionMode?: 'multiple' | 'single';
  options: VCLFormSchemaOptions[];
  placeholder?: string;
}

export interface VCLFormSchemaSwitch extends VCLFormSchemaControlBase {
  formControl: 'switch';
  label?: string;
  onLabel?: string;
  offLabel?: string;
}

export interface VCLFormSchemaSlider extends VCLFormSchemaControlBase {
  formControl: 'slider';
  label?: string;
  scale?: number | string[];
  lock?: boolean;
  min: number;
  max: number;
}

export interface VCLFormSchemaCheckbox extends VCLFormSchemaControlBase {
  formControl: 'checkbox';
  label?: string;
  iconPosition?: 'left' | 'right';
}

export interface VCLFormSchemaRating extends VCLFormSchemaControlBase {
  formControl: 'rating';
  label?: string | ((label: string) => string);
  type?:	'horizontal' | 'vertical';
  items?: string[];
  ratingFullIcon?: string;
  ratingHalfIcon?: string;
  ratingEmptyIcon?: string;
  ratingItemCount?: number;
}

export interface VCLFormSchemaRadioGroup extends VCLFormSchemaControlBase {
  formControl: 'radio-group';
  label?: string;
  iconPosition?: 'left' | 'right';
  options: VCLFormSchemaOptions[];
}

export interface VCLFormSchemaToken extends VCLFormSchemaControlBase {
  formControl: 'token';
  label?: string;
}

export interface VCLFormSchemaDate extends VCLFormSchemaControlBase {
  formControl: 'date';
  label?: string;
  datePickerConfig: DatePickerConfig;
}

export interface VCLFormSchemaFileInput extends VCLFormSchemaControlBase {
  formControl: 'file-input';
  label?: string;
  multiple: boolean;
  placeholder?: string;
}

export interface VCLFormSchemaObject extends VCLFormSchemaGroupBase {
  formControl: 'object';
  type?: 'fieldset' | 'form';
  label?: string;
}

export interface VCLFormSchemaRoot extends VCLFormSchemaGroupBase {
  formControl: 'form';
  properties?: { [name: string]: VCLFormSchema };
}

export interface VCLFormSchemaButton extends VCLFormSchemaBase {
  formControl: 'button';
  label?: string;
  prepIcon?: string;
  appIcon?: string;
  class?: string;
  action?: string;
}

export interface VCLFormSchemaSubmit extends VCLFormSchemaBase {
  formControl: 'submit';
  label?: string;
  prepIcon?: string;
  appIcon?: string;
  class?: string;
  autoDisable?: boolean;
}

export interface VCLFormSchemaButtons {
  formControl: 'buttons';
  buttons: (VCLFormSchemaButton | VCLFormSchemaSubmit)[];
}

export type VCLFormSchemaControls = VCLFormSchemaInput | VCLFormSchemaTextarea
                          | VCLFormSchemaHidden | VCLFormSchemaFileInput
                          | VCLFormSchemaCheckbox | VCLFormSchemaSelect
                          | VCLFormSchemaSwitch | VCLFormSchemaSlider | VCLFormSchemaRating
                          | VCLFormSchemaRadioGroup | VCLFormSchemaToken | VCLFormSchemaDate
                          ;

export type VCLFormSchemaGroups = VCLFormSchemaObject | VCLFormSchemaRoot;

export type VCLFormSchemaBasic = VCLFormSchemaSubmit | VCLFormSchemaButton | VCLFormSchemaButtons;

export type VCLFormSchema = VCLFormSchemaBasic | VCLFormSchemaControls | VCLFormSchemaGroups;
