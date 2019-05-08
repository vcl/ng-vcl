import {
  Component, Input, Output, EventEmitter, OnChanges,
  SimpleChanges, forwardRef, ChangeDetectorRef
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

  formGr: FormGroup | undefined;
  formObjects: FormObject[] | undefined;

  private formValueChangeSub: Subscription;

  constructor(private fb: FormBuilder, private cd:ChangeDetectorRef) { }

  onSubmit() {
    console.log(this.formGr)
    this.ngSubmit.emit(this.formGr && this.formGr.value);
  }
  onAction(event) {
    this.action.emit(event);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.schema) {
      const schema = changes.schema.currentValue;
      this.formObjects = (<FormObject[] | undefined> createFormObjects(schema));
      this.formGr = (<FormGroup> this.createFormGroup(schema));
      console.log(this.formGr )
      this.formValueChangeSub && this.formValueChangeSub.unsubscribe();
      this.formValueChangeSub = this.formGr.valueChanges.subscribe(value => {
        this.onChange && this.onChange(value);
      });
    }
  }
  ngOnInit() {
    this.cd.detectChanges();
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
            let typeValidator: ValidatorFn;
            switch (prop.formControl) {
              case 'number':
                state = null;
                typeValidator = this.createTypeValidator((value) => typeof value === 'number');
                break;
              case 'token':
                state = [];
                typeValidator = this.createTypeValidator((value) => Array.isArray(value));
                break;
              case 'dropdown':
                if (prop.selectionMode === 'multiple') {
                  state = [];
                  typeValidator = this.createTypeValidator((value) => Array.isArray(value));
                }
                break;
              case 'checkbox':
              case 'switch':
                typeValidator = this.createTypeValidator((value) => typeof value === 'boolean');
                state = false;
                break;
              case undefined:
                state = undefined;
                break;
            }
            const validators = [prop.validator, typeValidator].filter(v => v);
            group[key] = new FormControl(state,validators);
          }
        }

      });

      if (schema.formControl === 'array') {
        return this.fb.array([
          this.fb.group(group)
        ], this.createChildControlsValidator());
      }

      return this.fb.group(group, this.createChildControlsValidator());

    };
    return createGroup(schemaB);
  }

  private createTypeValidator(isValid) {
    return (c: AbstractControl) => {
      const hasError = !isValid(c.value);
      console.log(c.value)
      console.log(hasError)
      return hasError ? { type: hasError} : undefined;
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


  /**
   * things needed for ControlValueAccessor-Interface
   */
  private onChange: (_: any) => void = () => {};
  private onTouched: () => any = () => {};

  writeValue(value: any): void {
    if (this.formGr && value && typeof value === 'object') {
      this.formGr.patchValue(value);
    }
  }
  registerOnChange(fn: any) {
    this.onChange = fn;
  }
  registerOnTouched(fn: any) {
    this.onTouched = fn;
  }
}
