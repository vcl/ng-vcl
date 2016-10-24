import { TemplateRef, ViewContainerRef, Directive, Input } from '@angular/core';

// The wormhole Directive is just a reference to a template
@Directive({
  selector: '[generateWormhole]',
  exportAs: 'wormhole',
})
export class WormholeGenerator {
  private source: Wormhole;

  constructor(protected templateRef: TemplateRef<any>) { }

  get isConnected(): boolean {
    return !!this.source;
  }

  disconnect() {
    this.source = null;
  }
  connect(wormhole: Wormhole) {
    this.source = wormhole;
  }

  getTemplateRef() {
    return this.templateRef;
  }
}

@Directive({
  selector: '[wormhole]'
})
export class Wormhole {
  private _wormhole: WormholeGenerator;
  private connectedWormhole: WormholeGenerator;

  constructor(private viewContainerRef: ViewContainerRef) {}

  get isConnected() {
    return !!this.connectedWormhole;
  }

  get wormhole(): WormholeGenerator {
    return this._wormhole;
  }

  // TODO: workaround. Does not disconnect the view when destroying the element when true
  // ngOnDestroy is called before the animations are fully traversed. This would remove the wormhole's ContentChild
  // before it's host is removed from the DOM
  @Input('wormhole-indisposable')
  indisposable: boolean = false;

  @Input('wormhole')
  set wormhole(wormhole: WormholeGenerator) {
    if (this.isConnected) {
      this.disconnect();
    }

    if (wormhole) {
      this.connect(wormhole);
      this._wormhole = wormhole;
    }
  }

  connect(wormhole: WormholeGenerator) {
    this.connectedWormhole = wormhole;
    wormhole.connect(this);
    const templateRef = wormhole.getTemplateRef();
    this.viewContainerRef.createEmbeddedView(templateRef);
  }

  disconnect() {
    if (this.connectedWormhole) {
      this.connectedWormhole.disconnect();
    }

    this.connectedWormhole = null;
    this.viewContainerRef.clear();
  }

  ngOnDestroy() {
    if (this.isConnected && !this.indisposable) {
      this.disconnect();
    }
  }
}
