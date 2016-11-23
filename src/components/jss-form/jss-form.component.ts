import {
  Component,
  Input,
  ViewChild,
  forwardRef,
  OnInit
} from '@angular/core';
import { FormGroup, Validators, FormBuilder, AbstractControl,
  ControlValueAccessor, NG_VALUE_ACCESSOR, ReactiveFormsModule  } from '@angular/forms';

import { schemaToFormGroup } from './schemaToFormGroup';
const Validator = require('jsonschema').Validator; // TODO use import { Validator } from 'jsonschema';
let VALIDATOR;





@Component({
  selector: 'vcl-jss-form-object',
  templateUrl: 'jss-form-object.component.html',
})
export class JssFormObjectComponent {

  @Input('schema') schema: any;
  @Input('parentPath') parentPath: string = '';
  @Input('formGroup') formGroup: FormGroup;

  constructor() {

  }

  formType(schemaObj): string {
    if (schemaObj.formType) return schemaObj.formType;

    if (schemaObj.type == 'string') {
      if (schemaObj.enum) {
        return 'select';
      }
      return 'text';
    }

    if (schemaObj.type == 'number')
      return 'number';

    if (schemaObj.type == 'boolean')
      return 'switch';


  }

  keys(obj) {
    return Object.keys(obj);
  }
  name(parentPath, key) {
    let name = parentPath + '.' + key;
    while (name.charAt(0) === '.')
      name = name.substr(1);
    return name;
  }
}


@Component({
  selector: 'vcl-jss-form',
  templateUrl: 'jss-form.component.html'
})
export class JssFormComponent implements OnInit {

  @Input('schema') schema: any;
  @Input('value') value: Object = {};

  form;

  constructor(public fb: FormBuilder) { }


  ngOnInit() {

    this.form = this.formGroupFromSchema(this.schema);

    this.value && this.form.patchValue(this.value);

  }


  keys(obj) {
    return Object.keys(obj);
  }



  /**
   * create the formGroup for the given schema
   * @param  {Object}    schemaObj
   * @return {FormGroup}               [description]
   */
  formGroupFromSchema(schemaObj: any): FormGroup {
    const ret = {};

    // non-objects
    Object.keys(schemaObj.properties)
      .filter(k => schemaObj.properties[k].type != 'object')
      .map(k => ret[k] = ['']);

    // objects
    Object.keys(schemaObj.properties)
      .filter(k => schemaObj.properties[k].type == 'object')
      .map(k => ret[k] = this.formGroupFromSchema(schemaObj.properties[k]));

    return this.fb.group(ret, {
      validator: (c: AbstractControl) => {
        const errors = this.jsonSchemaValidate(c.value, schemaObj);
        return errors;
      }
    });
  }


  jsonSchemaValidate(obj: Object, schema = this.schema): true {
  if (!VALIDATOR) VALIDATOR = new Validator();
  const valid = VALIDATOR.validate(obj, schema);
  if (valid.errors.length == 0) return null;
  return valid.errors;
}



ngAfterViewInit() {

}


}
