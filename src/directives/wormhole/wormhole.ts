import { ComponentRef, ComponentFactory, EmbeddedViewRef, Directive, TemplateRef, ViewContainerRef, ComponentFactoryResolver, Input, Injector, ChangeDetectorRef } from '@angular/core';
import { ComponentType } from './../../core/index';
import { WormholeRef, ComponentWormholeRef, TemplateWormholeRef } from './wormhole.ref';

export abstract class Wormhole {
  abstract create(viewContainerRef: ViewContainerRef): WormholeRef;
  connect(viewContainerRef: ViewContainerRef, data?: any, index?: number ): WormholeRef {
    const wormholeRef = this.create(viewContainerRef);
    wormholeRef.connect(index, data);
    return wormholeRef;
  }}

export class ComponentWormhole<T> extends Wormhole {
  constructor(protected component: ComponentType<T>) { super(); }

  create(viewContainerRef: ViewContainerRef) {
    if (!viewContainerRef) {
      throw 'viewContainerRef required';
    }
    return new ComponentWormholeRef<T>(viewContainerRef, this.component);
  }
}

@Directive({
  selector: '[wormhole]',
  exportAs: 'wormhole',
})
export class TemplateWormhole extends Wormhole {

  constructor(public templateRef: TemplateRef<any>) { super(); }

  create(viewContainerRef: ViewContainerRef) {
    if (!viewContainerRef) {
      throw 'viewContainerRef required';
    }
    return new TemplateWormholeRef(viewContainerRef, this.templateRef);
  }
}
