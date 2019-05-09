import { FormControl, FormGroup, AbstractControl, ValidatorFn } from '@angular/forms';
import { DatePickerConfig } from '../date-picker/index';
import { VCLFormSchema, VCLFormSchemaInput, VCLFormSchemaTextarea, VCLFormSchemaHidden,
  VCLFormSchemaSelect, VCLFormSchemaSlider, VCLFormSchemaSwitch, VCLFormSchemaRadioGroup, VCLFormSchemaCheckbox,
  VCLFormSchemaToken, VCLFormSchemaDate, VCLFormSchemaSubmit, VCLFormSchemaButton, VCLFormSchemaObject, FormControlTypes, VCLFormSchemaButtons, VCLFormSchemaRoot, VCLFormSchemaFileInput } from './types';

let uniqueID = 0;

export abstract class FormModelBase<T extends VCLFormSchema> {

  readonly key: string;
  readonly id: string;

  constructor(
    private _schema: T,
    _parent?: FormModelBase<any>,
    key?: string
  ) {

    this.key = typeof key === 'string' ? key : `vcl-jss-form-${++uniqueID}`;
    if (_parent && _parent.key) {
      this.key = _parent.key + '.' + this.key;
    }

    this.id = _schema.id || this.key;
    this.init(_schema);
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
    return this._schema.validators  === undefined ? this.createDefaultValidator() : this._schema.validators;
  }

  get label(): string {
    return this._schema.label;
  }

  get disabled(): boolean {
    return !!this._schema.disabled;
  }

  get required(): boolean {
    return !!this._schema.required;
  }

  get hints() {
    return (this.schema.hints || []).map(hint => typeof hint === 'string' ? { type: 'default', message: hint } : hint);
  }

  get hasValue() {
    return true;
  }

  init(schema: T) { }

  protected createDefaultValue(): any {
    return undefined;
  }

  protected createDefaultValidator(): ValidatorFn {
    return undefined;
  }

  createControl(): AbstractControl | undefined {
    return new FormControl(this.defaultValue, this.validators);
  }

}

export class FormModelInput extends FormModelBase<VCLFormSchemaInput> {
  formControl: 'input' | 'number' | 'password';
  get placeholder(): string {
    return this.schema.placeholder || '';
  }
  protected createDefaultValue() {
    return this.formControl !== 'number' ? '' : undefined;
  }
}

export class FormModelTextArea extends FormModelBase<VCLFormSchemaTextarea> {
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

export class FormModelSelect extends FormModelBase<VCLFormSchemaSelect> {
  formControl: 'select' | 'select-list' | 'button-group';
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

export class FormModelSwitch extends FormModelBase<VCLFormSchemaSwitch> {
  formControl: 'switch';
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

export class FormModelSlider extends FormModelBase<VCLFormSchemaSlider> {
  formControl: 'slider';
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
}

export class FormModelCheckbox extends FormModelBase<VCLFormSchemaCheckbox> {
  formControl: 'checkbox';
  get iconPosition()  {
    return this.schema.iconPosition || 'right';
  }
  protected createDefaultValue() {
    return false;
  }
}

export class FormModelRadioGroup extends FormModelBase<VCLFormSchemaRadioGroup> {
  formControl: 'radio-group';
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

export class FormModelToken extends FormModelBase<VCLFormSchemaToken> {

}

export class FormModelDate extends FormModelBase<VCLFormSchemaDate> {
  formControl: 'date';
  get datePickerConfig(): DatePickerConfig | undefined  {
    return this.schema.datePickerConfig;
  }
  protected createDefaultValue() {
    return Date.now();
  }
}

export class FormModelFileInput extends FormModelBase<VCLFormSchemaFileInput> {
  formControl: 'file-input';
  get placeholder(): string  {
    return this.schema.placeholder || '';
  }
}

export class FormModelSubmit extends FormModelBase<VCLFormSchemaSubmit> {
  formControl: 'submit';
  get prepIcon(): string | undefined  {
    return this.schema.prepIcon;
  }
  get appIcon(): string | undefined  {
    return this.schema.appIcon;
  }
  get class(): string | undefined  {
    return this.schema.class;
  }
  get autoDisable(): boolean  {
    return this.schema.autoDisable || false;
  }

