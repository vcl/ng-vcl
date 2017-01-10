import { LayerRef, LayerService, ComponentLayerRef } from './../../../src/index';
import { Component, Optional, Input, Injectable } from '@angular/core';

@Component({
  templateUrl: 'some.component.html',
})
export class SomeComponent {

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

@Injectable()
export class SomeLayer extends ComponentLayerRef<SomeComponent> {
  component = SomeComponent;
  modal = true;
}
