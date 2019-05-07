import {
  Component,
  ComponentFactoryResolver,
  EventEmitter,
  Input,
  Output,
  ViewChild,
  ViewContainerRef,
  AfterViewInit,
  ChangeDetectorRef
} from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';

import { FormObject, createFormObjects } from './jss-form-object.model';


@Component({
  selector: 'vcl-jss-form-object',
  templateUrl: 'jss-form-object.component.html'
})
export class JssFormObjectComponent {

  constructor(private cd: ChangeDetectorRef, private factoryResolver: ComponentFactoryResolver) { }


  @ViewChild('formComponent', {read: ViewContainerRef})
  formComponentRef: ViewContainerRef;

  @Input()
  form: FormGroup;

  @Input()
  fo: FormObject;

  @Input()
  formComponent?: any;

  @Output()
  action = new EventEmitter<any>();

  getFormControl(key: string, i: number) {
    const x = this.form.get(key);
    if (x['controls']) {
      return x['controls'][i];
    }
    return undefined;
  }

  ngOnInit() {
    const { schema } = this.fo;
    console.log(schema.hints)
    if (schema.formControl === 'custom' ) {
      this.formComponentRef.clear();

      const componentConstructor = schema.customComponent;
      const factory = this.factoryResolver.resolveComponentFactory(componentConstructor as any);
      const component = this.formComponentRef.createComponent(factory);

      if (!this.validCustom(component.instance)) {
        console.error(component.instance.constructor.name, 'is not an instance of ControlValueAccessor');
        this.formComponentRef.clear();
      } else {
        const { customParameters } = schema;
        // tslint:disable-next-line: forin
        for (const key in customParameters) {
          (<any> component.instance)[key] = customParameters[key];
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
    this.cd.detectChanges();
  }

  onAction(event) {
    this.action.emit(event);
  }

  addItem() {
    const newFormGroup = this.formComponent.createFormGroup((this.fo.schema as any).items);
    const parentArray = <FormArray> this.form.get(this.fo.key);
    parentArray.setControl(parentArray.controls.length, newFormGroup);
    (<FormObject[][]> this.fo.formObjects).push((<FormObject[][]> createFormObjects(this.fo.schema, this.fo))[0]);
  }

  removeItem(i: number) {
    const parentArray = <FormArray> this.form.get(this.fo.key);
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
