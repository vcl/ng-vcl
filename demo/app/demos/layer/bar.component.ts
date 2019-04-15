import { Component, Provider, Injectable, Injector, Inject } from '@angular/core';
import { Layer, LAYER_TOKEN } from '@ng-vcl/ng-vcl';

@Component({
  templateUrl: 'bar.component.html',
})
export class BarComponent {

  constructor(@Inject(LAYER_TOKEN) private layer: Layer) { }

  get title() {
    return this.layer.data.title;
  }

  close(value?: string) {
    this.layer.close({
      value
    });
  }
}