  createControl(): AbstractControl | undefined {
    return undefined;
  }
}

export class FormModelButton extends FormModelBase<VCLFormSchemaButton> {
  formControl: 'button';
  get prepIcon(): string | undefined  {
    return this.schema.prepIcon;
  }
  get appIcon(): string | undefined  {
    return this.schema.appIcon;
  }
  get class(): string | undefined  {
    return this.schema.class;
  }
  get action(): string  {
    return this.schema.action;
  }
  createControl(): AbstractControl | undefined {
    return undefined;
  }
}

export class FormModelButtons extends FormModelBase<VCLFormSchemaButtons> {
  formControl: 'buttons';
  private _buttons: (FormModelButton | FormModelSubmit) [];
  init(schema: VCLFormSchemaButtons) {
    this._buttons = (schema.buttons || []).map(_schema => createFormModel(_schema, this)) as any;
  }
  get buttons() {
    return this._buttons;
  }
  createControl(): AbstractControl | undefined {
    return undefined;
  }
}

export class FormModelHidden extends FormModelBase<VCLFormSchemaHidden> {
  formControl: 'hidden';
}

export class FormModelObject extends FormModelBase<VCLFormSchemaObject> {
  formControl: 'object';
  private _models: FormModel[];
  init(schema: VCLFormSchemaObject) {
    this._models = Object.keys(schema.properties).map(key => createFormModel(schema.properties[key], this, key) ) ;
  }
  get models(): any[] { // FormModel[] template parser does not support Type Assertion
    return this._models;
  }
  get title() {
    return this.schema.title;
  }

  createControl(): FormGroup {
    const param = this.models.reduce((group, model) => {
      const control = model.createControl();
      return control ? {
        ...group,
        [model.key]: control
      } : group;
    }, {} as any);
    const validators = this.validators  === undefined ? this.createDefaultValidator() : this.validators;

    return new FormGroup(param, validators);
  }
}

export function createFormModelRoot(schema: VCLFormSchemaRoot) {
  return new FormModelObject(schema, undefined, '');
}

export function createFormModel(schema: VCLFormSchema, parent?: FormModelBase<any>, key?: string) {
  switch (schema.formControl) {
    case 'button':
      return new FormModelButton(schema, parent, key);
    case 'buttons':
      return new FormModelButtons(schema, parent, key);
    case 'checkbox':
      return new FormModelCheckbox(schema, parent, key);
    case 'date':
      return new FormModelDate(schema, parent, key);
    case 'hidden':
      return new FormModelHidden(schema, parent, key);
    case 'input':
    case 'number':
    case 'password':
      return new FormModelInput(schema, parent, key);
    case 'object':
      return new FormModelObject(schema, parent, key);
      case 'radio-group':
      return new FormModelRadioGroup(schema, parent, key);
    case 'select':
    case 'select-list':
    case 'button-group':
      return new FormModelSelect(schema, parent, key);
    case 'slider':
      return new FormModelSlider(schema, parent, key);
    case 'submit':
      return new FormModelSubmit(schema, parent, key);
    case 'switch':
      return new FormModelSwitch(schema, parent, key);
    case 'textarea':
      return new FormModelTextArea(schema, parent, key);
    case 'token':
      return new FormModelToken(schema, parent, key);
    case 'file-input':
      return new FormModelFileInput(schema, parent, key);
    default:
      throw new Error('unsupported formControl');
  }
}

export type FormModel =
  FormModelInput |
  FormModelTextArea |
  FormModelHidden |
  FormModelSelect |
  FormModelSwitch |
  FormModelSlider |
  FormModelCheckbox |
  FormModelRadioGroup |
  FormModelToken |
  FormModelDate |
  FormModelSubmit |
  FormModelButton |
  FormModelObject |
  FormModelButtons |
  FormModelFileInput
;
