import { VCLFormFieldSchema, VCLFormFieldControlSchema } from '../schemas';
import { AbstractControl, FormControl } from '@angular/forms';

export class FormField<T extends VCLFormFieldSchema = any> {
  constructor(public readonly schema: T, public key: string, public readonly parent?: FormField) {
    this.id = schema.id || ((this.parent && this.parent.key) ? (this.parent.key + '.' + 'key') : key);

    if (typeof schema.visible === 'object') {
      // TODO
    } else if (typeof this.schema.visible === 'boolean') {
      this._visible = this.schema.visible;
    } else {
      this._visible = true;
    }

  }

  private _visible = false;

  readonly id: string;

  get type(): string {
    return this.schema.type;
  }

  get visible(): boolean {
    return this._visible;
  }

  get rootField() {
    const walk = (field: FormField) => {
      return field.parent ? walk(field.parent) : field;
    };
    const root = walk(this);
    return root instanceof FormFieldControl ? root : undefined;
  }

  destroy() {

  }
}

export class FormFieldControl<T extends VCLFormFieldControlSchema = any> extends FormField<T> {

  constructor(
    schema: T,
    key: string,
    parent?: FormField,
  ) {
    super(schema, key, parent);
  }

  readonly id: string;
  public _control?: AbstractControl;

  get control(): AbstractControl {
    if (!this._control) {
      this._control = this.createControl();
    }
    return this._control;
  }

  get errorStateAgent() {
    return this.schema.errorStateAgent;
  }

  get defaultValue() {
    return this.schema.defaultValue  === undefined ? this.createDefaultValue() : this.schema.defaultValue;
  }

  get validators() {
    return this.schema.validators  === undefined ? undefined : this.schema.validators;
  }

  get disabled(): boolean {
    return !!this.schema.disabled;
  }

  get required(): boolean {
    return !!this.schema.required;
  }

  get hints() {
    return this.schema.hints || [];
  }

  protected createControl(): AbstractControl {
    return new FormControl(this.defaultValue, this.validators);
  }

  protected createDefaultValue() {
    return undefined;
  }
}
