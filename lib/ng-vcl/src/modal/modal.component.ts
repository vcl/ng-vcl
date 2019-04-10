import { Component, ContentChild, Input, Output, ViewChild, EventEmitter } from '@angular/core';
import { LayerRef } from '../layer-legacy/index';
import { ModalBodyComponent } from './modal-body.component';
import { ModalFooterComponent } from './modal-footer.component';

@Component({
  selector: 'vcl-modal',
  templateUrl: 'modal.component.html'
})
export class ModalComponent {

  @Input()
  closeButton: boolean;

  @Input()
  title: string;

  @Input()
  class: string;

  @ContentChild(ModalBodyComponent)
  bodyComponent: ModalBodyComponent | null;

  @ContentChild(ModalFooterComponent)
  footerComponent: ModalFooterComponent | null;

  @Output()
  tapButton  = new EventEmitter<string>();

  @ViewChild('layerModal')
  layerModal: LayerRef;

  open() {
    this.layerModal.open();
  }
  close() {
    this.layerModal.close();
  }
}
