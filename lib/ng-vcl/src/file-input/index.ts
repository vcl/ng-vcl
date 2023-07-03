import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { VCLIconModule } from '../icon/index';

import { FileInputComponent } from './file-input.component';

export { FileInputComponent };

@NgModule({
  imports: [CommonModule, VCLIconModule],
  exports: [FileInputComponent],
  declarations: [FileInputComponent],
  providers: [],
})
export class VCLFileInputModule {}
