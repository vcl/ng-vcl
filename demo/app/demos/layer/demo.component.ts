import {
  Component,
  AfterViewInit,
  ViewChild,
  ViewContainerRef,
  TemplateRef,
  OnDestroy,
} from '@angular/core';
import { SubSink } from 'subsink';

import { LayerService, LayerRef } from '@vcl/ng-vcl';

import { BarComponent } from './bar.component';
import { NagLayer } from './nag.component';

let i = 0;

@Component({
  templateUrl: 'demo.component.html',
})
export class LayerDemoComponent implements AfterViewInit, OnDestroy {
  barLayer: LayerRef;

  @ViewChild('tplLayerRef')
  tplLayerRef: TemplateRef<any>;

  tplLayer: LayerRef;

  private subscriptions = new SubSink();

  constructor(
    private readonly nagLayer: NagLayer,
    private readonly layerService: LayerService,
    private readonly viewContainerRef: ViewContainerRef
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

  ngOnDestroy() {
    this.barLayer?.destroy();
    this.subscriptions.unsubscribe();
  }

  openBarComponent() {
    this.subscriptions.sink = this.barLayer
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
    this.subscriptions.sink = this.nagLayer
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
}
