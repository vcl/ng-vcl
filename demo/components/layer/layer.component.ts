import { LayerService } from './../../../src/components/layer/layer.module';
import { Component } from '@angular/core';

@Component({
  templateUrl: 'layer.component.html',
})
export class LayerComponent {

  constructor(private layerService: LayerService) {}

  openLayerWithData() {
    this.layerService.open('withData', {
      title: 'This title is provided as an argument'
    }).subscribe(data => {
      // Layer sends data
      console.log(data);
    }, null, () => {
      // Layer is closed
      console.log('layer closed');
    });
  }
}
