import { Component, Provider } from '@angular/core';
import { ComponentLayerRef, LayerFactory } from '@ng-vcl/ng-vcl';

export interface ExampleLayerData {
  title: string;
}

export interface ExampleLayerResult {
  value: string;
}

export class ExampleLayerRef extends ComponentLayerRef<ExampleComponent, ExampleLayerData, ExampleLayerResult> { }

export const exampleLayerFactory = (lf: LayerFactory) => lf.create(ExampleComponent, {
  modal: true,
  useClass: ExampleLayerRef
});

export const ExampleLayerProvider: Provider = {
 provide: ExampleLayerRef,
 useFactory: exampleLayerFactory,
 deps: [ LayerFactory ]
};

@Component({
  templateUrl: 'example.component.html'
})
export class ExampleComponent {

  constructor(private layerRef: ExampleLayerRef) { }

  get title() {
    return this.layerRef.data.title;
  }

  close(value?: string) {
    this.layerRef.close({
      value
    });
  }
}
