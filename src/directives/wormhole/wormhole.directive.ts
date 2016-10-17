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

  dispose() {
    if (this.isConnected) {
      this.disconnect();
    }
  }

  ngOnDestroy() {
    this.dispose();
  }
}
