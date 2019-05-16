import { InjectionToken } from '@angular/core';
import { VCLFormFieldSchema } from '../schemas';
import { FormField } from './basic/field';
import { FormFieldControl } from './controls/control';
import { ComponentType } from '@angular/cdk/portal';
// import { FieldTypes } from '../types';

export const FIELD_SCHEMA_TOKEN = new InjectionToken<VCLFormFieldSchema>('field_schema_token');

export type FormFieldClass = new (schema: VCLFormFieldSchema, key: string, parent: FormField<any>) => FormField<any>;
export type FormFieldControlClass = new (schema: VCLFormFieldSchema, key: string, parent: FormField<any>) => FormFieldControl<any>;

interface FieldRegistry {
  [key: string]: {
    is: 'control' | 'field';
    componentClass: ComponentType<any>;
    fieldClass?: FormFieldClass | FormFieldControlClass;
  };
}

const registry: FieldRegistry = {};

export function registerField(type: string, componentClass: ComponentType<any>, fieldClass?: FormFieldClass) {
  if (registry[type]) {
    throw new Error('jss-form: Field type already registered: ' + type);
  }
  registry[type] = {
    is: 'field',
    componentClass,
    fieldClass
  };
}

export function registerControlField(type: string, componentClass: any, fieldClass?: FormFieldControlClass) {
  if (registry[type]) {
    throw new Error('jss-form: Field type already registered: ' + type);
  }
  registry[type] = {
    is: 'control',
    componentClass,
    fieldClass
  };
}

export function lookupField(type: string) {
  if (!registry[type]) {
    throw new Error('jss-form: Unsupported field type: ' + type);
  } else {
    return registry[type];
  }
}
