
// export class FormModelTextArea extends FormModelControl<VCLFormSchemaTextarea> {
//   formControl: 'textarea';
//   get placeholder(): string | undefined {
//     return this.schema.placeholder;
//   }
//   get minRows(): number | undefined {
//     return this.schema.minRows;
//   }
//   get maxRows(): number | undefined {
//     return this.schema.maxRows;
//   }
//   protected createDefaultValue() {
//     return '';
//   }
// }

// export class FormModelSelect extends FormModelControl<VCLFormSchemaSelect> {
//   formControl: 'select' | 'select-list' | 'button-group';
//   get label(): string {
//     return this.schema.label;
//   }
//   get selectionMode(): 'multiple' | 'single' {
//     return this.schema.selectionMode || 'single';
//   }
//   get placeholder()  {
//     return this.schema.placeholder || '';
//   }
//   get options()  {
//     return this.schema.options || [];
//   }
//   protected createDefaultValue() {
//     return this.selectionMode === 'single' ? undefined : [];
//   }
// }

// export class FormModelSwitch extends FormModelControl<VCLFormSchemaSwitch> {
//   formControl: 'switch';
//   get label(): string {
//     return this.schema.label;
//   }
//   get onLabel()  {
//     return this.schema.onLabel;
//   }
//   get offLabel()  {
//     return this.schema.onLabel;
//   }
//   get defaultValue() {
//     return this.schema.defaultValue || false;
//   }
//   protected createDefaultValue() {
//     return false;
//   }
// }

// export class FormModelSlider extends FormModelControl<VCLFormSchemaSlider> {
//   formControl: 'slider';
//   get label(): string {
//     return this.schema.label;
//   }
//   get scale()  {
//     return this.schema.scale;
//   }
//   get lock()  {
//     return this.schema.lock;
//   }
//   get min()  {
//     return this.schema.min;
//   }
//   get max()  {
//     return this.schema.max;
//   }
//   protected createDefaultValue() {
//     return undefined;
//   }
// }

// export class FormModelCheckbox extends FormModelControl<VCLFormSchemaCheckbox> {
//   formControl: 'checkbox';
//   get label(): string {
//     return this.schema.label;
//   }
//   get iconPosition()  {
//     return this.schema.iconPosition || 'right';
//   }
//   protected createDefaultValue() {
//     return false;
//   }
// }

// export class FormModelRadioGroup extends FormModelControl<VCLFormSchemaRadioGroup> {
//   formControl: 'radio-group';
//   get label(): string {
//     return this.schema.label;
//   }
//   get iconPosition()  {
//     return this.schema.iconPosition || 'right';
//   }
//   get options()  {
//     return this.schema.options || [];
//   }
//   protected createDefaultValue() {
//     return [];
//   }
// }

// export class FormModelToken extends FormModelControl<VCLFormSchemaToken> {
//   protected createDefaultValue() {
//     return undefined;
//   }
// }

// export class FormModelDate extends FormModelControl<VCLFormSchemaDate> {
//   formControl: 'date';
//   get label(): string {
//     return this.schema.label;
//   }
//   get datePickerConfig(): DatePickerConfig | undefined  {
//     return this.schema.datePickerConfig;
//   }
//   protected createDefaultValue() {
//     return Date.now();
//   }
// }

// export class FormModelFileInput extends FormModelControl<VCLFormSchemaFileInput> {
//   formControl: 'file-input';
//   get label(): string {
//     return this.schema.label;
//   }
//   get placeholder(): string  {
//     return this.schema.placeholder || '';
//   }
//   protected createDefaultValue() {
//     return undefined;
//   }
// }

// export class FormModelHidden extends FormModelControl<VCLFormSchemaHidden> {
//   formControl: 'hidden';
//   protected createDefaultValue() {
//     return undefined;
//   }
// }
