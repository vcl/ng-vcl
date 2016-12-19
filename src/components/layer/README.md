# vcl-layer (VCLLayerModule)

A container which stacks up in the z-direction.

## Usage:

### The layer reference

A layer reference is an object from the type `LayerRef` and allows to open, close and receive data from the layer.
It can be created as a template using the `vcl-layer directive or from a component:

#### Template layer
```html
<template vcl-layer #myTemplateLayer="layer" [modal]="true">
  <div class="vclPanel vclNoMargin">
    <div class="vclPanelHeader">
      <h3 class="vclPanelTitle">Title</h3>
    </div>
    <div class="vclPanelBody">
      <p class="vclPanelContent">
        Content
        <button vcl-button (tap)="myLayer.close()" label="Close Layer"></button>
      </p>
    </div>
  </div>
</template>
```

#### Component layer
```js
// Component layer
@Component({ ... })
export class MyComponentLayer { 

  // layerRef is a reference to the current layer. 
  // The value is null when the component is not used as a layer
  constructor(private layerRef: LayerRef) { }

  closeMe() {
    // Close the layer
    this.layerRef.close();
  }

  sendData() {
    // Send data to the subscriber
    this.layerRef.send('foo');
  }
 }
```

#### Using the layers
```js
@Component({ ... })
export class LayerDemoComponent {
  constructor(private layer: LayerService) {}

  // This is the reference to the template layer
  @ViewChild('myTemplateLayer')
  myTemplateLayer: LayerRef;

  // Creates a layerRef from a component
  myLayerRef = this.layer.create(MyComponentLayer, {
    // options
    modal: false,
    offClickClose: false
  });

  openTemplateLayer() {
    this.myTemplateLayer.open();
  }

  openComponentLayer() {
    this.myLayerRef.open();
  }
}
```

#### Setting attributes and receiving data

The open() method allows to pass data to the layer and returns an Observable which 
allows you to reveive data from the layer.

```js
this.componentLayerRef.open({
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
  open(data: LayerData): Observable<any>;
  close(data?: any);
  send(data: any);
  visible: boolean;
  modal: boolean;
  offClickClose: boolean;
}

interface LayerData {
  [key: string]: any;
}

class LayerOptions {
  modal: boolean;
  offClickClose: boolean;
}

class LayerService {
  getLayers(): LayerRef[];
  getVisibleLayers(): LayerRef[];
  hasVisibleLayers(): boolean;
  closeAll();
  closeTop();
  create<T>(compClass: ComponentType<T>, opts: LayerOptions = {}): LayerRef;
}
```

#### vcl-layer Properties:

| Name                | Type        | Default  | Description
| ------------        | ----------- | -------- |--------------
| `modal`             | boolean     | false    | Disables user interaction outside of the layer
| `offClickClose`     | boolean     | true     | Wether a non-modal layer should close when clicked outside

