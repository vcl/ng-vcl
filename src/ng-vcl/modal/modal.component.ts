import { Component, Input, Output, ViewChild, EventEmitter } from '@angular/core';
import {  LayerRef } from '@ng-vcl/ng-vcl';
import { setTimeout } from 'timers';

export interface ButtonOptions {
  label?: string;
  class?: string;
  onTap?: string;
}

@Component({
  selector: 'vcl-modal',
  templateUrl: 'modal.component.html'
})
export class ModalComponent {

  @Input()
  buttons: ButtonOptions[];

  @Input()
  showClose: boolean;

  @Input()
  title: string;

  @Input()
  class: string;

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
