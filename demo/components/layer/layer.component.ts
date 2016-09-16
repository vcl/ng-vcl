import { LayerDirective } from './../../../src/components/layer/layer.component';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  templateUrl: 'layer.component.html'
})
export class LayerComponent {

  @ViewChild('layerNonModal')
  layer1: LayerDirective;

  openLayer1() {
    this.layer1.open();
  }
}
