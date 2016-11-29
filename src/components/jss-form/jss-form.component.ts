import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnInit
} from '@angular/core';
import { FormGroup, FormBuilder, AbstractControl } from '@angular/forms';
import {Observable} from 'rxjs';

const Validator = require('jsonschema').Validator; // TODO use import { Validator } from 'jsonschema'; when typings available
let VALIDATOR;


@Component({
  selector: 'vcl-jss-form-object',
  templateUrl: 'jss-form-object.component.html',
})
export class JssFormObjectComponent implements OnInit {

  @Input('schema') schema: any;
  @Input('parentPath') parentPath: string = '';
  @Input('formGroup') formGroup: FormGroup;
  @Input('error') error; // EE


  fieldErrors = {};


  constructor() { }

  ngOnInit() {
/*    console.log('Aaaa');
    console.dir(this.error);
    console.dir(this.schema);
*/

    if (this.schema.properties) {
      Object.keys(this.schema.properties)
        .map(key => {

          this.error
            .filter(errAr => errAr != null)
            .map(errAr => errAr
              .filter(er => er.property.startsWith('instance.' + this.parentPath + key))
            )
            .map(errAr => {
              if (errAr.length == 0) return null;
              else return errAr.pop().message;
            })
            .subscribe(errMsg => this.fieldErrors[key] = errMsg);
            // TODO unsubscribe on destroy
        });

    }
  }

  /**
   * if no formType is given, this will guess the right one
   */
  formType(schemaObj: any): string {
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

  keyErrors(parentPath, key): any {

    if (!this.error) return null;

    return this.error
      .map(errAr => errAr
        .filter(er => er.property.startsWith('instance.' + parentPath + key))
      )
      .map(errAr => {
        if (errAr.length == 0) return null;
        else return errAr.pop().message;
      });
  }

  keyErrors$(parentPath, key) {
    return Observable.from(this.keyErrors(parentPath, key));
  }

  name(parentPath, key) {
    let name = parentPath + '.' + key;
    while (name.charAt(0) === '.')
      name = name.substr(1);
    return name;
  }
  placeholder(schemaObj) {
    if (typeof schemaObj.placeholder !== "undefined")
      return schemaObj.placeholder;

    return '';
  }

  radioOptions(schemaObj: any) {
    const opts = schemaObj.enum.map(str => {
      return {
        label: str,
        value: str
      };
    });
    return opts;
  }

  selectItems(schemaObj) {
    if (!schemaObj.items) {
      // use .enum
      return schemaObj.enum.map(str => {
        return {
          label: str,
          value: str
        };
      });
    } else {
      // use .items
      return schemaObj.items.map(item => {
        const ret = {
          value: item.value
        };
        ret['label'] = item.label ? item.label : item.value;
        return ret;
      });
    }
  }

}

@Component({
  selector: 'vcl-jss-form',
  templateUrl: 'jss-form.component.html'
})
export class JssFormComponent implements OnInit {

  @Input('schema') schema: any;
  @Input('value') value: Object = {};


  @Output('error') error = new EventEmitter<any[]>();

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

  /**
   * validate if value matches schema
   * @return {?any[]} error-array or null if no errors
   */
  jsonSchemaValidate(obj: Object, schema = this.schema): Object[] | null {
  if (!VALIDATOR) VALIDATOR = new Validator();
  const valid = VALIDATOR.validate(obj, schema);

  //  console.log('errrrrrors:');
  //  console.dir(valid.errors);

  if (valid.errors.length == 0) {
    this.error.emit(null);
    return null;
  }

  this.error.emit(valid.errors);
  return valid.errors;
}


ngAfterViewInit() {

}


}
