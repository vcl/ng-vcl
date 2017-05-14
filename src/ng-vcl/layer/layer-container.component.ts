import { Component, ChangeDetectionStrategy, ViewChild, Input, Injector, ViewContainerRef, ChangeDetectorRef, ReflectiveInjector, Type, ElementRef } from '@angular/core';
import { trigger } from '@angular/animations';
import { Wormhole, ComponentWormhole, TemplateWormhole } from '../wormhole/index';
import { getMetadata } from './../core/index';
import { LayerRef, LayerOptions, LayerAttributes } from './layer-ref';
import { LayerRefDirective } from './layer-ref.directive';

export const COMPONENT_LAYER_ANNOTATION_ID = 'ng-vcl_component_layer';

@Component({
  templateUrl: 'layer-container.component.html',
  animations: [
    trigger('boxState', []),
    trigger('layerState', [])
  ],
  host: {
    '[@boxState]': 'true',
    '[@layerState]': 'true'
  }
})
export class LayerContainerComponent {

  @ViewChild('container')
  container: ElementRef;

  @Input()
  layer: LayerRef;

  @Input()
  set layerAttrs(layerAttrs: LayerAttributes) {
    this._layerAttrs = layerAttrs;
    if (this.wormhole && this.wormhole instanceof ComponentWormhole) {
      this.wormhole.setAttributes(layerAttrs);
    }
  }
  get layerAttrs() {
    return this._layerAttrs;
  }
  _layerAttrs: LayerAttributes;

  @Input()
  zIndex = 1000;

  @Input()
  injector: any;

  @Input()
  visible: boolean = false;

  get state() {
    return this.visible ? 'visible' : 'hidden';
  }

  wormhole: Wormhole | undefined;

  @ViewChild('layerContent', { read: ViewContainerRef })
  layerContentContainer: ViewContainerRef;

  constructor(private cdRef: ChangeDetectorRef) { }

  disconnect() {
    if (this.wormhole) {
      this.wormhole.disconnect();
    }
  }

  connect() {
    if (this.wormhole) {
      this.wormhole.connect();
    }
  }

  ngAfterViewInit() {
    const layer = this.layer;
    if (layer && this.layerContentContainer) {

      // Creates a wormhole out of the LayerRef
      if (this.layer instanceof LayerRefDirective) {
        this.wormhole = new TemplateWormhole(this.layer.templateRef, this.layerContentContainer);
      } else {
        const component =  getMetadata(COMPONENT_LAYER_ANNOTATION_ID, (this.layer as any).constructor ) as Type<any>;

        // The created injector injects this instance as LayerRef
        // It is used in the component instance created within the wormhole
        const layerInjector = ReflectiveInjector.resolveAndCreate([{
          provide: LayerRef,
          useValue: this.layer
        }], this.injector);

        this.wormhole = component ? new ComponentWormhole(component, this.layerContentContainer, layerInjector) : undefined;
      }

      if (!this.wormhole) {
        throw 'invalid layer';
      }

      this.wormhole.connect(this._layerAttrs);
    }
  }

  ngOnDestroy() {
    if (this.wormhole) {
      this.wormhole.disconnect();
    }
  }

  triggerOffClick(event) {
    if (event.target === this.container.nativeElement) {
      this.layer.offClick();
    }
  }
}
