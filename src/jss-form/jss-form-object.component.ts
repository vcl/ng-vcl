import { Component, Input, Output, EventEmitter } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { Schema } from "jsonschema";

export interface JssFormSchemaOptions {
  label?: string;
  value: any;
}

export interface JssFormSchema extends Schema {
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

/**
 * if no formType is given, this will guess the right one
 */
function determineType(schema: JssFormSchema): string | undefined {
    if (schema.formType) {
      return schema.formType;
    } else if (schema.type == 'string') {
      return (schema.enum) ? 'select' : 'text';
    } else if (schema.type == 'number' || schema.type === 'integer') {
      return 'number';
    } else if (schema.type == 'boolean') {
      return 'switch';
    } else if (schema.type == 'submit') {
      return 'submit';
    } else if (schema.type == 'button') {
      return 'button';
    } else if (schema.type == 'buttons') {
      return 'buttons';
    }
    return undefined;
}

export class FormObject {

  formType: string | undefined;
  formObjects: FormObject[] | undefined;

  options: JssFormSchemaOptions[] = [];
  buttons: FormObject[] = [];

  constructor(public schema: JssFormSchema, public key: string, public parentKey?: string) {

    this.formObjects = createFormObjects(schema, this);
    this.formType = determineType(schema);

    if (this.formType === 'select' || this.formType === 'dropdown' || this.formType === 'radio') {
      let options;
      if (!schema.options && schema.enum) {
        options = schema.enum.map((s: string | null) => ({label: s === null ? '-' : s, value: s}));
      } else if (schema.options) {
        options = schema.options.map((option) => ({
          value: option.value,
          label: option.label ? option.label : String(option.value)
        }));
      } else {
        options = [];
      }
      this.options = options;
    } else if (this.formType === 'buttons') {
      this.buttons = (schema.buttons || []).map(btnSchema => new FormObject(btnSchema, key));
    }
  }

  get name() {
    return this.parentKey ? this.parentKey + '.' + this.key : this.key;
  }

  get placeholder() {
    return typeof this.schema.placeholder !== "undefined" ? this.schema.placeholder : '';
  }

  get label() {
    return this.schema.label || this.key;
  }

  get required(): boolean {
    if (this.formType === 'text') {
      return typeof this.schema.minLength === 'number' && this.schema.minLength > 0;
    }

    return false;
  }

}

export function createFormObjects(schema: any, parent?: FormObject): FormObject[] | undefined {
  if (schema.properties) {
    return Object.keys(schema.properties).map(key => {
      return new FormObject(schema.properties[key], key, parent ? parent.key : undefined);
    });
  } else {
    return undefined;
  }
}

@Component({
  selector: 'vcl-jss-form-object',
  templateUrl: 'jss-form-object.component.html'
})
export class JssFormObjectComponent {
  @Input()
  form: FormGroup;

  @Input()
  fo: FormObject;

  @Output()
  action = new EventEmitter<any>();

  onAction(event) {
    this.action.emit(event);
  }

  get hasError() {
    const ctrl = this.form.get(this.fo.key);
    return (ctrl && ctrl.invalid && ctrl.touched && ctrl.errors);
  }

  get errorLabel() {
    const ctrl = this.form.get(this.fo.key);
    if (ctrl && ctrl.invalid && ctrl.touched && ctrl.errors) {
      const key = Object.keys(ctrl.errors)[0];
      if (key) {
        return ctrl.errors[key];
      }
    }
    return undefined;
  }
}
