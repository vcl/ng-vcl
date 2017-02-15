import { EmbeddedViewRef, ViewContainerRef, TemplateRef, ComponentFactory, ComponentRef, Injector, ComponentFactoryResolver } from '@angular/core';
import 'rxjs/add/observable/never';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { WormholeAttributes } from './wormhole';
import { ComponentType } from './../core/index';

export interface WormholeAttributes {
  [key: string]: any;
}

export interface WormholeEvent {
  event: string;
  value: any;
}

export interface WormholeOptions {
  index?: number;
  attrs?: WormholeAttributes;
  events?: string[];
}

export abstract class WormholeRef {
  abstract get isConnected(): boolean;
  abstract disconnect();
  abstract setAttributes(attrs: WormholeAttributes);
}

export abstract class Wormhole extends WormholeRef {
  abstract get isConnected(): boolean;

  abstract connect(opts?: WormholeOptions): Observable<WormholeEvent>;
  abstract disconnect();
  abstract setAttributes(attrs: WormholeAttributes);

  abstract get currentIndex(): number;
}

export class TemplateWormhole extends Wormhole {
  private cachedAttrs: any = null;
  viewRef: EmbeddedViewRef<any> | null;

  // The wormhole directive needs a reference to the template
  constructor(private viewContainerRef: ViewContainerRef, private templateRef: TemplateRef<any>) {
    super();
    if (!viewContainerRef) {
      throw 'missing ViewContainerRef';
    } else if (!(templateRef instanceof TemplateRef)) {
      throw 'invalid TemplateRef';
    }
  }

  get isConnected() {
    return !!(this.viewRef);
  }

  connect(opts: WormholeOptions = {}): Observable<WormholeEvent> {
    if (typeof opts.attrs === 'object' && opts.attrs) {
      this.cachedAttrs = opts.attrs;
    }

    const index = typeof opts.index === 'number' ? opts.index : null;

    this.disconnect();
    this.viewRef = this.viewContainerRef.createEmbeddedView(this.templateRef, null, typeof index === 'number' ? index :  this.viewContainerRef.length);

    this.viewRef.onDestroy(() => {
      this.viewRef = null;
    });
    if (this.cachedAttrs && typeof this.cachedAttrs === 'object') {
      Object.assign(this.viewRef.context, this.cachedAttrs);
    }
    this.viewRef.detectChanges();
    return Observable.never();
  }

  disconnect() {
    if (this.isConnected && this.currentIndex >= 0) {
      this.viewContainerRef.remove(this.currentIndex);
    }
  }

  setAttributes(attrs: WormholeAttributes) {
    this.cachedAttrs = attrs;
    if (this.viewRef && attrs && typeof attrs === 'object') {
      Object.assign(this.viewRef.context, attrs);
      this.viewRef.markForCheck();
    }
  }

  get currentIndex() {
    return this.viewRef ? this.viewContainerRef.indexOf(this.viewRef) : -1;
  }
}

export class ComponentWormhole<T> extends Wormhole {

  private compFactory: ComponentFactory<T>;
  private injector: Injector;
  private cachedAttrs: any = null;
  compRef: ComponentRef<T> | null;

  constructor(private viewContainerRef: ViewContainerRef, private componentClass: ComponentType<T>) {
    super();
    if (!viewContainerRef) {
      throw 'missing ViewContainerRef';
    } else if (!(typeof componentClass === 'function' )) {
      throw 'invalid component class';
    }
  }

  protected createInjector(): Injector {
    return this.viewContainerRef.parentInjector;
  }

  get isConnected() {
    return !!this.compRef;
  }

  connect(opts: WormholeOptions = {}): Observable<WormholeEvent> {
    if (typeof opts.attrs === 'object' && opts.attrs) {
      this.cachedAttrs = opts.attrs;
    }

    const index = typeof opts.index === 'number' ? opts.index : null;

    if (!this.injector) {
      this.injector = this.createInjector();
    }
    if (!this.compFactory) {
      const componentFactoryResolver = this.injector.get(ComponentFactoryResolver) as ComponentFactoryResolver;
      this.compFactory = componentFactoryResolver.resolveComponentFactory<T>(this.componentClass);
    }

    this.disconnect();

    this.compRef = this.viewContainerRef.createComponent(this.compFactory, typeof index === 'number' ? index :  this.viewContainerRef.length, this.injector);

    let subs = [];

    this.compRef.onDestroy(() => {
      this.compRef = null;
    });

    const instance = this.compRef.instance;

    if (this.cachedAttrs && typeof this.cachedAttrs === 'object') {
      Object.assign(instance, this.cachedAttrs);
    }
    this.compRef.changeDetectorRef.detectChanges();

    const events = opts.events || [];
    const events$ = events.map(event => {
      if (!instance[event])
        throw 'Event not found: ' + event;

      return instance[event] && instance[event].map(value => ({event, value}));
    });
    return Observable.merge(...events$);
  }

  disconnect() {
    if (this.compRef) {
      this.compRef.destroy();
      // const i = this.viewContainerRef.indexOf(this.compRef.hostView);
      // // if (i >= 0) this.viewContainerRef.remove(i);
    }
  }

  setAttributes(attrs: WormholeAttributes) {
    this.cachedAttrs = attrs;
    if (this.compRef && attrs && typeof attrs === 'object') {
      Object.assign(this.compRef.instance, attrs);
      this.compRef.changeDetectorRef.markForCheck();
      // TODO: Change detection is not triggering when changedetection is set to onPush
      // Workaround
      // https://github.com/angular/angular/issues/12313
      if (this.compRef.changeDetectorRef['internalView'] && this.compRef.changeDetectorRef['internalView']['compView_0']) {
        this.compRef.changeDetectorRef['internalView']['compView_0'].markAsCheckOnce();
      }
    }
  }

  get currentIndex() {
    return this.compRef ? this.viewContainerRef.indexOf(this.compRef.hostView) : -1;
  }
}


export function createWormhole<T>(targetViewContainerRef: ViewContainerRef, component: ComponentType<T>): Wormhole;
export function createWormhole<T>(targetViewContainerRef: ViewContainerRef, templateRef: TemplateRef<T>): Wormhole;
export function createWormhole<T>(targetViewContainerRef: ViewContainerRef, arg2: ComponentType<T> | TemplateRef<T>): Wormhole {
  if (typeof arg2 === 'function') {
    return new ComponentWormhole(targetViewContainerRef, arg2);
  } else if (arg2 instanceof TemplateRef) {
    return new TemplateWormhole(targetViewContainerRef, arg2);
  } else {
    throw 'Parameter must be component class or templateRef';
  }
}

export class WormholeManager {
  constructor(protected viewContainerRef: ViewContainerRef) { }

  connect<T>(component: ComponentType<T>, opts?: WormholeOptions): WormholeRef;
  connect<T>(templateRef: TemplateRef<T>, opts?: WormholeOptions): WormholeRef;
  connect(target, opts?: WormholeOptions): WormholeRef {
    const wormhole = createWormhole(this.viewContainerRef, target);
    wormhole.connect(opts);
    return wormhole;
  }
}
