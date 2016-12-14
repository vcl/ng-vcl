import { Component, HostListener } from '@angular/core';
import { LayerService } from './../../../src/index';

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

  openLayerWithData() {
    this.layer.open('withData', {
      title: 'This title is provided as an argument'
    }).subscribe(data => {
      // Layer sends data
      console.log(data);
    }, null, () => {
      // Layer is closed
      console.log('layer closed');
    });
  }

  openComponentLayer() {
    this.layer.open('componentLayer');
  }
}
