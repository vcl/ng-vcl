import {
  Component,
  ComponentFactoryResolver,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import {FormArray, FormGroup} from '@angular/forms';
import {JssFormSchema, JssFormSchemaOptions} from './types';
import {determineType} from './utils';

let uniqueID = 0;

export class FormObject {

  id: string;

  disableOverride: boolean = false;

  formControl: string | undefined;
  formObjects: FormObject[] | FormObject[][] | undefined;

  options: JssFormSchemaOptions[] = [];
  buttons: FormObject[] = [];

  constructor(
    public schema: JssFormSchema,
    public key: string,
    public parentKey?: string
  ) {

    this.formObjects = createFormObjects(schema, this);
    this.formControl = determineType(schema);

    if (this.formControl === 'select' || this.formControl === 'dropdown' || this.formControl === 'radio') {
      let options;
      if (!schema.options && schema.enum) {
        options = schema.enum.map((s: string | null) => ({label: s === null ? '-' : s, value: s}));
      } else if (schema.options) {
        options = schema.options.map((option) => ({
          value: option.value,
          label: option.label ? option.label : String(option.value),
          sublabel: option.sublabel
        }));
      } else {
        options = [];
      }
      this.options = options;
    } else if (this.formControl === 'buttons') {
      this.buttons = (schema.buttons || []).map(btnSchema => new FormObject(btnSchema, key));
    }

    this.id = `vcl-jss-form-${key}-${++uniqueID}`;
  }

  get name() {
    return this.parentKey ? this.parentKey + '.' + this.key : this.key;
  }

  get placeholder() {
    return typeof this.schema.placeholder !== 'undefined' ? this.schema.placeholder : '';
  }

  get label() {
    return this.schema.label || this.key;
  }

  get singularLabel() {
    return this.schema.singularLabel || this.key;
  }

  get required(): boolean {
    if (this.formControl === 'text') {
      return typeof this.schema.minLength === 'number' && this.schema.minLength > 0;
    }

    return false;
  }

  get disabled(): boolean {
    return !!this.schema.disabled || this.disableOverride;
  }

  get hideLabel(): boolean {
    return !!this.schema.hideLabel;
  }

}

export function createFormObjects(schema: any, parent?: FormObject): FormObject[] | FormObject[][] | undefined {
  if (schema.properties) {
    return Object.keys(schema.properties).map(key => {
      return new FormObject(schema.properties[key], key, parent ? parent.key : undefined);
    });
  } else if (schema.items) {
    const amount = schema.count || 1;
    const result: any[] = [];
    for (let i = 0; i < amount; i++) {
      result.push(Object.keys(schema.items.properties).map(key => {
        return new FormObject(schema.items.properties[key], key, parent ? parent.key : undefined);
      }));
    }
    return result;
  } else {
    return undefined;
  }
}

@Component({
  selector: 'vcl-jss-form-object',
  templateUrl: 'jss-form-object.component.html'
})
export class JssFormObjectComponent implements OnInit {

  constructor(private factoryResolver: ComponentFactoryResolver) { }

  getFormControl(key: string, i: number) {
    const x = this.form.get(key);
    if (x['controls']) {
      return x['controls'][i];
    }
    return undefined;
  }

  ngOnInit() {
    if (this.isCustom) {
      this.dynamicViewContainerRef.clear();
      const factory = this.factoryResolver.resolveComponentFactory(this.fo.schema.customComponent!);
      const component = this.dynamicViewContainerRef.createComponent(factory);
      if (!this.validCustom(component.instance)) {
        console.error(component.instance.constructor.name, 'is not an instance of ControlValueAccessor');
        this.dynamicViewContainerRef.clear();
      } else {
        if (this.fo.schema.customParameters) {
          for (let key in this.fo.schema.customParameters) {
            (<any> component.instance)[key] = this.fo.schema.customParameters[key];
          }
        }

        (<any> component.instance).registerOnChange((newValue) => {
          this.form.controls[this.fo.key]!['_pendingValue'] = newValue;
          this.form.controls[this.fo.key]!['_pendingChange'] = true;
          this.form.controls[this.fo.key]!['_pendingDirty'] = true;
          this.form.controls[this.fo.key]!.setValue(newValue, { emitModelToViewChange: false });
          this.form.controls[this.fo.key]!['_pendingChange'] = false;
        });

        this.form.controls[this.fo.key]!['registerOnChange'](function (newValue, emitModelEvent) {
          (<any> component.instance).writeValue(newValue);
        });
      }
    }
  }

  @ViewChild('dynamic', {read: ViewContainerRef})
  dynamicViewContainerRef: ViewContainerRef;

  @Input()
  form: FormGroup;

  @Input()
  fo: FormObject;

  @Input()
  formComponent?: any;

  @Output()
  action = new EventEmitter<any>();

  onAction(event) {
    this.action.emit(event);
  }

  addItem() {
    const newFormGroup = this.formComponent.createFormGroup(this.fo.schema.items);
    let parentArray = <FormArray> this.form.get(this.fo.key);
    parentArray.setControl(parentArray.controls.length, newFormGroup);
    (<FormObject[][]> this.fo.formObjects).push((<FormObject[][]> createFormObjects(this.fo.schema, this.fo))[0]);
  }

  removeItem(i: number) {
    let parentArray = <FormArray> this.form.get(this.fo.key);
    parentArray.removeAt(i);
    (<FormObject[][]> this.fo.formObjects).splice(i, 1);
  }

  get hasError() {
    const ctrl = this.form.get(this.fo.key);
    return (ctrl && ctrl.invalid && ctrl.errors && (ctrl.touched || ctrl.dirty));
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

  get isCustom(): boolean {
    return !!this.fo.schema.customComponent;
  }

  validCustom(instance: any): boolean {
    if (!('writeValue' in instance)
      || !('registerOnChange' in instance)
      || !('registerOnTouched' in instance)
      || !('setDisabledState' in instance)) {
      return false;
    }

    return true;
  }
}
