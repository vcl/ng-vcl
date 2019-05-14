import { Component, Injectable, Injector, Inject } from '@angular/core';
import { LayerBase, LAYER_TOKEN } from '@ng-vcl/ng-vcl';

export interface FooLayerData {
  title: string;
}

export interface FooLayerResult {
  value: string;
}

@Component({
  templateUrl: 'foo.component.html'
})
export class FooComponent {

  constructor(@Inject(LAYER_TOKEN) private layer: FooLayer) { }

  get title() {
    return this.layer.data.title;
  }

  close(value?: string) {
    this.layer.close({
      value
    });
  }
}

@Injectable({
  providedIn: 'root'
})
export class FooLayer extends LayerBase<FooLayerData, FooLayerResult, FooComponent> {
  constructor(injector: Injector) {
    super(injector);
  }
  protected getComponent() {
    return FooComponent;
  }
}

