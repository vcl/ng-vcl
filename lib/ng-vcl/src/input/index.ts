import { NgModule } from '@angular/core';
import { InputDirective, INPUT_HOST_TOKEN, InputHost } from './input.directive';

export { InputDirective, INPUT_HOST_TOKEN, InputHost };

@NgModule({
  imports: [],
  exports: [InputDirective],
  declarations: [InputDirective],
  providers: [],
})
export class VCLInputModule { }
