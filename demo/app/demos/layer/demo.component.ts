import { Component } from '@angular/core';
import { LayerService, LayerRef } from '@vcl/ng-vcl';
import { BarComponent } from './bar.component';
import { NagLayer } from './nag.component';

let i = 0;

@Component({
  templateUrl: 'demo.component.html',
})
export class LayerDemoComponent {

  barLayer: LayerRef;

  constructor(
    private nagLayer: NagLayer,
    layerService: LayerService,
  ) {  
    this.barLayer = layerService.create(BarComponent, {
      closeOnBackdropClick: false,
      closeOnEscape: false
    });

  }

  openBarComponent() {
    this.barLayer.open({
      data: {
        title: `bar component layer title (${i++})`
      }
    }).subscribe(result => {
      console.log('Bar component result: ' + result?.value);
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

  ngOnDestroy() {
    this.barLayer?.destroy();
  }
}
