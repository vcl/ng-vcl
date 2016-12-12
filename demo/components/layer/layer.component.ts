import { LayerService } from './../../../src/components/layer/layer.module';
import { Component, HostListener, Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';

@Component({
  templateUrl: 'layer.component.html',
})
export class LayerComponent {

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
}

@Injectable()
export class LayerDemoCanDeactivateGuard implements CanDeactivate<LayerComponent> {

  constructor(private layer: LayerService) {}

  canDeactivate(layerComponent) {
    if (this.layer.hasVisibleLayers()) {
      console.log('You cannot navigate, when there are visible layers');
      return false;
    }
    return true;
  }
}
