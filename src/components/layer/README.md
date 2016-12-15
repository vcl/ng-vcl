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

A layer can be defined anywhere in your application

```html
<template vcl-layer #myLayer="layer" [modal]="true" [name]="'myLayer'">
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

<button vcl-button (tap)="myLayer.open()" label="Open Layer"></button>
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
<template vcl-layer #myLayer="layer" [modal]="true" [name]="'myLayer'">
  <div class="vclPanel vclNoMargin">
    <div class="vclPanelHeader">
      <h3 class="vclPanelTitle">{{myLayer.data.title}}</h3>
    </div>
    <div class="vclPanelBody">
      <p class="vclPanelContent">
        {{myLayer.data.content}}
        <button vcl-button (tap)="myLayer.send('data to send 1')" label="Send data"></button>
        <button vcl-button (tap)="myLayer.close('data to send 2')" label="Close Layer"></button>
      </p>
    </div>
  </div>
</template>

<button vcl-button (tap)="myLayer.open()" label="Open Layer"></button>
```

### Layer base

A vcl-layer-base component defines the position in the DOM where the layers will appear when visible.

```html
<vcl-layer-base name="sidebar"></vcl-layer-base>
```
```html
<template vcl-layer #mySidebarLayer="layer" [name]="'mySidebarLayer'" [base]="'foo'">
  ...
</template>

```

### API

#### vcl-layer Properties:

| Name                | Type        | Default  | Description
| ------------        | ----------- | -------- |--------------
| `modal`             | boolean     | false    | Disables user interaction outside of the layer
| `closeOnOffClick`   | boolean     | true     | Wether a non-modal layer should close when clicked outside
| `name`              | string      |          | The layer name for addressing it in the LayerService

#### vcl-layer-base Properties:

| Name                | Type        | Default  | Description
| ------------        | ----------- | -------- |--------------
| `zIndex`            | number      | 1000     | The z-index of the first layer opened.
