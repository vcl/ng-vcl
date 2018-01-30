import { ChangeDetectorRef, Component, ElementRef, Inject, InjectionToken, Input, Optional, ReflectiveInjector, TemplateRef, Type, ViewChild, ViewContainerRef } from '@angular/core';
import { AnimationBuilder, AnimationFactory, AnimationMetadata } from '@angular/animations';
import { Subscription } from 'rxjs/Subscription';
import { ComponentWormhole, TemplateWormhole, Wormhole } from '../wormhole/index';
import { LayerAttributes, LayerRef } from './layer-ref';

export const COMPONENT_LAYER_ANNOTATION_ID = 'ng-vcl_component_layer';
export const LAYER_ANIMATIONS = new InjectionToken('@ng-vcl/ng-vcl#layer_animations');

export interface LayerAnimationConfig {
  boxEnter?: AnimationMetadata | AnimationMetadata[];
  boxLeave?: AnimationMetadata | AnimationMetadata[];
  coverEnter?: AnimationMetadata | AnimationMetadata[];
  coverLeave?: AnimationMetadata | AnimationMetadata[];
}

export interface LayerMeta {
  component: Type<any>;
  opts: LayerOptions;
}

export interface LayerOptions {
  modal?: boolean;
  transparent?: boolean;
  fill?: boolean;
  stickToBottom?: boolean;
  gutterPadding?: boolean;
  customClass?: string;
  offClick?: { (layerRef: LayerRef): void };
  attrs?: LayerAttributes;
  noLayerBox?: boolean;
  events?: string[];
}

@Component({
  templateUrl: 'layer-container.component.html',
})
export class LayerContainerComponent {

  @ViewChild('container')
  container: ElementRef;

  @ViewChild('cover')
  cover: ElementRef;

  @ViewChild('box')
  box: ElementRef;

  @Input()
  layerRef: LayerRef;

  @Input()
  layerOpts: LayerOptions;

  @Input()
  layerTarget: TemplateRef<any> | Type<any>;

  @Input()
  layerInjector: any;

  @Input()
  set layerAttrs(layerAttrs: LayerAttributes) {
    this._layerAttrs = layerAttrs;
    if (this.wormhole && this.wormhole instanceof ComponentWormhole) {
      this.wormhole.setAttributes(this.mergedLayerAttrs);
    }
  }
  _layerAttrs: LayerAttributes;

  get mergedLayerAttrs() {
    return this.layerOpts.attrs ? Object.assign({}, this.layerOpts.attrs, this._layerAttrs) : this._layerAttrs;
  }

  @Input()
  zIndex = 1000;

  wormhole: Wormhole | undefined;
  eventSub?: Subscription;

  @ViewChild('layerContent', { read: ViewContainerRef })
  layerContentContainer: ViewContainerRef;

  boxEnterAnimationFactory?: AnimationFactory | undefined;
  boxLeaveAnimationFactory?: AnimationFactory | undefined;
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
    const layer = this.layerRef;
    if (layer && this.layerContentContainer) {
      // Creates a wormhole out of the LayerRef
      if (this.layerTarget instanceof TemplateRef) {
        this.wormhole = new TemplateWormhole(this.layerTarget, this.layerContentContainer);
      } else {

        // The created injector injects this instance as LayerRef
        // It is used in the component instance created within the wormhole
        const layerInjector = ReflectiveInjector.resolveAndCreate([{
          provide: LayerRef,
          useValue: this.layerRef
        }], this.layerInjector);

        this.wormhole = new ComponentWormhole(this.layerTarget, this.layerContentContainer, layerInjector);
      }

      if (!this.wormhole) {
        throw 'invalid layer';
      }

      this.eventSub = this.wormhole.connect(this.mergedLayerAttrs, this.layerOpts.events).subscribe(event => {
        this.layerRef.event(event);
      });
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
    this.wormhole && this.wormhole.disconnect();
    this.eventSub && this.eventSub.unsubscribe();
  }

  triggerOffClick(event) {
    if (event.target === this.container.nativeElement) {
      if (this.layerOpts.offClick) {
        this.layerOpts.offClick(this.layerRef);
      } else {
        if (!this.layerOpts.modal) {
          this.layerRef.close();
        }
      }
    }
  }
}
