import { Component } from '@angular/core';
import { LayerService } from '@ng-vcl/ng-vcl';
import { BarComponent } from './bar.component';
import { NagLayer } from './nag.component';

@Component({
  templateUrl: 'demo.component.html',
})
export class LayerDemoComponent {

  constructor(
    private nagLayer: NagLayer,
    private layerService: LayerService,
  ) {  }

  openBarComponent() {
    const layer = this.layerService.open(BarComponent, {
      data: {
        title: 'bar component layer title'
      },
      closeOnBackdropClick: false,
      closeOnEscape: false
    });
    layer.afterClose.subscribe(result => {
      layer.destroy(); // Layer is not needed anymore
      console.log('Bar component result:' + result.value);
    });
  }

  openNagLayer() {
    this.nagLayer.open({
      data: {
        allowDecline: true
      }
    }).subscribe((result) => {
      if (result.accept) {
        console.log('Accepted');
      } else {
        console.log('Declined');
      }
    });
  }
}
