import { Component, HostListener, ViewChild } from '@angular/core';
import { LayerService } from './../../../src/index';
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

  @ViewChild('layerModal')
  layerModal;
  openLayer() {
    this.layerModal.open();
  }

  // Register a Component Layer
  componentLayerRef = this.layer.registerComponent(LayerComponent, {
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
