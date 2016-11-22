import {
  Component,
  Input,
  ViewChild,
  forwardRef,
  OnInit
} from '@angular/core';
import { FormGroup, Validators, FormBuilder, AbstractControl,
  ControlValueAccessor, NG_VALUE_ACCESSOR  } from '@angular/forms';

import { schemaToFormGroup } from './schemaToFormGroup';
const Validator = require('jsonschema'); // TODO use import { Validator } from 'jsonschema';
let VALIDATOR;





@Component({
  selector: 'vcl-jss-form-object',
  templateUrl: 'jss-form-object.component.html',
})
export class JssFormObjectComponent {

  @Input('schema') schema: any;

  constructor() {

  }

  inputSwitch(schemaObj) {
    if (schemaObj.type == 'string')
      return 'textinput';
      if (schemaObj.type == 'number')
        return 'numberinput';

  }

  keys(obj) {
    return Object.keys(obj);
  }
}

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
export class JssFormComponent implements OnInit {

  @Input('schema') schema: any;
  @Input('value') value: Object = {};

  form;

  constructor(public fb: FormBuilder) { }


  ngOnInit() {

    console.log('constructor:');
    console.dir(this.schema);


    // the module-based forms logic is made with the FormBuilder
    this.form = this.fb.group(schemaToFormGroup(this.schema), {
      validator: (c: AbstractControl) => {
        return true; // TODO validate if form matches
        /*        return c.get('myname').value === c.get('myname2').value
                  ? null : { notequal: true };*/
      }
    });
    this.value && this.form.patchValue(this.value);

  }


  keys(obj) {
    return Object.keys(obj);
  }


  jsonSchemaValidate(obj: Object): true {
  if (!VALIDATOR) VALIDATOR = new Validator();
  const valid = VALIDATOR.validate(obj, this.schema);
  if (valid.errors.length > 0) {
    throw new Error(JSON.stringify({
      name: 'schema mismatch',
      errors: valid.errors,
      object: obj,
      schema: this.schema
    }));
  }
  return true;
}



ngAfterViewInit() {

}


}
