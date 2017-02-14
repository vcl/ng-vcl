import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VCLIconModule } from './../icon/index';
import { RadioGroupComponent } from './radio-group.component';
import { VCLRadioButtonModule } from '../radio-button/index';

@NgModule({
  imports: [CommonModule, VCLIconModule, VCLRadioButtonModule],
  exports: [RadioGroupComponent],
  declarations: [RadioGroupComponent]
})
export class VCLRadioGroupModule { }
