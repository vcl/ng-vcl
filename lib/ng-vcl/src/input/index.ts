import { NgModule } from '@angular/core';
import { VCLFormControlGroupModule } from '../form-control-group/index';
import { InputDirective, INPUT_HOST_TOKEN, InputHost } from './input.directive';

export { InputDirective, INPUT_HOST_TOKEN, InputHost };

@NgModule({
  imports: [VCLFormControlGroupModule],
  exports: [InputDirective],
  declarations: [InputDirective],
  providers: [],
})
export class VCLInputModule { }
