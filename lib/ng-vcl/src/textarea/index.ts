import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TextareaDirective } from './textarea.directive';

export { TextareaDirective };
@NgModule({
  imports: [FormsModule],
  exports: [TextareaDirective],
  declarations: [TextareaDirective],
  providers: [],
})
export class VCLTextareaModule { }
