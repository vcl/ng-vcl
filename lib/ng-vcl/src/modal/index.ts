import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './modal.component';
import { ModalBodyComponent } from './modal-body.component';
import { ModalFooterComponent } from './modal-footer.component';
import { VCLLayerModule } from '../layer/index';

@NgModule({
  imports: [CommonModule, VCLLayerModule],
  exports: [ModalComponent, ModalBodyComponent, ModalFooterComponent],
  declarations: [ModalComponent, ModalBodyComponent, ModalFooterComponent],
  providers: [],
})
export class VCLModalModule { }
