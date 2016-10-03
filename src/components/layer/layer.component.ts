import { Subscription } from 'rxjs/Subscription';
import { Wormhole } from './../../directives/wormhole';
import { Component, Input, Output, EventEmitter, Directive, TemplateRef, ElementRef } from '@angular/core';
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

@Component({
  selector: 'vcl-layer-base',
  templateUrl: 'layer-base.component.html'
})
export class LayerBaseComponent {

  visibleLayers = [];
  sub: Subscription;

  constructor(private layerManger: LayerManagerService) { }

  ngOnInit() {
    this.sub = this.layerManger.visibleLayersChanged.subscribe(visibleLayers => {
      this.visibleLayers = visibleLayers;
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}


@Directive({
  selector: '[vcl-layer]',
  exportAs: 'layer',
  host: {
    '(document:click)': 'onClick($event)',
  },
})
export class LayerDirective extends Wormhole {

  visibilityChange$: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output()
  get visibilityChange(): Observable<boolean> {
    return this.visibilityChange$.asObservable();
  }

  @Input()
  public modal: boolean = true;

  @Input()
  public name = 'default';

  public visible = false;
  public coverzIndex = 10;
  public zIndex = 11;

  constructor(protected templateRef: TemplateRef<any>, private elementRef: ElementRef, private layerManger: LayerManagerService) {
    super(templateRef);
  }

  ngOnInit() {
    this.layerManger.register(this);
  }

  ngOnDestroy() {
    this.layerManger.unregister(this);
  }

  onClick(event) {
    // layer covers 100% screen width & height. first element in layer represents 'outside'
    if (!this.modal && event.target.parentNode === this.elementRef.nativeElement) {
      this.close();
    }
  }

  setZIndex(zIndex = 10) {
    this.coverzIndex = zIndex;
    this.zIndex = zIndex + 1;
  }

  toggle() {
    this.visible = !this.visible;
    this.visibilityChange$.emit(this.visible);
  }

  open() {
    this.setZIndex(this.layerManger.currentZIndex + 10);
    this.visible = true;
    this.visibilityChange$.emit(this.visible);
  }

  close() {
    this.setZIndex();
    this.visible = false;
    this.visibilityChange$.emit(this.visible);
  }

}

