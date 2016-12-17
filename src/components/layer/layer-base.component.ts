import { Subject } from 'rxjs/Subject';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';
import { Component, Input, Output, EventEmitter, Directive, TemplateRef, ElementRef, trigger, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { TemplateWormhole } from './../../directives/wormhole/wormhole';
import { LayerService } from './layer.service';
import { LayerReference } from './layer.references';

@Component({
  selector: 'vcl-layer-base',
  templateUrl: 'layer-base.component.html',
  // changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('boxState', []),
    trigger('layerState', [])
  ]
})
export class LayerBaseComponent {

  layerRefs: LayerReference[];
  sub: Subscription;

  @Input()
  public name: string = 'default';

  @Input()
  public zIndex: number = 1000;

  constructor(private layerService: LayerService, private cdRef: ChangeDetectorRef) { }

  ngOnInit() {
    this.layerService.registerBase(this);
    this.sub = this.layerService.getVisibleLayersFor$(this.name).subscribe(layerRefs => {
      this.layerRefs = layerRefs;
      this.cdRef.detectChanges();
    });
  }

  ngOnDestroy() {
    this.layerService.unregisterBase(this);
    this.layerRefs.forEach(layer => layer.close());
    if (this.sub && !this.sub.closed) {
      this.sub.unsubscribe();
    }
  }

  offClick(layerRef: LayerReference) {
    if (!layerRef.modal && layerRef.closeOnOffClick) {
      layerRef.close();
    }
  }
}
