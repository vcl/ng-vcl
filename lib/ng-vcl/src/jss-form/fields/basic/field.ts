import { VCLFormFieldSchema } from '../../schemas';

export class FormField<T extends VCLFormFieldSchema = any> {
  constructor(public readonly schema: T, public readonly key?: string
  ) {   }
  get type(): string {
    return this.schema.type;
  }
}
