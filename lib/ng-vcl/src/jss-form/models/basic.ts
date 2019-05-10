import { VCLFormSchemaBasic, FormControlTypes, VCLFormSchemaSubmit, VCLFormSchemaButtons, VCLFormSchemaButton } from '../types';

export abstract class FormModelBasic<T extends VCLFormSchemaBasic> {
  readonly id: string;
  constructor(private _schema: T) {   }
  protected get schema(): T {
    return this._schema;
  }
  get formControl(): FormControlTypes {
    return this._schema.formControl;
  }
}

export class FormModelSubmit extends FormModelBasic<VCLFormSchemaSubmit> {
  formControl: 'submit';
  get label() {
    return this.schema.label;
  }
  get prepIcon(): string | undefined  {
    return this.schema.prepIcon;
  }
  get appIcon(): string | undefined  {
    return this.schema.appIcon;
  }
  get class(): string | undefined  {
    return this.schema.class;
  }
  get autoDisable(): boolean  {
    return this.schema.autoDisable || false;
  }
}

export class FormModelButtons extends FormModelBasic<VCLFormSchemaButtons> {
  formControl: 'buttons';
  get buttons() {
    return this.schema.buttons || [];
  }
}

export class FormModelButton extends FormModelBasic<VCLFormSchemaButton> {
  formControl: 'button';
  get label() {
    return this.schema.label;
  }
  get prepIcon(): string | undefined  {
    return this.schema.prepIcon;
  }
  get appIcon(): string | undefined  {
    return this.schema.appIcon;
  }
  get class(): string | undefined  {
    return this.schema.class;
  }
  get action(): string  {
    return this.schema.action;
  }
}
