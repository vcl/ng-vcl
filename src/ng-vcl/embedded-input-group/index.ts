import { NgModule } from '@angular/core';
import { EmbeddedInputGroup } from './embedded-input-group.component';
import { CommonModule } from '@angular/common';
import { VCLButtonModule } from '../button/index';
import { VCLInputModule } from '../input/index';
import { VCLIconModule } from '../icon/index';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, VCLButtonModule, VCLInputModule, VCLIconModule, FormsModule],
  exports: [EmbeddedInputGroup],
  declarations: [EmbeddedInputGroup],
  providers: [],
})
export class VCLEmbeddedInputGroupModule { }
