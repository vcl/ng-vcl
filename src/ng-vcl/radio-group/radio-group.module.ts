import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VCLIconModule } from './../icon/icon.module';
import { RadioGroupComponent } from './radio-group.component';
import { VCLRadioButtonModule } from '../radio-button/radio-button.module';

@NgModule({
  imports: [CommonModule, VCLIconModule, VCLRadioButtonModule],
  exports: [RadioGroupComponent],
  declarations: [RadioGroupComponent]
})
export class VCLRadioGroupModule { }
