import { ComponentType, ComponentPortal, PortalInjector } from '@angular/cdk/portal';
import { ComponentRef, ViewContainerRef } from '@angular/core';
import { OverlayBase } from './overlay-base';

export abstract class ComponentOverlay<TResult, TComponent> extends OverlayBase<TResult, ComponentRef<TComponent>, TComponent>  {

  protected _createPortal() {
    const portalInjector = this.createInjector();
    return new ComponentPortal(this.getComponent(), this.getViewContainerRef(), portalInjector);
  }

  protected abstract getComponent(): ComponentType<TComponent>;
  protected getViewContainerRef(): ViewContainerRef | undefined {
    return undefined;
  }

  protected createInjector() {
    const injectionTokens = new WeakMap();
    injectionTokens.set(ComponentOverlay, this);
    return new PortalInjector(this.injector, injectionTokens);
  }
}
