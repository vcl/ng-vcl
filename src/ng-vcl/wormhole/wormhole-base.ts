import { EmbeddedViewRef, TemplateRef, ComponentRef, Type } from '@angular/core';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { WormholeAttributes, WormholeEvent } from './wormhole';

export interface WormholeAttributes {
  [key: string]: any;
}

export abstract class Wormhole {
  abstract get isConnected(): boolean;

  abstract connect(attrs?: WormholeAttributes, events?: string[]): Observable<WormholeEvent>;
  abstract disconnect();
  abstract setAttributes(attrs: WormholeAttributes);

  abstract get currentIndex(): number;
}

export abstract class TemplateWormholeBase extends Wormhole {
  private cachedAttrs: WormholeAttributes | undefined;
  public viewRef: EmbeddedViewRef<any> | undefined;

  // The wormhole directive needs a reference to the template
  constructor(private templateRef: TemplateRef<any>) {
    super();
    if (!(templateRef instanceof TemplateRef)) {
      throw 'invalid TemplateRef';
    }
  }

  get isConnected() {
    return !!(this.viewRef);
  }

  connect(attrs?: WormholeAttributes, events?: string[], index?: number): Observable<WormholeEvent> {
    if (typeof attrs === 'object' && attrs) {
      this.cachedAttrs = attrs;
    }

    this.disconnect();
    this.viewRef = this.attach(this.templateRef, index);

    this.viewRef.onDestroy(() => {
      this.viewRef = undefined;
    });

    if (this.cachedAttrs && typeof this.cachedAttrs === 'object') {
      Object.assign(this.viewRef.context, this.cachedAttrs);
    }
    this.viewRef.detectChanges();
    return Observable.never();
  }

  disconnect() {
    this.detach();
    this.viewRef = undefined;
  }

  setAttributes(attrs: WormholeAttributes) {
    this.cachedAttrs = attrs;
    if (this.viewRef && attrs && typeof attrs === 'object') {
      Object.assign(this.viewRef.context, attrs);
      this.viewRef.markForCheck();
    }
  }

  protected abstract attach(templateRef: TemplateRef<any>, index?: number): EmbeddedViewRef<any>;
  protected abstract detach();
}

export abstract class ComponentWormholeBase<T> extends Wormhole {

  public compRef: ComponentRef<T> | undefined;
  public get compInstance(): T | undefined {
    return this.compRef && this.compRef.instance;
  }
  private cachedAttrs: any;

  constructor(private componentClass: Type<T>) {
    super();
    if (!(typeof componentClass === 'function' )) {
      throw 'invalid component class';
    }
  }

  get isConnected() {
    return !!this.compRef;
  }

  connect(attrs?: WormholeAttributes, events?: string[], index?: number): Observable<WormholeEvent> {
    if (typeof attrs === 'object' && attrs) {
      this.cachedAttrs = attrs;
    }

    this.disconnect();

    this.compRef = this.attach(this.componentClass, index);

    this.compRef.onDestroy(() => {
      this.compRef = undefined;
    });

    const instance = this.compRef.instance;

    if (this.cachedAttrs && typeof this.cachedAttrs === 'object') {
      Object.assign(instance, this.cachedAttrs);
    }
    this.compRef.changeDetectorRef.detectChanges();

    const events$ = (events || []).map(event => {
      if (!instance[event])
        throw 'Event not found: ' + event;

      return instance[event] && instance[event].map(value => ({type: event, value}));
    });
    return Observable.merge(...events$);
  }

  disconnect() {
    this.detach();
    this.compRef = undefined;
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
        this.compRef.changeDetectorRef['_view'].nodes[0].componentView.state |= (1 << 3);
      }

      this.compRef.changeDetectorRef.markForCheck();
    }
  }

  protected abstract attach(factory: Type<T>, index?: number): ComponentRef<T>;
  protected abstract detach();
}
