import { Component } from '@angular/core';
import { ComponentLayerRef } from '@vcl/ng-vcl';

@Component({
  templateUrl: 'bar.component.html',
})
export class BarComponent {

  constructor(private layer: ComponentLayerRef) { }

  get title() {
    return this.layer.data.title;
  }

  close(value?: string) {
    this.layer.close({
      value
    });
  }
}
