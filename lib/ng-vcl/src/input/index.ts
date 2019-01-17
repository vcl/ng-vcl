import { NgModule } from '@angular/core';
import { InputDirective, InputAutoSelectDirective } from './input.directive';

export { InputDirective };

@NgModule({
  imports: [],
  exports: [InputDirective, InputAutoSelectDirective],
  declarations: [InputDirective, InputAutoSelectDirective],
  providers: [],
})
export class VCLInputModule { }
