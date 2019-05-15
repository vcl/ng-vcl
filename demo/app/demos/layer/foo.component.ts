import { Component, Injector, Injectable, Inject, forwardRef } from '@angular/core';
import { LayerRef } from '@ng-vcl/ng-vcl';

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

  // Utilize forwardRef to avoid using FooLayer before it was declared
  constructor(@Inject(forwardRef(() => FooLayer)) public layer: FooLayer) { }

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
export class FooLayer extends LayerRef<FooLayerData, FooLayerResult> {

  constructor(injector: Injector) {
    super(injector, {
      modal: true
    });
  }

  templateOrComponent = FooComponent;

  get title() {
    return this.data.title;
  }
}
