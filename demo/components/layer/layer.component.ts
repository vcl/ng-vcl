import { LayerRef, LayerService } from './../../../src/index';
import { Component, Optional, Input } from '@angular/core';

@Component({
  templateUrl: 'layer.component.html',
})
export class LayerComponent {

  @Input()
  data: string;

  constructor(private layerRef: LayerRef) { }

  close() {
    this.layerRef.close('close');
  }

  send() {
    this.layerRef.send('send');
  }
}
