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
const Validator = require('jsonschema'); // TODO use import { Validator } from 'jsonschema';
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

    this.form = this.fb.group({
      name: ['', Validators.required],
      color: ['', Validators.required],
      hp: ['', Validators.required],
      alive: ['', Validators.required],
      mainSkill: this.fb.group({
        name: ['', Validators.required],
        damage: ['', Validators.required]
      })
    });

    // the module-based forms logic is made with the FormBuilder
    /*    this.form = this.fb.group(schemaToFormGroup(this.schema), {
          validator: (c: AbstractControl) => {
            return true; // TODO validate if form matches
//         return c.get('myname').value === c.get('myname2').value
//                      ? null : { notequal: true };
  }
});*/
    this.value && this.form.patchValue(this.value);

    console.log('formGroup::::');
    console.dir(this.form);
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
