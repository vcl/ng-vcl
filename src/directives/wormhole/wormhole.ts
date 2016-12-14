import { ComponentRef, EmbeddedViewRef, Directive, TemplateRef, ViewContainerRef, ComponentFactoryResolver, Input } from '@angular/core';
import { ComponentType } from './../../core/index';

export abstract class Wormhole {
  protected bridge: ConnectWormholeDirective;

  get isConnected(): boolean {
    return !!this.bridge;
  }

  disconnect() {
    this.detach();
    this.bridge = null;
  }
  connect(bridge: ConnectWormholeDirective) {
    this.bridge = bridge;
    this.attach();
  }

  abstract attach();
  abstract detach();

}

@Directive({
  selector: '[wormhole]',
  exportAs: 'wormhole',
})
export class TemplateWormhole extends Wormhole {
  viewRef: EmbeddedViewRef<any>;
  // The wormhole directive needs a reference to the template
  constructor(public templateRef: TemplateRef<any>) {
    super();
  }

  attach() {
    this.viewRef = this.bridge.viewContainerRef.createEmbeddedView(this.templateRef);
  }
  detach() {
    if (this.viewRef) {
      const i = this.bridge.viewContainerRef.indexOf(this.viewRef);
      if (i >= 0) this.bridge.viewContainerRef.remove(i);
    }
  }
}

export class ComponentWormhole<T> extends Wormhole {
  compRef: ComponentRef<T>;

  constructor(private componentClass: ComponentType<T>) {
    super();
  }

  attach() {
    const viewContainerRef = this.bridge.viewContainerRef;
    let componentFactory = this.bridge.componentFactoryResolver.resolveComponentFactory<T>(this.componentClass);
    this.compRef = viewContainerRef.createComponent( componentFactory, viewContainerRef.length, viewContainerRef.parentInjector);
  }
  detach() {
    if (this.compRef) {
      const i = this.bridge.viewContainerRef.indexOf(this.compRef.hostView);
      if (i >= 0) this.bridge.viewContainerRef.remove(i);
      this.compRef.destroy();
    }
    this.compRef = null;
  }
}

@Directive({
  selector: '[connectWormhole]'
})
export class ConnectWormholeDirective {
  private wormhole: Wormhole;
  private connectedWormhole: Wormhole;

  constructor(public viewContainerRef: ViewContainerRef, public componentFactoryResolver: ComponentFactoryResolver ) {}

  get isConnected() {
    return !!this.connectedWormhole;
  }

  // TODO: workaround. Does not disconnect the view when destroying the element when true
  // ngOnDestroy is called before the animations are fully traversed. This would remove the wormhole's ContentChild
  // before its host is removed from the DOM
  @Input('wormholeIndisposable')
  indisposable: boolean = false;

  @Input('connectWormhole')
  set connectWormhole(wormhole: Wormhole) {
    if (this.isConnected) {
      this.disconnect();
    }

    if (wormhole) {
      this.connect(wormhole);
      this.wormhole = wormhole;
    }
  }

  connect(wormhole: Wormhole) {
    this.connectedWormhole = wormhole;
    wormhole.connect(this);
  }

  disconnect() {
    if (this.connectedWormhole) {
      this.connectedWormhole.disconnect();
    }
  }

  ngOnDestroy() {
    if (this.isConnected && !this.indisposable) {
      this.disconnect();
    }
  }
}
