import { Component, Injectable, Injector } from '@angular/core';
import { LayerBase, LAYER_TOKEN } from '@ng-vcl/ng-vcl';

export interface FooLayerData {
  title: string;
}

export interface FooLayerResult {
  value: string;
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

@Component({
  templateUrl: 'foo.component.html',
  providers: [{
    provide: FooLayer,
    useExisting: LAYER_TOKEN,
  }]
})
export class FooComponent {

  constructor(private layer: FooLayer) { }

  get title() {
    return this.layer.data.title;
  }

  close(value?: string) {
    this.layer.close({
      value
    });
  }
}
