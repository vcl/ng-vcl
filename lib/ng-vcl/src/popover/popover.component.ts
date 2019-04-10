import { Component, ViewChild, TemplateRef, ViewContainerRef, ElementRef, Input, Optional, ChangeDetectorRef, OnDestroy, Output, EventEmitter, Injector } from '@angular/core';
import { OverlayConfig, PositionStrategy, Overlay, OverlayRef, HorizontalConnectionPos, VerticalConnectionPos } from '@angular/cdk/overlay';
import { Directionality } from '@angular/cdk/bidi';
import { LayerRef } from '../layer';
import { TemplatePortal, Portal } from '@angular/cdk/portal';

@Component({
  selector: 'vcl-popover',
  templateUrl: 'popover.component.html',
  exportAs: 'vclPopover',
})
export class PopoverComponent extends LayerRef<any> implements OnDestroy {

  constructor(
    @Optional()
    private _dir: Directionality,
    private viewContainerRef: ViewContainerRef,
    private overlay: Overlay,
    private injector: Injector,
    private cdRef: ChangeDetectorRef
  ) {
    super();
  }

  @ViewChild(TemplateRef)
  template: TemplateRef<any>;

  @Input()
  target: ElementRef<HTMLElement>;

  @Input()
  originX: HorizontalConnectionPos = 'start';

  @Input()
  originY: VerticalConnectionPos = 'bottom';

  @Input()
  overlayX: HorizontalConnectionPos  = 'start';

  @Input()
  overlayY: VerticalConnectionPos = 'top';

  @Input()
  offsetX = 0;

  @Input()
  offsetY = 0;

  @Input()
  width?: number;

  @Input()
  height?: number;

  @Input()
  position?: PositionStrategy;

  @Input()
  set visible(visible: boolean) {
    if (visible) {
      this.open();
    } else {
      this.close();
    }
  }

  @Output()
  visibleChange = new EventEmitter<boolean>();

  @Output()
  afterClose = new EventEmitter<any>();

  get visible() {
    return this.isOpen;
  }

  open() {
    super.open();
    this.visibleChange.emit(this.isOpen);
  }

  close() {
    super.close();
    this.visibleChange.emit(this.isOpen);
  }

  toggle() {
    if (this.visible) {
      this.close();
    } else {
      this.open();
    }
  }

  protected getInjector() {
    return this.injector;
  }

  protected createPortal(): Portal<any> {
    return new TemplatePortal(this.template, this.viewContainerRef);
  }

  protected afterOpened(overlayRef: OverlayRef): void {

  }

  protected afterClosed(result: any, overlayRef: OverlayRef) {
    if (!this.isLayerDestroyed) {
      // We need to trigger change detection manually, because
      // `fromEvent` doesn't seem to do it at the proper time.
      this.cdRef.detectChanges();
    }
    this.afterClose.emit();
  }

  protected getOverlayConfig(): OverlayConfig {
    return new OverlayConfig({
      scrollStrategy: this.overlay.scrollStrategies.reposition(),
      direction: this._dir,
      positionStrategy: this.position || this.overlay.position()
      .connectedTo(this.target, {
        originX: this.originX,
        originY: this.originY
      }, {
        overlayX: this.overlayX,
        overlayY: this.overlayY,
      })
      .withOffsetX(this.offsetX)
      .withOffsetY(this.offsetY),
    });
  }

  ngOnDestroy(): void {
    this.destroy();
  }
}
