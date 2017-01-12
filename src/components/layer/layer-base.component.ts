import { Subject } from 'rxjs/Subject';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';
import { Component, Input, Output, EventEmitter, Directive, TemplateRef, ElementRef, trigger, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { TemplateWormhole } from './../../directives/wormhole/wormhole';
import { LayerService } from './layer.service';
import { LayerRef } from './layer.references';

@Component({
  selector: 'vcl-layer-base',
  templateUrl: 'layer-base.component.html',
  animations: [
    trigger('boxState', []),
    trigger('layerState', [])
  ]
})
export class LayerBaseComponent {

  layerRefs: LayerRef[] = [];
  sub: Subscription;

  @Input()
  public name: string = 'default';

  @Input()
  public zIndex: number = 1000;

  constructor(private layerService: LayerService) { }

  ngOnInit() {
    this.layerService.registerBase(this);
    this.sub = this.layerService.visibleLayers$(this.name).subscribe(layerRefs => {
      this.layerRefs = layerRefs;
    });
  }

  ngOnDestroy() {
    this.layerService.unregisterBase(this);
    this.layerRefs.forEach(layer => layer.close());
    if (this.sub && !this.sub.closed) {
      this.sub.unsubscribe();
    }
  }

  offClick(layerRef: LayerRef) {
    if (this.layerRefs.length > 0 && this.layerRefs[this.layerRefs.length - 1] === layerRef) {
      layerRef.offClick();
    }
  }
}
