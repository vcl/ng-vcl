import { Component, ChangeDetectionStrategy, ViewChild, Input, Injector, ViewContainerRef, ChangeDetectorRef, ReflectiveInjector, Type, ElementRef, Optional, OpaqueToken, Inject } from '@angular/core';
import { trigger, AnimationFactory, AnimationBuilder, AnimationMetadata } from '@angular/animations';

import { Wormhole, ComponentWormhole, TemplateWormhole } from '../wormhole/index';
import { getMetadata } from './../core/index';
import { LayerRef, LayerOptions, LayerAttributes } from './layer-ref';
import { LayerRefDirective } from './layer-ref.directive';
import { Observable } from "rxjs/Observable";

export const COMPONENT_LAYER_ANNOTATION_ID = 'ng-vcl_component_layer';
export const LAYER_ANIMATIONS = new OpaqueToken('@ng-vcl/ng-vcl#layer_animations');

export interface LayerAnimationConfig {
  boxEnter?: AnimationMetadata | AnimationMetadata[];
  boxLeave?: AnimationMetadata | AnimationMetadata[];
  coverEnter?: AnimationMetadata | AnimationMetadata[];
  coverLeave?: AnimationMetadata | AnimationMetadata[];
}

@Component({
  templateUrl: 'layer-container.component.html'
})
export class LayerContainerComponent {

  @ViewChild('container')
  container: ElementRef;

  @ViewChild('cover')
  cover: ElementRef;

  @ViewChild('box')
  box: ElementRef;

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

  boxEnterAnimationFactory: AnimationFactory | undefined;
  boxLeaveAnimationFactory: AnimationFactory | undefined;
  coverEnterAnimationFactory: AnimationFactory | undefined;
  coverLeaveAnimationFactory: AnimationFactory | undefined;

  constructor(
    private cdRef: ChangeDetectorRef,
    builder: AnimationBuilder,
    elementRef: ElementRef,
    @Optional() @Inject(LAYER_ANIMATIONS) animations: LayerAnimationConfig,
    ) {
    if (animations && animations.boxEnter) {
      this.boxEnterAnimationFactory = builder.build(animations.boxEnter);
    }
    if (animations && animations.boxLeave) {
      this.boxLeaveAnimationFactory = builder.build(animations.boxLeave);
    }
    if (animations && animations.coverEnter) {
      this.coverEnterAnimationFactory = builder.build(animations.coverEnter);
    }
    if (animations && animations.coverLeave) {
      this.coverLeaveAnimationFactory = builder.build(animations.coverLeave);
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
      if (this.boxEnterAnimationFactory && this.box) {
        this.boxEnterAnimationFactory.create(this.box.nativeElement).play();
      }
      if (this.coverEnterAnimationFactory && this.cover) {
        const player = this.coverEnterAnimationFactory.create(this.cover.nativeElement);
        player.onDone(() => player.destroy());
        player.play();
      }
    }
  }

  animateLeave() {
    return Promise.all([
      new Promise(resolve => {
        if (this.boxLeaveAnimationFactory && this.box) {
          const player = this.boxLeaveAnimationFactory.create(this.box.nativeElement);
          player.onDone(resolve);
          player.play();
        } else {
          resolve();
        }
      }),
      new Promise(resolve => {
        if (this.coverLeaveAnimationFactory && this.cover) {
          const player = this.coverLeaveAnimationFactory.create(this.cover.nativeElement);
          player.onDone(() => {
            player.destroy();
            resolve();
          });
          player.play();
        } else {
          resolve();
        }
      }),
    ]);
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
