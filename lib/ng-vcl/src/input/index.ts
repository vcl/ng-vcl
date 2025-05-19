import { NgModule } from '@angular/core';
import { VCLFormControlGroupModule } from '../form-control-group/index';
import { InputDirective } from './input.directive';
import { TextareaDirective } from './textarea.directive';
import { InputFieldComponent } from './input-field.component';
import {
  EmbeddedInputFieldLabelDirective,
  FORM_CONTROL_EMBEDDED_LABEL_INPUT,
  EmbeddedInputFieldLabelInput,
} from './embedded-label.directive';

export {
  InputDirective,
  InputFieldComponent,
  FORM_CONTROL_EMBEDDED_LABEL_INPUT,
  EmbeddedInputFieldLabelInput,
  EmbeddedInputFieldLabelDirective,
  TextareaDirective,
};

@NgModule({
  imports: [
    InputDirective,
    TextareaDirective,
    InputFieldComponent,
    EmbeddedInputFieldLabelDirective,
  ],
  exports: [
    InputDirective,
    TextareaDirective,
    InputFieldComponent,
    VCLFormControlGroupModule,
    EmbeddedInputFieldLabelDirective,
  ],
})
export class VCLInputModule {}
