import { ComponentType } from './../../core/interfaces';
import { EmbeddedViewRef, ViewContainerRef, TemplateRef, ComponentFactory, ComponentRef, Injector, ComponentFactoryResolver } from '@angular/core';

export abstract class WormholeRef {
  abstract get isConnected(): boolean;
  abstract connect(index?: number, data?: any);
  abstract disconnect();
  abstract setData(data: any);
  abstract get currentIndex(): number;
}

export class TemplateWormholeRef extends WormholeRef {

  viewRef: EmbeddedViewRef<any>;

  // The wormhole directive needs a reference to the template
  constructor(private viewContainerRef: ViewContainerRef, private templateRef: TemplateRef<any>) {
    super();
  }

  get isConnected() {
    return !!(this.viewRef);
  }

  connect(index?: number) {
    this.disconnect();
    this.viewRef = this.viewContainerRef.createEmbeddedView(this.templateRef, null, typeof index === 'number' ? index :  this.viewContainerRef.length);
    this.viewRef.onDestroy(() => {
      this.viewRef = null;
    });
  }

  disconnect() {
    if (this.isConnected) {
      if (this.currentIndex >= 0) this.viewContainerRef.remove(this.currentIndex);
    }
  }

  setData(data?: any) { }

  get currentIndex() {
    return this.isConnected ? this.viewContainerRef.indexOf(this.viewRef) : -1;
  }
}

export class ComponentWormholeRef<T> extends WormholeRef {

  compFactory: ComponentFactory<T>;
  compRef: ComponentRef<T>;
  injector: Injector;
  cachedData: any = null;

  constructor(private viewContainerRef: ViewContainerRef, private componentClass: ComponentType<T>) {
    super();
  }

  protected createInjector(): Injector {
    return this.viewContainerRef.parentInjector;
  }

  get isConnected() {
    return !!this.compRef;
  }

  connect(index?: number, data?: any) {
    if (data !== undefined) {
      this.cachedData = data;
    }

    if (!this.injector) {
      this.injector = this.createInjector();
    }
    if (!this.compFactory) {
      const componentFactoryResolver = this.injector.get(ComponentFactoryResolver) as ComponentFactoryResolver;
      this.compFactory = componentFactoryResolver.resolveComponentFactory<T>(this.componentClass);
    }

    this.disconnect();

    this.compRef = this.viewContainerRef.createComponent(this.compFactory, typeof index === 'number' ? index :  this.viewContainerRef.length, this.injector);
    this.compRef.onDestroy(() => {
      this.compRef = null;
    });

    if (this.cachedData && typeof this.cachedData === 'object') {
      Object.assign(this.compRef.instance, this.cachedData);
    }
    this.compRef.changeDetectorRef.detectChanges();
  }

  disconnect() {
    if (this.isConnected) {
      this.compRef.destroy();
      // const i = this.viewContainerRef.indexOf(this.compRef.hostView);
      // // if (i >= 0) this.viewContainerRef.remove(i);
    }
  }

  setData(data?: any) {
    this.cachedData = data;
    if (this.isConnected && data && typeof data === 'object') {
      // TODO: Change detection is not triggering
      // this.compRef.changeDetectorRef.markForCheck();
      // this.compRef.changeDetectorRef.detectChanges();

      // Workaround
      // if call markForCheck on component instance or reinitialize component
      if ((this.compRef.instance as any).markForCheck ) {
        Object.assign(this.compRef.instance, data);
        (this.compRef.instance as any).markForCheck();
      } else {
        const index = this.viewContainerRef.indexOf(this.compRef.hostView);
        this.connect(index, data);
      }
    }
  }

  get currentIndex() {
    return this.isConnected ? this.viewContainerRef.indexOf(this.compRef.hostView) : -1;
  }
}
