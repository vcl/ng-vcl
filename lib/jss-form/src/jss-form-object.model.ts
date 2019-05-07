import { VCLFormSchemaOptions, VCLFormSchema } from './types';

let uniqueID = 0;


export class FormObject {

  id: string;

  disableOverride = false;

  formControl: string | undefined;
  formObjects: FormObject[] | FormObject[][] | undefined;

  options: VCLFormSchemaOptions[] = [];
  buttons: FormObject[] = [];

  constructor(
    public schema: VCLFormSchema,
    public key: string,
    public parentKey?: string
  ) {

    this.formObjects = createFormObjects(schema, this);
    this.formControl = schema.formControl;

    if (schema.formControl === 'dropdown' || schema.formControl === 'radio') {
      this.options = schema.options || [];
    } else if (schema.formControl === 'button-group') {
      this.buttons = (schema.buttons || []).map(btnSchema => new FormObject(btnSchema, key));
    }

    this.id = `vcl-jss-form-${key}-${++uniqueID}`;
  }

  get name() {
    return this.parentKey ? this.parentKey + '.' + this.key : this.key;
  }

  get placeholder() {
    return  (this.schema as any).placeholder || '';
  }

  get label() {
    return this.schema.label;
  }

  get singularLabel() {
    return (this.schema as any).singularLabel || this.key;
  }

  get required(): boolean {
    return  (this.schema as any).required;

  }

  get disabled(): boolean {
    return !!this.schema.disabled || this.disableOverride;
  }

  get hideLabel(): boolean {
    return (this.schema as any).hideLabel;
  }

}


export function createFormObjects(schema: any, parent?: FormObject): FormObject[] | FormObject[][] | undefined {
  if (schema.properties) {
    return Object.keys(schema.properties).map(key => {
      return new FormObject(schema.properties[key], key, parent ? parent.key : undefined);
    });
  } else if (schema.items) {
    const amount = schema.count || 1;
    const result: any[] = [];
    for (let i = 0; i < amount; i++) {
      result.push(Object.keys(schema.items.properties).map(key => {
        return new FormObject(schema.items.properties[key], key, parent ? parent.key : undefined);
      }));
    }
    return result;
  } else {
    return undefined;
  }
}
