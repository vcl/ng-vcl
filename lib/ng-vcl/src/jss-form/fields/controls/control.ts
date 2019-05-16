import { AbstractControl, FormControl } from '@angular/forms';
import { VCLFormFieldControlSchema } from '../../schemas';
import { FormField } from '../basic/field';

export abstract class FormFieldControl<T extends VCLFormFieldControlSchema = any> extends FormField<T> {

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
      // this.control.valueChanges.subscribe(() => {
      //   console.log(this.key, this.control.value);
      // }, null, () => {
      //   console.log(this.key, 'done');
      // });
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

  protected abstract createDefaultValue(): any;
}

export class DefaultFormFieldControl<T extends VCLFormFieldControlSchema> extends FormFieldControl<T> {
  protected createDefaultValue() {
    return undefined;
  }
}
