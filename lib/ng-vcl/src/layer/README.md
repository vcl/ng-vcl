# vcl-layer

An overlay placed in the center of the screen.

## Usage

### The layer reference object

A layer implements the `Layer` interface which allows to listen for events and open/close the layer.
It can be created via the `vcl-layer` component or with the `LayerService` from a component class:

#### vcl-layer

```html
<button vcl-button (click)="myTemplateLayer.open()">Open Layer</button>

<vcl-layer #myTemplateLayer="vclLayer" [modal]="true">
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

#### Component Layer

```js
import { Layer } from '@ng-vcl/ng-vcl';

// This is just a common component
@Component({ ... })
export class MyLayerComponent {

  // layer is a reference to the current layer.
  // Its value is null when the component is not used as a layer
  constructor(@Optional() @Inject(LAYER_TOKEN) private layer: Layer) { }

  close() {
    // Close the layer
    this.layer.close('result');
  }
}
```

#### Using the Layers

```js
import { LayerService } from '@ng-vcl/ng-vcl';
import { MyLayerComponent } from './my-layer.component';

@Component({ ... })
export class DemoComponent {
  constructor(
    private layerService: LayerService // This is the reference to the component layer
  ) {}

  openComponentLayer() {
    const layer = this.layerService.open(MyLayerComponent).subscribe(result => {
      console.log(result);
    });
  }
}
```

### API

```js
export interface Layer {
  readonly visible: boolean;
  afterClose: Observable<any | undefined>;
  open(data?: any, opts?: LayerOptions): Observable<any>;
  close(result?: any): void;
  destroy(): void;
}

class LayerService {
  create(component: any, opts?: LayerOptions): Layer;
  open(component: ComponentType<TComponent>, data: any, opts?: LayerOptions): Layer;
}

export interface LayerOptions {
  position?: PositionStrategy;
  modal?: boolean;
}

```

#### vcl-layer attributes

| Name                | Type                 | Default  | Description
| ------------        | -----------          | -------- |--------------
| `modal`             | boolean              | false    | Wether a non-modal layer should close when clicked outside
| `position`          | PositionStrategy     |          | 
