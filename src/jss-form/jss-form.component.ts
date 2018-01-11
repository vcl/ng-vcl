import { Component, Input, Output, EventEmitter, OnChanges, OnDestroy, ChangeDetectionStrategy, SimpleChanges, forwardRef } from '@angular/core';
import { FormGroup, FormBuilder, AbstractControl, NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/observable/from';
import { Schema, Validator } from 'jsonschema';
import { FormObject, createFormObjects } from './jss-form-object.component';
import { JssFormSchema } from './types';
import { determineType } from './utils';

let VALIDATOR: Validator;

export const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => JssFormComponent),
  multi: true
};

@Component({
  selector: 'vcl-jss-form',
  templateUrl: 'jss-form.component.html',
  providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR]
})
export class JssFormComponent implements OnChanges, ControlValueAccessor {

  @Input()
  schema: JssFormSchema | undefined;

  @Output()
  ngSubmit = new EventEmitter<any>();

  @Output()
  action = new EventEmitter<any>();

  form: FormGroup | undefined;
  formObjects: FormObject[] | undefined;

  private formValueChangeSub: Subscription;

  constructor(private fb: FormBuilder) { }

  onSubmit() {
    this.ngSubmit.emit(this.form && this.form.value);
  }
  onAction(event) {
    this.action.emit(event);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.schema) {
      const schema = changes.schema.currentValue;
      this.formObjects = createFormObjects(schema);
      this.form = this.createFormGroup(schema);

      this.formValueChangeSub && this.formValueChangeSub.unsubscribe();
      this.formValueChangeSub = this.form.valueChanges.subscribe(value => {
        this.onChange && this.onChange(value);
      });
    }
  }

  /**
   * create the formGroup for the given schema
   */
  private createFormGroup(schema: JssFormSchema) {
    const createGroup = (schema: JssFormSchema) => {
      const group = {};
      const props = schema.properties || {};
      Object.keys(props).map(key => {
        const p = props[key];
        if (p) {
          // objects
          if (p.type === 'object') {
            group[key] = createGroup(p);
          // non-objects
          } else {
            group[key] = ['', this.createJsonSchemaValidator(p, false)];
          }

        }

      });

      return this.fb.group(group, {
        validator: this.createJsonSchemaValidator(schema, true)
      });
    };

    return createGroup(schema);
  }

  /**
   * validate if value matches schema
   * @return {?any[]} error-array or null if no errors
   */
  private createJsonSchemaValidator(schema: JssFormSchema, prefix: boolean) {
    return (c: AbstractControl) => {
      if (!VALIDATOR) {
        VALIDATOR = new Validator();
      }
      const result = VALIDATOR.validate(c.value, schema, {});
      if (result && !result.valid) {
        const error = {};
        result.errors.forEach(err => {
          const key = prefix ? err.property + '.' + err.name : err.name;
          error[key] = err.message;
        });
        return error;
      }

      return null;
    };
  }

  /**
   * things needed for ControlValueAccessor-Interface
   */
  private onChange: (_: any) => void = () => {};
  private onTouched: () => any = () => {};

  writeValue(value: any): void {
    if (this.form && value && typeof value === 'object') {
      this.form.patchValue(value);
    }
  }
  registerOnChange(fn: any) {
    this.onChange = fn;
  }
  registerOnTouched(fn: any) {
    this.onTouched = fn;
  }
}
