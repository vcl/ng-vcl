import { LayerComponentReference } from './../../../src/index';
import { Component, Optional, Input } from '@angular/core';

@Component({
  templateUrl: 'layer.component.html',
})
export class LayerComponent {

  @Input()
  data: string;

  constructor(@Optional() private layerRef: LayerComponentReference<LayerComponent>) { }

  close() {
    this.layerRef.close('close');
  }

  send() {
    this.layerRef.send('send');
  }
}
