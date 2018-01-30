# vcl-layer (VCLLayerModule)

A container which stacks up in the z-direction.

## Usage:

### The layer reference

A layer reference is an object of the type `LayerRef` and allows to open, close, send data to and receive data from the layer.
It can be created as a template using the `vcl-layer directive or from a component:

#### Template layer
```html
<ng-template vcl-layer #myTemplateLayer="layer" [modal]="true">
  <div class="vclPanel vclNoMargin">
    <div class="vclPanelHeader">
      <h3 class="vclPanelTitle">Title</h3>
    </div>
    <div class="vclPanelBody">
      <p class="vclPanelContent">
        Content
        <button vcl-button (tap)="myTemplateLayer.close()" label="Close Layer"></button>
      </p>
    </div>
  </div>
</ng-template>
```

#### Component layer
```js
import { Layer, LayerRef, ComponentLayerRef, provideLayer } from '@ng-vcl/ng-vcl';

// This is just a common component
@Component({ ... })
export class MyComponent { 

  @Output()
  greet = new EventEmitter();

  // layerRef is a reference to the current layer. 
  // Its value is null when the component is not used as a layer
  constructor(@Optional() private layerRef: LayerRef) { }

  closeMe() {
    // Close the layer
    this.layerRef.close();
  }

  onGreet() {
    // Sends data to event() method in the layer class if event is defined in @Layer
    this.greet.emit('Hello');
  }

  sendData() {
    // Send data to the subscriber
    this.layerRef.send('foo');
  }
}

// This is the reference class of the layer
@Layer(MyComponent, {
  // See vcl-layer attributes below for more options
  modal: true,
  events: ['greet']
}) 
export class MyLayer extends LayerRef { 
  event(event) {
    switch (event.type) {
      case 'greet':
        ...
    }
  }
}
```

A component layer must be registered.

```js
@NgModule({
  imports: [ 
    VCLLayerModule.forRoot({ // use forChild() in (lazy loaded) modules
      layers: [MyLayer]
    }), 
    ...
  ],
  entryComponents: [ MyComponent, ... ],
  declarations: [ MyComponent, ... ],
  ...
})
export default class AppModule {  };
```

#### Using the layers
```js
import { LayerRef } from '@ng-vcl/ng-vcl';
import { MyLayer } from './my-layer';

@Component({ ... })
export class LayerDemoComponent {
  constructor(
    private myComponentLayer: MyLayer // This is the reference to the component layer
  ) {}

  openComponentLayer() {
    this.myComponentLayer.open();
  }

  // This is the reference to the template layer
  @ViewChild('myTemplateLayer')
  myTemplateLayer: LayerRef;

  openTemplateLayer() {
    this.myTemplateLayer.open();
  }
}
```

#### Setting attributes and receiving data

The open() method allows to pass data to the layer and returns an Observable which 
allows you to receive data from the layer.

```js
this.myComponentLayer.open({
  // Set attributes on the component
  title: 'Component Layer'
}).subscribe(data => {
  // Layer sends data
  console.log(data);
}, null, () => {
  // Layer is closed
  console.log('layer closed');
});
```

### API

```js
class LayerRef {
  open(data: LayerData): Observable<any>; // Opens the layer
  close(data?: any);         // Closes the layer
  send(data: any);           // Send data to the subscriber
  readonly visible: boolean; // true when the layer is visible
  event(event);              // Override to catch Component @Output events
}

interface LayerData {
  [key: string]: any;
}

class LayerService {
  getVisibleLayers(): LayerRef[]; // Get the visible layers
  hasVisibleLayers(): boolean; // True when at least one layer is visible
  closeAll(); // Close all layers
  closeTop(); // Close the top layer
}
```

#### vcl-layer attributes:

| Name                | Type        | Default  | Description
| ------------        | ----------- | -------- |--------------
| `modal`             | boolean     | false    | Wether a non-modal layer should close when clicked outside
| `transparent  `     | boolean     | false    | Makes the layer's background transparent
| `fill`              | boolean     | false    | Makes the layer cover the whole viewport
| `stickToBottom`     | boolean     | false    | Makes the layer stick to the bottom
| `gutterPadding`     | boolean     | false    | Add a padding of half the gutter width
| `noLayerBox`        | boolean     | false    | Does not wrap the component in vclLayerBox div
| `events`            | string      | []       | Listens to defined @Output events.
