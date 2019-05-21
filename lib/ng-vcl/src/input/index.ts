import { NgModule } from '@angular/core';
import { InputDirective, VCLInput } from './input.directive';

export { InputDirective, VCLInput };

@NgModule({
  imports: [],
  exports: [InputDirective],
  declarations: [InputDirective],
  providers: [],
})
export class VCLInputModule { }
