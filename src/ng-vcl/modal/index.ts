import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './modal.component';
import { VCLLayerModule } from '../layer/index';

@NgModule({
  imports: [CommonModule, VCLLayerModule],
  exports: [ModalComponent],
  declarations: [ModalComponent],
  providers: [],
})
export class VCLModalModule { }
