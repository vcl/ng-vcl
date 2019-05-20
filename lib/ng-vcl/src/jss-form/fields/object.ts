import { FormGroup, NgForm } from '@angular/forms';
import { Component, Injector } from '@angular/core';
import { ComponentPortal, Portal } from '@angular/cdk/portal';
import { FormField, FormFieldControl } from './field';
import { VCLFormFieldSchemaObject } from '../schemas';

export class FormFieldObject extends FormFieldControl<VCLFormFieldSchemaObject, {}> {
  constructor(schema: VCLFormFieldSchemaObject, key: string, parent?: FormField) {
    super(schema, key, parent);

    this._fields = Object.keys(schema.fields).map(_key => {
      const fieldSchema = schema.fields[_key];
      return FormField.createInstance({
        schema: fieldSchema,
        key: _key,
        parent: this
      });
    });
  }

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

  get root(): FormFieldObject {
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

  formReady() {
    super.formReady();
    this.fields.forEach(f => f.formReady());
  }

  destroy() {
    super.destroy();
    this.fields.forEach(f => f.destroy());
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
  selector: 'vcl-jss-form-object',
  template: `
  <ng-container *ngIf="field.visible">
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
      </fieldset>
    </ng-container>
    <vcl-jss-form-hints></vcl-jss-form-hints>
  </ng-container>
  `
})
export class FormFieldObjectComponent {
  constructor(
    public field: FormFieldObject,
    injector: Injector,
  ) {
    this.portals = this.field.fields.map(_field => _field.createPortal(injector, []));
  }

  portals: Portal<any>[];
}

FormFieldControl.register('object', FormFieldObjectComponent, FormFieldObject);
