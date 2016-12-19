import { Component, HostListener, ViewChild } from '@angular/core';
import { LayerService, LayerRef } from './../../../src/index';
import { LayerComponent } from './layer.component';

@Component({
  templateUrl: 'demo.component.html',
})
export class LayerDemoComponent {

  constructor(private layer: LayerService) {}

  // Close the top layer when escape is pressed
  @HostListener('document:keyup', ['$event'])
  onKeyUp(ev: KeyboardEvent) {
    if (ev.key === 'Escape' && this.layer.hasVisibleLayers()) {
      this.layer.closeTop();
    }
  }

  // Reference to the template layer
  @ViewChild('layerModal')
  layerModal: LayerRef;
  openLayer() {
    this.layerModal.open();
  }

  // Create a layer from a component
  componentLayerRef: LayerRef = this.layer.create(LayerComponent, {
    modal: true
  });

  openComponentLayer() {
    this.componentLayerRef.open({
      title: 'Component Layer'
    }).subscribe(data => {
      // Layer sends data
      console.log(data);
    }, null, () => {
      // Layer is closed
      console.log('layer closed');
    });
  }
}
