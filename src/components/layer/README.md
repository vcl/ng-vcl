# vcl-layer

A container which stacks up in the z-direction.

## Usage:

```js
import { VCLLayerModule } from 'ng-vcl';

@NgModule({
  imports: [ VCLLayerModule ],
  ...
})
export class AppComponent {}
```

The vcl-layer-base defines the position in the DOM where the layers will appear when visible.

```html
<vcl-layer-base></vcl-layer-base>
```

A layer can be defined anywhere in your application

```html
<template vcl-layer #myLayer="layer" [modal]="true" [name]="myLayer">
  <div class="vclPanel vclNoMargin">
    <div class="vclPanelHeader">
      <h3 class="vclPanelTitle">Title</h3>
    </div>
    <div class="vclPanelBody">
      <p class="vclPanelContent">
        Content
        <button vcl-button (click)="myLayer.close()" label="Close Layer"></button>
      </p>
    </div>
  </div>
</template>

<button vcl-button (click)="myLayer.open()" label="Open Layer"></button>
```

The `LayerService` can be used to open a Layer without having an actual reference.
The layer must have a name to use it with the Service.
_This only works when the layer template is actually rendered on the page_

Additionaly you can pass to and receive data from the layer.

```js
import { LayerService } from 'ng-vcl';

export class LayerComponent {

  constructor(private layerService: LayerService) {}

  openLayer() {
    this.layerService.open('myLayer', {
      // Data to pass to the Layer
      title: 'My layers title',
      content: 'My layers content'
    }).subscribe(data => {
      // Triggered when data is send from the layer
    }, null, () => {
      // Triggered when the layer is closed
    });
  }

  closeLayer() {
    this.layerService.close('myLayer');
  }
}
```

```html
<template vcl-layer #myLayer="layer" [modal]="true" [name]="myLayer">
  <div class="vclPanel vclNoMargin">
    <div class="vclPanelHeader">
      <h3 class="vclPanelTitle">{{myLayer.data.title}}</h3>
    </div>
    <div class="vclPanelBody">
      <p class="vclPanelContent">
        {{myLayer.data.content}}
        <button vcl-button (click)="myLayer.send('data to send 1')" label="Send data"></button>
        <button vcl-button (click)="myLayer.close('data to send 2')" label="Close Layer"></button>
      </p>
    </div>
  </div>
</template>

<button vcl-button (click)="myLayer.open()" label="Open Layer"></button>
```

### API 

#### Properties:

| Name                | Type        | Default  | Description
| ------------        | ----------- | -------- |--------------
| `modal`             | boolean     | false    | Disables user interaction outside of the layer
| `name`              | string      |          | The layer name for addressing it in the LayerService 
