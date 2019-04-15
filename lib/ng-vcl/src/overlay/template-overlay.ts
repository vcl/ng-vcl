import { TemplatePortal } from '@angular/cdk/portal';
import { ViewContainerRef, EmbeddedViewRef, TemplateRef } from '@angular/core';
import { OverlayBase } from './overlay-base';

export abstract class TemplateOverlay<TResult, C = any> extends OverlayBase<TResult, EmbeddedViewRef<C>, C>  {

  protected _createPortal() {
    return new TemplatePortal(this.getTemplateRef(), this.getViewContainerRef());
  }

  protected abstract getTemplateRef(): TemplateRef<C>;
  protected abstract getViewContainerRef(): ViewContainerRef | undefined;
}
