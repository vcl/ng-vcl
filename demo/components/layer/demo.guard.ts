import { CanDeactivate } from '@angular/router';
import { Injectable } from '@angular/core';
import { LayerDemoComponent } from './demo.component';
import { LayerService } from './../../../src/index';

@Injectable()
export class LayerDemoCanDeactivateGuard implements CanDeactivate<LayerDemoComponent> {

  constructor(private layer: LayerService) {}

  canDeactivate(layerComponent) {
    if (this.layer.hasVisibleLayers()) {
      console.log('You cannot navigate, when there are visible layers');
      return false;
    }
    return true;
  }
}
