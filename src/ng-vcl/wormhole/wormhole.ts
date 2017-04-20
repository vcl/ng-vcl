import { EmbeddedViewRef, ApplicationRef, ViewContainerRef, TemplateRef, ComponentFactory, ComponentRef, Injector, ComponentFactoryResolver, Type } from '@angular/core';
import 'rxjs/add/observable/never';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { WormholeAttributes } from './wormhole';

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

export abstract class Wormhole {
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
  constructor(private templateRef: TemplateRef<any>, private viewContainerRef: ViewContainerRef) {
    super();
    if (!viewContainerRef) {
      throw 'missing ViewContainerRef';
    }
    if (!(templateRef instanceof TemplateRef)) {
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
  private cachedAttrs: any = null;
  compRef: ComponentRef<T> | null;

  constructor(private componentClass: Type<T>, private viewContainerRef: ViewContainerRef, private injector?: Injector) {
    super();
    if (!viewContainerRef) {
      throw 'missing ViewContainerRef';
    }
    if (!(typeof componentClass === 'function' )) {
      throw 'invalid component class';
    }
  }

  get isConnected() {
    return !!this.compRef;
  }

  connect(opts: WormholeOptions = {}): Observable<WormholeEvent> {
    if (typeof opts.attrs === 'object' && opts.attrs) {
      this.cachedAttrs = opts.attrs;
    }

    const index = typeof opts.index === 'number' ? opts.index : null;

    const injector = this.injector || this.viewContainerRef.parentInjector;

    if (!this.compFactory) {
      const componentFactoryResolver = injector.get(ComponentFactoryResolver) as ComponentFactoryResolver;
      this.compFactory = componentFactoryResolver.resolveComponentFactory<T>(this.componentClass);
    }

    this.disconnect();

    this.compRef = this.viewContainerRef.createComponent(this.compFactory, typeof index === 'number' ? index :  this.viewContainerRef.length, injector);

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
      this.compRef = null;
    }
  }

  setAttributes(attrs: WormholeAttributes) {
    this.cachedAttrs = attrs;
    if (this.compRef && attrs && typeof attrs === 'object') {
      Object.assign(this.compRef.instance, attrs);
      // TODO: Change detection is not triggering when changedetection is set to onPush
      // Workaround for ng 4
      // https://github.com/angular/angular/issues/12313
      const cdRef = this.compRef.changeDetectorRef;
      if (cdRef && cdRef['_view'] && cdRef['_view'].nodes[0] && cdRef['_view'].nodes[0].componentView) {
        this.compRef.changeDetectorRef['_view'].nodes[0].componentView.state |= (1 << 1);
      }

      this.compRef.changeDetectorRef.markForCheck();
    }
  }

  get currentIndex() {
    return this.compRef ? this.viewContainerRef.indexOf(this.compRef.hostView) : -1;
  }
}

export class DomComponentWormhole<T> extends Wormhole {

  private compFactory: ComponentFactory<T>;
  private cachedAttrs: any = undefined;

  compRef: ComponentRef<T> | null;
  compRefRootNode: HTMLElement;

  constructor(private componentClass: Type<T>, private appRef: ApplicationRef, private node?: HTMLElement, private injector?: Injector) {
    super();
    if (!(typeof componentClass === 'function' )) {
      throw 'invalid component class';
    }
  }

  get rootComponentRef(): ComponentRef<any> {
    const rootComponent = this.appRef.components && this.appRef.components.length && this.appRef.components[0];
    if (!rootComponent) {
      throw 'Application root component not found';
    }
    return rootComponent;
  }

  get componentNode() {
    if (this.node) {
      return this.node;
    }
    const rootCompRef = this.rootComponentRef;

    const node = this.getComponentRootNode(rootCompRef);
    if (!node) {
      throw 'root node not found';
    }
    return node;
  }

  get isConnected() {
    return !!this.compRef;
  }

  connect(opts: WormholeOptions = {}): Observable<WormholeEvent> {

    if (typeof opts.attrs === 'object' && opts.attrs) {
      this.cachedAttrs = opts.attrs;
    }

    const index = typeof opts.index === 'number' ? opts.index : null;

    const injector = this.injector || this.rootComponentRef.injector;

    if (!this.compFactory) {
      const componentFactoryResolver = injector.get(ComponentFactoryResolver) as ComponentFactoryResolver;
      this.compFactory = componentFactoryResolver.resolveComponentFactory<T>(this.componentClass);
    }

    this.compRef = this.compFactory.create(injector);
    this.appRef.attachView(this.compRef.hostView);

    const compRefRootNode = this.getComponentRootNode(this.compRef);


    const node = this.componentNode;
    if (!compRefRootNode) {
      throw 'component root node not found';
    }

    node.appendChild(compRefRootNode);

    this.compRef.onDestroy(() => {
      if (this.compRef) {
        this.appRef.detachView(this.compRef.hostView);
      }
      if (compRefRootNode.parentNode != null) {
        compRefRootNode.parentNode.removeChild(compRefRootNode);
      }
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
      this.compRef = null;
    }
  }

  setAttributes(attrs: WormholeAttributes) {
    this.cachedAttrs = attrs;
    if (this.compRef && attrs && typeof attrs === 'object') {
      Object.assign(this.compRef.instance, attrs);
      // TODO: Change detection is not triggering when changedetection is set to onPush
      // Workaround for ng 4
      // https://github.com/angular/angular/issues/12313
      const cdRef = this.compRef.changeDetectorRef;
      if (cdRef && cdRef['_view'] && cdRef['_view'].nodes[0] && cdRef['_view'].nodes[0].componentView) {
        this.compRef.changeDetectorRef['_view'].nodes[0].componentView.state |= (1 << 1);
      }

      this.compRef.changeDetectorRef.markForCheck();
    }
  }

  get currentIndex() {
    return this.compRef ? 0 : -1;
  }

  private getComponentRootNode(componentRef: ComponentRef<any>) {
    const rootNodes = (componentRef.hostView as EmbeddedViewRef<any>).rootNodes;
    return (rootNodes && rootNodes.length && rootNodes[0] as HTMLElement) || undefined;
  }
}
