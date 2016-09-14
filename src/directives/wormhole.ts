import { TemplateRef, ViewContainerRef, Directive, NgModule, Input } from '@angular/core';

@Directive({
  selector: '[wormhole]',
  exportAs: 'wormhole',
})
export class Wormhole {
  private connector: WormholeConnector;

  constructor(private templateRef: TemplateRef<any>) { }

  get isConnected(): boolean {
    return !!this.connector;
  }

  disconnect() {
    this.connector = null;
  }
  connect(wormhole: WormholeConnector) {
    this.connector = wormhole;
  }

  getTemplateRef() {
    return this.templateRef;
  }
}

@Directive({
  selector: '[wormholeConnector]'
})
export class WormholeConnector {
  private _wormhole: Wormhole;
  private connectedWormhole: Wormhole;

  constructor(private viewContainerRef: ViewContainerRef) {}

  get isConnected() {
    return !!this.connectedWormhole;
  }

  get wormhole(): Wormhole {
    return this._wormhole;
  }

  @Input('wormholeConnector')
  set wormhole(wormhole: Wormhole) {
    if (this.isConnected) {
      this.disconnect();
    }

    if (wormhole) {
      this.connect(wormhole);
      this._wormhole = wormhole;
    }
  }

  connect(wormhole: Wormhole) {
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

@NgModule({
  exports: [Wormhole, WormholeConnector],
  declarations: [Wormhole, WormholeConnector]
})
export class VCLWormholeModule { }
