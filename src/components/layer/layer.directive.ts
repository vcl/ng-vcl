import { Subject } from 'rxjs/Subject';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';
import { Component, Input, Output, EventEmitter, Directive, TemplateRef, ElementRef, trigger, ChangeDetectorRef } from '@angular/core';
import { TemplateWormhole } from './../../directives/wormhole/wormhole.module';
import { LayerService } from './layer.service';
import { LayerRef, LayerData } from './layer.references';

export interface LayerData { [key: string]: any; }

@Directive({
  selector: '[vcl-layer]',
  exportAs: 'layer',
})
export class LayerDirective extends LayerRef {

  @Input()
  public modal: boolean = true;

  @Input()
  public offClickClose: boolean = true;

  @Input()
  public base: string = 'default';

  constructor(public templateRef: TemplateRef<any>, private layerService: LayerService, private cdRef: ChangeDetectorRef) {
    super(templateRef);
  }

  ngOnInit() {
    this.layerService.register(this);
  }

  ngOnDestroy() {
    this.layerService.unregister(this);
  }

  createWormhole() {
    return new TemplateWormhole(this.templateRef);
  }

  setData(data?: LayerData) {
    if (data && typeof data === 'object') {
      Object.assign(this, data);
      this.cdRef.detectChanges();
    }
  }
}
