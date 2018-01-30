import { Component, HostListener, ViewChild, Inject } from '@angular/core';
import { LayerService, LayerRef } from '@ng-vcl/ng-vcl';
import { FooLayer, FooComponent } from './foo.layer';
import { BarComponent } from './bar.component';

@Component({
  templateUrl: 'demo.component.html',
})
export class LayerDemoComponent {

  private dynamicBarLayerRef: LayerRef;

  constructor(
    private layerService: LayerService,
    private fooLayerRef: FooLayer
  ) {
    this.dynamicBarLayerRef = this.layerService.create(BarComponent, {
      modal: true
    });
  }

  // Close the top layer when escape is pressed
  @HostListener('document:keyup', ['$event'])
  onKeyUp(ev: KeyboardEvent) {
    if (ev.key === 'Escape' && this.layerService.hasVisibleLayers()) {
      this.layerService.closeTop();
    }
  }

  // Reference to the template layer
  @ViewChild('layerModal')
  layerModal: LayerRef;
  openLayer() {
    this.layerModal.open();
  }

  openFooLayer() {
    this.fooLayerRef.open({
      title: 'FooComponent via @Layer'
    }).subscribe(data => {
      // Layer sends data
      console.log(data);
    }, undefined, () => {
      // Layer is closed
      console.log('layer closed');
    });
  }

  openBarLayer() {
    this.dynamicBarLayerRef.open({
      title: 'BarComponent via layerService.create'
    }).subscribe(data => {
      // Layer sends data
      console.log(data);
    }, undefined, () => {
      // Layer is closed
      console.log('layer closed');
    });
  }
}
