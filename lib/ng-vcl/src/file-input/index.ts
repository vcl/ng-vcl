import { NgModule } from '@angular/core';
import { FileInputComponent } from './file-input.component';
import { VCLIconModule } from '../icon/index';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [CommonModule, VCLIconModule],
  exports: [FileInputComponent],
  declarations: [FileInputComponent],
  providers: [],
})
export class VCLFileInputModule { }
