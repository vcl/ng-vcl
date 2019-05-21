import { Component } from '@angular/core';
import { LayerRef } from '@ng-vcl/ng-vcl';

@Component({
  templateUrl: 'bar.component.html',
})
export class BarComponent {

  constructor(private layer: LayerRef) { }

  get title() {
    return this.layer.data.title;
  }

  close(value?: string) {
    this.layer.close({
      value
    });
  }
}
