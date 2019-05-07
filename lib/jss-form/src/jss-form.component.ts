import {
  Component, Input, Output, EventEmitter, OnChanges,
  SimpleChanges, forwardRef
} from '@angular/core';
import {
  FormGroup, FormBuilder, AbstractControl, NG_VALUE_ACCESSOR,
  ControlValueAccessor, FormControl
} from '@angular/forms';
import {  Subscription } from 'rxjs';
import { Schema, Validator } from 'jsonschema';
import { FormObject, createFormObjects } from './jss-form-object.model';
import { VCLFormSchema, VCLFormSchemaRoot } from './types';
import { ValidatorFn } from '@angular/forms';

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
  schema: VCLFormSchemaRoot | undefined;

  @Output()
  ngSubmit = new EventEmitter<any>();

  @Output()
  action = new EventEmitter<any>();

  private _disable = false;

  get disable(): boolean {
    return this._disable;
  }

  @Input()
  set disable(value: boolean) {
    this._disable = value;
    if (this.formObjects) {
      this.formObjects.forEach(fo => {
        fo.disableOverride = value;
      });
    }
  }

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
      this.formObjects = (<FormObject[] | undefined> createFormObjects(schema));
      this.form = (<FormGroup> this.createFormGroup(schema));

      this.formValueChangeSub && this.formValueChangeSub.unsubscribe();
      this.formValueChangeSub = this.form.valueChanges.subscribe(value => {
        this.onChange && this.onChange(value);
      });
    }
  }

  /**
   * create the formGroup for the given schema
   */
  private createFormGroup(schemaB: VCLFormSchema) {
    const createGroup = (schema: VCLFormSchema) => {
      const group = {};
      const props = (schema.formControl === 'object') ? schema.properties : []; // || schema.items || {};
      Object.keys(props).map(key => {
        const prop = props[key];
        if (prop) {
          // objects
          if (prop.formControl === 'object') {
            group[key] = createGroup(prop);
          // arrays
          } else if (prop.formControl === 'array' ) {
            const amount = prop.count || 1;
            const result: any[] = [];
            for (let i = 0; i < amount; i++) {
              result.push(createGroup(prop.items));
            }
            group[key] = this.fb.array(result, this.createChildControlsValidator());
          // non-objects
          } else {
            let state: any = '';
            switch (prop.formControl) {
              case 'number':
                state = null;
                break;
              case 'token':
                state = [];
                break;
              case 'dropdown':
                if (prop.selectionMode === 'multiple') {
                  state = [];
                }
                break;
              case 'checkbox':
                state = false;
                break;
              case undefined:
                state = undefined;
                break;
            }
            const validator = this.createValidator(prop);
            group[key] = new FormControl(state, validator);
          }
        }

      });

      if (schema.formControl === 'array') {
        return this.fb.array([
          this.fb.group(group)
        ]);
      }

      return this.fb.group(group);

    };
    return createGroup(schemaB);
  }

  /**
   * validate if value matches schema
   * @return error-array or null if no errors
   */
  private createValidator(schema: VCLFormSchema) {
    const isJsonSchema = typeof schema.validator === 'object';
    if (isJsonSchema) {
      return this.createJSSValidator(schema.validator as Schema);
    } else if (schema.validator) {
      return schema.validator as ValidatorFn;
    } else {
      let validatorProps;
      switch (schema.formControl) {
        case 'input' : case 'textarea': case 'password' : {
          validatorProps = this.geValidatorProps('string', schema);
          break;
        }
        case 'number': {
          validatorProps = this.geValidatorProps('number', schema);
          break;
        }
        case 'dropdown' : {
          const type = schema.selectionMode === 'multiple' ? 'array' : 'string';
          validatorProps = this.geValidatorProps(type, schema);
          break;
        }
        case 'switch' || 'checkbox': {
          validatorProps = { type: 'boolean' };
          break;
        }
        case 'slider': {
          validatorProps = { type: 'number' };
          break;
        }
        case 'token': {
          validatorProps = this.geValidatorProps('array', schema);
          break;
        }
      }

      return validatorProps ? this.createJSSValidator(validatorProps) : null;
    }
  }
  private createJSSValidator(schema: Schema) {
    return (c: AbstractControl) => {
      if (!VALIDATOR) {
        VALIDATOR = new Validator();
      }
      const result = VALIDATOR.validate(c.value, schema, {});
      if (result && !result.valid) {
        const error = {};
        result.errors.forEach(err => {
          error[err.name] = err.message;
        });
        return error;
      }

      return null;
    };
  }
  private createChildControlsValidator() {
    return (c: AbstractControl) => {
      const controls = (c as FormGroup).controls;
        const controlNames = Object.keys(controls);
        const isArray = Array.isArray(controls);
        return controlNames.reduce((accumulator, controlName) => {
          const childErrors = controls[controlName].errors || {};
          Object.keys(childErrors).forEach(cErr => {
            const key = isArray ? '[' + controlName + ']' + '.' + cErr : controlName + '.' + cErr;
            accumulator[key] = childErrors[cErr];
          });
          return accumulator;
        }, {});
    };
  }
  geValidatorProps(type: string, schema: VCLFormSchema){
    switch (type) {
      case 'string':  {
        return schema.required ? { type, minLength: 1 } : { type };
      }
      case 'array': {
        return schema.required ? { type, minItems: 1 } : { type };
      }
      case 'number': {
        return { type: schema.required ? 'number' : ['number', 'null']};
      }
    }
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
