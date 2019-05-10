import { FormControl, AbstractControl } from '@angular/forms';
import { DatePickerConfig } from '../../date-picker/index';
import { VCLFormSchemaInput, VCLFormSchemaTextarea, VCLFormSchemaHidden,
  VCLFormSchemaSelect, VCLFormSchemaSlider, VCLFormSchemaSwitch, VCLFormSchemaRadioGroup, VCLFormSchemaCheckbox,
  VCLFormSchemaToken, VCLFormSchemaDate, FormControlTypes,
  VCLFormSchemaFileInput, VCLFormSchemaRating, VCLFormSchemaControls } from '../types';

export abstract class FormModelControl<T extends VCLFormSchemaControls> {

  readonly id: string;
  readonly control?: AbstractControl;

  constructor(
    private _schema: T,
    public readonly key: string
  ) {
    this.id = _schema.id || this.key;
    this.control = new FormControl(this.defaultValue, this.validators);
  }

  protected get schema(): T {
    return this._schema;
  }

  get formControl(): FormControlTypes {
    return this._schema.formControl;
  }

  get defaultValue() {
    return this._schema.defaultValue  === undefined ? this.createDefaultValue() : this._schema.defaultValue;
  }

  get validators() {
    return this._schema.validators  === undefined ? undefined : this._schema.validators;
  }

  get disabled(): boolean {
    return !!this._schema.disabled;
  }

  get required(): boolean {
    return !!this._schema.required;
  }

  get hints() {
    return this._schema.hints || [];
  }

  get hasValue() {
    return true;
  }
  protected abstract createDefaultValue(): any;

}

export class FormModelInput extends FormModelControl<VCLFormSchemaInput> {
  formControl: 'input' | 'number' | 'password';
  get label(): string {
    return this.schema.label;
  }
  get placeholder(): string {
    return this.schema.placeholder || '';
  }
  protected createDefaultValue() {
    return this.formControl !== 'number' ? '' : undefined;
  }
}

export class FormModelTextArea extends FormModelControl<VCLFormSchemaTextarea> {
  formControl: 'textarea';
  get placeholder(): string | undefined {
    return this.schema.placeholder;
  }
  get minRows(): number | undefined {
    return this.schema.minRows;
  }
  get maxRows(): number | undefined {
    return this.schema.maxRows;
  }
  protected createDefaultValue() {
    return '';
  }
}

export class FormModelSelect extends FormModelControl<VCLFormSchemaSelect> {
  formControl: 'select' | 'select-list' | 'button-group';
  get label(): string {
    return this.schema.label;
  }
  get selectionMode(): 'multiple' | 'single' {
    return this.schema.selectionMode || 'single';
  }
  get placeholder()  {
    return this.schema.placeholder || '';
  }
  get options()  {
    return this.schema.options || [];
  }
  protected createDefaultValue() {
    return this.selectionMode === 'single' ? undefined : [];
  }
}

export class FormModelSwitch extends FormModelControl<VCLFormSchemaSwitch> {
  formControl: 'switch';
  get label(): string {
    return this.schema.label;
  }
  get onLabel()  {
    return this.schema.onLabel;
  }
  get offLabel()  {
    return this.schema.onLabel;
  }
  get defaultValue() {
    return this.schema.defaultValue || false;
  }
  protected createDefaultValue() {
    return false;
  }
}

export class FormModelSlider extends FormModelControl<VCLFormSchemaSlider> {
  formControl: 'slider';
  get label(): string {
    return this.schema.label;
  }
  get scale()  {
    return this.schema.scale;
  }
  get lock()  {
    return this.schema.lock;
  }
  get min()  {
    return this.schema.min;
  }
  get max()  {
    return this.schema.max;
  }
  protected createDefaultValue() {
    return undefined;
  }
}

export class FormModelCheckbox extends FormModelControl<VCLFormSchemaCheckbox> {
  formControl: 'checkbox';
  get label(): string {
    return this.schema.label;
  }
  get iconPosition()  {
    return this.schema.iconPosition || 'right';
  }
  protected createDefaultValue() {
    return false;
  }
}

export class FormModelRadioGroup extends FormModelControl<VCLFormSchemaRadioGroup> {
  formControl: 'radio-group';
  get label(): string {
    return this.schema.label;
  }
  get iconPosition()  {
    return this.schema.iconPosition || 'right';
  }
  get options()  {
    return this.schema.options || [];
  }
  protected createDefaultValue() {
    return [];
  }
}

export class FormModelToken extends FormModelControl<VCLFormSchemaToken> {
  protected createDefaultValue() {
    return undefined;
  }
}

export class FormModelDate extends FormModelControl<VCLFormSchemaDate> {
  formControl: 'date';
  get label(): string {
    return this.schema.label;
  }
  get datePickerConfig(): DatePickerConfig | undefined  {
    return this.schema.datePickerConfig;
  }
  protected createDefaultValue() {
    return Date.now();
  }
}

export class FormModelFileInput extends FormModelControl<VCLFormSchemaFileInput> {
  formControl: 'file-input';
  get label(): string {
    return this.schema.label;
  }
  get placeholder(): string  {
    return this.schema.placeholder || '';
  }
  protected createDefaultValue() {
    return undefined;
  }
}

export class FormModelRating extends FormModelControl<VCLFormSchemaRating> {
  formControl: 'rating';
  get label() {
    return this.schema.label;
  }
  get ratingItemCount(): number | undefined  {
    return this.schema.ratingItemCount || 5;
  }
  get ratingEmptyIcon(): string | undefined  {
    return this.schema.ratingEmptyIcon || 'vcl:star-empty';
  }
  get ratingHalfIcon(): string | undefined  {
    return this.schema.ratingHalfIcon || 'vcl:star-half';
  }
  get ratingFullIcon(): string | undefined  {
    return this.schema.ratingFullIcon || 'vcl:star';
  }
  get items() {
    return this.schema.items || [];
  }
  createLabel(label: string) {
    if (typeof this.label === 'function') {
      return this.label(label);
    }
    return this.label;
  }
  protected createDefaultValue() {
    return undefined;
  }
}

export class FormModelHidden extends FormModelControl<VCLFormSchemaHidden> {
  formControl: 'hidden';
  protected createDefaultValue() {
    return undefined;
  }
}
