import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VCLButtonModule } from '../button/index';
import { VCLInputModule } from '../input/index';
import { VCLIconModule } from '../icon/index';
import { EmbeddedInputGroupComponent, EmbeddedInputDirective, EmbeddedButtonDirective } from './embedded-input-group.component';

@NgModule({
  imports: [CommonModule, VCLButtonModule, VCLInputModule, VCLIconModule],
  exports: [EmbeddedInputGroupComponent, EmbeddedInputDirective, EmbeddedButtonDirective],
  declarations: [EmbeddedInputGroupComponent, EmbeddedInputDirective, EmbeddedButtonDirective],
})
export class VCLEmbeddedInputGroupModule { }
