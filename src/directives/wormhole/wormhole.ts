import { ComponentRef, ComponentFactory, EmbeddedViewRef, Directive, TemplateRef, ViewContainerRef, ComponentFactoryResolver, Input, Injector, ChangeDetectorRef } from '@angular/core';
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
    if (this.bridge) {
      this.disconnect();
    }
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
    this.viewRef.onDestroy(() => {
      this.viewRef = null;
    });
  }

  detach() {
    if (this.viewRef) {
      const i = this.bridge.viewContainerRef.indexOf(this.viewRef);
      if (i >= 0) this.bridge.viewContainerRef.remove(i);
    }
  }
}

export class ComponentWormhole<T> extends Wormhole {

  compFactory: ComponentFactory<T>;
  compRef: ComponentRef<T>;
  injector: Injector;

  data: any;

  constructor(private componentClass: ComponentType<T>, initialData: any = {}) {
    super();
    this.data = initialData;
  }

  get viewContainerRef() {
    return this.bridge && this.bridge.viewContainerRef;
  }

  attach() {
    this.compFactory = this.bridge.componentFactoryResolver.resolveComponentFactory<T>(this.componentClass);
    this.injector = this.createInjector();

    this.initializeComponent();
  }
  detach() {
    this.destroyComponent();
  }

  initializeComponent() {
    if (this.compFactory && this.injector && this.viewContainerRef) {
      this.destroyComponent();

      this.compRef = this.viewContainerRef.createComponent( this.compFactory, this.viewContainerRef.length, this.injector);
      this.compRef.onDestroy(() => {
        this.compRef = null;
      });
      if (this.data && typeof this.data === 'object') {
        Object.assign(this.compRef.instance, this.data);
      }
      this.compRef.changeDetectorRef.detectChanges();
    }
  }

  destroyComponent() {
    if (this.compRef) {
      const i = this.bridge.viewContainerRef.indexOf(this.compRef.hostView);
      if (i >= 0) this.bridge.viewContainerRef.remove(i);
    }
  }

  protected createInjector(): Injector {
    return this.bridge.viewContainerRef.parentInjector;
  }

  setData(data?: any) {
    this.data = data;
    this.initializeComponent();
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
