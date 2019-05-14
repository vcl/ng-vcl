import { Overlay, OverlayConfig, PositionStrategy, OverlayRef } from '@angular/cdk/overlay';
import { TemplateRef, ViewContainerRef, Component, ViewChild, OnDestroy, EventEmitter, Output, Input, Injector, NgZone, InjectionToken, ChangeDetectionStrategy } from '@angular/core';
import { Subscription, merge, NEVER, Observable } from 'rxjs';
import { take, switchMap, filter } from 'rxjs/operators';
import { ESCAPE } from '@angular/cdk/keycodes';
import { TemplateOverlay } from '../overlay/index';
import { Layer, LayerOptions } from './interfaces';

@Component({
  selector: 'vcl-layer',
  templateUrl: 'layer.component.html',
  exportAs: 'vclLayer',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LayerComponent extends TemplateOverlay<any> implements Layer<any, any>, OnDestroy {
  constructor(
    protected viewContainerRef: ViewContainerRef,
    private zone: NgZone,
    private overlay: Overlay,
    injector: Injector
  ) {
    super(injector);
  }

  private layerOpenedSub?: Subscription;
  private _data: any;

  @Input()
  position?: PositionStrategy;

  @Input()
  modal = false;

  @Input()
  set visible(visible: boolean) {
    if (visible) {
      this.open();
    } else {
      this.close();
    }
  }

  get visible() {
    return this.isAttached;
  }

  @Output()
  afterClose = new EventEmitter<any>();

  @Output()
  visibleChange = new EventEmitter<boolean>();

  @ViewChild(TemplateRef)
  protected template: TemplateRef<any>;

  get data() {
    return this._data;
  }

  protected getViewContainerRef(): ViewContainerRef {
    return this.viewContainerRef;
  }

  protected getTemplateRef(): TemplateRef<any> {
    return this.template;
  }

  toggle() {
    if (this.visible) {
      this.close();
    } else {
      this.open();
    }
  }

  open(data?: any, opts: LayerOptions = {}): Observable<any> {
    this._data = data;
    const config = new OverlayConfig({
      scrollStrategy: this.overlay.scrollStrategies.block(),
      hasBackdrop: true,
      backdropClass: 'vclLayerCover',
      panelClass: ['vclLayerBox', 'vclLayerBoxFix'],
      positionStrategy: opts.position || this.position ||
                          this.overlay.position()
                                      .global()
                                      .centerHorizontally()
                                      .centerVertically(),
    });

    this.attach(config);
    return this.afterClose.asObservable();
  }

  close(result?: any) {
    return this.detach(result);
  }

  protected afterDetached(result: any): void {
    super.afterDetached(result);
    this.layerOpenedSub && this.layerOpenedSub.unsubscribe();
    this.afterClose.emit(result);
    this.visibleChange.emit(this.visible);
  }

  protected afterAttached(): void {
    this.layerOpenedSub = this.zone.onStable.asObservable().pipe(take(1)).pipe(
      switchMap(() => {
        return merge(
          this.modal ? NEVER : this.overlayRef.keydownEvents().pipe(
            filter(event => {
              return event.keyCode === ESCAPE;
            })
          ),
          this.modal ? NEVER : this.overlayRef.backdropClick(),
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
