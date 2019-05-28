# vcl-layer

An overlay placed in the center of the screen.
The layer uses [@angular/cdk's](https://material.angular.io/cdk/overlay/overview) overlay for positioning.

## Usage

### The layer reference object

A layer reference object extends from the `TemplateLayerRef` or `ComponentLayerRef` class which allows layer interaction like listening for events and opening/closing the layer.
Both classes implement the `Layer` interface`

A layer reference can be created via the `vcl-layer` component or with the `LayerService` from a component class:

#### Inline layer (TemplateLayerRef)

```html
<button vcl-button (click)="myTemplateLayer.open()">Open Layer</button>

<vcl-layer #myTemplateLayer="vclLayer">
  <!-- myTemplateLayer is of type TemplateLayerRef -->
  <div class="vclPanel vclNoMargin">
    <div class="vclPanelBody">
      <p class="vclPanelContent">
        Content
        <button vcl-button (click)="myTemplateLayer.close()">Close Layer</button>
      </p>
    </div>
  </vcl-layer>
</vcl-layer>
```

#### Component layer (ComponentLayerRef)

Any component can inject the ComponentLayerRef class. 
It will be available if the component is opened via the layer service

```ts
import { ComponentLayerRef } from '@ng-vcl/ng-vcl';

// This is just a common component
@Component({ ... })
export class MyLayerComponent {
  // layer is a reference to the current layer.
  // Its value is null when the component is not used as a layer
  constructor(@Optional() private layer?: ComponentLayerRef) { }

  close() {
    // Close the layer
    this.layer.close('result');
  }
}
```

Any component can be opened with the layer service.
Make sure the component is provided in your module as part of the `entryComponents`.

```ts
import { LayerService } from '@ng-vcl/ng-vcl';
import { MyLayerComponent } from './my-layer.component';

@Component({ ... })
export class DemoComponent {
  constructor(
    private layerService: LayerService // This is the reference to the component layer
  ) {}

  openComponentLayer() {
    const layer = this.layerService.open(MyLayerComponent);
    layer.afterClose.subscribe(result => {
      console.log(result);
    });
  }
}
```

### API

```ts
export interface Layer {
  readonly afterClose: Observable<any>;
  readonly isVisible: boolean;
  readonly data: any;
  toggle(): void;
  open(config?: LayerConfig): void;
  close(result?: any): void;
  destroy(): void;
}

class LayerService {
  create(component: ComponentType<TComponent>, config?: LayerConfig): ComponentLayerRef;
  open(component: ComponentType<TComponent>, config?: LayerConfig): ComponentLayerRef;
}

export class LayerConfig<TData = any> extends OverlayConfig {
  data?: TData;
  closeOnBackdropClick?: boolean;
  closeOnEscape?: boolean;
}

```

#### vcl-layer attributes

| Name                   | Type                 | Default  | Description
| ------------           | -----------          | -------- |--------------
| `closeOnBackdropClick` | boolean              | true     | Wether a the layer should close when clicked outside
| `closeOnEscape`        | boolean              | true     | Wether a the layer should close when escape is pressed
| `position`             | PositionStrategy     |          | 
