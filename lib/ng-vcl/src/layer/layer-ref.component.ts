import { Overlay, OverlayConfig, PositionStrategy, OverlayRef } from '@angular/cdk/overlay';
import { Portal, TemplatePortal } from '@angular/cdk/portal';
import { TemplateRef, ViewContainerRef, Component, ViewChild, OnDestroy, EventEmitter, Output, Input, Injector, NgZone } from '@angular/core';
import { Subscription, merge, NEVER } from 'rxjs';
import { take, switchMap, filter } from 'rxjs/operators';
import { ESCAPE } from '@angular/cdk/keycodes';
import { LayerRef } from './layer-ref';

@Component({
  selector: 'vcl-layer',
  templateUrl: 'layer-ref.component.html',
  exportAs: 'vclLayer',
})
export class LayerRefComponent extends LayerRef<any> implements OnDestroy {

  constructor(
    private viewContainerRef: ViewContainerRef,
    public overlay: Overlay,
    private injector: Injector,
    private zone: NgZone
  ) {
    super();
  }

  private layerOpenedSub?: Subscription;

  @Input()
  position?: PositionStrategy;

  @Input()
  modal = false;

  @Output()
  afterClose = new EventEmitter<any>();

  @ViewChild(TemplateRef)
  private template: TemplateRef<any>;

  get visible() {
    return this.isAttached;
  }

  toggle() {
    if (this.visible) {
      this.close();
    } else {
      this.open();
    }
  }

  open() {
    return super.attach();
  }

  close(result?: any) {
    return super.detach(result);
  }

  protected getInjector() {
    return this.injector;
  }

  protected createPortal(): Portal<any> {
    return new TemplatePortal(this.template, this.viewContainerRef);
  }

  protected getOverlayConfig(): OverlayConfig {
    return new OverlayConfig({
      scrollStrategy: this.overlay.scrollStrategies.block(),
      hasBackdrop: true,
      backdropClass: 'vclLayerCover',
      // panelClass: 'vclLayerBox',
      positionStrategy: this.position ||
                          this.overlay.position()
                                      .global()
                                      .centerHorizontally()
                                      .centerVertically(),
    });
  }

  protected afterClosed(result: any, overlayRef: OverlayRef): void {
    this.layerOpenedSub && this.layerOpenedSub.unsubscribe();
    this.afterClose.emit(result);
  }

  protected afterOpened(overlayRef: OverlayRef): void {
    this.layerOpenedSub = this.zone.onStable.asObservable().pipe(take(1)).pipe(
      switchMap(() => {
        return merge(
          this.modal ? NEVER : overlayRef.keydownEvents().pipe(
            filter(event => {
              return event.keyCode === ESCAPE;
            })
          ),
          this.modal ? NEVER : overlayRef.backdropClick(),
        );
      })
    ).subscribe(result => {
      this.close();
    });
  }

  ngOnDestroy(): void {
    this.destroy();
  }
}
