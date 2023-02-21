import {
  Component,
  AfterViewInit,
  ViewChild,
  ViewContainerRef,
  TemplateRef,
} from '@angular/core';
import { LayerService, LayerRef } from '@vcl/ng-vcl';
import { BarComponent } from './bar.component';
import { NagLayer } from './nag.component';

let i = 0;

@Component({
  templateUrl: 'demo.component.html',
})
export class LayerDemoComponent implements AfterViewInit {
  barLayer: LayerRef;

  @ViewChild('tplLayerRef')
  tplLayerRef: TemplateRef<any>;

  tplLayer: LayerRef;

  constructor(
    private nagLayer: NagLayer,
    private layerService: LayerService,
    private viewContainerRef: ViewContainerRef
  ) {
    this.barLayer = layerService.create(BarComponent, {
      closeOnBackdropClick: false,
      closeOnEscape: false,
    });
  }
  ngAfterViewInit(): void {
    this.tplLayer = this.layerService.createTemplateLayer(
      this.tplLayerRef,
      this.viewContainerRef
    );
  }

  openBarComponent() {
    this.barLayer
      .open({
        data: {
          title: `bar component layer title (${i++})`,
        },
      })
      .subscribe(result => {
        console.log('Bar component result: ' + result?.value);
      });
  }

  openNagLayer() {
    this.nagLayer
      .open({
        data: {
          allowDecline: true,
        },
      })
      .subscribe(result => {
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
