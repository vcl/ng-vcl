import { Component, Injector, ChangeDetectionStrategy } from '@angular/core';
import {
  UntypedFormArray,
  AbstractControl,
  UntypedFormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { Portal, CdkPortalOutlet } from '@angular/cdk/portal';
import { VCLFormFieldSchemaArray } from '../schemas';
import { FormField, FormFieldControl } from './field';
import { FormFieldObject } from './object';
import { VCLIconComponent } from '../../icon/icon.component';

export class FormFieldArray extends FormFieldControl<
  VCLFormFieldSchemaArray,
  {}
> {
  fields: FormField[] = [];

  get initialFields() {
    return typeof this.schema.initialFields === 'number'
      ? this.schema.initialFields
      : 1;
  }

  get noFieldsLabel() {
    return this.schema.noFieldsLabel;
  }

  get fieldLabel() {
    return this.schema.fieldLabel;
  }

  get parentControl() {
    if (!(this.parent instanceof FormFieldObject)) {
      throw new Error('jss-form: array must be direct member of an object');
    }
    return this.parent.control as UntypedFormGroup;
  }

  protected createControl(): AbstractControl {
    return new UntypedFormArray([], this.validators);
  }

  createFieldLabel(index: number) {
    return typeof this.fieldLabel === 'function'
      ? this.fieldLabel(index)
      : this.fieldLabel;
  }

  addField() {
    const control = this.control as UntypedFormArray;
    const index = this.fields.length;
    const schema = this.schema.field;

    const field = FormField.createInstance({
      schema,
      parent: this,
    });

    this.fields.push(field);

    if (field instanceof FormFieldControl) {
      control.push(field.control);
    }

    return {
      index,
      field,
    };
  }

  removeField(field: FormField) {
    field.destroy();
    const idx = this.fields.indexOf(field);
    this.fields = this.fields.filter(_field => _field !== field);
    const control = this.control as UntypedFormArray;
    control.removeAt(idx);
  }

  createDefaultValue() {
    return [];
  }
}

@Component({
  selector: 'vcl-jss-form-array',
  template: `
    <ng-container [formGroup]="field.parentControl">
      <fieldset class="fieldset mb-form-control" [formArrayName]="field.name">
        <legend>
          {{ field.label }}
          <vcl-icon
            class="vcl-jss-form-add"
            icon="vcl:add"
            (click)="addItem()"></vcl-icon>
        </legend>
        @if (items.length === 0) {
          {{ field.noFieldsLabel }}
        }
        @for (item of items; track item; let i = $index) {
          <fieldset class="mb-form-control">
            <legend>
              {{ item.label }}
              <vcl-icon
                class="vcl-jss-form-remove"
                icon="vcl:remove"
                (click)="removeItem(i)"></vcl-icon>
            </legend>
            <ng-template [cdkPortalOutlet]="item.portal"></ng-template>
          </fieldset>
        }
      </fieldset>
    </ng-container>
  `,
  styles: [
    `
      :host {
        display: block;
      }
      .vcl-jss-form-add {
        color: green;
        cursor: pointer;
      }
      .vcl-jss-form-remove {
        color: red;
        cursor: pointer;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    VCLIconComponent,
    CdkPortalOutlet,
  ],
})
export class FormFieldArrayComponent {
  constructor(
    public field: FormFieldArray,
    private injector: Injector
  ) {
    for (let i = 0; i < this.field.initialFields; i++) {
      this.addItem();
    }
  }

  items: { field: FormField; portal: Portal<any>; label: string }[] = [];

  addItem() {
    if (this.field.disabled) {
      return;
    }

    const { index, field } = this.field.addField();
    const portal = field.createPortal(this.injector, []);
    this.items = [
      ...this.items,
      {
        portal,
        field,
        label: this.field.createFieldLabel(index),
      },
    ];
  }

  removeItem(i: number) {
    const item = this.items[i];
    item.portal.detach();
    this.field.removeField(item.field);
    this.items = this.items.filter(_item => _item !== item);
  }
}
