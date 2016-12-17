import { LayerData } from './layer.directive';
import { Subject } from 'rxjs/Subject';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';
import { Component, Input, Output, EventEmitter, Directive, TemplateRef, ElementRef, trigger } from '@angular/core';
import { TemplateWormhole } from './../../directives/wormhole/wormhole.module';
import { LayerService } from './layer.service';
import { LayerDirectiveReference } from './layer.references';

export interface LayerData { [key: string]: any; }

@Directive({
  selector: '[vcl-layer]',
  exportAs: 'layer',
})
export class LayerDirective extends TemplateWormhole {

  @Input()
  public modal: boolean = true;

  @Input()
  public closeOnOffClick: boolean = true;

  @Input()
  public base: string = 'default';

  public layerRef: LayerDirectiveReference;

  constructor(public templateRef: TemplateRef<any>, private elementRef: ElementRef, private layerService: LayerService) {
    super(templateRef);
  }

  ngOnInit() {
    this.layerRef = this.layerService.registerDirective(this, {
      base: this.base,
      closeOnOffClick: !!this.closeOnOffClick,
      modal: !!this.modal
    });
  }

  ngOnDestroy() {
    this.layerService.unregisterDirective(this);
  }

  open(data?: LayerData): Observable<any> {
    return this.layerRef.open(data);
  }

  send(result: any) {
    this.layerRef.send(result);
  }

  close(result?: any) {
    this.layerRef.close();
  }
}
