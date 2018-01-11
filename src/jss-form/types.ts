import { Schema } from 'jsonschema';

export interface JssFormSchemaOptions {
  label?: string;
  value: any;
}

export interface JssFormSchema extends Schema {
  properties?: { [name: string]: JssFormSchema };
  label?: string;
  formType?: string;
  placeholder?: string;
  options?: JssFormSchemaOptions[];
  scale?: string[] | number;
  buttons?: JssFormSchema[];
  action?: any;
  autoDisable?: boolean;
  prepIcon?: string;
  appIcon?: string;
  class?: string;
}
