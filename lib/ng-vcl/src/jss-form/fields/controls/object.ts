import { FormGroup, NgForm } from '@angular/forms';
import { Component, Injector } from '@angular/core';
import { ComponentPortal, Portal } from '@angular/cdk/portal';
import { FormFieldHints } from '../../types';
import { FormField } from '../basic/field';
import { FormFieldControl, DefaultFormFieldControl } from '../controls/control';
import { registerField, lookupField } from '../registry';
import { VCLFormFieldSchemaObject } from '../../schemas';

export class FormFieldObject extends FormFieldControl<VCLFormFieldSchemaObject> implements FormFieldHints {
  constructor(schema: VCLFormFieldSchemaObject, key: string, parent?: FormField) {
    super(schema, key, parent);

    this._fields = Object.keys(schema.fields).map(_key => {
      const type = schema.fields[_key].type;
      const meta = lookupField(type);
      const fieldSchema = schema.fields[_key];

      if (meta.fieldClass) {
        return new meta.fieldClass(fieldSchema, _key, parent);
      } else {
        return meta.is === 'control' ? new DefaultFormFieldControl(fieldSchema, _key, parent) : new FormField(fieldSchema, _key, parent);
      }
    });
  }

  private _fields: FormField<any>[];
  private cachedPortals = {};

  get fields(): FormField<any>[] {
    return this._fields;
  }

  get label() {
    return this.schema.label;
  }

  get layout() {
    return this.schema.layout;
  }

  get rootField(): FormFieldObject {
    const walk = (field: FormField) => {
      return field.parent ? walk(field.parent) : field;
    };
    const root = walk(this);
    return root instanceof FormFieldObject ? root : undefined;
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

  createPortals(injector: Injector, providers: any[]): Portal<any>[] {
    this.fields.forEach(_field => {
      if (!this.cachedPortals[_field.key]) {
        this.cachedPortals[_field.key] = createPortal(_field, injector, providers);
      }
    });

    return this.fields.map(field => this.cachedPortals[field.key]);
  }

  destroy() {
    this.fields.forEach(f => f.destroy());
  }
}

@Component({
  selector: 'vcl-jss-form-object',
  template: `
  <ng-container *ngIf="!field.layout">
    <div [formGroup]="field.control">
      <ng-template *ngFor="let portal of portals" [cdkPortalOutlet]="portal"></ng-template>
    </div>
  </ng-container>
  <ng-container *ngIf="field.layout === 'fieldset'">
    <fieldset [formGroup]="field.control">
      <legend *ngIf="!!field.label">{{field.label}}</legend>
      <ng-container *ngFor="let portal of portals">
        <ng-container *ngIf="true">
          <ng-template [cdkPortalOutlet]="portal"></ng-template>
        </ng-container>
      </ng-container>
      <vcl-jss-form-hints></vcl-jss-form-hints>
    </fieldset>
  </ng-container>
  `
})
export class FormFieldObjectComponent {
  constructor(
    public field: FormFieldObject,
    injector: Injector,
    ngForm: NgForm,
  ) {
    this.portals = field.createPortals(injector, []);
  }

  portals: Portal<any>[];

  protected createControl(): FormGroup {
    const param =  this.field.fields.reduce((group, field) => {
      if (field instanceof FormFieldControl) {
        return field.control ? {
          ...group,
          [field.key]: field.control
        } : group;
      }
      return group;
    }, {} as any);
    return new FormGroup(param, this.field.validators);
  }
}

registerField('object', FormFieldObjectComponent, FormFieldObject);

export function createPortal(field: FormField, injector: Injector, providers: any[]) {
  const type = field.type;
  const meta = lookupField(type);

  const portalProviders: any[] = [{
    provide: FormField,
    useValue: field
  }, ...providers];


  if (meta.fieldClass) {
    portalProviders.push({
      provide: meta.fieldClass,
      useValue: field
    });
  }

  if (field instanceof FormFieldControl) {
    portalProviders.push({
      provide: FormFieldControl,
      useValue: field
    });
  }
  const componentInjector = Injector.create({
    parent: injector,
    providers: portalProviders
  });
  return new ComponentPortal(meta.componentClass, null, componentInjector);
}
