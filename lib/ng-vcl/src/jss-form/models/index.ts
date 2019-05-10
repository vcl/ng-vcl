import { FormGroup, ValidatorFn } from '@angular/forms';
import { VCLFormSchemaObject, FormControlTypes,
  VCLFormSchemaRoot, VCLFormSchemaGroups, VCLFormSchema } from '../types';
import { FormModelButton, FormModelButtons, FormModelSubmit } from './basic';
import { FormModelHidden, FormModelCheckbox, FormModelDate, FormModelInput,
  FormModelRadioGroup, FormModelSelect, FormModelSlider, FormModelSwitch, FormModelTextArea, FormModelToken, FormModelFileInput, FormModelRating, FormModelControl } from './controls';


export * from './basic';
export * from './controls';

export abstract class FormModelGroup<T extends VCLFormSchemaGroups> {

  readonly id?: string;
  readonly control?: FormGroup;

  private _models: FormModel[];
  get models(): FormModel[] {
    return this._models;
  }

  constructor(
    private _schema: T,
    public readonly key: string
  ) {
    this._models = Object.keys(_schema.properties).map(_key => createFormModel(_schema.properties[_key], _key) ) ;
    this.control = this.createControl();
  }

  protected get schema(): T {
    return this._schema;
  }

  get hints() {
    return this._schema.hints;
  }

  get validators() {
    return this._schema.validators  === undefined ? this.createDefaultValidator() : this._schema.validators;
  }

  get formControl(): FormControlTypes {
    return this._schema.formControl;
  }

  protected createDefaultValidator(): ValidatorFn {
    return undefined;
  }

  protected createDefaultValue() {
    return this.models.reduce((value, model) => {
      if (model instanceof FormModelControl) {
        return {
          ...value,
          [model.key]: model.defaultValue,
        };
      }
      return value;
    }, {} as any);
  }

  protected createControl(): FormGroup {
    const param = this.models.reduce((group, model) => {
      if (model instanceof FormModelControl || model instanceof FormModelGroup) {
        return model.control ? {
          ...group,
          [model.key]: model.control
        } : group;
      }
      return group;
    }, {} as any);
    const validators = this.validators  === undefined ? this.createDefaultValidator() : this.validators;
    return new FormGroup(param, validators);
  }
}

export class FormModelObject extends FormModelGroup<VCLFormSchemaObject> {
  formControl: 'object';
  get label() {
    return this.schema.label;
  }
  get type() {
    return this.schema.type;
  }
}

export class FormModelRoot extends FormModelGroup<VCLFormSchemaRoot> {
  constructor(schema: VCLFormSchemaRoot) {
    super(schema, '');

  }
  formControl: 'form';
}

export function createFormModel(schema: VCLFormSchema, key?: string) {
  switch (schema.formControl) {
    case 'button':
      return new FormModelButton(schema);
    case 'buttons':
      return new FormModelButtons(schema);
    case 'submit':
      return new FormModelSubmit(schema);
    case 'checkbox':
      return new FormModelCheckbox(schema, key);
    case 'date':
      return new FormModelDate(schema, key);
    case 'hidden':
      return new FormModelHidden(schema, key);
    case 'input':
    case 'number':
    case 'password':
      return new FormModelInput(schema, key);
    case 'object':
      return new FormModelObject(schema, key);
      case 'radio-group':
      return new FormModelRadioGroup(schema, key);
    case 'select':
    case 'select-list':
    case 'button-group':
      return new FormModelSelect(schema, key);
    case 'slider':
      return new FormModelSlider(schema, key);
    case 'switch':
      return new FormModelSwitch(schema, key);
    case 'textarea':
      return new FormModelTextArea(schema, key);
    case 'token':
      return new FormModelToken(schema, key);
    case 'file-input':
      return new FormModelFileInput(schema, key);
    case 'rating':
      return new FormModelRating(schema, key);
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
  FormModelFileInput |
  FormModelRating
;

