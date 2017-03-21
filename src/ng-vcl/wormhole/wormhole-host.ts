import { ViewContainerRef, Type, TemplateRef } from "@angular/core";
import { ComponentWormhole, TemplateWormhole, Wormhole, WormholeOptions } from "./wormhole";

export class WormholeHost {

  constructor(private host: ViewContainerRef) {
    if (!host) {
      throw 'missing host ViewContainerRef';
    }
   }

  private _wormholes: Wormhole[] = [];

  get wormholes() {
    return this._wormholes.filter(w => w.isConnected).length;
  }

  get connectedWormholes() {
    return this._wormholes.filter(w => w.isConnected).length;
  }

  getWormhole(index: number): Wormhole | undefined {
    return this._wormholes[index];
  }

  createWormhole<T>(component: Type<T>): Wormhole;
  createWormhole<T>(templateRef: TemplateRef<T>): Wormhole;
  createWormhole<T>(arg2: Type<T> | TemplateRef<T>): Wormhole {
    let wormhole: Wormhole;
    if (typeof arg2 === 'function') {
      wormhole = new ComponentWormhole(this.host, arg2);
    } else if (arg2 instanceof TemplateRef) {
      wormhole = new TemplateWormhole(this.host, arg2);
    } else {
      throw 'Parameter must be component class or templateRef';
    }
    this._wormholes.push(wormhole);
    return wormhole;
  }

  connectWormhole<T>(component: Type<T>, opts?: WormholeOptions): Wormhole;
  connectWormhole<T>(templateRef: TemplateRef<T>, opts?: WormholeOptions): Wormhole;
  connectWormhole(target, opts?: WormholeOptions): Wormhole {
    const wormhole = this.createWormhole(target);
    wormhole.connect(opts);
    return wormhole;
  }

  disconnectWormhole(index: number) {
    let w = this.getWormhole(index);
    if (w) {
      w.disconnect();
    }
  }

  disconnectWormholes() {
    this._wormholes.forEach(w => w.disconnect());
  }

  clearWormholes() {
    this.disconnectWormholes();
    this._wormholes = [];
  }

  removeWormhole(wormhole: Wormhole | number) {
    let w = typeof wormhole === 'number' ? this.getWormhole(wormhole) : wormhole;
    if (w) {
      w.disconnect();
      this._wormholes = this._wormholes.filter(cw => cw !== w);
    }
  }

}
