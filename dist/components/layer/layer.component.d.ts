import { Subscription } from 'rxjs/Subscription';
import { Wormhole } from './../../directives/wormhole';
import { EventEmitter, TemplateRef, ElementRef } from '@angular/core';
import { LayerManagerService } from '../../services/layerManager.service';
import { Observable } from 'rxjs/Observable';
/**

layer

## Usage

```html
<vcl-layer-base></vcl-layer-base>
```

```html

<button vcl-button (click)="myLayer.open()" label="open modal layer"></button>

<template vcl-layer #myLayer="layer" [modal]="false">
  <div class="vclPanel vclNoMargin">
    <div class="vclPanelHeader">
      <h3 class="vclPanelTitle">Title</h3>
    </div>
    <div class="vclPanelBody">
      <p class="vclPanelContent">
        Content
        <button vcl-button (click)="myLayer.close()" label="close Layer"></button>
      </p>
    </div>
  </div>
</template>
```
*/
export declare class LayerBaseComponent {
    private layerManger;
    visibleLayers: any[];
    sub: Subscription;
    constructor(layerManger: LayerManagerService);
    ngOnInit(): void;
    ngOnDestroy(): void;
}
export declare class LayerDirective extends Wormhole {
    protected templateRef: TemplateRef<any>;
    private elementRef;
    private layerManger;
    visibilityChange$: EventEmitter<boolean>;
    readonly visibilityChange: Observable<boolean>;
    modal: boolean;
    name: string;
    visible: boolean;
    coverzIndex: number;
    zIndex: number;
    constructor(templateRef: TemplateRef<any>, elementRef: ElementRef, layerManger: LayerManagerService);
    ngOnInit(): void;
    ngOnDestroy(): void;
    onClick(event: any): void;
    setZIndex(zIndex?: number): void;
    toggle(): void;
    open(): void;
    close(): void;
}
