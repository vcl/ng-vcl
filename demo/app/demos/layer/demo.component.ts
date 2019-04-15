import { Component, ViewContainerRef } from '@angular/core';
import { LayerService } from '@ng-vcl/ng-vcl';
import { FooLayer } from './foo.component';
import { BarComponent } from './bar.component';

@Component({
  templateUrl: 'demo.component.html',
})
export class LayerDemoComponent {

  constructor(
    private fooLayer: FooLayer,
    private layerService: LayerService,
    private viewContainerRef: ViewContainerRef
  ) {
    fooLayer.afterClose.subscribe(result => {
      console.log(result.value);
    });
  }

  openBarLayer() {
    const layer = this.layerService.open(BarComponent, {
      title: 'bar component layer title'
    }, {
      modal: true
    });
    layer.afterClose.subscribe(result => {
      layer.destroy(); // Layer is not needed anymore
      console.log(result.value);
    });
  }

  openFooLayer() {
    this.fooLayer.open({
      title: 'foo component layer title'
    });
  }
}
