import { FormGroup, ValidatorFn } from '@angular/forms';
import { Component, Injector } from '@angular/core';
import { ComponentPortal } from '@angular/cdk/portal';
import { FormFieldHints } from '../../types';
import { FormField } from '../basic/field';
import { FormFieldControl, DefaultFormFieldControl } from '../controls/control';
import { registerField, lookupField } from '../registry';
import { VCLFormFieldSchemaObject, VCLFormFieldSchemaRoot } from '../../schemas';

export class FormFieldObject extends FormFieldControl<VCLFormFieldSchemaObject> implements FormFieldHints {
  constructor(schema: VCLFormFieldSchemaObject, key?: string) {
    super(schema, key);

    this._fields = Object.keys(schema.fields).map(_key => {
      const type = schema.fields[_key].type;
      const meta = lookupField(type);
      const fieldSchema = schema.fields[_key];
      if (meta.fieldClass) {
        return new meta.fieldClass(fieldSchema, _key);
      } else {
        return meta.is === 'control' ? new DefaultFormFieldControl(fieldSchema, _key) : new FormField(fieldSchema, _key);
      }
    });
  }

  readonly control: FormGroup;

  private _fields: FormField<any>[];

  get fields(): FormField<any>[] {
    return this._fields;
  }

  get label() {
    return this.schema.label;
  }

  get layout() {
    return this.schema.layout;
  }

  get defaultValue() {
    return this.fields.reduce((value, field) => {
      if (field instanceof FormFieldControl) {
        return {
          ...value,
          [field.key]: field.defaultValue,
        };
      }
      return value;
    }, {} as any);
  }

  protected createDefaultValue() {
    return {};
  }

  protected createControl(): FormGroup {
    const param =  this.fields.reduce((group, field) => {
      if (field instanceof FormFieldControl) {
        return field.control ? {
          ...group,
          [field.key]: field.control
        } : group;
      }
      return group;
    }, {} as any);
    return new FormGroup(param, this.validators);
  }
}

@Component({
  template: `
  <ng-container *ngIf="!field.layout">
    <div [formGroup]="field.control">
      <ng-template *ngFor="let portal of portals" [cdkPortalOutlet]="portal"></ng-template>
    </div>
  </ng-container>
  <ng-container *ngIf="field.layout === 'fieldset'">
    <fieldset [formGroup]="field.control">
      <legend *ngIf="!!field.label">{{field.label}}</legend>
      <ng-template *ngFor="let portal of portals" [cdkPortalOutlet]="portal"></ng-template>
      <vcl-jss-form-hints></vcl-jss-form-hints>
    </fieldset>
  </ng-container>
  `
})
export class FormFieldObjectComponent {
  constructor(
    public field: FormFieldObject,
    private injector: Injector
  ) {
    this.portals = this.createPortals();
  }

  portals: ComponentPortal<any>[];

  private createPortals() {
    if (!this.field) {
      return;
    }

    return this.field.fields.map(field => {
      const type = field.type;
      const meta = lookupField(type);

      const providers: any[] = [{
        provide: meta.fieldClass,
        useValue: field
      }, {
        provide: FormField,
        useValue: field
      }];

      if (field instanceof FormFieldControl) {
        providers.push({
          provide: FormFieldControl,
          useValue: field
        });
      }

      const componentInjector = Injector.create({
        parent: this.injector,
        providers
      });
      return new ComponentPortal(meta.componentClass, null, componentInjector);
    });
  }
}

registerField('object', FormFieldObjectComponent, FormFieldObject);
