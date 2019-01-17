import { TemplateRef, ViewContainerRef, EmbeddedViewRef, ComponentFactory, Type, ComponentRef, ComponentFactoryResolver, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { Wormhole, ComponentWormholeBase, TemplateWormholeBase } from './wormhole-base';

export interface WormholeAttributes {
  [key: string]: any;
}

export interface WormholeEvent {
  type: string;
  value: any;
}

export class TemplateWormhole extends TemplateWormholeBase {

  // The wormhole directive needs a reference to the template
  constructor(templateRef: TemplateRef<any>, private viewContainerRef: ViewContainerRef) {
    super(templateRef);
    if (!viewContainerRef) {
      throw new Error('missing ViewContainerRef');
    }
  }

  attach(templateRef: TemplateRef<any>, index?: number): EmbeddedViewRef<any> {
    return this.viewContainerRef.createEmbeddedView(templateRef, null, typeof index === 'number' ? index :  this.viewContainerRef.length);
  }

  detach() {
    if (this.isConnected && this.currentIndex >= 0) {
      this.viewContainerRef.remove(this.currentIndex);
    }
  }

  get currentIndex() {
    return this.viewRef ? this.viewContainerRef.indexOf(this.viewRef) : -1;
  }
}

export class ComponentWormhole<T> extends ComponentWormholeBase<T> {

  private compFactory: ComponentFactory<T> | undefined;

  constructor(componentClass: Type<T>, private viewContainerRef: ViewContainerRef, private injector?: Injector) {
    super(componentClass);
    if (!viewContainerRef) {
      throw new Error('missing ViewContainerRef');
    }
  }

  attach(componentClass: Type<T>, index?: number): ComponentRef<T> {
    const injector = this.injector || this.viewContainerRef.parentInjector;
    if (!this.compFactory) {
      const componentFactoryResolver = injector.get(ComponentFactoryResolver) as ComponentFactoryResolver;
      this.compFactory = componentFactoryResolver.resolveComponentFactory<T>(componentClass);
    }

    return this.viewContainerRef.createComponent(this.compFactory, typeof index === 'number' ? index :  this.viewContainerRef.length, injector);
  }

  detach() {
    if (this.compRef) {
      this.compRef.destroy();
    }
  }

  get currentIndex() {
    return this.compRef ? this.viewContainerRef.indexOf(this.compRef.hostView) : -1;
  }
}
