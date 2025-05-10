import { NgModule } from '@angular/core';
import { FileInputComponent } from './file-input.component';

export { FileInputComponent };

@NgModule({
  imports: [FileInputComponent],
  exports: [FileInputComponent],
})
export class VCLFileInputModule {}
