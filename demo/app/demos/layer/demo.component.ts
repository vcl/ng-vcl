import { Component, ViewContainerRef } from '@angular/core';
import { LayerService } from '@ng-vcl/ng-vcl';
import { BarComponent } from './bar.component';
import { FooLayer } from './foo.component';

@Component({
  templateUrl: 'demo.component.html',
})
export class LayerDemoComponent {

  constructor(
    private fooLayer: FooLayer,
    private layerService: LayerService,
  ) {
    fooLayer.afterClose.subscribe(result => {
      console.log(result);
    });
  }

  openBarLayer() {
    const layer = this.layerService.open(BarComponent, {
      data: {
        title: 'bar component layer title'
      },
      modal: true
    });
    layer.afterClose.subscribe(result => {
      layer.destroy(); // Layer is not needed anymore
      console.log(result.value);
    });
  }

  openFooLayer() {
    this.fooLayer.open({
      data: {
        title: 'foo component layer title'
      }
    });
  }
}
