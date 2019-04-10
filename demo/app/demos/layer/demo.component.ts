import { Component } from '@angular/core';
import { ExampleLayerRef } from './example.component';

@Component({
  templateUrl: 'demo.component.html',
})
export class LayerDemoComponent {

  constructor(
    private layerRef: ExampleLayerRef
  ) {
    layerRef.afterClose.subscribe(result => {
      console.log(result.value);
    });
  }

  openComponentLayer() {
    this.layerRef.open({
      title: 'Component Layer'
    });
  }
}
