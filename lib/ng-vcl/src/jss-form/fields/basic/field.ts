import { VCLFormFieldSchema, Conditional } from '../../schemas';

export class FormField<T extends VCLFormFieldSchema = any> {
  constructor(public readonly schema: T, public key: string, public readonly parent?: FormField) {
    this.id = schema.id || ((this.parent && this.parent.key) ? (this.parent.key + '.' + 'key') : key);
  }

  readonly id: string;

  get type(): string {
    return this.schema.type;
  }

  get visible(): boolean {
    return typeof this.schema.visible === 'boolean' ? this.schema.visible : true;
  }

  get rootField() {
    const walk = (field: FormField) => {
      return field.parent ? walk(field.parent) : field;
    };
    return walk(this);
  }

  destroy() {

  }
}

