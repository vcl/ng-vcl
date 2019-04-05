import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VCLButtonModule } from '../button/index';
import { VCLInputModule } from '../input/index';
import { VCLIconModule } from '../icon/index';
import { EmbeddedInputGroupComponent } from './embedded-input-group.component';
import { EmbeddedInputGroupButtonComponent } from './embedded-input-group-button.component';
import { EmbeddedInputGroupInputDirective } from './embedded-input-group-input.directive';

@NgModule({
  imports: [CommonModule, VCLButtonModule, VCLInputModule, VCLIconModule],
  exports: [EmbeddedInputGroupComponent, EmbeddedInputGroupInputDirective, EmbeddedInputGroupButtonComponent],
  declarations: [EmbeddedInputGroupComponent, EmbeddedInputGroupInputDirective, EmbeddedInputGroupButtonComponent],
})
export class VCLEmbeddedInputGroupModule { }
