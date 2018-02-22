import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VCLButtonModule } from '../button/index';
import { VCLInputModule } from '../input/index';
import { VCLIconModule } from '../icon/index';
import { EmbeddedInputGroupComponent } from './embedded-input-group.component';
import { EmbeddedInputDirective } from './embedded-input.directive';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, VCLButtonModule, VCLInputModule, VCLIconModule, FormsModule],
  exports: [EmbeddedInputGroupComponent, EmbeddedInputDirective],
  declarations: [EmbeddedInputGroupComponent, EmbeddedInputDirective],
  providers: [],
})
export class VCLEmbeddedInputGroupModule { }
