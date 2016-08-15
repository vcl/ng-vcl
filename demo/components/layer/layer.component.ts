import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: 'layer.component.html'
})
export class LayerComponent {

  layerNonModalOpen: boolean = false;
  layer1Open: boolean = false;
  layer2Open: boolean = false;

  closeNonModalLayer() {
    this.layerNonModalOpen = false;
  }

  openNonModalLayer() {
    this.layerNonModalOpen = true;
  }

  closeLayer1() {
    this.layer1Open = false;
  }

  openLayer1() {
    this.layer1Open = true;
  }

  closeLayer2() {
    this.layer2Open = false;
  }

  openLayer2() {
    this.layer2Open = true;
  }
}