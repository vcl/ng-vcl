import { Component } from '@angular/core';
import {
  ComponentLayerRef,
  VCLButtonModule,
  VCLPanelModule,
} from '@vcl/ng-vcl';

@Component({
  templateUrl: 'bar.component.html',
  imports: [VCLPanelModule, VCLButtonModule],
})
export class BarComponent {
  constructor(private layer: ComponentLayerRef) {}

  get title() {
    return this.layer.data.title;
  }

  close(value?: string) {
    this.layer.close({
      value,
    });
  }
}
