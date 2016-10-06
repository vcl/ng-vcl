import { LayerService } from './../../../src/components/layer/layer.module';
import { Component } from '@angular/core';

@Component({
  templateUrl: 'layer.component.html',
})
export class LayerComponent {

  constructor(private layerService: LayerService) {}

  openLayer1() {
    this.layerService.open('nonModal');
  }
}
