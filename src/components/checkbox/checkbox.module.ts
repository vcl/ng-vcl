import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VCLIconModule } from './../icon/icon.module';
import { CheckboxComponent } from './checkbox.component';

@NgModule({
  imports: [CommonModule, VCLIconModule],
  exports: [CheckboxComponent],
  declarations: [CheckboxComponent]
})
export class VCLCheckboxModule { }
